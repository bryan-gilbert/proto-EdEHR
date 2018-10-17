const url = require('url')
const should = require('should')
const lti = require('ims-lti')
/* global describe it beforeEach */
describe('LTI.Extensions.Content', function () {
  beforeEach(function () {
    this.provider = new lti.Provider('key', 'secret')

    const req = {
      body: {
        ext_content_return_types:
          'file,iframe,image_url,lti_launch_url,oembed,url',
        ext_content_return_url: 'http://example.com/test',
        ext_content_file_extensions: 'txt,jpg'
      }
    }

    this.res = {
      status: null,
      url: null,
      redirect (status, url1) {
        this.status = status
        this.url = url1
      }
    }

    this.provider.parse_request(req)
  })

  describe('constructor', function () {
    it('should initialize an object if ext_content_return_types is set', function () {
      should.exist(this.provider.ext_content)
    })

    it('should be false if ext_content_return_types is missing', function () {
      const provider = new lti.Provider('key', 'secret')
      provider.parse_request({ body: {} })
      provider.ext_content.should.equal(false)
    })
  })

  describe('_validate_return_type', () =>
    it('should throw an exception if the type does not exist for the provider', function () {
      const fn = () => {
        this.provider.ext_content._validate_return_type('invalid')
      }

      fn.should.throw()
    }))

  describe('has_return_type', () =>
    it('should be able to check if a return type is set', function () {
      this.provider.ext_content.has_return_type('file').should.equal(true)
      this.provider.ext_content.has_return_type('iframe').should.equal(true)
      this.provider.ext_content.has_return_type('fail').should.equal(false)
    }))

  describe('has_file_extension', () =>
    it('should be able to check if a file extension is set', function () {
      this.provider.ext_content.has_file_extension('txt').should.equal(true)
      this.provider.ext_content.has_file_extension('jpg').should.equal(true)
      this.provider.ext_content.has_file_extension('rar').should.equal(false)
    }))

  describe('send_file', function () {
    it('should generate a query string for the base params and exclude optional ones', function () {
      this.provider.ext_content.send_file(
        this.res,
        'http://example.com/myfile.txt',
        'myfile.txt'
      )

      const retUrl = url.parse(this.res.url, true)

      this.res.status.should.equal(303)
      retUrl.query.return_type.should.equal('file')
      retUrl.query.url.should.equal('http://example.com/myfile.txt')
      retUrl.query.text.should.equal('myfile.txt')
      should(retUrl.query).not.have.property('content_type')
    })

    it('should generate a query string for the optional parameters', function () {
      this.provider.ext_content.send_file(
        this.res,
        'http://example.com/myfile.txt',
        'myfile.txt',
        'text/plain'
      )

      const retUrl = url.parse(this.res.url, true)

      this.res.status.should.equal(303)
      retUrl.query.return_type.should.equal('file')
      retUrl.query.url.should.equal('http://example.com/myfile.txt')
      retUrl.query.text.should.equal('myfile.txt')
      retUrl.query.content_type.should.equal('text/plain')
    })
  })

  describe('send_iframe', function () {
    it('should generate a query string for the base params and exclude optional ones', function () {
      this.provider.ext_content.send_iframe(
        this.res,
        'http://example.com/myfile.txt'
      )

      const retUrl = url.parse(this.res.url, true)

      this.res.status.should.equal(303)
      retUrl.query.return_type.should.equal('iframe')
      retUrl.query.url.should.equal('http://example.com/myfile.txt')
      should(retUrl.query).not.have.property('title')
      should(retUrl.query).not.have.property('width')
      should(retUrl.query).not.have.property('height')
    })

    it('should generate a query string for the optional parameters', function () {
      this.provider.ext_content.send_iframe(
        this.res,
        'http://example.com/myfile.txt',
        'title',
        800,
        600
      )

      const retUrl = url.parse(this.res.url, true)

      this.res.status.should.equal(303)
      retUrl.query.return_type.should.equal('iframe')
      retUrl.query.url.should.equal('http://example.com/myfile.txt')
      retUrl.query.title.should.equal('title')
      retUrl.query.width.should.equal('800')
      retUrl.query.height.should.equal('600')
    })
  })

  describe('send_image_url', function () {
    it('should generate a query string for the base params and exclude optional ones', function () {
      this.provider.ext_content.send_image_url(
        this.res,
        'http://example.com/myfile.jpg'
      )

      const retUrl = url.parse(this.res.url, true)

      this.res.status.should.equal(303)
      retUrl.query.return_type.should.equal('image_url')
      retUrl.query.url.should.equal('http://example.com/myfile.jpg')
      should(retUrl.query).not.have.property('text')
      should(retUrl.query).not.have.property('width')
      should(retUrl.query).not.have.property('height')
    })

    it('should generate a query string for the optional parameters', function () {
      this.provider.ext_content.send_image_url(
        this.res,
        'http://example.com/myfile.jpg',
        'alt',
        800,
        600
      )

      const retUrl = url.parse(this.res.url, true)

      this.res.status.should.equal(303)
      retUrl.query.return_type.should.equal('image_url')
      retUrl.query.url.should.equal('http://example.com/myfile.jpg')
      retUrl.query.text.should.equal('alt')
      retUrl.query.width.should.equal('800')
      retUrl.query.height.should.equal('600')
    })
  })

  describe('send_lti_launch_url', function () {
    it('should generate a query string for the base params and exclude optional ones', function () {
      this.provider.ext_content.send_lti_launch_url(
        this.res,
        'http://example.com/test'
      )

      const retUrl = url.parse(this.res.url, true)

      this.res.status.should.equal(303)
      retUrl.query.return_type.should.equal('lti_launch_url')
      retUrl.query.url.should.equal('http://example.com/test')
      should(retUrl.query).not.have.property('title')
      should(retUrl.query).not.have.property('text')
    })

    it('should generate a query string for the optional parameters', function () {
      this.provider.ext_content.send_lti_launch_url(
        this.res,
        'http://example.com/test',
        'title',
        'text'
      )

      const retUrl = url.parse(this.res.url, true)

      this.res.status.should.equal(303)
      retUrl.query.return_type.should.equal('lti_launch_url')
      retUrl.query.url.should.equal('http://example.com/test')
      retUrl.query.title.should.equal('title')
      retUrl.query.text.should.equal('text')
    })
  })

  describe('send_oembed', function () {
    it('should generate a query string for the base params and exclude optional ones', function () {
      this.provider.ext_content.send_oembed(
        this.res,
        'http://example.com/test'
      )

      const retUrl = url.parse(this.res.url, true)

      this.res.status.should.equal(303)
      retUrl.query.return_type.should.equal('oembed')
      retUrl.query.url.should.equal('http://example.com/test')
      should(retUrl.query).not.have.property('endpoint')
    })

    it('should generate a query string for the optional parameters', function () {
      this.provider.ext_content.send_oembed(
        this.res,
        'http://example.com/test',
        'http://example.com/test2'
      )

      const retUrl = url.parse(this.res.url, true)

      this.res.status.should.equal(303)
      retUrl.query.return_type.should.equal('oembed')
      retUrl.query.url.should.equal('http://example.com/test')
      retUrl.query.endpoint.should.equal('http://example.com/test2')
    })
  })

  describe('send_url', function () {
    it('should generate a query string for the base params and exclude optional ones', function () {
      this.provider.ext_content.send_url(this.res, 'http://example.com/test')

      const retUrl = url.parse(this.res.url, true)

      this.res.status.should.equal(303)
      retUrl.query.return_type.should.equal('url')
      retUrl.query.url.should.equal('http://example.com/test')
      should(retUrl.query).not.have.property('text')
      should(retUrl.query).not.have.property('title')
      should(retUrl.query).not.have.property('target')
    })

    it('should generate a query string for the optional parameters', function () {
      this.provider.ext_content.send_url(
        this.res,
        'http://example.com/test',
        'text',
        'title',
        '_blank'
      )

      const retUrl = url.parse(this.res.url, true)

      this.res.status.should.equal(303)
      retUrl.query.return_type.should.equal('url')
      retUrl.query.url.should.equal('http://example.com/test')
      retUrl.query.text.should.equal('text')
      retUrl.query.title.should.equal('title')
      retUrl.query.target.should.equal('_blank')
    })
  })

  describe('redirector', () =>
    it('should be overridable', function () {
      let testRes = null
      let test_url = null

      lti.Extensions.Content.redirector = function (res, outbound_url) {
        testRes = res
        return (test_url = url.parse(outbound_url, true))
      }

      this.provider.ext_content.send_url(this.res, 'http://example.com/test')

      testRes.should.equal(this.res)

      test_url.host.should.equal('example.com')
      test_url.pathname.should.equal('/test')
      test_url.query.return_type.should.equal('url')
      test_url.query.url.should.equal('http://example.com/test')
    }))
})
