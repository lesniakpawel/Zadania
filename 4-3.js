var tab = [10, 20, 30];

function arrayToList(someArray) {
	var list = null;
	for (i = someArray.length - 1; i >= 0; i--) {
		list = {value: someArray[i], rest: list};
	}
return list;
}
console.log(arrayToList(tab));

function listToArray(someList) {
	var table = [];
	for (var node = someList; node; node = node.rest) {
		table.push(node.value);
	}
return table;
}
console.log(listToArray(arrayToList(tab)));

function prepend(someElement, someList) {
	return {value: someElement, rest: someList};	
}
console.log(prepend(10, prepend(20, null)));

//iteracyjna wersja funkcji nth:
function nth(someList, number) {
	var counter = 0;
	for (node = someList; node; node = node.rest) {
			if (number === counter) {
				return node.value;
			}
		counter +=1;
	}
}
console.log(nth(arrayToList(tab), 0))

function recursiveNth(someList, number) {	
	if (!someList) {
		return undefined;
	}
	if (number === 0) {
		return someList.value;
	}
	return nth(someList.rest, number - 1);
}
console.log(recursiveNth(arrayToList(tab), 2));