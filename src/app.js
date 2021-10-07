require('dotenv').config();
const express = require('express');
const indexRouter = require('./routes/index');
const path = require('path');

const hostname = "localhost";
const port = 3000;
const app = express();


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static("public"));

app.use('/', indexRouter);

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});