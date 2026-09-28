
///a piece of code which is doing something / reusable piece of code / function is a block of code which is doing something and it can be reused multiple times in the program.


//function/method
//function without class : function
//method within a class : method

//1. Simple function
//zero input parameter, no return 
//call function
testClickOnLink();
function testClickOnLink() {
    console.log("testClickOnLink function is called");
}

console.log('Bye!');

function click()
{
    console.log('click on the element');
}
click();


//2. Zero input but some return
// zero input parameter return type number
function getNumber() {
    console.log("getNumber function is called");
    return 10;
}
console.log(getNumber());
let res = getNumber();
console.log(res+100);


//name: launchbrowser, type: boolean
function launchBrowser() {
    console.log("launchBrowser function is called");
    return false;
}
let isBrowserLaunched = launchBrowser();
console.log(isBrowserLaunched);

if(isBrowserLaunched) {
    console.log('enter the url: https://www.google.com');
}
else {
    console.log("no need enter the url");
}



function getTrainerName() {
    return "php";
}

let name= getTrainerName();
console.log(name);
console.log(getTrainerName);
console.log(typeof getTrainerName);


//3. some input and some return
function add(a, b) {
    console.log('adding two numbers.....');
    let c=a + b;
    return c;
}

let result = add(10, 20);
console.log(result);

let res1=add(100, 'php');
console.log(res1);


// 
function calculateBilling(foodbill, drinkbill, tax) 
{

    console.log('calculating billing amount.....');
    return  foodbill + drinkbill + tax;
}

let total = calculateBilling(100, 50, 10);
console.log(total);

let total1 = calculateBilling(100, 50, 'php');
console.log(total1);


console.log('-----------------------');

//WAF: launch a browser
//param : chrome, firefox, safari, edge
//print : browser is launched successfully
//return : true/false (boolean)
//wrong browser name : print "browser is not supported" and return false


function launchBrowser(browserName) {
    switch(browserName.trim ().toLowerCase()) {
        case 'chrome':
            console.log('chrome browser is launched successfully');
            return true;
        case 'firefox':
            console.log('firefox browser is launched successfully');
            return true;
        case 'safari':
            console.log('safari browser is launched successfully');
            return true;
        case 'edge':
            console.log('edge browser is launched successfully');
            return true;
        default:
            console.log('browser is not supported');
            return false;
    }
}

//call the function
let isLaunched = launchBrowser('chrome');
console.log(isLaunched);

if (isLaunched) {
    console.log('enter url: https://www.google.com')
    
}