let user =
{
    name: 'john',
    age: 30,
    salary: 50000,
    isActive: true,
    
}

console.log(user);

//shallow copy/cloning of the object
//... spread parameter
let myuser = {...user}; // object copy using spread operator
console.log(myuser);
user.age = 35; // changing the age of the original object
console.log(user);
console.log(myuser);

//
let newuser=sturucturedClone(user); // object copy using structuredClone() method
console.log(newuser);


console.log('-------------------- ');

let customer = {
    name: 'jane',
    age: 25,
    email: 'jane@example.com',
    phone: '123-456-7890',
    salary: 50000,
    isActive: true,


    address: {
        street: '123 Main St',
        city: 'New York',
        state: 'NY',
        zip: 10001

    }

};


console.log(customer);
console.log('-----------------------');


let newcustomer = {...customer}; // object copy using spread operator
console.log(newcustomer);

console.log('-----------------------');
newcustomer.address.city = 'Los Angeles'; // changing the city of the original object
console.log(newcustomer);

console.log('-----------------------');
console.log(customer);

console.log('-----------------------');

//deep copy/ all levels of the object copy
let newcustomer1 = structuredClone(customer);
console.log(newcustomer1);

newcustomer1.address.city = 'Los Angeles'; // changing the city of the original object
console.log(newcustomer);
console.log(newcustomer1);
