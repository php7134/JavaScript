

function getNumber()
{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
          resolve(1000);
        },2000);
    })
};


function getTrainerName()
{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
          resolve('php');
        },2000);
    })
};

function getResonseCode()
{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
          reject('400 Error');
        },1000);
    })
};


//1. Promise.all()  ---> "All or nothing"..
//waits for all promises to succeed. If even one fails..the whole thing fail immediately...fail fast

/*
Promise.all([getNumber(),getTrainerName(),getResonseCode()])
                        .then((result)=>console.log('ALL Resolved:',result))
                        .catch((error)=>console.log('Failed:',error))

*/                        

/*
//2. Promise.race()    ---. who is finising the finish line....  

Promise.race([getNumber(),getTrainerName(),getResonseCode()])
                        .then((result)=>console.log('ALL Resolved:',result))
                        .catch((error)=>console.log('Failed:',error))
*/

/*
//3. Promise.allSettled()  ---- Tell me everything
//wait for all the promises to finish ...either resolve / rejected
Promise.allSettled([getNumber(),getTrainerName(),getResonseCode()])
                        .then((result)=>console.log('ALL Resolved:',result))
                        .catch((error)=>console.log('Failed:',error))
*/


/*
//4. Promise.any()  ------"I just need only one winner" 
//returns the 1st promise to succeed...ignores the failures...
Promise.any([getNumber(),getTrainerName(),getResonseCode()])
                        .then((result)=>console.log('ALL Resolved:',result))
                        .catch((error)=>console.log('Failed:',error))                 

*/              
                
                
                
                
//1. Promise.all()  ---> "All or nothing"..


let [a,b,c]=await Promise.all([getNumber(),getTrainerName(),getResonseCode()]);
console.log(a,b,c);
