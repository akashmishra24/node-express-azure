import express from 'express';
import { engine } from 'express-handlebars';

const app = express();

app.engine('.hbs', engine({extname: '.hbs'}));
app.set('view engine', '.hbs');
app.set('views', './views');

const config = require('./config');
const express = require('express');
const path = require('path');
// const exphbs = require('express-handlebars');
//const { engine } = require('express-handlebars');

const index = require('./routes/index');
const who = require('./routes/who');
const contact = require('./routes/contact');

// app.set('views', path.join(__dirname, 'views'));
// app.engine('.hbs', exphbs.engine({defaultLayout: 'main'}));

app.set('port', config.port);

app.use('/', express.static('public'))
app.use('/', index);
app.use('/who', who);
app.use('/contact', contact);

app.listen(config.port, () => {
  console.log(`Demo app is running on ${config.port}!`);
});
