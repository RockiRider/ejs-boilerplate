const express = require('express');
const indexRouter = require('./routes/index');
const app = express();
const path = require('path');

const hostname = "localhost";
const port = 3000;

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use('/', indexRouter);
app.use(express.static("public"));



app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});