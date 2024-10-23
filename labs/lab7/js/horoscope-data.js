var sign = "Sagittarius";
var birth_month = "December";
var birthday = 4;
var lucky_number = 2.0;
var horoscope = "Sagittarius are known to be adventurous.";
var believe = false;

document.getElementById("sign").innerHTML = "Sign: " + sign
document.getElementsByClassName("birthday")[0].innerHTML = "Birthday: " + birth_month + " " + birthday + "th"
document.getElementsByClassName("luckyNum")[0].innerHTML = "Lucky number: " + lucky_number.toString()
var paragraphs = document.getElementsByTagName("p")
paragraphs[0].innerHTML = "My horoscope: " + horoscope
paragraphs[1].innerHTML = "Do you believe in astrology? <strong>" + believe + "</strong>"

var sagittarius_mood_rating = 3.2
var leo_mood_rating = 3
var aries_mood_rating = 3.7

var avg = ((sagittarius_mood_rating + leo_mood_rating + aries_mood_rating) / 3).toFixed(1)
var mood_out = "Today's mood rating for Sagittarius: "
mood_out += sagittarius_mood_rating
mood_out += " out of 5. The average mood rating of Aries, Leo, and Sagittarius is: "
mood_out += avg + "."

paragraphs[2].innerHTML = mood_out

var signs = [ "Capricorn", "Aquarius", "Pisces", "Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Sagittarius"];

var my_sign =  signs[11]
var junrong_sign = signs[7]
var riley_sign = signs[3]

var horoscopes = [
    "Today is a day for new beginnings. Embrace change and seize opportunities.",
    "Your determination will lead to success today. Stay focused on your goals.",
    "Communication is key today. Express yourself clearly and listen to others.",
    "Trust your intuition. It will guide you in making the right decisions.",
    "Your creativity shines today. Use it to inspire and lead others.",
    "Pay attention to the details. Your meticulous work will pay off.",
    "Balance is essential. Find harmony in all aspects of your life.",
    "Embrace transformation. Let go of what no longer serves you.",
    "Adventure awaits. Explore new horizons and expand your horizons.",
    "Hard work leads to success. Keep pushing toward your goals.",
    "Your unique perspective is an asset. Share your ideas with others.",
    "Trust your emotions. They will guide you in making the right choices."
]

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
horoscopes[Math.floor(Math.random()*12)] = "Today will be challenging, but you will get through. Determination will be critical."

var my_horoscope = horoscopes[Math.floor(Math.random()*12)]
var jonrung_horoscope = horoscopes[Math.floor(Math.random()*12)]
var riley_horoscope = horoscopes[Math.floor(Math.random()*12)]

paragraphs[3].innerHTML = "My zodiac sign is: " + my_sign + "<br>" + my_horoscope
paragraphs[4].innerHTML = "Junrong's sign is: " + junrong_sign + "<br>" + jonrung_horoscope
paragraphs[5].innerHTML = "Riley's sign is: " + riley_sign + "<br>" + riley_horoscope


