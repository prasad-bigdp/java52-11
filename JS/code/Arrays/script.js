// let arr = [2, "raj", true];
// console.log(arr[0]) //2
// console.log(arr.length) //3
// console.log(arr[3])//undefined
// arr[25] = "prasad"
// console.log(arr, arr.length)

// arr = [5, 6, 7, 8];
// arr[100] = 125252;
// console.log(arr.length);

// //default method
// arr = [5, 6, 7, 6,8, 9, 10];
// console.log(arr.indexOf(6), arr.lastIndexOf(6));
// arr.push(21, 22, 23, 24);
// console.log(arr)
// arr.pop()
// console.log(arr)
// arr.unshift(1, 2, 3, 4)
// console.log(arr)
// arr.shift()
// console.log(arr)

// //arr.splice(indexNumber, deleteCount, inserting elemnets)
// arr.splice(5,1,"prasad","raj",25,101);
// console.log(arr)
// arr = [5, 6, 7, 8];
// arr.reverse()
// console.log(arr);[8, 7, 6, 5]
// arr = [5,6,7,8]
// // for each
// arr.forEach(function (e,i)
// {
//     console.log(e,i)
// })
// arr.forEach((e,i) =>
// {
//     console.log(e*e)
// })
// arr= [5,6,7,8]
// let x = arr.forEach((e, i) =>
// {
//     return e + 1;
// })
// console.log(x)
// let x1 = arr.map((e, i) => {
// 	return e + 1
// })
// console.log(x1)
// arr = [5, 6, 7, 8, 9, 10];
// let x2 = arr.map((e, i) => {
// 	return e>8
// })
// console.log(x2)
// let x3 = arr.filter((e, i) => {
// 	return e > 8
// })
// console.log(x3)

// foreach
// let arr = [8, 1, 3, 6, 4, 5];
// arr.forEach((e,i) =>
// {
//     if (e % 2 == 0)
//     {
//         console.log(e);
//     }
// })
// let even = arr.map((e, i) => e % 2 == 0)
// console.log(even);
// let only_even = arr.filter((e, i) => e % 2 == 0)
// console.log(only_even)
// console.log(arr)
// console.log(arr.includes(5))
// let x = arr.findIndex((e, i) => e % 2 == 0)
// console.log(x)
// arr=[4,0]
// let y = arr.every((e, i) => e % 2 == 0)
// console.log(y);
// arr = [8, 1,21,32,111, 6, 4, 3, 2]
// console.log(arr.sort())
// console.log(arr.sort((a,b)=>b-a))

let arr = [5, 1, 8, 6, 3, 7];
let res = arr.reduce((prev,curr) =>
{
  prev =prev+curr  
},0)
console.log(res)






