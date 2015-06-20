function isEven(number) {	
	(number < 0) ? number *= -1 : number;
	if (number === 0) {
		return true;
	}
	if (number === 1) {
		return false;
	}
	return isEven(number - 2);
}

console.log(isEven(-55));
