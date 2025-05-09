let age = 25;
let year = 2019;

console.log(age, year);

age = 30;
console.log(age);

const points = 100;
console.log(points);

var score = 75;
console.log(score);  //classic

// strings
console.log('hello, world');

let email = 'hihi@gmail.com';
console.log(email);

// string concatenation
let firstName = 'Hi';
let lastName = 'Ha';

let fullName = firstName + ' ' + lastName;
console.log(fullName);

// getting characters
console.log(fullName[0]);

// string length
console.log(fullName.length);

// string methods
console.log(fullName.toUpperCase());
let result = fullName.toLowerCase();
console.log(result, fullName);

let index = email.indexOf('@');
console.log(index);

// common string methods
let result1 = email.lastIndexOf('i');
console.log(result);

// let result = email.slice(2,5);
// console.log(result);
// return value = hi@

// let result = email.replace('h', 'o');
// return value = oioi@gmail.com

// template string way
// let result = `The blog called ${title} by ${author} has ${likes} likes`;