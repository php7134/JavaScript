
let emp =
{
    name: 'Shree',
    age: 30,
    salary:12.33,

    coding()
    {
        console.log(this.name, 'is coding');
    },
    testing()
    {
        console.log(emp.name, 'is testing');
        this.coding();
    },
    printData(x,y)
    {
        return x+y;
    },

    data : function()
    {
        console.log('hello', this.name);
    },
    reading: () =>
    {
        console.log('reading method.....');
    }
}

console.log(emp.name,emp.age,emp.salary);
emp.coding();
emp.testing();
let r1=emp.printData(10,20);
console.log(r1);
emp.data();
emp.reading();



//object destructuring:
let  user =
{
    name:'Tom',
    age: 30,
    address: {
        flat:101,
        apratment: 'New apt',
        city: 'LA',
        location:
        {
            lat: 12.33,
            long: 45.34
        }
    }
};

let {name,address: {flat},address: {location :{lat,long}}} = user;
console.log(name,flat,lat,long);










