let u1 =
{
    name: 'john',
    age: 30,
    city: 'Pune',
    zip: 411001,
    
};

let u2 =
{
    name: 'Manish',
    age: 35,
    city: 'Mumbai',
    zip: 400001,
    
};

let u3 =
{
    name: 'Pooja',
    age: 30,
    city: 'Delhi',
    zip: 110001,
    
};

console.log(u1);
console.log(u2);
console.log(u3);

console.log('------------------');
u1=u2;
console.log(u1);
console.log(u2);
console.log(u3);

console.log('------------------');
u2=u3;
console.log(u1);
console.log(u2);
console.log(u3);

console.log('------------------');
u3=u1;
console.log(u1);
console.log(u2);
console.log(u3);

console.log('-----------------------------');

let p1 =
{
    name: 'john',
    age: 30,
    city: 'Pune',
    zip: 411001,
    
};

let p2 = p1;

console.log(p1);
console.log(p2);

p2.name = 'Danish';
p2.age = 35;

console.log(p1);

// garbage collector:
//1. null reference
//2. undefined reference
//3. no references









