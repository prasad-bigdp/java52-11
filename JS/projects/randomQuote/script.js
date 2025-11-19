function getData ()
{
    fetch(`https://dummyjson.com/quotes/random`) 
        .then((res) => res.json())
        .then((data) =>
        {
            document.getElementById('quote').textContent = data.quote;
            document.getElementById('author').textContent = data.author;
        })
        .catch((err)=>console.log(err)) 
}
getData()
setInterval(getData,10000)