let arr = [2, "raj", true];
console.log(arr[0]) //2
console.log(arr.length) //3
console.log(arr[3])//undefined
arr[25] = "prasad"
console.log(arr, arr.length)

arr = [5, 6, 7, 8];
arr[100] = 125252;
console.log(arr.length);

//default method
arr = [5, 6, 7, 6,8, 9, 10];
console.log(arr.indexOf(6), arr.lastIndexOf(6));
arr.push(21, 22, 23, 24);
console.log(arr)
arr.pop()
console.log(arr)
arr.unshift(1, 2, 3, 4)
console.log(arr)
arr.shift()
console.log(arr)

//arr.splice(indexNumber, deleteCount, inserting elemnets)
arr.splice(5,1,"prasad","raj",25,101);
console.log(arr)
arr = [5, 6, 7, 8];
arr.reverse()
console.log(arr);[8, 7, 6, 5]
arr = [5,6,7,8]
// for each
arr.forEach(function (e,i)
{
    console.log(e,i)
})
arr.forEach((e,i) =>
{
    console.log(e*e)
})
arr= [5,6,7,8]
let x = arr.forEach((e, i) =>
{
    return e + 1;
})
console.log(x)
let x1 = arr.map((e, i) => {
	return e + 1
})
console.log(x1)
arr = [5, 6, 7, 8, 9, 10];
let x2 = arr.map((e, i) => {
	return e>8
})
console.log(x2)
let x3 = arr.filter((e, i) => {
	return e > 8
})
console.log(x3)














