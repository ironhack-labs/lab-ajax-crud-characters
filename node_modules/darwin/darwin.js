/*
 * Darwin
 * 
 * @copyright 2015 Ali Shakiba
 * @license The MIT License
 */

var Path = require('path');
var FS = require('fs-extra');
var glob = require("globby");
var DNA = require("dna-js");

var noisy = false;

function Dir(cwd) {
  noisy && console.log('Dir:', cwd);

  this.path = function() {
    return cwd;
  };

  this.cd = function(path) {
    noisy && console.log('Dir.cd', cwd, path);
    return new Dir(Path.resolve(cwd, path));
  };

  this.select = function(path) {
    noisy && console.log('Dir.select', cwd, path);
    if (typeof path === 'string') {
      return new File(cwd, path);
    } else {
      return new List(cwd, path.map(function(file) {
        return new File(cwd, file);
      }));
    }
  };

  this.glob = function(pattern, options) {
    noisy && console.log('glob', cwd, pattern, options);
    options || (options = {});
    options.cwd = cwd;
    files = glob.sync(pattern, options).map(function(file) {
      return new File(cwd, file);
    });
    return new List(cwd, files);
  };

  this.toString = function() {
    return cwd;
  };
}

function List(base, files) {
  noisy && console.log('List:', base, files.length);

  this.each = function(fn) {
    files.forEach(fn);
    return this;
  };

  this.map = function(fn) {
    return files.map(fn);
  };

  this.reduce = function(fn, init) {
    return files.reduce(fn, init);
  };

  this.copyTo = function(dest) {
    return new List(dest.path(), files.map(function(file) {
      return file.copyTo(dest);
    }));
  };

  this.toString = function() {
    return base + '+' + files;
  };
}

function File(base, rel) {
  noisy && console.log('File:', base, rel);

  var abs = Path.resolve(base, rel);

  this.path = function(resolved) {
    return resolved ? abs : rel;
  };

  this.write = function(content, enoding) {
    noisy && console.log('File.write: ' + this);
    FS.outputFileSync(abs, content, enoding);
  };

  this.copyTo = function(dest) {
    var copy = dest.select(rel);
    copy.write(this.read());
    return copy;
  };

  this.toString = function() {
    return base + '+' + rel;
  };
}

addfn('name', function() {
  return Path.basename(this.path());
});

addfn('read', function(enoding) {
  noisy && console.log('File.read: ' + this);
  return FS.readFileSync(this.path(true), enoding);
});

addfn('text', function(enoding) {
  return this.read(enoding).toString();
});

addfn('dna', function(enoding) {
  return DNA.parse(this.text(enoding));
});

addfn('json', function(enoding) {
  return JSON.parse(this.text(enoding));
});

function addfn(name, fn) {
  File.prototype[name] = fn;
  List.prototype[name] = function() {
    var args = arguments;
    return this.map(function(file) {
      return file[name].apply(file, args);
    });
  };
}

module.exports = new Dir(process.cwd());
