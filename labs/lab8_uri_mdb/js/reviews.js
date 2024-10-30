/* TO DO:

	- Create an array to hold three different usernames. 

	- Create an array with the dates of each review (i.e., 2024-10-30).

	- Create an array to hold the actual reviews. 

	- Create an array to hold three different ratings. 

*/

let names = ["Bob", "Billy", "Beth"];

let dates = ["2021-11-11", "2022-12-22", "2023-03-33"];

let reviews = [
	"I think we weren't watching the same movie...",
	`
	I'm glad that some else finally recognizes the merit that The Room
	rightfully earned. It truly is peak cinema.
	`,
	`
	I'm gonna assume that you were joking with your review. It's definitely
	a "so bad it's good" movie, but it's fun to pretend, I suppose.
	`
]

let ratings =[
	1,
	5,
	3
]

/* TO DO:

	- Select ALL review card elements and store in a variable.

	- Loop through each card to update its content with review information:
	  - Select the current review rating element.
	  - Create a variable that will hold the filled and empty stars. 
	  - Loop to generate star symbols based on the rating:
	    - If current counter is less than the rating, then add "★".
	    - Otherwise, add "☆".
	  - Set the review rating element's text to display the generated stars.
	  - Set the review rating element's attribute to current rating from the array. 

	  - Select the current review username element.
	  - Set its text to the username from the array and add a space to separate it from the date.

	  - Select the current review date element.
	  - Set its markup to the date from the array.

	  - Select the current review text element.
	  - Set its text to the review text from the array.
 
*/

let review_cards = document.querySelectorAll("div.review-card");

for (let i = 0; i < review_cards.length; i++) {
	let rating_node = review_cards[i].querySelector("div.review-rating");
	let stars = ""
	for (let j = 0; j < 5; j++) {
		if (j < ratings[i]) {
			stars += "★";
		} else {
			stars += "☆";
		}
	}
	rating_node.textContent = stars;
	rating_node.setAttribute("data-rating", ratings[i]);

	let name_node =  review_cards[i].querySelector("p.review-username");
	name_node.textContent = names[i] + " ";
	name_node.firstChild.innerText = dates[i];
	review_cards[i].querySelector("p.review-text").textContent = reviews[i];

}


// Get the dropdown element for filtering ratings by its ID
var filterDropdown = document.getElementById('rating-filter');

// Add an event listener to the dropdown that triggers when the selected option changes
filterDropdown.addEventListener('change', function() {
   	
   	// Store the currently selected rating from the dropdown
    var selected_rating = filterDropdown.value;


    /* TO DO:

		- Loop through each card:
		  - Select the current review rating element.
		  - Get its rating attribute value.

		  - Check if the selected rating is 'All' or matches the card's rating.
		  	- If it matches, display the card.
		  	- Otherwise, hide the card

	*/

});