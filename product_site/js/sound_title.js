//https://docs.google.com/document/d/1t2nbwt5Skm46R-5bR7zJ92Bn43Xmbyv1Gd_FZLGooX4/edit?usp=sharing
//0 = place, 1 = height, manner = 2, 3 = depth, 4 = other, 5 = suprasegmental,
//6 = lower diacritic, 7 = non-joining diacritic, 8 = higher diacritic
var letter_info = {
    "a": {"class": 1, "descriptors": ["Open", "Unrounded Vowel"]},
    "b": {"class": 0, "descriptors": ["Voiced", "Bilabial"]},
    "c": {"class": 0, "descriptors": ["Voiceless", "Palatal"]},
    "d": {"class": 0, "descriptors": ["Voiced", "Dental"]},
    "e": {"class": 1, "descriptors": ["Close-mid", "Unrounded Vowel"]},
    "f": {"class": 0, "descriptors": ["Voiceless", "Labiodental"]},
    "g": {"class": 0, "descriptors": ["Voiced", "Velar"]},
    "h": {"class": 0, "descriptors": ["Voiceless", "Glottal"]},
    "i": {"class": 1, "descriptors": ["Close", "Unrounded Vowel"]},
    "j": {"class": 0, "descriptors": ["Voiced", "Palatal"]},
    "k": {"class": 0, "descriptors": ["Voiceless", "Velar"]},
    "l": {"class": 0, "descriptors": ["Voiceless", "Retroflex"]},
    "m": {"class": 0, "descriptors": ["Voiced", "Linguolabial"]},
    "n": {"class": 0, "descriptors": ["Voiced", "Postalveolar"]},
    "o": {"class": 1, "descriptors": ["Close-mid", "Rounded Vowel"]},
    "p": {"class": 0, "descriptors": ["Voiceless", "Bilabial"]},
    "q": {"class": 0, "descriptors": ["Voiceless", "Uvular"]},
    "r": {"class": 0, "descriptors": ["Voiced", "Retroflex"]},
    "s": {"class": 0, "descriptors": ["Voiceless", "Alveolar"]},
    "t": {"class": 0, "descriptors": ["Voiceless", "Dental"]},
    "u": {"class": 1, "descriptors": ["Close", "Rounded Vowel"]},
    "v": {"class": 0, "descriptors": ["Voiced", "Labiodental"]},
    "w": {"class": 0, "descriptors": ["Voiced", "Labial-velar"]},
    "x": {"class": 0, "descriptors": ["Voiceless", "Labial-velar"]},
    "y": {"class": 0, "descriptors": ["Voiced", "Labial-palatal"]},
    "z": {"class": 0, "descriptors": ["Voiced", "Alveolar"]},
    "A": {"class": 1, "descriptors": ["Open", "Rounded Vowel"]},
    "B": {"class": 2, "descriptors": ["Implosive"]},
    "C": {"class": 4, "descriptors": ["Non-syllabic"]},
    "D": {"class": 2, "descriptors": ["Lateral Affricate"]},
    "E": {"class": 1, "descriptors": ["Open-mid", "Unrounded Vowel"]},
    "F": {"class": 4, "descriptors": ["Devoiced"]},
    "G": {"class": 0, "descriptors": ["Voiced", "Uvular"]},
    "H": {"class": 2, "descriptors": ["Fricative"]},
    "I": {"class": 1, "descriptors": ["Near-close", "Unrounded Vowel"]},
    "J": {"class": 2,  "descriptors": ["Affricate"]},
    "K": {"class": 2, "descriptors": ["Ejective Stop"]},
    "L": {"class": 2, "descriptors": ["Lateral Approximant"]},
    "M": {"class": 0, "descriptors": ["Voiceless", "Linguolabial"]},
    "N": {"class": 2, "descriptors": ["Nasal"]},
    "O": {"class": 1, "descriptors": ["Open-mid", "Rounded Vowel"]},
    "P": {"class": 2, "descriptors": ["Stop"]},
    "Q": {"class": 2, "descriptors": ["Click"]},
    "R": {"class": 2, "descriptors": ["Trill"]},
    "S": {"class": 2, "descriptors": ["Sibilant"]},
    "T": {"class": 2, "descriptors": ["Tap/Flap"]},
    "U": {"class": 1, "descriptors": ["Near-close", "Rounded Vowel"]},
    "V": {"class": 4, "descriptors": ["Voiced"]},
    "W": {"class": 2, "descriptors": ["Approximant"]},
    "X": {"class": 2, "descriptors": ["Ejective Fricative"]},
    "Y": {"class": 0, "descriptors": ["Voiceless", "Labial-palatal"]},
    "Z": {"class": 2, "descriptors": ["Lateral Fricative"]},
    "<": {"class": 3, "descriptors": ["Front"]},
    "[": {"class": 3, "descriptors": ["Near-front"]},
    "|": {"class": 3, "descriptors": ["Central"]},
    "]": {"class": 3, "descriptors": ["Near-back"]},
    ">": {"class": 3, "descriptors": ["Back"]},
    '"': {"class": 0, "descriptors": ["Voiced", "Glottal"]},
    "?": {"class": 0, "descriptors": ["Voiceless", "Pharyngeal/Epiglottal"]},
    "(": {"class": 0, "descriptors": ["Voiced", "Pharyngeal/Epiglottal"]},
    "$": {"class": 0, "descriptors": ["Voiceless", "Postalveolar"]},
    "6": {"class": 2, "descriptors": ["Lateral Tap"]},
    "7": {"class": 2, "descriptors": ["Inaudibly-released Stop"]},
    "8": {"class": 2, "descriptors": ["Ejective Lateral Fricative"]},
    "!": {"class": 2, "descriptors": ["Lateral Click"]},
    "@": {"class": 1, "descriptors": ["Near-open", "Unrounded Vowel"]},
    "&": {"class": 1, "descriptors": ["Near-open", "Rounded Vowel"]},
    ":": {"class": 1, "descriptors": ["Mid", "Unrounded Vowel"]},
    ";": {"class": 1, "descriptors": ["Mid", "Rounded Vowel"]},
    ".": {"class": 5, "descriptors": ["Suprasegmental"]},
    "/": {"class": 6, "descriptors": ["Lower Diacritic"]},
    "'": {"class": 6, "descriptors": ["Non-combining Diacritic"]},
    "`": {"class": 6, "descriptors": ["Upper Diacritic"]},
    "~": {"class": 4, "descriptors": ["Nasal"]},
};

////Turn a 4 digit hex string into 2 ASCII characters in an array.
function hex_string_to_chars(hex) {
    //Add "0x" to the string so it can be an proper literal and get converted.
    let number = Number("0x" + hex);
    //Get the rightmost 8 digits.
    let second = number & 0xff;
    //Get the leftmost 8 digits.
    let first = (number >> 8) & 0xff;
    let output = [];
    //https://www.tutorialspoint.com/convert-number-to-characters-in-javascript
    //https://www.freecodecamp.org/news/javascript-add-to-an-array-js-append/
    output.push(String.fromCharCode(first));
    output.push(String.fromCharCode(second));

    return output;
}

//Given the first and second letter of an FA grapheme, generate a tile
//for the website and update the header and meta title appropriately.
function generate_title(first, second) {
    let first_info = letter_info[first];
    let second_info = letter_info[second];
    let terms = ["", "", "", ""];
    //These symbols are irregular in the IPA.
    //The glottal stop is actually an ejective with no place of articulation
    //ɧ is an ambiguous sound, so I had to choose an arbitrary representation.
    //All other cases can be handled programmatically.
    if (first == "0" && second == "K") {
        terms = ["Glottal Stop"]
    } else if (first == "x" && second == "S") {
        terms = ["Sj-sound"]
    } else {
        //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of
        for (const info of [first_info, second_info]){
            switch (info.class) {
                case 0:
                    terms[0] = info.descriptors[0];
                    terms[1] = info.descriptors[1];
                    break;
                case 1:
                    terms[0] = info.descriptors[0];
                    terms[3] = info.descriptors[1];
                    break;
                case 2:
                    terms[3] = info.descriptors[0];
                    break;
                case 3:
                    terms[1] = info.descriptors[0];
                    break;
                default:
                    console.log("Received character with unhandled class.\n");
                    break;
            }
        };
    }

    //Combine the descriptors to get a title.
    let label = ""
    for (const term of terms) {
        if (term != "") {
            label += term + " ";
        }
    };
    //Populate the header with the label
    document.getElementsByTagName("h1")[0].textContent = label;
    //Populate the webpage's title with the label and the site name.
    document.getElementsByTagName("title")[0].textContent = label + " - Quick Phonetics";
}

//Basically the main. Populate the page's header and title.
function set_titles(){
    //https://www.sitepoint.com/get-url-parameters-with-javascript/
    //This gives us the parameters stored in our URL.
    let params = new URLSearchParams(window.location.search);
    let code = params.get('code'); //4 digit hex representation of FA grapheme.
    let letters = hex_string_to_chars(code);
    generate_title(letters[0], letters[1]);
}

set_titles();