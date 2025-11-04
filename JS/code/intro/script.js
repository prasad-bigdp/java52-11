console.log("hiiiiiiiiiii")
console.log(a);
//using var
var a = 25;
console.log(a);
var a = 16; //redeclared
a = 50; //reasssign
console.log(a)
//console.log(c) //error
//using let and const
let b = 10;
console.log(b);
b = 20;
console.log(b)
const c = 20;
// c = 30; constant variable cannot be changed
// const c = 50; //error

function fun ()
{
    if (true)
    {
        var k = 10;
        let q = 65;
    }
    console.log(k)
    console.log(q)
}