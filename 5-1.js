function flatten(some_array) {
	var outcome = [];
	for (var i = 0; i < some_array.length; i++) {
		if (Array.isArray(some_array[i])) {
			outcome = outcome.concat(flatten(some_array[i]));
		} else {
			outcome.push(some_array[i]);
		}
	}
	return outcome;
}

console.log(flatten([[[[[1]]]]]));
console.log(flatten([[[2]],[1], [[[3,2]]]]));
console.log(flatten([1, [2.1, 2.2, [2.31, 2.32, 2.33], 2.3], [3], 4, 5, [6.1, 6.2]]));