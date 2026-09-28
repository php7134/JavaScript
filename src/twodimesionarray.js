

//two Dim: 2D array:

let numbers = [
    [1, 2, 3, 5],
    [4, 5, 6, 8],
    [7, 8, 9, 10]
];

console.log(numbers[0][0]); //1
console.log(numbers [0] [3]); //5
console.log(numbers.length);
console.log(numbers);

//print / iterate the 2 d array using for loop:

for (let i = 0; i < numbers.length; i++) 
    {
    for (let j = 0; j < numbers[i].length; j++) 
        {

        process.stdout.write(numbers[i][j] + " ");
    }
    console.log();
}

console.log("-------------------------------");
//for ..of loop:

for (let row of numbers)
{
    for (let col of row)
    {
        process.stdout.write(col + " ");
    }
    console.log();
}

//jagged array:
//used when we have different number of columns in each row.

let data = [
    [1, 2, 3],
    [4, 5],
    [6, 7, 8, 9]
];

console.log(data);

for(let u of data)
{
    for(let v of u)
    {
        process.stdout.write(v + " ");
    }
    console.log();
}



console.log("-------------------------------");

let products =['mac','imac','iphone']; 

//reverse order using for ...of loop:

let count = products.length - 1;
for (let e of products)
{
    e=count;
    console.log(products[e]);
    count--;

}


let products =['mac','imac','iphone']; 
//for ...in loop:
for (let e in products)
{
    console.log(products[e]);
}

//reverse order using for ...in loop:
let products =['mac','imac','iphone'];

for (let e in products)
{
    console.log(products[products.length - 1 - e]);
}


//1d : 1 for loop
//2d : 2 for loop
//3d : 3 for loop
