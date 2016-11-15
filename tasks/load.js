var fs = require('fs'),
	path = require('path'),
	three_obj = require("grunt-three-obj");

module.exports = function (grunt) {

	// Load tasks of every plugin
	// (better discovery?)
	// grunt-three-obj
	//three_obj( grunt );

	var dir_nested = path.join( __dirname, '../node_modules/grunt-three-obj/tasks');
	var dir_flat = path.join( __dirname, '../../grunt-three-obj/tasks');
	var dir;
	// check task location
	if( isDir(dir_nested) ){
		dir = dir_nested;
	} else if( isDir(dir_flat)) {
		dir = dir_flat;
	} else {
		return console.log("grunt-three-obj tasks not found");
	}
	// add tasks
	grunt.loadTasks( dir );

};

// helpers
function isDir( dir ){
	try {
		fs.accessSync(dir, fs.F_OK);
		// exists
		return true;
	} catch (e) {
		// It isn't accessible
		return false;
	}
}
