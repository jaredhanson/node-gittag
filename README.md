# gittag

Parses Git tags as output by [`git describe`](http://www.kernel.org/pub/software/scm/git/docs/git-describe.html).

## Installation

    $ npm install gittag

## Usage

The module is intended to be used in automated build and deployment processes,
where version numbers are derived from Git tags.

Initialize a new tag:

    var tag = new Tag('v0.9.0-287-gbd66530');

Use components parsed from tag:

    console.log(tag.tag)   // => v0.9.0
    console.log(tag.onTop) // => 287
    console.log(tag.hash)  // => bd66530

Convert to a [semantic](http://semver.org/) version number:

    console.log(tag.toVersion())  // => 0.9.0+287

## Tests

    $ npm install --dev
    $ make test

[![Build Status](https://secure.travis-ci.org/jaredhanson/node-gittag.png)](http://travis-ci.org/jaredhanson/node-gittag)

## Credits

  - [Jared Hanson](http://github.com/jaredhanson)

## License

(The MIT License)

Copyright (c) 2012 Jared Hanson

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
