const express = require('express');
const http = require('http');
const https = require('https');
const fs = require('fs');
const createError = require('http-errors');
const path = require('path');
// const favicon = require('serve-favicon');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

// const mongo = require('mongodb');
const mongoose = require('mongoose');
const db = mongoose.connect('mongodb://localhost:27017/soundsvinyl', { useNewUrlParser: true });

// const indexRouter = require('./routes/index');
// const usersRouter = require('./routes/users');

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.set('port', process.env.PORT || 8443);

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({
	extended: false
}));
app.use(cookieParser);
app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
	req.db = db;
	next();
});

// app.use('/', indexRouter);
// app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use((req, res, next) => {
	next(createError(404));
});

// error handler
app.use((err, req, res) => {
	// set locals, only providing error in development
	res.locals.message = err.message;
	res.locals.error = req.app.get('env') === 'development' ? err : {};

	// render the error page
	res.status(err.status || 500);
	res.render('error');
});

// routes based category
require('./routes')(app);

// miscellaneous routes based on use
require('./misc/logger');

app.get('/', function(req, res){
	res.send('hello world');
});

if (app.get('env') === 'development' &&
	fs.existsSync(`${__dirname}/config/server.key`) &&
	fs.existsSync(`${__dirname}/config/server.crt`)) {

	const httpsOptions = {
		key: fs.readFileSync(`${__dirname}/config/server.key`),
		cert: fs.readFileSync(`${__dirname}/config/server.crt`)
	}

	https.createServer(httpsOptions, app).listen(app.get('port'), () => {
		console.log('server running at ' + app.get('port'));
	});

} else {

	http.createServer(app).listen(app.get('port'), () => {
		console.log('Express server listening on port ' + app.get('port'));
	});

}



