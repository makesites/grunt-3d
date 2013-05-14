var three_obj = require("grunt-three-obj");

module.exports = function (grunt) {

	// Load tasks of every plugin
	// (better discovery?)
	// grunt-three-obj
	//three_obj( grunt );
	grunt.loadTasks( require("path").join( __dirname, '../node_modules/grunt-three-obj/tasks') );

};
