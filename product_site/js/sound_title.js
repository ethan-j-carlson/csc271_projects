//Turn a 4 digit hex string into 2 ASCII characters in an array.
//hex = A 4 character string representing a 4 digit hex number (e.g. "a9e2")
//Returns a 2 element array where each element is a one character string.
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

//This class generates information for a sound page's title based on the
//two letters of the sound's Featural ASCII (FA) representation.
//After it is constructed, its populate_titles method can be called to populate
//the h1 and title of the sound page.
function TitleInfo(first, second) {
    //The descriptive terms based on the sound's features, used in its title.
    this.terms = ["", "", "", ""];
    //The first letter of this sound's FA representation.
    this.first = first;
    //The second letter of this sound's FA representation.
    this.second = second;

    //Populate the TitleInfo's terms array based on this.first & this.second.
    this.generate_terms = function() {
        //These sounds are irregular in the IPA.
        //The glottal stop is an ejective with no place of articulation.
        //ɧ is an ambiguous sound. I had to choose an arbitrary representation.
        //All other cases can be handled programmatically.
        if (first == "0" && second == "K") {
            this.terms = ["Glottal", "Stop"];
            return;
        } else if (first == "x" && second == "S") {
            this.terms = ["Sj-sound"]
            return;
        }

        //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of
        //https://docs.google.com/document/d/1t2nbwt5Skm46R-5bR7zJ92Bn43Xmbyv1Gd_FZLGooX4/edit?usp=sharing
        //Every FA letter has some associated information on a sound's features
        //that depends on what class of letter it is.
        //0=place, 1=height, 2=manner, 3=depth, 4=other, 5=suprasegmental,
        //6=lower diacritic, 7=non-joining diacritic, 8=higher diacritic.
        const letter_info = {
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
            "I": {"class": 1, 
                "descriptors": ["Near-close", "Unrounded Vowel"]},
            "J": {"class": 2, "descriptors": ["Affricate"]},
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
            "?": {"class": 0,
                "descriptors":["Voiceless", "Pharyngeal/Epiglottal"]},
            "(": {"class": 0,
                "descriptors": ["Voiced", "Pharyngeal/Epiglottal"]},
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

        let first_info = letter_info[first];
        let second_info = letter_info[second];

        //If we don't have info about a given letter, that means that
        //it either isn't supported, or isn't implemented.
        if (!first_info || !second_info) {
            terms = ["Unknown"];
            console.log("Unknown character was selected for the sound page.");
        }

        for (const info of [first_info, second_info]){
            switch (info.class) {
                case 0: //Place of articulation.
                    this.terms[0] = info.descriptors[0];
                    this.terms[1] = info.descriptors[1];
                    break;
                case 1: //Vowel height/rounding.
                    this.terms[0] = info.descriptors[0];
                    this.terms[3] = info.descriptors[1];
                    break;
                case 2: //Manner of articulation.
                    this.terms[3] = info.descriptors[0];
                    break;
                case 3: //Vowel depth.
                    this.terms[1] = info.descriptors[0];
                    break;
                default: //Only sounds are implemented for now.
                    console.log("Received character with unhandled class.\n");
                    break;
            }
        };

        //We remove the terms that are empty.
        //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
        this.terms = this.terms.filter((term) => term.length > 0);
    }
    
    this.generate_terms();

    //Use the terms of this TitleInfo to generate a label for the associated
    //sound.
    this.generate_label = function() {
        let label = "";
        for (const term of this.terms) {
            if (term != "") {
                label += term + " ";
            }
        };

        return label;
    }


    //Populate the first h1 and title of the page with the result of
    //generate_label.
    this.populate_titles = function() {
        let label = this.generate_label();
        //Populate the header with the label
        document.getElementsByTagName("h1")[0].textContent = label;
        //Populate the webpage's title with the label and the site name.
        document.getElementsByTagName("title")[0].textContent = label + " - Quick Phonetics";
    }
}

//We make this to not spill too many global variables.
function sound_title_main() {
    //Generate the TitleInfo for the 2 irregular phonemes.
    let glottal_stop = new TitleInfo("0","K");
    let sj_sound = new TitleInfo("x","S");

    //https://www.sitepoint.com/get-url-parameters-with-javascript/
    //This gives us the parameters stored in our URL.
    let params = new URLSearchParams(window.location.search);
    let code = params.get('code'); //4 digit hex representation of FA grapheme.
    let letters = hex_string_to_chars(code);
    let first = letters[0];
    let second = letters[1];
    let title_info = null;

    //Use the already generated TitleInfo objects for the irregulars and
    //construct a new title_info for the rest.
    if (first == "0" && second == "K") {
        title_info = glottal_stop;
    } else if (first == "x" && second == "S") {
        title_info = sj_sound;
    } else {
        title_info = new TitleInfo(first, second);
    }
    title_info.populate_titles();

    //For the sake of Assignment 10, populate the search bar with the first and
    //second properties, matching the search input with the current page.
    let search_bar_element = document.querySelector("#search_text");

    //The search bar is not natively a part of the HTML, and instead is generated
    //by sound_search.js. Thus, we only populate it if it exists.
    if (search_bar_element) {
        search_bar_element.value = title_info.first + title_info.second;
    }
}

sound_title_main();

