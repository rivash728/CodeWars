function fakeBin(x) {
	var result = '';
	// For every instance, it checks the number inside the string array
	for(var i = 0; i < x.length; i++){
		// If the number in the index of array x is greater than 5, replaces number in index in one
		if (x[i] >= 5){
			// Adds one to the new string of the result variable 
			result += "1"
		}
		else {
			result += "0";
		}
	}

	return result;
}
console.log(fakeBin("38"));