// 1. map: transform every elemnt of the given array
// returns: new array with the same length


let num= [1,2,3,4,5];
let newNum= num.map(e=>e*2);
console.log(newNum);

let sqrt=num.map(e => e*e);
console.log(sqrt);

let empNames= ['Uday','tom', 'php'] ;
let newUpperCase=empNames.map(e=>e.toUpperCase());
console.log(empNames);
console.log(newUpperCase);

let num=[1,2,3,4,5,6,7,8,9,10];
num.forEach((e) =>{
    if(e%2===0)
    {
          console.log(object);

    }
} )


//2. filter: remove from the existing array on the basis of given condition
//return: new array with same lenght or length can be reduced or decreased.

let numbers = [10,25,30,45,50,60];
//give me all the numbers which are are greater than 30.

let greatthnn30 = numbers.filter(e=> e>30);
console.log(greatthnn30);
console.log(typeof(greatthnn30));

let numbers = [10,25,30,45,50,60];

let even = numbers.filter(e=>e%2===0);
console.log(even);

let odd = numbers.filter(e=>e%2===1);
console.log(odd);


let names=['uday', 'om','Tom'];
let filteredNames=names.filter(e => e.length>2);
console.log(filteredNames);

let productData= ['apple mac','samsung galaxy','canon', ,'apple air','apple iph'];

let finalprod=productData
   .filter(e=>e.startsWith('apple'))
   .filter(e=>e.includes('iph'))
   .map(e=>e.replace('iph','iphone'));

   console.log(finalprod);

// reduce : combine everything into one value
// it will return a single value

let numData = [10, 20, 30, 40];
let total=numData.reduce((sum,n) =>sum=sum+n,0);
console.log(total);

let productData= ['apple mac','samsung galaxy','canon', ,'apple air','apple iph'];
let finalVal=productData.reduce((result,e)=>result+e," ");
console.log(finalVal);



