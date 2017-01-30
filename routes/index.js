var express = require('express');
var router = express.Router();
var passport = require('passport');

/* GET home page. */
router.get('/', function(req, res, next) {
    if(req.user){
        nbateamsData.find()
            .then(function(nbateamsData) {
                res.render('dashboard', {
                    user: req.user,
                    title: 'Dashboard',
                    nbateamsData: nbateamsData,
                    invalidMessage: req.flash('invalidMessage')
                });
            });
    }
    else{
        res.render('index', {
            title: 'Login',
            invalidMessage: req.flash('invalidMessage')
        });
    }
});

router.post('/login', function(req, res, next) {
    passport.authenticate('local', function(err, user) {
        if(!err){
            if(!user){
                req.flash('invalidMessage', 'Invalid username and/or password!');
                res.redirect('/');
            }
            else{
                req.logIn(user, function(err) {
                    if(!err){
                        res.redirect('/');
                    }
                    else{
                        res.end(err);
                    }
                })
            }
        }
        else {
            res.end(err);
        }
    })(req, res, next);
});

router.post('/register', function(req, res, next) {
    usersData.register(new usersData({username: req.body.username}), req.body.password, function(err) {
        if(!err){
            passport.authenticate('local', function(err, user) {
                req.login(user, function(err) {
                    if(!err){
                        res.redirect('/');
                    }
                    else{
                        res.end(err);
                    }
                })
            })(req, res, next);
        }
        else
        {
            req.flash('invalidMessage', 'Username already taken');
            res.redirect('/');
        }
    });
});

router.get('/login', function(req, res, next) {
  res.render('index', {
  	user: req.user
  });
});

router.all('/logout', function(req, res, next) {
  req.logout();
  res.redirect('/');
});

module.exports = router;