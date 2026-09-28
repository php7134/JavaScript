// == vs ===
// == loose equality : it will check only the value
// === strict euality: it will check value + type

console.log(10==10); //true
console.log(10=="10"); //true
console.log("10"==10); //true


console.log(10===10);// true
console.log(10==="10"); //false
console.log("10"===10);//false

//true=1;
//false=0;

console.log(true==1);//true
console.log(true===1);//false =>boolean vs number

console.log(false==0); //true
console.log(0===false); //false

console.log(""==0);//0 == 0 => true
console.log(""===0);//false
console.log([]==0); //true
console.log([]===0);//false

let n1=10;
let n2="10";

console.log(n1==n2);//true
console.log(n1===n2);//false

console.log(null==undefined); //true
console.log(null===undefined); //false

console.log([] =="");//true
console.log([]==="");//false

console.log([]==[]); //false - it will start comparing the memory address
console.log([]===[]);//false















