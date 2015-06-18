var outcome = "";
for (i = 1; i <= 100; i++) {
	if (i % 3 == 0) {
		outcome = "Fizz";
	}
	if (i % 5 == 0) {
		outcome += "Buzz";
	}
/*	if (outcome.length == 0) {
		outcome = i;
	} */
	console.log(outcome || i);
	outcome = "";
}