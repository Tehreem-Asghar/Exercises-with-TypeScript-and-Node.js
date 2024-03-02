"use strict";
//Exercise 40. Album: Write a function called make_album() that builds a Object describing a music album. The function should take in an artist name and an album title, and it should return a Object containing these two pieces of information. Use the function to make three dictionaries representing different albums. Print each return value to show that Objects are storing the album information correctly. Add an optional parameter to make_album() that allows you to store the number of tracks on an album. If the calling line includes a value for the number of tracks, add that value to the album’s Object. Make at least one new function call that includes the number of tracks on an album.
// function make_album(artist :string, album :string){
//     return 
// }
function make_album(artist, album, tracks) {
    const albumObj = {
        artist: artist,
        album: album
    };
    if (tracks) {
        albumObj.tracks = tracks;
    }
    return albumObj;
}
console.log(make_album('Taylor Swift', 'Fearless'));
console.log(make_album('Ed Sheeran', 'Divide', 12));
console.log(make_album('Adele', '25', 10));
