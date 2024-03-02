//Exercise 18:  Think of at least five places in the world you’d like to visit.
//Store the locations in a array. Make sure the array is not in alphabetical order.


let visit_placess :string[]= ['Turky','Dubai','Soudi','Pakistan','Uk'];
//Print your array in its original order.
console.log(`Orignal Order`,visit_placess);

//Print your array in alphabetical order without modifying the actual list.
console.log(`Alphabetical Order`,[...visit_placess].sort());

//Show that your array is still in its original order by printing it.
console.log(`Orignal Order`,visit_placess);

//Print your array in reverse alphabetical order without changing the order of the original list.
console.log(`Reverse alphabatical order:`,[...visit_placess].sort().reverse());

//Show that your array is still in its original order by printing it again.
console.log(`Orignal order after revers`,visit_placess)

// Reverse the order of your list. Print the array to show that its order has changed.
visit_placess.reverse()
console.log(`Convert to revers order`,visit_placess);

// Reverse the order of your list again. Print the list to show it’s back to its original order.
visit_placess.reverse();
console.log(`back to original order`,visit_placess);

//Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
visit_placess.sort();
console.log(`sort in alphabetical order`,visit_placess);

//Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
visit_placess.sort((a,b)=>b.localeCompare(a));
console.log(`sorted in reverse alphabetical order;`,visit_placess);