var express = require('express');
var router = express.Router();
var moment = require('moment');

router.get('/', function(req, res, next) {
	nbateamsData.find()
		.then(function(nbateamsData){
			res.render('nbateams', {
				title: 'NBA Teams',
				nbateamsData: nbateamsData,
        moment: moment
			});
		});
	});

router.get('/add', function(req, res, next) {
    res.render('add', {
        title: 'Add Team',
        nbateamsData: nbateamsData
    });
});

router.post('/add', function(req, res, next) {
  var item = {
    name: req.body.name,
    abbreviation: req.body.abbreviation,
    conference: req.body.conference,
    division: req.body.division,
    founded: req.body.founded,
    arena: req.body.arena,
    location: req.body.location,
    manager: req.body.manager,
    coach: req.body.coach,
    numberOfChampionships: req.body.numberOfChampionships,
    championshipYears: req.body.championshipYears,
    players: req.body.players,
    logoLink: req.body.logoLink,
    teamWebsite: req.body.teamWebsite,
    socialPages: req.body.socialPages
	};

  var data = new nbateamsData(item);
  data.save();

  res.redirect('/nbateams');
 
 });

router.get('/:nbateamID/', function(req, res, next) {
    var nbateamID = req.params.nbateamID;
    nbateamsData.findOne({_id: nbateamID}, function(err, nbateamData) {
        if(!err){
            res.render('nbateam-info', {
                title: 'Team Info',
                nbateamData: nbateamData,
                moment: moment
            });
        }
        else {
            res.end(err);
        }
    });
});

router.get('/:nbateamID/edit', function(req, res, next) {
    var nbateamID = req.params.nbateamID;
    nbateamsData.findOne({_id: nbateamID}, function(err, nbateamData) {
        if(!err){
            res.render('edit', {
                title: 'NBA Update',
                nbateamData: nbateamData,
                moment: moment
            });
        }
        else {
            res.end(err);
        }
    });
});


router.post('/:nbateamID/edit', function(req, res, next) {
    var nbateamID = req.params.nbateamID;
    nbateamsData.findOne({_id: nbateamID}, function(err, nbateam) {
        if(!err){
            nbateam.name = req.body.name;
            nbateam.abbreviation = req.body.abbreviation;
            nbateam.conference = req.body.conference;
            nbateam.division = req.body.division;
            nbateam.founded = req.body.founded;
            nbateam.arena = req.body.arena;
            nbateam.location = req.body.location;
            nbateam.manager = req.body.manager;
            nbateam.coach = req.body.coach;
            nbateam.numberOfChampionships = req.body.numberOfChampionships;
            nbateam.championshipYears = req.body.championshipYears;
            nbateam.players = req.body.players;
            nbateam.logoLink = req.body.logoLink;
            nbateam.teamWebsite = req.body.teamWebsite;
            nbateam.socialPages = req.body.socialPages;
            nbateam.save(function(err, nbateamData){
                if(!err){
                    res.render('edit', {
                        title: 'NBA Update',
                        alertMessage: 'Team info updated!',
                        postError: false,
                        nbateamData: nbateamData,
                        moment: moment
                    });
                }
                else{
                    res.render('edit', {
                        title: 'NBA Update',
                        alertMessage: 'Team did not update',
                        postError: true,
                        nbateamData: nbateamData,
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

router.post('/:nbateamID/delete', function(req, res, next) {
    var nbateamID = req.params.nbateamID;
    nbateamsData.remove({_id: nbateamID}, function(err,nbateamData){
        if(!err){
            res.redirect('/');
        }
        else {
            res.end(err);
        }
    });
});

module.exports = router;
