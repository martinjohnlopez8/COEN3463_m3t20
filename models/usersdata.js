var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var passportLocalMongoose = require('passport-local-mongoose');

var usersDataSchema = new Schema
(
	{
        firstName: {type: String, default: ''},
        lastName: {type: String, default: ''},
        email: {type: String, defaul: ''}
	},
	{
		collection: 'usersData'
	}
);

usersDataSchema.plugin(passportLocalMongoose);

usersData = mongoose.model('usersData', usersDataSchema);