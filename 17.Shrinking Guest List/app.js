"use strict";
//  Exercise 17:  Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
// • Print a message to each of the two people still on your list, letting them know they’re still invited.
// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
let Guestlist = ['Arham', 'Ayesha', 'Taha'];
console.log("Good News! I find big table so I am inviting 3 more guests.\n\n");
Guestlist.unshift('shaheen');
Guestlist.splice(3, 0, "Hajra");
Guestlist.push("Muskan");
// Guestlist.map((v) => {
//     console.log(`"Dear ${v}," \t\t\n"you are invited to dinner"\n`);
// });
console.log("sorry, I can not arrange big table. so I can only invite two people for diner\n\n");
while (Guestlist.length > 2) {
    let remove_guest = Guestlist.pop();
    console.log(`"sorry  ${remove_guest}, you are not invited for diner"`);
}
Guestlist.map((v) => {
    console.log(`"Dear: ${v}, you  are still invited to diner."`);
});
Guestlist.splice(0, 2);
console.log(Guestlist);
