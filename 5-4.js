function altSome(array, f) {
  for (i = 0; i < array.length; i++) {    
    if (f(array[i])) {     
      return true;
    }
  }
  return false;
}

function altEvery(array, f) {
  for (i = 0; i < array.length; i++) {    
    if (!f(array[i])) {     
      return false;
    }
  }
  return true;
}


console.log(altEvery([NaN, NaN, NaN], isNaN));
console.log(altEvery([NaN, NaN, 4], isNaN));
console.log(altSome([NaN, 3, 4], isNaN));
console.log(altSome([2, 3, 4], isNaN));
