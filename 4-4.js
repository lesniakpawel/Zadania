var obj1 = {n: Infinity, z: null, here: {is: 'an'}, object: 2}, obj2 = {here: {is: 'an'}, object: 2, z: null, n: Infinity}, 
    obj3 = [1, 2], obj4 = {0: 1, 1: 2};

function isObject(someObject) {
  return (typeof someObject === 'object' && someObject !== null);
}

function deepEqual(object1, object2) {  
  if (object1 === object2) {
    return true;
  }
  if (Array.isArray(object1) !== Array.isArray(object2)) {
    return false;
  }
  if (isObject(object1) && isObject(object2)) {
    if (Object.keys(object1).length !== Object.keys(object2).length) {
      return false;
    }
    return Object.keys(object1).every(function(element) {
      return deepEqual(object1[element], object2[element]); 
    });
  }
  return false;
}

console.log(deepEqual(obj1, obj2));

console.log(deepEqual(obj3, obj4));


