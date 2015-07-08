var obj1 = {n: Infinity, z: null, here: {is: "an"}, object: 2}, obj2 = {here: {is: "an"}, object: 2, z: null, n: Infinity};

function isObject(someObject) {
	return (typeof someObject === "object" && someObject !== null);
}

function deepEqual(object1, object2) {	
	if (object1 === object2) {
		return true;
	}
	if (isObject(object1) && isObject(object2)) {
		if (Object.keys(object1).length !== Object.keys(object2).length) {
			return false;
		}
		for (var property in object1) {
			if (!deepEqual(object1[property], object2[property])) {
				return false;
			}
		}
		return true;
	}	
	return false;
}
console.log(deepEqual(obj1, obj2));