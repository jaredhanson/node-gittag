var Tag = require('../lib/tag')
  , should = require('should')


describe('tag in short format', function() {
  var tag = new Tag('v0.9.0')

  it('should have correct tag', function() {
    tag.tag.should.be.equal('v0.9.0')
  })
  it('should have correct commits on top', function() {
    tag.onTop.should.be.equal(0)
  })
  it('should have correct hash', function() {
    should.not.exist(tag.hash)
  })
  it('should convert to version', function() {
    tag.toVersion().should.be.equal('0.9.0')
  })
})

describe('tag in long format', function() {
  var tag = new Tag('v0.9.0-287-gbd66530')
  
  it('should have correct tag', function() {
    tag.tag.should.be.equal('v0.9.0')
  })
  it('should have correct commits on top', function() {
    tag.onTop.should.be.equal(287)
  })
  it('should have correct hash', function() {
    tag.hash.should.be.equal('bd66530')
  })
  it('should convert to version', function() {
    tag.toVersion().should.be.equal('0.9.0+287')
  })
})

describe('tag in forced long format', function() {
  var tag = new Tag('v0.1.1-0-g4ad9452')
  
  it('should have correct tag', function() {
    tag.tag.should.be.equal('v0.1.1')
  })
  it('should have correct commits on top', function() {
    tag.onTop.should.be.equal(0)
  })
  it('should have correct hash', function() {
    tag.hash.should.be.equal('4ad9452')
  })
  it('should convert to version', function() {
    tag.toVersion().should.be.equal('0.1.1')
  })
})

describe('tag in long format with non-standard prefix', function() {
  var tag = new Tag('foo0.9.0-287-gbd66530')
  
  it('should have correct tag', function() {
    tag.tag.should.be.equal('foo0.9.0')
  })
  it('should have correct commits on top', function() {
    tag.onTop.should.be.equal(287)
  })
  it('should have correct hash', function() {
    tag.hash.should.be.equal('bd66530')
  })
  it('should convert to version with foo prefix', function() {
    tag.toVersion({ tagPrefix: 'foo' }).should.be.equal('0.9.0+287')
  })
  it('should throw when converted to version with v prefix', function() {
    (function(){
      tag.toVersion().should.be.equal('0.9.0+287')
    }).should.throw('Git tag not prefixed by version indicator');
  })
})
