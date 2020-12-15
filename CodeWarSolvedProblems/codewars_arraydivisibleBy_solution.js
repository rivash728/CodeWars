function divisibleBy(numbers, divisor){
  var div = [];
  
  for (let i = 0; i < numbers.length; i++)
    {
      if (numbers[i] % divisor == 0)
        {
          div.push(numbers[i]);
        }
    }
  
  return div;
}

divisibleBy([1,2,3,4,5,6], 2);