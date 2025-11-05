// // // //create a function display which prints "hello world" in console and call it
// // // function display ()
// // // {
// // //     console.log("Hello World")
// // // }

// // // display()

// // // // create a function that takes name as parameter and displays greeting like , Hello John in console.call it
// // // function greet (n)
// // // {
// // //     console.log(`Hello ${n}`);
// // // }
// // // greet("prasad")


// // // //create a function that accepts two parameters and prints their sum in console

// // // // write a function that accepts two parameters and returns their product
// // // function mul (a, b)
// // // {
// // //     return a * b;
// // // }
// // // let res = mul(5, 2);
// // // console.log(res);

// // // //optional parameter and default parameters
// // // function sub (a, b, c=5)
// // // {
// // //     console.log(a-b,c)
// // // }
// // // sub(5,3)
// // // sub(1,2,3)

// // // // rest parameter. it uses three dots. it collects all elements as array and it is always last parameter
// // // function something (...c)
// // // {
// // //     console.log(c);let s=0
// // //     for (let i = 0; i < c.length; i++)
// // //     {
// // //         s = s + c[i];
// // //     }
// // //     console.log(s)
// // // }
// // // something(5, 6, 7, 8, 9, 10)
// // // something()
// // // something(1, 2)
// // // something(1,2,3)

// // // let [a, b, ...c] = [5, 4, 6, 7, 8, 9];



// // // a = [5, 4], b = [3, 6]
// // // c = [a, b]
// // // console.log(c);  // [[5,4],[3,6]]
// // // d = [...a, ...b]
// // // console.log(d);  // [5,4,3,6]
// // // let [e, ...f] = [5, 4, 3, 6];

// // function sum (a, b)
// // {
// //     return a + b;
// // }
// // console.log(sum);   // whole function
// // console.log(sum(5,3))
// // // function expression 
// // let sum2 = function (a, b)
// // {
// //     return a+b
// // }
// // console.log(sum2)  //whole function
// // console.log(sum2(5, 3))
// // // arrow function
// // let sum3 = (a, b) => a + b;

// // console.log(sum3) //whole function
// // console.log(sum3(5, 3))
// function mad ()
// {
//     console.log("it is mad")
// }
// function simple (a)
// {
//     console.log("it is simple")  
//     a();
// }
// simple(mad)









// let x1 = (a,b) =>a+b
// let x2 = (a, b) => a - b;
// function calc (p, q)
// {
//     console.log(p(5, 3))
//      console.log(q(5, 3))
// }
// calc(x1, x2);


function Outer ()
{
    let x = 5;
    function inner ()
    {
        x++;
        console.log(x)
    }
    return inner;
}
let z = Outer();
z() //6
z() //7




