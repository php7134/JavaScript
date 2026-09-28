console.log(10==10);

console.log(10>5);

console.log(true===true);

let age=10;

if(age>=16)
{
    console.log('you are eligible for voting.');
}
else
{
    console.log('you are not eligible for voting.');
}

if(true)
{
    console.log("Hello php");
}
else{
    //dead code / unreachable code
    console.log("Bye");

}

let isElementPresent=true;
if(isElementPresent )
{
    console.log("Element is present on the web page.")
}
else{
    console.log("Element is not present on the web page.")

}
// This is not a best practise use switch case here.
let browser ='chrome';
if(browser==='chrome')
{
    console.log('launch chrome');
}
else if(browser==='edge')
{
    console.log('launch edge');
}
else if(browser==='safari')
{
    console.log('launch safari');

}
else if(browser==='firefox')
{
    console.log('firefox');

}
else
{
    console.log('please pass correct browser');
}


