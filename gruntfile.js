/*
 * grunt-3d
 * Source: http://github.com/makesites/grunt-3d
 *
 * Created by [Makis Tracend]( [@tracend](http://github.com/tracend) )
 *
 * Released under the [MIT license](http://makesites.org/licenses/MIT)
 */

'use strict';

module.exports = function (grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		// Configuration to be run
		three_obj: {
			options: {
				minify: false
			},
			 dist: {
				 src: ['./static/*.obj', './media/*.obj', './raw/*.obj'],
				/** @optional  - if provided the converted files will be saved in this folder instead */
				dest: './assets/'
			 }
		}

	});


	grunt.loadNpmTasks('grunt-three-obj');

};
