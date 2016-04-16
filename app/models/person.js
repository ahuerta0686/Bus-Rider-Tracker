var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var PersonSchema = new Schema({
	firstName: String,
	lastName: String,
	email: String,
	phoneNumber: String,
	boardedHome: Boolean,
	boardedRemote: Boolean
});

PersonSchema.virtual('fullName')
.get(getFullName);

mongoose.model('Person', PersonSchema);

//===//

function getFullName() {
	return this.firstName + " " + this.lastName;
}

function boardHome() {
	var person = this;

	person.boardedHome = true;
}

function boardRemote() {
	var person = this;

	person.boardedRemote = true;
}