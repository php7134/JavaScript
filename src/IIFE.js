//IIFE: Immediately invoked function expression
// Anonymous function: no name of the function
// this function will be invoked itself

(() =>
{
    console.log('hello');
}) ();


(function()
{
    console.log('Hello');
}) ();

(function(username)
{
    console.log('Hello');
}) ('php');

(function (name, age)
{
    console.log(name,age);
}) ('php',77);


//
let flag= ((browserName) =>
{
    console.log('Hello World', browserName );
    console.log('bye');
    return true;

}) ('chrome');


console.log(flag);

