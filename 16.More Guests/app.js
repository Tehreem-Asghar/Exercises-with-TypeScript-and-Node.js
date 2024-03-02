"use strict";
//Exercise 16:  More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.
let Guestlist = ['Arham', 'Ayesha', 'Taha'];
let absent_guess = '\"Arham';
console.log(absent_guess + "," + "\tis not coming.\"\n");
let new_guest = 'Sarim';
// for (let i = 0; i < Guestlist.length; i++) {
//     console.log(`"Dear ${Guestlist[i]}," \t\t\n"you are invited to dinner"\n`)
// }
console.log("Good News! I find big table so I am inviting 3 more guests.\n\n");
Guestlist.unshift('shaheen');
Guestlist.splice(3, 0, "Hajra");
Guestlist.push("Muskan");
Guestlist.map((v) => {
    console.log(`"Dear ${v}," \t\t\n"you are invited to dinner"\n`);
});
