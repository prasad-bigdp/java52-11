const taEle = document.getElementById('ta');
const API_KEY = "AIzaSyD6mTIMzV4dJAwK7Oy3P46X2D - mu67TtGs";
const gotoGemini= ()=>
{
    fetch(
			`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent`,
			{
				headers: {
					"Access-Control-Allow-Origin": "*",
					"x-goog-api-key": API_KEY,
					"Content-Type": "application/json",
				},
				method: "POST",
				body: JSON.stringify({
					contents: [
						{
							parts: [
								{
									text: taEle.value,
								},
							],
						},
					],
				}),
			},
		)
			.then((res) => res.json())
			.then((data) => console.log(data))
			.catch((err) => console.log(err))
}
document.getElementById('btn').addEventListener('click',gotoGemini)