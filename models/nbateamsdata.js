var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var timestamps = require('mongoose-timestamp');

var nbateamsDataSchema = new Schema
(
	{
		name: {type: String, required: true},
	    abbreviation: {type: String},
	    conference: {type: String},
	    division: {type: String},
	    founded: {type: String},
	    arena: {type: String},
	    location: {type: String},
	    manager: {type: String},
	    coach: {type: String},
	    numberOfChampionships: {type: String},
	    championshipYears: [],
	    players: [],
	    logoLink: {type: String},
	    teamWebsite: {type: String},
	    socialPages: [],
	},
	{
		collection: 'nbateamsData'
	}
);

nbateamsDataSchema.plugin(timestamps);
nbateamsData = mongoose.model('nbateamsData', nbateamsDataSchema);