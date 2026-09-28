

//Promise:
// 3- states
// 1. Pending
// 2. Resolve  --- fulfillment --return the resource
// 3. Rejected ---- reason(error)


//Create a Promise: using promise

let pizzapromise = new Promise ((resolve,reject) =>
{
    let success = true;
    if (success) {
        resolve('Pizza');
    }
    else{
        reject('delivery boy is not available........')
    }
});

pizzapromise
      .then((result) => { console.log(result)})
      .catch((error)=>{console.log(error)})
      .finally(()=>{console.log('close the app')});

//
function getuserInfo(userID)
{
    return new Promise((resolve,reject)=>
    {
        console.log('fetching user data for ...', userID);

        setTimeout(()=>
        {
            if (userID<=0) {
                reject('Invalid user ID...');
                
            }
            else{
                let user=
                {
                    id:userID,
                    name:'Shawn',
                    city: 'Pune'
                };

                resolve(user)
            }
        },4000)
    })
}      


getuserInfo(-1)
            .then((user)=>console.log(user))
            .catch((error)=>console.log(error))
            .finally(()=>console.log('close the db connection'))



function getNumber()
{
    return Promise.resolve(100);
}

getNumber().then(result=>console.log(result));


function getBrowserError()
{
    return Promise.reject('browser is not loaded')
}

getBrowserError().catch(error=>console.log(error));


//
function getPizza()
{
    return new Promise((reject) =>{
        reject('404 not found')
    });
}

getPizza()
       .catch(res=>console.log(res));
