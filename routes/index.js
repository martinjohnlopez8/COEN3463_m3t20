var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	nbateamsData.find()
		.then(function(nbateamsData){
			res.render('index', {
				title: 'NBA Teams',
				nbateamsData: nbateamsData
			});
		});
	});

module.exports = router;
