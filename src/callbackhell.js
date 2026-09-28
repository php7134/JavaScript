//callback hell - pyramid of doom...

function startMachine(callback)
{
    setTimeout(()=>
    {
        console.log('1. machine started');
        callback();
    },2000);
}


function boilWater(callback)
{
    setTimeout(()=>
    {
    console.log('2. Water boiled');

        callback();
    },3000);
}


function addCoffeePowder(callback)
{
    setTimeout(()=>
    {
    console.log('3. Coffee powder added');

        callback();
    },2000);
}


function pourInCup(callback)
{
    setTimeout(()=>
    {
    console.log('4. Pour In Cup');

        callback();
    },3000);
}

function serveCoffee(callback)
{
    setTimeout(()=>
    {
    console.log('5. Coffee is served.');

        callback();
    },1000);
}


//start the coffee preperation:



//give me the information after 4 secs...
function getUserData(callback)
{
    console.log('fetching user form db');

    setTimeout(()=>
    {
        let user =
        {
            id:101,
            name:'php',
            email:'php@gmail.com',
            role: 'Senior SDET',
            city:'Pune'
        };

        callback(user);

    },4000)
}

getUserData((user)=>{
    console.log('user received....');
    console.log(user);
    console.log(user.id,user.name);
})





//callback hell --- pyramid of doom...
startMachine(()=>
{
    boilWater(()=>
    {
        addCoffeePowder(()=>
        {
            pourInCup(()=>
                {
                serveCoffee(()=>
                {
                   console.log('Your coffee is ready ....enjoy it.');
                })
            })
        })
    })
})