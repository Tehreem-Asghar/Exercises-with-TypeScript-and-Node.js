"use strict";
// Exercise 2:  Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
let personName = "tehreem  meo";
//Lower Case
console.log("lowercase:", personName.toLowerCase());
//Upper Case
console.log("Uppercase:", personName.toUpperCase());
//title case
console.log("Titlecase:", personName.split(" ").map((l) => l[0].toUpperCase() + l.substr(1)).join(" "));
