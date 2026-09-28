

function testing(callback)
{
    console.log('hello');
    callback();
}


function print()
{
   console.log('hello world');
}

//1. calling part: call by passing the function
testing(print);


let coding = function doCoding()
{
    console.log('im coding');
}


//2. calling testing function by passing coding function --callback
testing(coding);

//3. calling the testing function bypassing another anonymous function
testing(function()
{
    console.log('im running....');
})

//4. calling the testing function by passing anonymous function
testing(()=>
{
    console.log('hello arrow js');
})

// let num = [1,2,3,4];
// num.map((n)=>n*2);

//
let add= (a,b) => a+b;
let t1= add(10,20);
console.log(t1);

// Internal feature of calculator
let add =(a,b) => a+b;
let sub=(a,b) =>a-b;
let mul=(a,b) =>a*b;
let div=(a,b) =>a/b;

//generic function: helper function: utility function
//user facing function
function calculator(callback,a,b)
{
    console.log('doing calculation....');
    return callback(a,b);
};

//user wants to use this calculator:
calculator(add,10,20);

let r1=calculator(add,10,20);
console.log(r1);


r1=calculator(sub,10,20);
console.log(r1);


function printing(callback)
{
    console.log('hello printing.........');
    callback(100,200);
}

printing((num1,num2)=>
{
    console.log('hello....',num1+num2);
});


//
function finding(callback1,callback2)
{
    console.log('doing something......');
    callback1();
    callback2();
}


function coding()
{
    console.log('hello coding');
}

function writing()
{
    console.log('hello writing');
}

finding(coding,writing);


//

function click(element)
{
    console.log('click on ', element);
}

function performAction(callbackAction,element)
{
    console.log('do the action');
    callbackAction(element);
}

performAction(click, 'loginButton')

//

function getUserDetails(callback,userObj)
{
 console.log('getting user details......');
 callback(userObj)

}
getUserDetails((user)=>{
   console.log(user);
},{name:'Manish',age:30})




///

function get()
{
    console.log('Get API');
}
function post()
{
    console.log('post API');
}
function put()
{
    console.log('put API');
}
function deleteCall()
{
    console.log('deleteCall API');
}


//user facing:
function performAPICall(callback)
{
  callback();
}

performAPICall(get);
performAPICall(post);
performAPICall(put);
performAPICall(deleteCall);


//wait for sometime(4 secs) & then callback perform some action...

setTimeout(()=>{
console.log('hello world');
},4000)

function getData(callback)
{
    console.log('getting data from database');
    setTimeout(()=>{
        //get the data from API from DB
        callback();
    },4000);
}

getData(()=>
{
    console.log('user data');
});

