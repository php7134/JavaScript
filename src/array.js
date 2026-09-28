let i=10;
i=20;
i=30;
console.log(p);

//Array: collection of data:
//data: similar datatype : Homogenous
//data: different datatype: Hetrogeneous


let num = [1,2,3,4,5];
console.log(num.length);
let len = num.length;
console.log("Hi=", len-1);
console.log("Li=",0);

console.log(num[0]);
console.log(num[4]);
console.log(num[5]); //undefined
console.log(num [-1]); //undefined


console.log(num);
num[0]=10;
console.log(num);//[ 10, 2, 3, 4, 5 ] 
num[10]=100;
console.log(num);// [ 10, 2, 3, 4, 5, <5 empty items>, 100 ]
console.log(num.length);

console.log(num[5]); // undefined

num[50]=1000;
console.log(num);// [ 10, 2, 3, 4, 5, <5 empty items>, 100, <39 empty items>, 1000 ]
console.log(num.length);//51


let marks =[10,20,30,40];
console.log(marks);

marks[-1]=5;
console.log(marks);//[ 10, 20, 30, 40 ]
console.log(marks.length); //[ 10, 20, 30, 40, '-1': 5 ]
console.log(marks[-1]);// 5

marks[-100]=90;
console.log(marks);  //[ 10, 20, 30, 40, '-1': 5, '-100': 90 ]


//string array:

let product =['mac','imac','iphone'];
console.log(product);
console.log(product.length);//3
console.log(typeof(product)); //Object


//emp data:
let empData= ['php',30,23.44,true];
console.log(empData);
console.log(empData[0]);

//-----------------------------------------------------//

let number =[10,20,30,40,50];
console.log(number);

//iterate over the array using for loop:
for(let i=0;i<=number.length-1;i++)
{
    console.log(number[i]);
}

let pop= [];
console.log(pop.length);//0
pop[100]=1000;
console.log(pop); // [ <100 empty items>, 1000 ]
console.log(pop.length); // 101


for(let i=0; i<=pop.length-1;i++)
{
    console.log(pop[i]);
}

/*
let num= [1,2,3,4,5];

num[-1]=10;
for (let i=-1;i<=num.length-1;i++)
{
    console.log(num.at(i));
}
    */
