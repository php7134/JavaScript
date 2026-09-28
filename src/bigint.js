console.log(Number.MAX_SAFE_INTEGER);


//2^53-1

let num= 100n;
console.log(typeof num); //bigint
console.log(num);


let n1=BigInt(2000);
console.log(n1);
console.log(typeof n1);

//console.log(num+10);//100n + 10
console.log(num+10n);// 100n + 10n = 110n

console.log(10n*2n);

console.log(10n/2n);

console.log(-10n);


let phone= "7894564578";

let ssn="555453565661611";
let cc="4578 1245 5689";
console.log(cc.length);

console.log(phone.length);




