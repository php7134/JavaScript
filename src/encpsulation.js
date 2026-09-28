

//Encapsulation: 

class Employee {

    name; //public
    age; //public
    #salary; //priavate var of the class


    constructor(name,age,salary)
    {
        this.name=name;
        this.age=age;
        this.#salary=salary;
    }

    //public getter and setter methods

    setSalary(salary)
    {
        this.#salary=salary;

    }
    getSalary(salary)
    {
        return this.#salary;
    }
}

let emp= new Employee('Tom',20,12.33);
console.log(emp.name,emp.age);

let s1=emp.getSalary();
console.log(s1);

emp.setSalary(23.44); //update salary
s1=emp.getSalary();
console.log(s1); //23.44


class LoginPage
{
    #username;
    #password;

    constructor (username,password)
    {
        this.#username=username;
        this.#password=password;
    }


    // getters
    getUsername()
    {
        return this.#username;
    }
    getPassword()
    {
        return this.#password;
    }

    //setters 
    // to update the credentials
    setUsername(username)
    {
        return this.#username = username;
    }
    setPassword(password)
    {
        return this.#password = password;
    }
}

//POST
let lp=new LoginPage('php@gmail.com','123');
// console.log(lp.#username);


//GET
let un=lp.getUsername();
console.log(un);

//GET
let pwd=lp.getPassword();
console.log(pwd);

//PUT
lp.setPassword('pgp123');
//GET
let newpwd=lp.getPassword();
console.log(newpwd);



class User
{
    name;
    #age;
    #salary

    constructor(name,age,salary)
    {
        this.name=name;

        if(age>18)
        {
            this.#age=age;
        }
        if(salary>=10)
        {
            this.salary=salary;
        }
    }
    setAge(age)
    {
        if (age>=18) {
            this.age=this.#age;
            
        }
        else
        {
            console.log('age must be greater than or equal to 18');
        }
    }
    getAge()
    {
        return this.#age;
    }
}

let obj=new User('Tom',10,5);
let t1=obj.getAge();
console.log(t1);


class Browser
{
    launchBrowser()
    {
        console.log('launching the browser');
        this.#checkOSCompatability();
        this.#checkRAMSize();
        this.#checkUpgrade();
        console.log('browser is launched');
    }

    #checkOSCompatability()
    {
        console.log('checkOSCompatible');
    }
    #checkRAMSize()
    {
        console.log('checkRAMSize');
    }
    #checkUpgrade()
    {
        console.log('checkUpgrade');
    }
}


//user is trying to access the browser....
let obj = new Browser();
obj.launchBrowser();
obj.checkOSCompatability();
obj.checkRAMSize();
obj.checkUpgrade();



