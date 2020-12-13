function simpleCal(a,b, sign){
	var sign;
	var sum;
	
	if ( typeof a === 'string' || typeof b === 'string'){
		return "unknown value";
	}
	if ( sign = "+"){
		sum = a + b;
		return sum;
	}
	else if (sign == "-"){
		sum = a - b;
		return sum;
	}
	else if (sing == "*"){
		sum = a * b;
		return sum;
	}
	else if (sign == "/"){
		sum = a / b;
		return sum;
	}
	else {
		return "unknown value";
	}

}
console.log(simpleCal(3,1,"+"));