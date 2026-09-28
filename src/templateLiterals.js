// Template Literals : backtick : ``
// '' " " ``

const { useReducer } = require("react");

let msg= `this is my js code.`
console.log(msg);

let address= `101 new building
atlanta USA
pin code 007`;

console.log(address);

let a=100;
let b=200;

console.log('value of a: '+a);
console.log('value of b: '+b);
console.log('the sum is:' + (a+b));


//Modern way
console.log(`the value of a is ${a}`);
console.log(`the value of b is ${b}`);
console.log(`the sum is = ${a+b}`);

let name='pawan';
let age=36;
let salary=70;

console.log(`the emp name is ${name} and age is ${age} and salary is ${salary}`);

console.log('I love javascript coding');
console.log(`I love 'javascript' coding`);
console.log("I love 'javascript' coding");

let username='Virat Kohli';
//input[text()='Virat Kohali']

console.log("input[text()='Virat Kohali']");
console.log(`input[text()='Virat Kohali']`);
console.log(`input[text()='${username}']`);

console.log(`hi it's my ks code`);









