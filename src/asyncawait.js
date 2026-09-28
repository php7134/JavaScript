

//async - await: just a syntax on top of JS promises to improve the call back hell & promises chaining
// to avoid the pyramid of doom..

//async is used with function --> will always return a promise
//await is used with steps


async function print()
{
    console.log('hello');
}

print();


async function getNumber()
{
    return 100;
}

let t1=await getNumber();
console.log(t1);


async function getUser()
{
    return new Promise((resolve)=>{
        setTimeout(()=>
        {
            resolve({name: 'Tom', age:30});
        },2000);
    })
}

let user =await getUser();
console.log(user);


async function getTrainer()
{
    return 'php';
}
let trainerName=await getTrainer();
console.log(trainerName);



function startMachine()
{
   return new Promise((resolve)=>
{
   setTimeout(()=>
{
    console.log('1. Machine Started');
    resolve();
},2000);
});
}


function boilWater()
{
   return new Promise((resolve)=>
{
   setTimeout(()=>
{
    console.log('2. Water Boiled');
    resolve();
},3000);
});
}


function addCoffeePowder()
{
    return new Promise((resolve)=>
{
   setTimeout(()=>
{
    console.log('3. Coffee powder added.');
    resolve();
},1500);
});
}


function pourInCup()
{
    return new Promise((resolve)=>
{
   setTimeout(()=>
{
    console.log('4. Pour in the cup.');
    resolve();
},1500);
});
}

function serveCoffee()
{
    return new Promise((resolve)=>
{
   setTimeout(()=>
{
    console.log('5. Coffee is served.');
    resolve();
},3000);
});
}


async function makeCoffee()
{
    try {

        await startMachine();
        await boilWater();
        await addCoffeePowder();
        await pourInCup();
        await serveCoffee();
        console.log('your coffee is ready.');
        
    } catch (error) {

        console.log(error);
        
    }
    finally
    {
        console.log('close the db.');
    }
};

await makeCoffee();

//async await ---
//1. if a function is retrun with async - always return a promise --> call it using await
//2. if a function is retutning a promise (resolve, reject) --> call it using await
//3. we should not write await with async function
//4. async function -- its not mandatory to have await step --> will always return promise.
//5. if in a function if you have await steps then that function should be async


