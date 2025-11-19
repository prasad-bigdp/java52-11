let x = 15;
const p = new Promise((resolve, reject) =>
{
    if (x > 10)
    {
        resolve(x)
    }
    else
    {
        reject("bad")
    }
})

p
    .then((res) =>  res * 2)
    .then((res2)=>console.log(res2))
    .catch((err) => console.log(err))
 