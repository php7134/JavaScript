let products =['mac','imac','iphone']; //0-3//4

console.log(product);

//1. indexed based loop:
for(let i=0;i<=(product.length)-1;i++)
{
    console.log(product[i]);
    if(product[i] === 'mac')
    {
        console.log("product found");
        break;
    }
}


//2. for..of loop: //always usnig the values
let products =['mac','imac','iphone']; 

for(let e of products)
{
    console.log(e);
    if(e==='imac')
    {
          console.log("found the product");
          break;

    }
}


let num = [1,2,3,4,5];

for (let numbers of num)
{
    console.log(numbers);
}

let temp =[1, 'php', true, 7.7];
for (let details of temp)
{
    console.log(details);
}



//for ---in loop // always using the indexes
let prods = ['iphone','imac','ipad'];
for (let e in prods)
{
    console.log(e, "=", prods[e]);
}

