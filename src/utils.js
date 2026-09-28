const PI=3.14;
function driving()
{
    console.log('driver is driving');
}
function print()
{
    console.log('printing');
}

// we can have only one default function in JS file
//will not be a part of object de-structuring.
export default function coding()
{
    console.log('coding');
}

export {PI, driving, print};

//1. export from one file and import in another file
//2. export {a,b,c} -> import {a,b,c} from  'util.js'
//3. can have only one default function or variable
//4. export default myname --> import myname
//5. rename:
//export {a,b,c} --> import {a as myA,b as myB, c as myC}
//6. import all: import myname, * as MyApp
//7. clg,clg ---> by default imported in calling file
//8. rename the default --without as --- just rename it with a new var name