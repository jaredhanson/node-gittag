var gittag = require('../lib/index')
  , should = require('should')


describe('gittag', function() {
  
  it('should export Tag', function() {
    gittag.Tag.should.be.an.object;
  })
  it('should export Version', function() {
    gittag.Version.should.be.an.object;
    gittag.Version.should.be.equal(gittag.Tag);
  })
  
})
