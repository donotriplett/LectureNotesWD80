/*
-Properties are qualities associated with a data type
-Strings only have one singular property for us to access, that being the length property
*/

let myName = "Donovan";
console.log(typeof myName.length);

/*
-Methods are tools than can help us manipulate data
-.property vs .method()
-Methods are functions associated with data types
*/

let myNameIs = "Donovan";
console.log(myNameIs.toUpperCase());

let home = "My home is Whitestown";
console.log(home.includes("Whitestown"));

// Challenge: Use google, find MDN documentation for Strings, research and use the split method to get an array back from this string

let sent = 'This sentence will be split into individual parts';
let splitString = sent.split(" ");
console.log(splitString);