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

// this is better version of wrtitng callback with promises and no callback hell...


startMachine()
        .then(()=> boilWater())
        .then(()=>addCoffeePowder())
        .then(()=>pourInCup())
        .then(()=>serveCoffee())
        .then(()=>console.log('Your coffee is ready....enjoy!!'))
        .catch((error)=>console.log(error));


// callback hell --> callback promises --> async & await


