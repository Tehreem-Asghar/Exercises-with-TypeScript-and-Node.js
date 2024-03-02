
//Exercise 14. Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner.
// Then use your list to print a message to each person, inviting them to dinner.

let Guestlist :string[]=['Arham','Ayesha','Taha'];
for(let i=0; i<Guestlist.length; i++){
    console.log(`"Dear ${Guestlist[i]}," \t\t\n"you are invited to dinner"\n`);
};