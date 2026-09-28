

class user
{

    // no need to declare  the class global variables...
    constructor(name,age,salary,isActive)
  {
    //this.global = local
    this.name=name;
    this.age=age;
    this.salary=salary;
    this.isActive=isActive;

  }
}


let u1= new user('Tom',20,12.33,true);
console.log(u1.name,u1.age);
console.log(u1);


class Person
{
    //default constructor
    constructor()
    {
      console.log('this is the default const.');
    }

    constructor(name)
    {
      console.log('1 param const....',name); // syntax error - class may have only one constructor.
    }
}

let p1= new Person('php');
