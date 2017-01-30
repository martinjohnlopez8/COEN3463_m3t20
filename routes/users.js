var express = require('express');
var router = express.Router();
var moment = require('moment');

router.use(function(req, res, next) {
  if (!req.user) {
    res.redirect('/')
  }
  next();
});

router.get('/', function(req, res) {
  usersData.find()
  	.then(function (usersData){
	    res.render('users', {
	    	usersData: usersData,
	    	user: req.user,
	    	moment: moment
    });
  })
});

router.get('/:username', function(req, res, next) {
    var username = req.params.username;
    usersData.findOne({username: username}, function(err, userData) {
        if(!err){
            res.render('user-profile', {
                title: 'User Info',
                user: req.user,
                userData: userData,
                moment: moment
            });
        }
        else {
            res.end(err);
        }
    });
});

router.get('/:username/edit', function(req, res, next) {
    var username = req.params.username;
    usersData.findOne({username: username}, function(err, userData) {
        if(!err){
            res.render('edit-users', {
                title: 'Edit Users',
                user: req.user,
                userData: userData,
                moment: moment
            });
        }
        else {
            res.end(err);
        }
    });
});

router.post('/:username/edit', function(req, res, next) {
    var username = req.params.username;
    usersData.findOne({username: username}, function(err, userData) {
        if(!err){
            userData.firstName = req.body.firstName;
            userData.lastName = req.body.lastName;
            userData.email = req.body.email;
            userData.username = req.body.username;
  	        if(req.body.password.length > 0){
  				    userData.setPassword(req.body.password, function(){
  				    userData.save();
				});
			}
            userData.save(function(err, userData){
                if(!err){
                    res.render('edit-users', {
                        title: 'Edit User',
                        user: req.user,
                        userData: userData,
                        moment: moment
                    });
                }
                else{
                    res.render('edit-users', {
                        title: 'Edit User',
                        user: req.user,
                        userData: userData,
                        moment: moment
                    });
                }
            });
        }
        else {
            res.end(err);
        }
    });
});

router.post('/add', function(req, res, next) {
      usersData.register(new usersData({
      	username: req.body.username
      }), req.body.password, function(err, account) {
      if(err) {
        return res.render('/users', {account: account});
      }

      req.login(account, function(err) {
        res.redirect('/users');
      });
    });
});

router.post('/:username/delete', function(req, res, next) {
    var username = req.params.username;
    usersData.remove({username: username}, function(err){
        if(!err){
            res.redirect('/');
        }
        else {
            res.end(err);
        }
    });
});


module.exports = router;

// router.get('/add', function(req, res) {
//   usersData.find( function(err, usersData, count) {
//     res.render('add-users', {
//      user: req.user,
//      usersData: usersData
//     });
//   })
// });
