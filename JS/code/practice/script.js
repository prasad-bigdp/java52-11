// write a function that accepts two numbers and add them and return. call the function and print the result
const  add =  (a, b)=>a+b
let sum = add(5, 8);
console.log(sum);
// write a function that accepts multiple numbers and add the, and return. call the function and print the result
let  add2 =  (...x)=>
{
    // let s =0
    // for (let i of x)
    // {
    //     s = s + i;  
    // }
    let s = x.reduce((p,c)=>p+c,0)
    return s;
}
add2(5, 4, 3, 2, 1)

// write a function that takes two values. Take these values from HTML and onclick of a button, the function will be called and print their sum in a paragraph below

let students = [
    {
        name: "raj",
        age: 50
    }
]
// print this student detail as a card in HTML
document.getElementById('name').textContent = "NAME: "+students[0].name
document.getElementById("age").textContent = "AGE: " + students[0].age
