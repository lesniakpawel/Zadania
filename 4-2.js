function revArray(someArray) {
  var newArray = [];
  for (i = someArray.length - 1; i >= 0 ; i--) {
    newArray.push(someArray[i]);
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

function reverseArray1(array, numberOfReverses) {
  for (i = 1; i <= numberOfReverses; i++) {
    array.reverse();
  }
  return array;
}

function reverseArray2(array, numberOfReverses) {
  if (numberOfReverses % 2) {
    return array.reverse();
  }
  return array;
}

console.log(revArray([1, 2, 3, 4, 5]));
console.log(reverseArrayInPlace([1, 2, 3, 4, 5]));
console.log(reverseArray2([1, 2, 3, 4, 5], 33535233463));
console.log(reverseArray1([1, 2, 3, 4, 5], 35233463));
