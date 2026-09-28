// object in JS: non-primitive data type

//collections of related data (key - value pairs)



let user = {
    name: 'john',
    age: 30,
    email: 'john@example.com',
    zip: 12345,
    city: 'NY'
};

// console.log(user);
// console.log(user.name);
// console.log(user.age);
// console.log(user.email); // dot - notation

// console.log(user ['name']);// bracket notation
// console.log(user ['age']);
// console.log(user ['email']);


// user = null;
// console.log(user.name);// error

// user = undefined;
// console.log(user.name);// error

// console.log('----------------');
console.log(user);
user.city = 'LA';
console.log(user);
user.zip = 54321;
console.log(user);

delete user.zip;
console.log(user);

delete user.city;
console.log(user);

console.log("-----------");



// Nested object:
// JS Object
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
console.log(customer.name);
console.log(customer.address.city);
console.log(customer.address.zip);
console.log(customer.isActive);
console.log(customer.address);

console.log(customer['address'].city);
console.log(customer['address']);
console.log(customer['address']['zip']);


console.log('--------------------');
let user = {
    name: 'john',
    age: 30,
    email: 'john@example.com',
    zip: 12345,
    city: 'NY'
};
console.log(user);
// JS Object to JSON // searilization (marhelling)

//JSON.stringify(user); // convert JS object to JSON string
let userJson= JSON.stringify(user);
console.log(userJson);
console.log(typeof userJson);


//Json String ---> JS Object // desearialization (unmarshalling)
let userObj = JSON.parse(userJson);
console.log(userObj);
console.log(typeof userObj);


console.log(user.name===userObj.name); // true
console.log(user==userObj); // false because they are different objects in memory


let emp = {
    name: 'john',
    age: 30,
    email: 'john@example.com',
    zip: 12345,
    devices: ['airtel sim', 'iphone', 'macbook']
};

console.log(emp.devices.length);

let empJson = JSON.stringify(emp); // convert JS object to JSON string
console.log(empJson);