var movie_data = [
    "The Room",
    "https://upload.wikimedia.org/wikipedia/en/e/e1/TheRoomMovie.jpg",
    5,
    `
    The Room is a profound tragedy following our main character, Johnny. As
    the plot progresses, Johnny's relationship with his fiance and best friend
    deteriorates as they both betray him. The Room is widely regarded to be the
    best movie ever made by film critics and casual audiences alike.
    `
];

let movie_div = document.querySelector("div.movie-info");

let movie_image = movie_div.querySelector("img.movie-image");

movie_image.src = movie_data[1];
movie_image.alt = movie_data[0];

let movie_title = movie_div.querySelector("h2.movie-name");
movie_title.textContent = movie_data[0];


let movie_description = movie_div.querySelector("p.description");
movie_description.textContent = movie_data[3];

let rating_stars = ""
for (let j = 0; j < 5; j++) {
    if (j < movie_data[2]) {
        rating_stars += "★";
    } else {
        rating_stars += "☆";
    }
}

let movie_rating = movie_div.querySelector("div.rating")
movie_rating.innerHTML = rating_stars
movie_rating.setAttribute("data-rating", movie_data[2]);

document.querySelector("h1").textContent = movie_data[0];
document.querySelector("title").textContent = movie_data[0];