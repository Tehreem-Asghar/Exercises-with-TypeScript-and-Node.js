"use strict";
// Exercise 37. Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
function make_shirt(size = 'T', messag = ' I Love typescript') {
    console.log(`The shirt size is ${size} and it says ${messag}`);
}
make_shirt(); //large shit with difult message.
make_shirt("M"); // medium shirt with the defult messag.
make_shirt("l", "best of luck"); //small shirt with the custom messag.
