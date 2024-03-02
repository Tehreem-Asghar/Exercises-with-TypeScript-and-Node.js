// Exercise 44: Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. 
//The function should have one parameter that collects as many items as the function call provides,
// and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.

function make_sandwich(...items: string[]) {
    console.log(`sandwich Order:\n`)
    for (let i = 0; i < items.length; i++) {
        console.log(`-${items[i]}`)
    }
    console.log(`\nenjoy your sandwiches`)
}

make_sandwich(' cheese', 'biryani', 'coldrink');
make_sandwich('tea', 'pulao');
make_sandwich('ice-cream');