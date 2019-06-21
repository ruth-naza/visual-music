const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt-nodejs');
const cors = require('cors');
const knex = require('knex');
const morgan = require('morgan');
const compression = require('compression');

const register = require('./controllers/register');
const signin = require('./controllers/signin');

const app = express();
const db = knex({
  client: 'pg',
  connection: process.env.POSTGRES_URI
});

const whiteList = ['http://localhost:3000'];
const corsOptions = {
	origin: function(origin, callback) {
		if (whiteList.indexOf(origin) !== -1) {
			callback(null, true)
		} else {
			callback(new Error('NOT ALLOWED'))
		}
	}
}

app.use(morgan('combined'));
app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(compression());

app.post('/signin', (req, res) => signin.handleSignin(req, res, db, bcrypt))
app.post('/register', (req, res) =>{register.handleRegister(req, res, db, bcrypt)})

app.listen(process.env.PORT || 3001, ()=> {
  console.log(`app is running on port ${process.env.PORT || 3001}`);
})