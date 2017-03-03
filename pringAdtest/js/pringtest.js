function loadAdtest() {

//PRINGADTEST v1.5.2
//description: checks if the userValue is the adtest string, if not replaces it

//set the user input value  - links to userValue textarea
//need to set this at global level so can show current value on test on html page
var userValue = userInput.value;
console.log('userValue is ' + userValue);

//capture the current query string
var currentAdtest = window.location.search;
console.log('The current query string is: ' + currentAdtest);
//compile the new test string
var newAdtest = '?adtest=' + userValue + '&';
console.log('The required query string is: ' + newAdtest);
//check if this adtest is already applied, if not apply the newAdtest query string
console.log('Checking if they match');




if (currentAdtest.includes(newAdtest)){
	console.log('BAUER MEDIA: Your adtest string ' + newAdtest + ' is already applied');
}
else if (newAdtest === '?adtest=&') {
	alert('BAUER MEDIA: It\'s blank! Enter a value, please.');
}
else {
	console.log('BAUER MEDIA: the adtest strings don\'t match');
	window.location.search = newAdtest;
	console.log('BAUER MEDIA: Your adtest string is being applied...');
	console.log('BAUER MEDIA: Page will reload shortly...');
}
//END PRINGADTEST
}

