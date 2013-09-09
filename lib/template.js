'use strict';

var path = require('path'),
	Promise = require('promise'),
	mu = require('mu2');

mu.root = path.normalize(__dirname + '/..');

/**
 * Render a template
 * @param {String} name
 * @param {Object} data
 * @return {Promise}
 */
function render(name, data){
	return new Promise(function(resolve, reject){
		data = data || {};
		data.preventCacheTime = Date.now();

		var tplString = '';
		mu.compileAndRender(name, data)
			.on('error', function(err){
				reject(err);
			})
			.on('data', function(tpl){
				tplString += tpl.toString();
			})
			.on('end', function(){
				resolve(tplString);
			});
	});
}

module.exports = {
	render: render
};

