
//default param- with default value
function greet(name='php')
{
 console.log('hello' + name);
}

greet(); //hellophp
greet('abc');//helloabc

function openBrowser(browserName ='chrome') {

    console.log('launching browser.....' + browserName);

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


let res = openBrowser();
console.log(res);


function voting(name,age=16)
{
    console.log(name,age);
}
voting('Tom');
voting('peter',30);


function createUser(name = 'anonymous', role = 'viewer')
{
    console.log(name,role);
}

createUser();
createUser('php','Admin');


function add(a,b=10)
{
    return a+b;
}

let t1=add(5);
console.log(t1);

let t2= add(5,undefined); //undefined will trigger the default value always 
console.log(t2);

let t3= add(5,undefined); //undefined will not trigger the default value always 
console.log(t3);

