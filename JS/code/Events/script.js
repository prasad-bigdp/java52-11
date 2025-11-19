// function fun ()
// {
//     alert("You clicked button")
// }
function randomMove ()
{
    const rn = Math.round(Math.random() * 100)
       const rn2 = Math.round(Math.random() * 100)
    const btn = document.getElementById('btn');
    btn.style.top = rn+"%";
    btn.style.left = rn2 + "%";
    btn.removeEventListener("mouseover", randomMove)
}

const btn = document.getElementById('btn')
btn.addEventListener('mouseover', randomMove)

document.addEventListener('dr', function (e)
{
    console.log(e)
    if (e.ctrlKey && e.key == "c")
    {
        console.log(e.ctrlKey,e.key)
        console.log("very good")
        document.getElementById('modal').style.display = "flex"
		} else {
			console.log("very bad")
		}
})
