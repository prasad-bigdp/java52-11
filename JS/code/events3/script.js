document.getElementById('btn').addEventListener('click', () => alert("btn is clicked"),true)
document
	.getElementById("c")
    .addEventListener("click", () => alert("child is clicked"),true)
document
	.getElementById("p")
    .addEventListener("click", () => alert("parent is clicked"),true)
    document
			.getElementById("gp")
    .addEventListener("click", () => alert("grand parent is clicked"), true)
            // event delegation
document.getElementById('buttons').addEventListener('click', (e) =>
{
    alert(e.target.textContent)
})







