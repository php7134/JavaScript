let i=11;

let j= i++ + ++i;

console.log(i); //13
console.log(j); //24

console.log("-------------");

let a=11, b=22, c;
c= a + b + a++ + b++ + ++a + ++b;
console.log("a=" +a);//13
console.log("b=" +b);//24
console.log("c=" +c);//103

console.log("-------------");


let i=0;
let j=i++ - --i + ++i - i--;
console.log(i);
console.log(j);

console.log("-------------");

let i=1, j=2, k=3;
let m=i-- - j-- - k--;
console.log("i="+i);
console.log("j="+j);
console.log("k="+k);
console.log("m="+m);

console.log("-------------");

let m=0, n=0;
let p= --m * --n * n-- * m--;

console.log(m);
console.log(n);
console.log(p);

console.log("-------------");

let d=1.5, D=2.5;
console.log(++d + ++D);
console.log(d);
console.log(D);

console.log("-------------");

console.log(++true);

console.log(7n/2n); //3n

let pop= 10n;
console.log(++pop);


let bill = 1000;
let finalBill= bill + " ";
console.log(typeof finalBill);
console.log(`${bill}`);

let marks=100;

//number to String
console.log(""+marks);

//String to Number
console.log(+marks +20);



let myNum=1000n;
console.log(myNum +"" +200);
console.log(typeof myNum);


//string + anything = string
//anything + string = string
//string + string = string
//number + number = number
//bigint + bigint = bigint
//bigint + number = error







