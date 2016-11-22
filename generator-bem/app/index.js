'use strict';

var generators = require('yeoman-generator');

module.exports = generators.Base.extend({
    writing: {
        gulpFile: function () {
            this.copy('gulpfile.js', 'gulpfile.js');
        },

        packageFile: function () {
            this.copy('package.json', 'package.json');
        },

        bowerFile: function () {
            this.copy('.bowerrc', '.bowerrc');
        },

        appStaticFiles: function () {
            this.directory('src', 'src');
        }
    }
});
