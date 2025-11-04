let a = 2, b = 3;
let sum = a + b;
console.log(sum); //5
console.log(a - b, a * b, a / b, a % b, a ** b)

a = 2, b = '2';
console.log(a == b) //true
console.log(a === b) //false it also compares datatypes
console.log(a != b);// false
console.log(a !== b); //true
console.log(a>b,a<b,a>=b,a<=b)

let x = 10, y = 20;
let z = ++x + x-- + --y + y++   //11 + 11 + 19 +19
console.log(x, y, z);
