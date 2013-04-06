
var grunt = require("grunt"),
	//json = require("grunt-three-json"),
	_ = require("underscore"),
	path = require('path');

var defaults = require("./config");

var Main = function(options ){
	// fallbacks
	options = options || {};
	// save params
	this.options = options;

	return this;
};

var init = function( options ){
	return new Main( options );
};

module.exports = init;
