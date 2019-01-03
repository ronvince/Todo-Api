const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) =>{
	if (err){
		return console.log('Unable to Connect');
	}

	console.log('Connected to Mongo');

	db.collection('Users').findOneAndUpdate({
		_id : new ObjectID('5c05187734868608b03d3e76')
	},{
		$set:{
			user : 'Roni Vincent',
			location : 'Kerala'
		}
	},{
		returnOriginal : false
	}).then((result) =>{
		console.log(result);
	});

	db.close();
});