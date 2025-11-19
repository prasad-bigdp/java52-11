const cartoons = [
	{
		title: "Shinchan",
		image_url:
			"https://m.media-amazon.com/images/I/41AP1VGhL7L._AC_UF894,1000_QL80_.jpg",
	},
	{
		title: "Doremon",
		image_url:
			"https://upload.wikimedia.org/wikipedia/en/b/bd/Doraemon_character.png",
	},
	{
		title: "Mickey Mouse",
		image_url:
			"https://upload.wikimedia.org/wikipedia/en/d/d4/Mickey_Mouse.png",
	},
	{
		title: "Bugs Bunny",
		image_url: "https://upload.wikimedia.org/wikipedia/en/6/60/Bugs_Bunny.svg",
	},
	{
		title: "Tom & Jerry",
		image_url:
			"https://upload.wikimedia.org/wikipedia/en/0/0a/Tom_and_Jerry_logo.svg",
	},
	{
		title: "Scooby-Doo",
		image_url: "https://upload.wikimedia.org/wikipedia/en/9/9c/Scooby-Doo.png",
	},
	{
		title: "The Powerpuff Girls",
		image_url:
			"https://upload.wikimedia.org/wikipedia/en/1/12/Powerpuff_Girls_logo.png",
	},
	{
		title: "Garfield",
		image_url:
			"https://upload.wikimedia.org/wikipedia/en/2/2d/Garfield_the_Cat.png",
	},
	{
		title: "Popeye",
		image_url:
			"https://upload.wikimedia.org/wikipedia/en/6/6a/Popeye_the_Sailor.png",
	},
	{
		title: "Chhota Bheem",
		image_url:
			"https://upload.wikimedia.org/wikipedia/en/0/0f/Chhota_Bheem.png",
	},
	{
		title: "Peppa Pig",
		image_url: "https://upload.wikimedia.org/wikipedia/en/a/a7/Peppa_Pig.svg",
	},
	{
		title: "SpongeBob SquarePants",
		image_url:
			"https://upload.wikimedia.org/wikipedia/en/3/33/SpongeBob_SquarePants_character.svg",
	},
	{
		title: "Paw Patrol",
		image_url:
			"https://upload.wikimedia.org/wikipedia/en/4/4c/Paw_Patrol_logo.svg",
	},
	{
		title: "Avatar: The Last Airbender",
		image_url:
			"https://upload.wikimedia.org/wikipedia/en/b/b1/Avatar_The_Last_Airbender_logo.svg",
	},
	{
		title: "Naruto Uzumaki",
		image_url:
			"https://upload.wikimedia.org/wikipedia/en/9/94/Naruto_Uzumaki.png",
	},
	{
		title: "Dora the Explorer",
		image_url:
			"https://upload.wikimedia.org/wikipedia/en/c/cd/Dora_the_Explorer.png",
	},
	{
		title: "The Amazing World of Gumball",
		image_url:
			"https://upload.wikimedia.org/wikipedia/en/2/2f/The_Amazing_World_of_Gumball_logo.png",
	},
	{
		title: "Adventure Time",
		image_url:
			"https://upload.wikimedia.org/wikipedia/en/8/80/Adventure_Time_logo.svg",
	},
	{
		title: "Teenage Mutant Ninja Turtles",
		image_url:
			"https://upload.wikimedia.org/wikipedia/en/8/8d/Teenage_Mutant_Ninja_Turtles_logo.png",
	},
	{
		title: "Dragon Ball Z",
		image_url:
			"https://upload.wikimedia.org/wikipedia/en/2/2f/Dragon_Ball_Z_logo.svg",
	},
]

const cartoonsDiv = document.getElementById("cartoons")
function displayData() {
	cartoons.forEach((ele, ind) => {
		const divv = document.createElement("div")
		divv.classList.add("cartoon")
		const image = document.createElement("img")
		image.src = ele.image_url
        const title = document.createElement("h3")
        title.classList.add("text-center")
		title.textContent = ele.title
		divv.append(image, title)
		cartoonsDiv.appendChild(divv)
	})
}
displayData()
