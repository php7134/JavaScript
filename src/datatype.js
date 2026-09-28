//data types: types of data

//1. primitive datatype : memory is fixed - predefined datatypes:

//number
//string
//boolean: true/false
//BigInt
//undefined
//null


//2. Non-primitive datatype: Reference Type memory is not fixed - (dynamic memory):

//Array
//Objects
//functions
//map/list/set


//3. Identifiers: var, let, const
//1. number:
//size: 8 bytes = 8*8 = 64 bits

let x=10;
console.log(x);
console.log(typeof(x));


let y= 12.33;
console.log(y);
console.log(typeof(y));

let i=-100;
console.log(i);
console.log(typeof(i));

//2. string/characters:
// "" and '' 
// size for each char 2 bytes

let name='php';
console.log(name);
console.log(typeof(name));

let m1='$';
console.log(m1);
console.log((typeof(m1)));

let m2='1000';
console.log(m2);
console.log(typeof(m2));

let p;
console.log(p);
console.log(typeof(p));

//3. boolean: true/false
//size: 4 bytes

let flag= true;
console.log(flag);
console.log(typeof(flag));

let isElementExist = false;
console.log(isElementExist);
console.log(typeof(isElementExist));


//4. undefined:
let firstName;
console.log(firstName);
console.log(typeof(firstName));

firstName='php';
console.log(firstName);
console.log(typeof(firstName));


//null: no value
//size: 0 bytes
let obj= null;
console.log(obj);
console.log(typeof(null));


//Re-initailization:
let c=10;
c=20;
c=30;
c='php';
console.log(c);
console.log(typeof(c));


//const... fixed value:
const pi=3.14;
console.log(pi);
console.log(typeof(pi));
pi=5.56;
console.log(pi);


const title='LoginPage';
console.log(title);

//const:
//redeclaration : No
//reasignment : No


//let:
//redeclaration : No
//reasignment : Yes

//var: not a good practice
//redeclaration : Yes
//reasignment : Yes


// Hoisting
// Accesing a variable without declaring it.

console.log(y);
var y=7;

// var - allowed - undefined
// let - not allowed
// const - not allowed








