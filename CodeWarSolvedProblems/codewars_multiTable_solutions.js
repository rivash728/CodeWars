function multiTable(number){
	var text = "";
	var i = 0;
	// while i is less than 10, it caculates the multiplication table
	while (i < 10){
		sum = i * number;
		text += i + " * " + number + " = " + sum + "\n";
		i++;
		// Once i increments to 10, it finishes with this last message
		if( i == 10)
		{
			sum = i * number;
			text += i + " * " + number + " = " + sum;
		}
	}

	return text;
}

console.log(multiTable(5));