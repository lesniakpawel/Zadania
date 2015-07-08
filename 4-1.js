function range(start, end, step) {
	var table = [];
	if (arguments.length < 3) {
		step = 1;
	}
	step = Math.abs(step);
	if (start > end) {
		for (i = start; i >= end; i -= step) {
			table.push(i);
		}
	}
	for (i = start; i <= end; i += step) {
		table.push(i);
	}
return table;
}

function sum(someArray) {
 	var storage = 0;
 	for (i = 0; i < someArray.length; i++) {
 		storage += someArray[i];
 	}
 	return storage;
 }
console.log(sum([1, 2, 3, 4, 5]));
console.log(range(10, 1, 2));