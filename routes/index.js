var mainBowerFiles = require('main-bower-files');
var glob = require('glob');

var files = mainBowerFiles();
var libcss = [];
var css = [];
var libscripts = [];
var scripts = [];
files.forEach(function(filePath) {
    if(filePath.match(/.css$/)) {
        libcss[libcss.length] = {href: filePath.replace(/^.*public\//, "")};
    } else if(filePath.match(/.js$/)) {
        libscripts[libscripts.length] = {href: filePath.replace(/^.*public\//, "")};
    }
});

glob.glob('public/resources/pages/**/*.js', function(er, files) {
    if (files) {
        files.forEach(function(filePath) {
            scripts[scripts.length] = {href: filePath.replace(/^.*public\//, "")};
        });
    }
});

glob.glob('public/resources/pages/**/*.css', function(er, files) {
    if (files) {
        files.forEach(function(filePath) {
            css[css.length] = {href: filePath.replace(/^.*public\//, "")};
        });
    }
});

module.exports = {
    defaultPage: function(req, res) {
        res.render('index', { title: 'Simple', libcss: libcss, css: css, libscripts: libscripts, scripts: scripts });
    }
}

