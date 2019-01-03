var express = require('express');
var bodyParser = require('body-parser'); 
const hbs = require('hbs');
var {ObjectID} = require('mongodb');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();

hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');


app.use(bodyParser.json());

const port = process.env.PORT || 3000;

app.post('/todos', (req,res) =>{

	if(req.body.text == null){
		console.log('here');
	}
	var todo = new Todo({
		text : req.body.text
	});

	todo.save().then((doc) => {
		res.send(doc);
	}, (e) => {
		res.status(400).send(e);
	});

});

app.get('/todos', (req, res)=>{
	Todo.find().then((todos) =>{
		res.send({todos});
	}, (e) => {
		res.status(404).send(e);
	});
});


app.get('/todos/:id', (req, res)=>{
	var id = req.params.id;
	console.log(id);
	console.log(ObjectID.isValid(id));
	if(!(ObjectID.isValid(id))){
		return res.status(404).send(id);
	}

	Todo.findById(id).then((todo)=>{
		if(!todo){
			return res.status(404).send();
		}
		
		res.send({todo});
	}).catch((e) =>{
		res.status(400).send();
	});
});

app.get('/new', (req, res) =>{
	res.render('NewNote.hbs',{
		title: 'New Note',
	});
});

app.listen(port, ()=>{
	console.log(`Startted at Port ${port}`);
});






