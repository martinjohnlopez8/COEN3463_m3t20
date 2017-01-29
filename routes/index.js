var express = require('express');
var router = express.Router();
var passport = require('passport');

/* GET home page. */
router.get('/', function(req, res, next) {
	nbateamsData.find()
		.then(function(nbateamsData){
			res.render('index', {
				title: 'Sign Up',
				nbateamsData: nbateamsData,
				usersData: usersData
			});
		});
	});

router.post('/register', function(req, res, next) {
      usersData.register(new usersData({username: req.body.username}), req.body.password, function(err, account) {
      if(err) {
        return res.render('index', {account: account});
      }

      req.login(account, function(err) {
        res.redirect('/');
      });
    });
});

router.get('/login', function(req, res, next) {
  res.render('index', {user: req.user});
});


router.post('/login',
  passport.authenticate('local', { failureRedirect: '/' }),
  function(req, res) {
    res.redirect('/nbateams');
  });

router.all('/logout', function(req, res, next) {
  req.logout();
  res.redirect('/');
});

module.exports = router;

// router.get('/', function(req, res, next) {
//     if(req.user){
//         nbateamsData.find()
//             .then(function(moviesData) {
//                 res.render('index', {
//                     user: req.user,
//                     title: 'NBA Teams',
//                     nbateamsData: nbateamsData,
//                     alertMessage: req.flash('alertMessage')
//                 });
//             });
//     }
//     else{
//         res.render('login', {
//             title: 'NBA Teams',
//             alertMessage: req.flash('alertMessage')
//         });
//     }
// });

// router.post('/login', function(req, res, next) {
//     passport.authenticate('local', function(err, user) {
//         if(!err){
//             if(!user){
//                 req.flash('alertMessage', 'Invalid username or password!');
//                 res.redirect('/');
//             }
//             else{
//                 req.logIn(user, function(err) {
//                     if(!err){
//                         res.redirect('/');
//                     }
//                     else{
//                         res.end(err);
//                     }
//                 })
//             }
//         }
//         else {
//             res.end(err);
//         }
//     })(req, res, next);
// });