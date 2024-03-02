// Exercise 31. No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!

// • Remove all of the usernames from your array, and make sure the correct message is printed.

let username: string[] = ['admin', 'arham', 'eric', 'taha', 'sarim'];
// for (let i = 0; i < username.length; i++) {
//     if (username[i] == "admin") {
//         console.log(`HELLO Admin, would you like  to see a stutas report?`);
//     } else {
//         console.log(`HELLO ${username[i]}, thank you for logging in again`);
//     }
// };

if(username.length==0){
    console.log(`we need to find some users!`)
}else{
    for(let user of username){
        if(user=="admin"){
            console.log(`HELLO Admin, would you like  to see a stutas report?`);
        }else{
            console.log(`HELLO ${username}, thank you for logging in again`)
        }
    }
}
let user = []
if(user.length==0){
    console.log(`we need to find some users!`)
}
