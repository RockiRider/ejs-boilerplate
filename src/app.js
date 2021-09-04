const express = require('express');
const indexRouter = require('./routes/index');
const path = require('path');
var livereload = require("livereload");
var connectLiveReload = require("connect-livereload");

const hostname = "localhost";
const port = 3000;
const app = express();

//If Development
const liveReloadServer = livereload.createServer();
liveReloadServer.watch(__dirname + "public");
liveReloadServer.server.once("connection", () => {
    setTimeout(() => {
        liveReloadServer.refresh("/");
    }, 50);
});
app.use(connectLiveReload());

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static("public"));

app.use('/', indexRouter);

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});