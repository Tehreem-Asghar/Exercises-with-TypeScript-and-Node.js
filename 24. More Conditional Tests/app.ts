
//Exercise 24. More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:

//• Tests for equality and inequality with strings
let num1: string = "10";
let num2: string = "12";

console.log('"Inequality:"', num1 != num2);
console.log('"equality:"', num1 == num2);

//• Tests using the lower case function

let place: string = "new karachi";
let place1: string = "karachi"

console.log(`" loweCase In true:"`, place.toLowerCase() != place1.toLowerCase());
console.log(`"loweCase In false:"`, place.toLowerCase() == place1.toLowerCase());

//• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

let number: number = 30;
let number1: number = 25;

console.log(`"inequality:"`, number != number1);
console.log(`"equality:"`, number == number1);

console.log(`"Greater than:" `, number > number1);
console.log(`"Less than:"`, number < number1);

console.log(`"Greater than and equal to:"`, number >= number1);
console.log(`"Less than and equal to:"`, number <= number1);

//• Tests using "and" and "or" operators

console.log(`"And Operator:"`, number > number1 && number >= number1);
console.log(`"Or Operator:"`, number < number1 || number <= number1);

//• Test whether an item is in a array

let countrys: string[] = ['pakistan', 'india', 'jarmani', 'parest', 'uk'];
if (countrys.includes("parest")) {
    console.log("parest, is in a array");
}

//• Test whether an item is not in a array*/

if (!countrys.includes("france")) {
    console.log("france is not in a array");
}