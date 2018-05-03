require('dotenv').config();

const bodyParser   = require('body-parser');
const cookieParser = require('cookie-parser');
const express      = require('express');
const favicon      = require('serve-favicon');
const hbs          = require('hbs');
const mongoose     = require('mongoose');
const logger       = require('morgan');
const path         = require('path');
const Schema       = mongoose.Schema;
  
const characterSchema = Schema({
  id: Number,
  name: String,
  occupation: String,
  weapon: String,
  cartoon: Boolean
})

const Character  = mongoose.model("Character", characterSchema);

mongoose.Promise = Promise;
mongoose
.connect('mongodb://localhost/lab-ajax-crud-characters', {useMongoClient: true})
.then(() => {
  console.log('Connected to Mongo!')
}).catch(err => {
  console.error('Error connecting to mongo', err)
});

const app_name = require('./package.json').name;
const debug = require('debug')(`${app_name}:${path.basename(__filename).split('.')[0]}`);
const app = express();

// Middleware Setup
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// Express View engine setup
app.use(require('node-sass-middleware')({
  src:  path.join(__dirname, 'public'),
  dest: path.join(__dirname, 'public'),
  sourceMap: true
}));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.use(express.static(path.join(__dirname, 'public')));
app.use(favicon(path.join(__dirname, 'public', 'images', 'favicon.ico')));

// default value for title local
app.locals.title = 'Express - Generated with IronGenerator';
  
//Routes
app.get('/characters', (req, res, next) => {
  Character.find((err, characters) => {
    res.json(characters)
    // res.render('')
  })
})

app.get('/characters/:id', (req, res, next) => {
  Character.findOne({id: req.params.id}, (err, character) => {
    res.json(character)
  })
})

app.get('/characters/new', (req, res, next) => {
  res.render('index')
})

var idCount;
Character.find((err, characters) => {
  idCount = characters.length + 1;
});

app.post('/characters/create', (req, res, next) => {
  const newCharacter = new Character({
    id: idCount,
    name: req.body.name,
    occupation: req.body.occupation,
    weapon: req.body.weapon,
    cartoon: req.body.cartoon
  })
  newCharacter.save()
  .then(res => {
      // console.log(res)
    })
    .catch(err => {console.log(err)})
    res.redirect('/characters')
  })

  app.post('/characters/delete/', (req, res, next) => {
    var deleteId = req.body.deleteMe
    console.log(deleteId)
    console.log("function called")
    Character.findOneAndRemove({id: deleteId})
    .then(res => {
      console.log("function passed")
    })
    .catch(err => {
      console.log(err)
    })
    res.redirect('/')
  })
    
      
const index = require('./routes/index');
app.use('/', index);      
      
      
module.exports = app;