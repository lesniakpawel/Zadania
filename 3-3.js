function countBs(someString) {
	var amountOfBs = 0;
	for (i = 0; i <= someString.length - 1; i++) {
		if (someString.charAt(i) === "B") {
			amountOfBs += 1;
		}
	}
	return amountOfBs;
}

function countChar(someString, someChar) {
	var amountOfChars = 0;
	for (i = 0; i <= someString.length -1; i++)
		if (someString.charAt(i) === someChar) {
			amountOfChars += 1;
		}
	return amountOfChars;
}

console.log(countBs("BBC"));
console.log(countChar("kakkerlak", "k"));