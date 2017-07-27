var Person = function(firstName, lastName) {
	this.firstNanme = firstName;
	this.lastName = lastName;
}


/*function logPerson() {
	var robson = new Person('Robson', 'Duarte');
	console.log(robson);
}*/

function logPerson(person) {
	console.log(person);
}


logPerson(new Person('Robson', 'Duarte'));