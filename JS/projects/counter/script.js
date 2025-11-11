const para = document.getElementById('count');
let c = 0;
function increment ()
{
    c++;
    para.textContent = c;
}
function decrement ()
{
    c--;
    para.textContent = c
}
function reset ()
{
    c = 0;
    para.textContent =c
}