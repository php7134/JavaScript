
/**
 * 
 * This function is used to add two variables
 * @param {*} x
 * @param {*} y
 * @returns it returns addition of two numbers
 */
function addition(x,y)
{
    return x+y;

}

// let m1= addition(10,20);
// console.log(m1);

// let m2= addition('10', 'naveen');
// console.log(m2);

// let m3= addition('hello','php');
// console.log(m3);

let t1= addition(10,20);
console.log(t1);


let t2=addition('hello','tom');
console.log(t2);


// function calling in a circular way.
function m1() {
    console.log("m1 function");
    m2();
}
function m2() {
    console.log("m2 function");
    m3();
}
function m3() {
    constructor("m3 function"); 
     m1();   
    }
    


// function calling itself is called recursive function.//called as recursion
function login()
{
    console.log('login to app');
    login();
}

login();


//function with parametrs

//function name: calculateBilling

//parameter 2 : amount,tax
function calculateBilling(amount,tax)
{
    let totalAmt= amount+tax;

}

calculateBilling(100,20); // calling function by passing values/arguments
// call by value





