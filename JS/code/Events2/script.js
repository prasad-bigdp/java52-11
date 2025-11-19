const nameInput = document.getElementById('inp');
const nameError = document.getElementById('nameError')
const emailInput = document.getElementById('em');
const pwdInput = document.getElementById('pwd');
const button = document.getElementById('btn');
const pwdError = document.getElementById('pwdError')
function checkName (a,b,c)
{
    let x = a.value.length
    if (x < b)
    {
        c.textContent = `it is too short. Enter minimum ${b} characters`
    }
    else
    {
        c.textContent = ''
    }
}
nameInput.addEventListener('input', ()=>checkName(nameInput,6,nameError))

pwdInput.addEventListener('input', () => checkName(pwdInput, 8, pwdError))

const iconButton = document.getElementById("eyebtn")
iconButton.addEventListener('click', () =>
{
    if (pwdInput.type == "password")
    {
        pwdInput.type = "text"
        iconButton.classList.remove("bi-eye");
        iconButton.classList.add("bi-eye-slash")
    }
    else
    {
        pwdInput.type = "password"
        iconButton.classList.remove("bi-eye-slash")
         iconButton.classList.add("bi-eye")
    }
})
const selectColor = document.getElementById("color2");
selectColor.addEventListener('input', () =>
{
    document.querySelector('.form').style.backgroundColor = selectColor.value
})
document.querySelector('.form').addEventListener('submit', (e) =>
{
    e.preventDefault()
    console.log(e)
})
nameInput.addEventListener('input', () =>
{
    let reg = /^[A-Za-z@]{6,}$/ 
    if (!(reg.test(nameInput.value))) 
    {
        nameError.textContent= "Please enter valid name. No numbers or special characters"
       }
})





