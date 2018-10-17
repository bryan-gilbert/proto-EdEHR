
// import lti from 'ims-lti'
const lti = require('ims-lti')

const url = require('url')
/*
var crypto = require('crypto')
  , text = 'I love cupcakes'
  , key = 'abcdeg'
  , hash

hash = crypto.createHmac('sha1', key).update(text).digest('hex')

 */
class consumer {
  constructor (consumerSecret, consumerKey, providerUrl) {
    if (typeof consumerKey === 'undefined' || consumerKey === null) {
      throw new Error('Must specify consumer_key')
    }
    if (typeof consumerSecret === 'undefined' || consumerSecret === null) {
      throw new Error('Must specify consumer_secret')
    }
    if (typeof providerUrl === 'undefined' || providerUrl === null) {
      throw new Error('Must specify tool provider url')
    }

    this.consumerSecret = consumerSecret
    this.consumerKey = consumerKey
    this.providerUrl = providerUrl
    this.provider = new lti.Provider(consumerKey, consumerSecret)
    this.signer = this.provider.signer
  }
  nonce () {
    return Date.now() + Math.random() * 100
  }
  getInitialParams () {
    var params = []
    params.lti_message_type = 'basic-lti-launch-request'
    params.lti_version = 'LTI-1p0'
    params.oauth_callback = 'about:blank'
    params.oauth_consumer_key = this.consumerKey
    params.oauth_nonce = this.nonce()
    params.oauth_signature_method = this.signer.toString()
    params.oauth_timestamp = Math.floor(new Date().getTime() / 1000)
    params.oauth_version = '1.0'
    return params
  }
  signRequest (params, callback) {
    if (!this.validParameters(params)) {
      return callback(new Error('Invalid LTI parameters'), false)
    }
    // Satisfy the contract required by build_signature
    var req = this.buildRequestFromUrl(this.providerUrl)
    params.oauth_signature = this.signer.build_signature(req, params, this.consumerSecret)
    return params
  }

  buildRequestFromUrl (providerUrl) {
    var tpUrl = url.parse(providerUrl)
    return {
      url: tpUrl,
      protocol: tpUrl.protocol.replace(/:/, ''),
      headers: {
        host: tpUrl.host
      },
      connection: {
        encrypted: (tpUrl.protocol === 'https')
      },
      method: 'post'

    }
  }

  /**
   * Helper to validate basic LTI parameters
   * Returns true/false if is valid LTI request
   * @param params
   * @return {boolean}
   */
  validParameters (params) {
    if (!params) {
      return false
    }

    const correctVersion = lti.Message.is_supported_version(params.lti_version)
    const hasResourceLinkId = params.resource_link_id != null
    const omitsContentItemParams =
      params.resource_link_id == null &&
      params.resource_link_title == null &&
      params.resource_link_description == null &&
      params.launch_presentation_return_url == null &&
      params.lis_result_sourcedid == null
    return (
      (correctVersion &&
        (params.lti_message_type === 'basic-lti-launch-request' &&
          hasResourceLinkId)) ||
      (params.lti_message_type === 'ContentItemSelectionRequest' &&
        omitsContentItemParams)
    )
  }
}

module.exports = consumer
