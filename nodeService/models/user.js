const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
	email: {
		type: mongoose.Schema.Types.String,
		default: '',
		required: true,
		unique: true,
	},
	password: {
		type: mongoose.Schema.Types.String,
		default: '',
		required: true
	},
	date: {
		type: mongoose.Schema.Types.Date,
	},
	updated: {
		type: mongoose.Schema.Types.Date,
	},
});

module.exports = mongoose.model('User', UserSchema);
