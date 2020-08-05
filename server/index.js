const express = require('express');
const routes = require('./routes');
const path = require('path');
const app = express();
const db = require('./config/database');
const bodyParser = require('body-parser');

// database connection
db
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

const configs = require('./config');
const config = configs[app.get('env')]

//defining the template engine here
app.set('view engine', 'pug');

// defining the view directories here
app.set('views', path.join(__dirname, './views'));

// defining the static files path here
app.use(express.static('public'));

// defining the custom variable for to use in page
app.use((req, res, next)=>{
    const date = new Date();
    res.locals.currentYear =  date.getFullYear();
    res.locals.currentPage = req.path;
    return next();
})

// page site name
app.locals.sitetitle = config.siteName;
app.use(bodyParser.urlencoded({extended: true}))
// defined the landing page route here
app.use('/', routes());



app.listen('5000');