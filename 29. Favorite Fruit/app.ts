// Exercise 29. Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
// • Make a array of your three favorite fruits and call it favorite_fruits.
// • Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!

let favorite_fruits: string[] = ['apple', 'mango', 'orang'];

if (favorite_fruits.includes("apple")) {
    console.log("you really like apple!")
}
if (favorite_fruits.includes("mango")) {
    console.log("you really like mango!")
}
if (favorite_fruits.includes("orang")) {
    console.log("you realy like orang!")
}
if (favorite_fruits.includes("bnana")) {
    console.log(" bnana is not in array.")
}
if (favorite_fruits.includes("strawberry")) {
    console.log("strawberry is not in array.")
}

