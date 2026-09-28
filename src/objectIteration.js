let user =
{
    name: 'john',
    age: 30,
    salary: 50000,
    isActive: true,
    
}
console.log(user);

//object iteration using for..in loop:
for (let key in user)
{
    console.log(user[key]);
}
console.log('--------------------');
console.log(Object.keys(user));  //keys
console.log(Object.values(user)); //values
console.log(Object.entries(user)); //key value pairs


//js object to json string:

let userjson = JSON.stringify(user,null,4); // convert JS object to JSON string
console.log(userjson);