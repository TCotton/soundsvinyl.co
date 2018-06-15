const express = require('express');
const router = express.Router({ caseSensitive: false });

router.get('/', (req, res) => {
	res.render('index', { title: 'Express'});
});

/* GET Hello World page. */
router.get('/helloworld', function(req, res) {
	res.render('helloworld', { title: 'Hello, World!' });
});

/* GET New User page. */
router.get('/newuser', function(req, res) {
	res.render('newuser', { title: 'Add New User' });
});

/* POST to Add User Service */
router.post('/adduser', function(req, res) {

	// Set our internal DB variable
	const db = req.db;

	// Get our form values. These rely on the "name" attributes
	const userName = req.body.username;
	const userEmail = req.body.useremail;

	// Set our collection
	const collection = db.get('usercollection');

	// Submit to the DB
	collection.insert({
		'username' : userName,
		'email' : userEmail
	}, function (err,) {
		if (err) {
			// If it failed, return error
			res.send('There was a problem adding the information to the database.');
		}
		else {
			// And forward to success page
			res.redirect('userlist');
		}
	});
});

router.get('/userlist', (req, res) => {
	const db = req.db;
	const collection = db.get('usercollection');

	collection.find({}, {}, (e, docs) => {
		res.render('userlist', {
			'userlist': docs,
		});
	});
});

module.exports = router;
