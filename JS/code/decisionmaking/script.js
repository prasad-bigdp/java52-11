// // // write a JS code to print whether given number is even or odd
// // let num = +prompt("Enter a number")
// // if (num % 2 == 0)
// // {
// //     console.log(`${num} is Even number`)
// // }
// // else
// // {
// //     console.log(`${num} is odd number`)
// // }
// // // write a JS code to print whether given age is eligibile to marry or not. eligibility is 21 years old


// // // write a JS code to check whether given number is positive or negitive
// // let num2 = +prompt("enter a number")
// // if (num > 0)
// // {
// //     console.log(`${num2} is positive`)
// // }
// // else if (num < 0)
// // {
// //     console.log(`${num2} is negitive`)
// // }
// // else
// // {
// //     console.log(`${num2} is neither positive nor negitive. it is zero`)
// // }

// // // Write a JS code to print grade based on given score, score<35 is fail,
// // // score>90 is A, score between 70 to 90 is B and score between 35 to 70 is C

// // write a js code to print user details baser on user role using switch
// let role = prompt("enter role");
// let n = prompt("enter name");
// switch (role)
// {
//     case "student": console.log(`welcome ${n}, This is student dashboard`); break;
//     case "mentor": console.log(`welcome ${n}, This is mentor dashboard`); break;
//     case 'admin': console.log(`welcome ${n}, This is Admin dashboard`);
//         break;
//     default: console.log(`Invalid role. please check your role again`)
// }

// 3. write a JS code to generate a ramdom number between 1 to 10. user have to input number . if both mathes, user won else it prints whether user value is greater than or less than generated one


let sysChoice = Math.ceil(Math.random() * 10)
let myChoice = +prompt("Enter a number between 1 to 10")

if (myChoice >= 1 && myChoice <= 10) {
    if (myChoice == sysChoice)
        alert("user Won, you get ₹1000")
    else if (sysChoice > myChoice)
        alert(`System choice is greater than your choice by ${sysChoice-myChoice}`)
    else
        alert(`System choice is less than your choice by ${myChoice-sysChoice}`)
}
else
{
    alert("Enter valid number between 1 to 10")
}






