/**
 * `Tag` constructor.
 *
 * Parses a Git tag as output by `git describe`
 *
 * For additional details as to the format of a Git tag, refer to:
 * http://www.kernel.org/pub/software/scm/git/docs/git-describe.html
 *
 * @param {String} str
 * @api public
 */
function Tag(str) {
  var parts = str.split('-');
  if (parts.length >= 3) {
    this.hash = parts.pop().slice(1);  // slice off the leading 'g'
    this.onTop = parseInt(parts.pop());
    this.tag = parts.join('-');
  } else {
    this.tag = parts.join('-');
    this.onTop = 0;
  }
}

/**
 * Convert a Git tag to a version.
 *
 * By default, the version returned by this function conforms to semantic
 * versioning 2.0.0-rc.1.  For details as to this format, refer to:
 * http://semver.org/
 *
 * @param {Object} options
 * @api public
 */
Tag.prototype.toVersion = function(options) {
  options = options || {};
  var prefix = options.tagPrefix !== undefined ? options.tagPrefix : 'v';
  var v = this.tag;
  if (prefix) {
    var idx = this.tag.indexOf(prefix);
    if (idx != 0) { throw new Error('Git tag not prefixed by version indicator'); }
    v = this.tag.slice(prefix.length);
  }
  if (this.onTop) { v += '+' + this.onTop };
  return v;
}

/**
 * Export `Tag`.
 */
module.exports = Tag;
