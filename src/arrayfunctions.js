
//Mutator Methods:

// 1. push menthod will add at the end
let num = [1,2,3,4,5];
console.log(num.length);


let e1=num.push(100);
console.log(num);
console.log(e1);

// 2. pop method will return the last element from the array.
let num = [1,2,3,4,5];
console.log(num.length);


let t1=num.pop(100);
console.log(t1);
console.log(num);


// 3. unshift : add to the begining of the array
let cart = ['imac','samsung', 'iphone','macbook'];
cart.unshift('macbook pro');
console.log(cart);


//4. shift: remove the first element from the array.
let cart = ['imac','samsung', 'iphone','macbook'];
cart.shift('imac');
console.log(cart);

//5. splice: add, remove, replace values form anywhere in the array.
 let cart = ['imac','samsung', 'iphone','macbook'];
// cart.splice(0,0,'iphone');
// console.log(cart);

//cart.splice(0,1,'canon');
//console.log(cart);

cart.splice(cart.length-1, 1, 'cannon');
console.log(cart);

//6.slice
let cart = ['imac','samsung', 'iphone','macbook'];

let newCart=cart.slice(0,2);
console.log(newCart);


//7. reverse
 let cart = ['imac','samsung', 'iphone','macbook'];
 let reversedCart=cart.reverse();
 console.log(reversedCart);


 //8. indexOf
  let cart = ['imac','samsung', 'iphone', 'imac','macbook','imac'];

  // 1st occurence
  let k=cart.indexOf ('imac'); 
  console.log(k);//0

  // 2nd occurence
  let p= cart.indexOf('imac',k+1);
  console.log(p);

  // 3rd occurence
  let m= cart.indexOf('imac',p+1);
  console.log(m);

  console.log(cart.lastIndexOf('imac'));


  //using for loop to find how many times imac is repeated:
    let cart = ['imac','samsung', 'iphone', 'imac','macbook','imac','iphone'];

    let i=0;

    while(i<=cart.length-1)
    {
        let p= cart.indexOf('iphone',i);
        if(p==-1)
        break;
        console.log(p);
        i=p+1;
        
    }

//9. includes:
let cart = ['imac','samsung', 'iphone', 'imac','macbook','imac','iphone'];
let num= [1,2,3,4,5];
console.log(num.includes(3));
console.log(cart.includes('php'));

//10. join : joins all the elements into a string with a seperator:
let arr =['js','is','interesting'];
let newarr=arr.join('|');
console.log(newarr);

//11. toString:
let arr =['js','is','interesting'];
console.log(arr.toString());
console.log(arr);

//12. at: element at given index ...it supports negative index
let num= [1,2,3,4,5];
console.log(num.at(-1));


//13. forEach method:
let cart = ['imac','samsung', 'iphone','macbook','keyboard'];
cart.forEach((e)=>{
   console.log(e.toUpperCase());
})

let num =[1,2,3,4,5];
num.forEach((e)=>console.log(e*2));














