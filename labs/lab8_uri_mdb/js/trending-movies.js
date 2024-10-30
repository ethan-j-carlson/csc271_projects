var fav_titles = ["The Room", "Pirates of the Caribbean", "The Martian"];
var fav_posters = [
	"https://www.imdb.com/title/tt0368226/mediaviewer/rm3801498880",
	"http://www.impawards.com/2003/pirates_of_the_caribbean_ver3.html",
	"https://en.wikipedia.org/w/index.php?curid=46923151",

]
var fav_images = [
	"https://upload.wikimedia.org/wikipedia/en/e/e1/TheRoomMovie.jpg",
	"https://upload.wikimedia.org/wikipedia/en/8/89/Pirates_of_the_Caribbean_-_The_Curse_of_the_Black_Pearl.png",
	"https://upload.wikimedia.org/wikipedia/en/c/cd/The_Martian_film_poster.jpg",
]
var fav_links = [
	"https://en.wikipedia.org/wiki/The_Room",
	"https://en.wikipedia.org/wiki/Pirates_of_the_Caribbean:_The_Curse_of_the_Black_Pearl",
	"https://en.wikipedia.org/wiki/The_Martian_(film)"
]

var fav_ratings = [1, 3, 4];

var movie_cards = document.querySelectorAll("div.movie-card");

for (let i = 0; i < movie_cards.length; i++) {
	let image = movie_cards[i].querySelector("img.movie-image");
	image.src = fav_images[i];
	image.alt = fav_images[i];

	let link_node = movie_cards[i].querySelector("a.movie-link");

	link_node.href = fav_links[i];
	link_node.textContent = fav_titles[i] ;

	let rating_node = movie_cards[i].querySelector("div.rating");
	let rating_html = "";
	for (let j = 0; j < 5; j++) {
		if (j < fav_ratings[i]) {
			rating_html += "★";
		} else {
			rating_html += "☆";
		}
	}
	rating_node.innerHTML = rating_html;
}