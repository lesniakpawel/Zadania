function countBs(someString) {
	var amountOfBs = 0;
	someString.split("").forEach(function(element) {
	 	if (element === "B") {
	 		amountOfBs++;
	 	}
	});	
	return amountOfBs;
}

function countChar(someString, someChar) {
	var amoutOfChars = 0;
	someString.split("").forEach(function(element) {
		if (element === someChar) {
	    	amoutOfChars++;
	  	}
	});
	return amoutOfChars;
}
console.log(countBs("BBC"));
console.log(countChar("kakkerlak", "k"));
