// first thing is select
const headingEle = document.getElementById('heading');
function changeHead ()
{
    headingEle.textContent = "Bye World"
}
function changeCSS ()
{
    headingEle.style.backgroundColor = "green";
    headingEle.style.color = "blue"
    headingEle.style.transform= "rotate(360deg)"
}
const inputEle = document.getElementById('na');
const data = document.getElementById('data')
function printText ()
{
    let x = inputEle.value; 
    data.textContent = 
        `You entered:${x}, it contains ${x.length} letters`
}