const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) =>{
	if (err){
		return console.log('Unable to Connect');
	}

	console.log('Connected to Mongo');

	/*db.collection('Todos').insertOne({
		text : 'Something to do',
		completed : false
	}, (err, result) =>{
		if (err){
			return console.log('Unable to insert', err);
		}

		console.log(JSON.stringify(result.ops, undefined, 2));
	})*/

	db.collection('Users').insertOne({
		'user' : 'Roni',
		'age' : '25',
		'location' : ''
	}, (err, result) =>{
		if(err){
			return console.log('Unable to insert', err);
		}

		console.log(JSON.stringify(result.ops, undefined, 2));
	});
	db.close();
});