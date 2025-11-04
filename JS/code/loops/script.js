// // // /*1. write a js code to print the given name in reverse
// // // input : prasad 
// // // output: dasarp*/

// // // // let n = prompt("enter any name");//prasad
// // // // let revStr =''
// // // // let i = n.length-1;
// // // // while (i >=0)
// // // // {
// // // //     revStr = revStr+ n.charAt(i);
// // // //     i--;
// // // // }
// // // // console.log(revStr)

// // // //// write a js code to input a sentence and get indiviual words reverse
// // // //input: JS is so Easy
// // // //output: SJ si os ysaE

// // // let words = prompt("enter sentense").split(" ");
// // // console.log(words)
// // // let i = 0;
// // // let answer = ''
// // // while (i < words.length)
// // // {
// // // 	let n = words[i]
// // // 	let revStr =''
// // // 	let j = n.length-1;
// // // 	while (j >=0)
// // // 	{
// // // 	    revStr = revStr+ n.charAt(j);
// // // 	    j--;
// // //     }
// // //     answer =  answer+revStr+" "
// // // 	i++
// // // }
// // // console.log(answer)

// // let num = Math.abs(+prompt("enter any number")); //1759
// // while (num > 9)
// // {
// // 	let sum = 0;
// // 	while (num > 0) {
// // 		let d = num % 10
// // 		sum = sum + d
// // 		num = Math.floor(num / 10)
// // 	}
// // 	num = sum;
// // }
// // console.log(num)
// let arr = [20, 30, 50, 10]
// for (let i = 0; i < arr.length; i++) {
// 	console.log(arr[i])
// }
// for (let e of arr)
// {
// 	console.log(e)
// }
// for (let e in arr) {
// 	console.log(e)
// }
// // find sum of elements in array
// arr = [1, 2, 3, 4, 5]
// // standard for
// let sum = 0;
// for (let i = 0; i < arr.length; i++)
// {
// 	sum = sum + arr[i];
// }
// console.log(sum)
// sum = 0;
// for (let e of arr){
// 	sum = sum + e;
// }
// console.log(sum)
// sum = 0
// for (let e in arr) {
// 	sum = sum + arr[e]
// }
// console.log(sum)
let arr = [1, 2, 3, 4, 5], pro = 1;
for (let i = 0; i < arr.length; i++)
{
	if (i % 2 != 0)
	{
		pro=pro*arr[i]
	}
}
console.log(pro)
pro = 1;
for (let i in arr)
{
	if (i % 2 != 0) {
		pro = pro * arr[i]
	}
}
console.log(pro)








