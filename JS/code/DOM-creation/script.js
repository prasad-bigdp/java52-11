const inputEle = document.getElementById('inp')
const outputDiv = document.getElementById('output');
function squareCube ()
{
    let x = +(inputEle.value);
    let sq = x * x;
    let cb = x * x * x;
    for (let i = 0; i < 5; i++)
    {
        const para = document.createElement('p');
    para.textContent = `The square is ${sq}`;
    const para2 = document.createElement('p');
    para2.textContent = `The cube is ${cb}`;
   outputDiv.append(para,para2)
    }
}
