// metoda z zastosowaniem "else if":

for (i = 1; i <= 100; i++) {
	if (i % 3 == 0 && i % 5 == 0) console.log("FizzBuzz");
	else if (i % 3 == 0) console.log("Fizz");
	else if (i % 5 == 0) console.log("Buzz");
	else console.log(i);
}


// metoda ze stringiem:

var outcome = "";
for (i = 1; i <= 100; i++) {
	if (i % 3 == 0) outcome = "Fizz";
	if (i % 5 == 0) outcome += "Buzz";
	if (outcome.length == 0) outcome = i;
	console.log(outcome);
	outcome = "";
}