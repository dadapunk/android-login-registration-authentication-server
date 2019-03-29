'use strict';

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = mongoose.Schema({

	name 			: String,
	email			: {type: String, unique: true},
	hashed_password	: String,
	created_at		: String,
	temp_password	: String,
	temp_password_time: String

});

mongoose.Promise = global.Promise;

mongoose.connect('mongodb+srv://dada:@cluster0-7ffvo.mongodb.net/test?retryWrites=true',
 {
   useNewUrlParser: true
 }).then( () => {
    console.log('Connection to the Atlas Cluster is successful!')
  })
  .catch( (err) => console.error(err));

module.exports = mongoose.model('user', userSchema);
