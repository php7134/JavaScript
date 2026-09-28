
//arrow function: anonymus function
//has no name
// => 
// has no function keyword
//used in callback function


let print = ()=> console.log('hello');
print(); //calling function


let pop = ()=> {
    console.log('hello');
}

pop();


let test = function ()
{
    console.log('php');
} 

test();


//arrow function with param:
//param: 1 param ---> name
 let printInfo = (name) => console.log(name + ' automation');
 printInfo('php');


 //zero param
 // 0 parm
 let info=()=> console.log('hello js');
 info();


 //1 parameter: no need to use {}

 let printUser=userName => console.log('hello', userName);
 printUser('php automation')


 //param 1:
 //param: element
 let clickElement = element => {
    console.log('check the', element, 'is visible');
    console.log('click on the', element);
    console.log('close the browser');
 }

 clickElement('loginButton');

//add two numbers:
//two params: x, y
// return x+y

let add =(x,y) => x+y;
let res= add(100,200);
console.log(res);


let addition = (x,y) =>
{
    console.log('adding two numbers....');
    let z=x+y;
    return z;
}

let r1= addition (10,20);
console.log(r1);


let division = (x,y) =>
{
    return x/y;
}

let r2=division(10,2);
console.log(r2);


//launch browser : ch, ff, edge
//browsername : 1 param
//return boolean
//found: true
//not found : invalid browser, false


/**
 * 
 * @param {string} browserName 
 * @returns 
 */

let launchbrowser=browserName => 
{
    console.log('trying to launch', browserName);

    switch (browserName) {
        case 'chrome':
            console.log('launch chrome');
            return true;
        case 'ff':
            console.log('launch ff');
            return true;
        case 'edge':
            console.log('launch edge');
            return true;
    
        default:
            console.log('invalid browser', browserName);
            return false;
    }
};

let isBrowserLaunched= launchbrowser('edge');
console.log(isBrowserLaunched);
if (isBrowserLaunched) {
    console.log('enter the url: ', 'https://www.google.com');
    
}

let sum = (a,b) => a+b;
let sub =(a,b) => a-b;


//give a string and convert it to lower case and retrun

let convertToLowerCase=name => name.toLowerCase();
let u1= convertToLowerCase('PHP');
console.log(u1);


/**
 * 
 * @param  {string} empNames 
 */
let printEmpList =(...empNames) =>
{
  console.log(empNames.length);
  console.log(empNames);
};
printEmpList('senthil','joe', 'maerry');


//arrow functions with objects:

let user ={
    name: 'tom',
    age:30,
    salary:12.33,
    isActive: true
};


let printUserInfo = ({name,salary}) =>
    {
        console.log(name,salary);
    }
    
printUserInfo(user);









