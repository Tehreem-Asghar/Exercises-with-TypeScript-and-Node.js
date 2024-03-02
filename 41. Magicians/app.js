"use strict";
// Exercise 41. Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
let magicians = ['Harry Houdini', 'David Blaine', 'David Copperfield', 'Ricky Jay'];
function show_magicians(Magicians) {
    for (let i = 0; i < magicians.length; i++) {
        console.log(magicians[i]);
    }
}
show_magicians(magicians);
