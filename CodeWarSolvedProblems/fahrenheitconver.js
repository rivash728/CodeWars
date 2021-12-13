// We create a constant variable for Kelvin since we know that value is definite
const kelvin = 293;
const celsius = kelvin - 273;
const newton = Math.floor(celsius * (33/100));

// We create a let variable since our fahrenheit will be changing depending on  the inputs being placed.
let fahrenheit;
fahrenheit = celsius * (9/5) + 32;
fahrenheit = Math.floor(fahrenheit);

// We use String interpolation to make this more readable code wise
console.log(`Celsius is ${celsius}`);
console.log(`Newton Scale is ${newton}`)

console.log(`The temperature is ${fahrenheit} degrees Fahrenheiht`);
