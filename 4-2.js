function reverseArray(someArray) {
	var newArray = [];
	for (i = 0; i < someArray.length; i++) {
		newArray.unshift(someArray[i]);
	}
	return newArray;
}

function reverseArrayInPlace(someArray) {
	var storage = 0;
	for (i=0; i < Math.floor(someArray.length / 2); i++) {
		storage = someArray[i];
		someArray[i] = someArray[someArray.length - 1 - i];
		someArray[someArray.length - 1 - i] = storage;
	}
return someArray;
}

console.log(reverseArray([1, 2, 3, 4, 5]));
console.log(reverseArrayInPlace([1, 2, 3, 4, 5]));