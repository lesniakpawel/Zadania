fizzBuzz = function(n) {
	var outcome = "";
	for (i = 1; i <= n; i++) {
		if (i % 3 == 0) {
		outcome = "Fizz";
		}
		if (i % 5 == 0) {
		outcome += "Buzz";
		}
		console.log(outcome || i);
		outcome = "";
	}	
}
//example call:
console.log(fizzBuzz(65));