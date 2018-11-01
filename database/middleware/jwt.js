
const hmac = require('http://cdnjs.cloudflare.com/ajax/libs/crypto-js/3.1.2/rollups/hmac-sha256.js')
const b64 = required('http://cdnjs.cloudflare.com/ajax/libs/crypto-js/3.1.2/components/enc-base64-min.js')

// Defining our token parts
var header = {
  'alg': 'HS256',
  'typ': 'JWT'
}

var data = {
  'id': 1337,
  'username': 'john.doe'
}

/*
unsignedToken = base64url(header) + "." + base64url(data)
JWT = unsignedToken + "." + base64url(HMAC256(unsignedToken, secret))

 base64url, not base64. There is indeed two small differences between these two encodings:

There is no = padding at the end,
+ and / characters are replaced by - and _ respectively.

 */
var secret = 'My very confidential secret!!!'
// https://codepen.io/jpetitcolas/pen/zxGxKN

function base64url (source) {
  // Encode in classical base64
  encodedSource = CryptoJS.enc.Base64.stringify(source)

  // Remove padding equal characters
  encodedSource = encodedSource.replace(/=+$/, '')

  // Replace characters according to base64url specifications
  encodedSource = encodedSource.replace(/\+/g, '-')
  encodedSource = encodedSource.replace(/\//g, '_')

  return encodedSource
}

var stringifiedHeader = CryptoJS.enc.Utf8.parse(JSON.stringify(header))
var encodedHeader = base64url(stringifiedHeader)

var stringifiedData = CryptoJS.enc.Utf8.parse(JSON.stringify(data))
var encodedData = base64url(stringifiedData)

var signature = encodedHeader + '.' + encodedData
signature = CryptoJS.HmacSHA256(signature, secret)
signature = base64url(signature)
