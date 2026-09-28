
//Inheritance 
//child can access all the properties of the parent class.
//but parent can not access anything from the child.

class Car
{
    speed =100;

    start()
    {
        console.log('car  --- start');
    }

    stop()
    {
        console.log('car ---- stop');
    }
    refueling()
    {
        console.log('car --- refuel');
    }
     #billing()
    {
        console.log('CAR---billing');
    }
}


class BMW extends Car
{
   // speed=200;
   //Method Overridding
   start()
    {
        console.log('BMW car  --- start');
    }


    parking()
    {
        console.log('BMW parking');
    }

    #billing()
    {
        console.log('BMW---billing');
    }

    getBilling()
    {
        this.#billing();
    }
}


let bmw= new BMW();
console.log(bmw.speed);
bmw.start(); //overridden
bmw.stop(); //inherited
bmw.refueling();//inherited
bmw.parking();//individual
bmw.getBilling();

console.log('--------------------------------------');

let car =new Car();
console.log(car.speed);
car.start();
car.stop();
car.refueling();

//

class Car{

   
    speed=100;
    start()
    {
        console.log('car -- start');
        console.log(this.speed); //200
    }
}


class BMW extends Car
{
    speed = 200;

    start()
    {
        console.log('BMW -- start');
        console.log(this.speed);  //200
        //console.log(super.speed); //100
    }

    dashboard()
    {
        this.start();
        super.start();
        console.log(this.speed);//200
        //console.log(super.speed);//undefined
    }

}


let bmw= new BMW();
bmw.dashboard();


