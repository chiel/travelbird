'use strict';

if (process.cwd() != __dirname){
	process.chdir(__dirname);
}

var template = require('./lib/template'),
	mu = require('mu2'),
	express = require('express'),
	app = express();

app
	.use(function(req, res, next){
		mu.clearCache();
		next();
	})
	.use(express.static('public'))
	.use(express.bodyParser());

app.get('/', function(req, res){
	template.render('views/index.html').then(function(rendered){
		res.send(rendered);
	}, console.log);
});


app.listen(5001, function(){
	console.log('listening on port 5001');
});

