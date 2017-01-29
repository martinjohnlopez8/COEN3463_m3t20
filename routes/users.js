var express = require('express');
var router = express.Router();
var moment = require('moment');

/* GET home page. */
// router.get('/', function(req, res, next) {
// 	nbateamsData.find()
// 		.then(function(nbateamsData){
// 			res.render('index', {
// 				title: 'NBA Teams',
// 				nbateamsData: nbateamsData
// 			});
// 		});
// 	});

router.use(function(req, res, next) {
  if (!req.user) {
    res.redirect('/login')
  }
  next();
});

router.get('/', function(req, res) {
  usersData.find( function(err, usersData, count) {
    res.render('users', {
    	usersData: usersData
    });
  })
});

router.get('/add', function(req, res) {
  usersData.find( function(err, usersData, count) {
    res.render('add-users', {
    	usersData: usersData
    });
  })
});

router.post('/add', function(req, res, next) {
  var item = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email

	};

  var data = new usersData(item);
  data.save();

  res.redirect('/users');
 
 });

// router.get('/', function(req, res, next) {
//     if(req.user){
//         usersData.find()
//             .then(function (usersData) {
//                 res.render('users', {
//                     user: req.user,
//                     title: 'User List',
//                     usersData: usersData,
//                     moment: moment,
//                 });
//             });
//     }
//     else{
//         res.redirect('/');
//     }
// });

module.exports = router;
