//Exersise 43: Unchanged Magicians: Start with your work from Exercise 40.
// Call the function make_great() with a copy of the array of magicians’ names.
// Because the original array will be unchanged, return the new array and store it in a separate array. 
//Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.

//previous Exercise
function show_magicians(Magicians: string[]) {
    for (let i = 0; i < magicians.length; i++) {
        console.log(magicians[i]);
    }
}
let magicians: string[] = ['Harry Houdini', 'David Blaine', 'David Copperfield', 'Ricky Jay'];
//show_magicians(magicians);

function make_great(magicians: string[]) {
    for (let i = 0; i < magicians.length; i++) {
        console.log(` ${magicians[i]} the great`);
    }
}
//make_great(magicians);
//show_magicians(magicians);

//new Exercise;

let magicians_names: string[] = ['Harry Houdini', 'David Blaine', 'David Copperfield', 'Ricky Jay'];

function make_great2(magicians: string[]) {
    let great_magicians: string[] = magicians.map(magicians => `The Great ${magicians}`);


    return great_magicians;
}
let great_magicians2: string[] = make_great2(magicians_names);


show_magicians(magicians);
make_great(great_magicians2);

