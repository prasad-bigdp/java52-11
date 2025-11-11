// console.log(document)
// // const ele = document.getElementsByTagName('h1')
// // ele[0].textContent = "bye world"
// // const ele = document.getElementsByClassName('head');
// // ele[0].textContent = "prasad"
// // const ele = document.getElementById("myHeading")
// // ele.textContent = "Bye World"
// // const ele = document.querySelector('.head')
// // ele.textContent = "byeeeeeeeee"
// // const ele = document.querySelectorAll('.head')
// // ele[0].textContent = "byee"

// const elements = document.querySelectorAll('.letter');
// const n=  ['r','a','j','e','s','h']
// console.log(elements)
// elements.forEach((e,i) =>
// {
//     e.textContent = n[i];
// })
// const ele = document.getElementById('h')
// const image = document.getElementById('image')
// function change ()
// {
//     ele.textContent = "Bye World"
//     image.src = 'https://m.media-amazon.com/images/I/61WuOakG74L._AC_UF894,1000_QL80_.jpg'
//     // ele.classList.toggle('x')
// }

// const inputEle = document.getElementById('na');
// function changeImage ()
// {
//     console.log(inputEle.value)
//     image.src = inputEle.value
// }

const imageLinkEle = document.getElementById('imageLink')
const imageEle = document.getElementById('image')
const paraEle= document.getElementById('desc')
function change ()
{
    imageEle.src = imageLinkEle.value
    imageEle.classList.add("simpleImage");
    paraEle.innerHTML = "This is <b>nobita</b>"
    paraEle.style.color = "green";
    paraEle.style.fontSize = '48px'
    
}