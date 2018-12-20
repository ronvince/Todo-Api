var mongoose = require('mongoose');

var schema2 = new mongoose.Schema({
	user : {
		type :	String,
		require : true,
		trim : true,
		minlength : 1
	},
	email_id : {
		type :	String,
		require : true,
		trim : true,
		minlength : 1
	}
});

var User = mongoose.model('User', schema2);

module.exports = {
	User
};