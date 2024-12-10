//This file is for the search bar found in the navbar.
var search_form = document.querySelector("#search_form");
//We do this to reduce copy-pasting across pages
search_form.innerHTML = 
`                <div class="search">
                    <div class="search_input">
                        <label id="search_text_label" for="search_text"><strong>Sound: </strong></label>
                        <textarea id="search_text" name="search_text" rows="1" cols="5" required></textarea>
                        <div id="search_message"></div>
                    </div>
                    <div class="search_choice">
                        <label id="search_choice_label"><strong>Sound search method: </strong></label>
                        <label for="search_tipo"><a href="https://docs.google.com/document/d/1iQWEtJ35SSIBtPZA9xKoJoD6rnc6tHB_05NQ4WwEPW0/edit?usp=sharing">TIPO</a></label>
                        <input type="radio" id="search_tipo" name="phonetic_script" value="tipo" checked>
                        <label for="search_fa"><a href="https://docs.google.com/document/d/1-CyNvwR1_rhjHadXS3ph9-NSp25RyVNgANfu9MxTMCg/edit?usp=sharing">Featural ASCII</a></label>
                        <input type="radio" id="search_fa" name="phonetic_script" value="fa">
                    </div>
                    <div class="search_submit">
                        <input id="search_button" class="submit" type="submit" value="Search!">
                    </div>
                </div>`;
//We need this for the TIPO searching option
var tipo_to_fa = {
    "p" : "pP",
    "b" : "bP",
    "m" : "bN",
    "bB": "bR",
    "bH": "bH",
    "pH": "pH",
    "m-": "vN",
    "v`": "vT",
    "f" : "fH",
    "v" : "vH",
    "vW": "vW",
    "tH": "tH",
    "dH": "dH",
    "t" : "sP",
    "d" : "zP",
    "n" : "zN",
    "r" : "zR",
    "r`": "zT",
    "s" : "sS",
    "z" : "zS",
    "sJ": "cS",
    "zJ": "jS",
    "sL": "sZ",
    "zL": "zZ",
    'r"': "zW",
    "l" : "zL",
    "t-": "lP",
    "d-": "rP",
    "n-": "rN",
    "rT": "rT",
    "sH": "$S",
    "zH": "nS",
    "s-": "lS",
    "z-": "rS",
    "r-": "rW",
    "l-": "rL",
    "c" : "cP",
    "gJ": "jP",
    "nJ": "jN",
    "cH": "cH",
    "jH": "jH",
    "j" : "jW",
    "jL": "jL",
    "k" : "kP",
    "g" : "gP",
    "nG": "gN",
    "x" : "kH",
    "gH": "gH",
    "w(": "gW",
    "gL": "gL",
    "q" : "qP",
    "g-": "GP",
    "nQ": "GN",
    "qR": "GR",
    "x-": "qH",
    "rH": "GH",
    "h+": "?H",
    "?H": "(H",
    "?" : "0K",
    "?+" : "?P",
    "h" : "hH",
    "hH": "?R",
    'h"': '"H',
    "?;": "(R",
    "xW": "xH",
    "w" : "wW",
    "jW": "yW",
    "*S": "lZ",
    
    "xH": "xS",
    "b!": "pQ",
    "d!": "tQ",
    "t!": "sQ",
    "r!": "lQ",
    "c!": "cQ",
    "b<": "bB",
    "d<": "zB",
    "c<": "jB",
    "g<": "gB",
    "q<": "GB",
    "l`": "z6",
    "l!": "z!",
        
    "a" : "a<",
    "e" : "e<",
    "i" : "i<",
    "o" : "o>",
    "u" : "u>",
    "y" : "u<",
    "A" : "a>",
    "E" : "E<",
    "I" : "I[",
    "O" : "O>",
    "U" : "U]",
    "Y" : "U[",
    
    "a)" : "A<",
    "e)" : "o<",
    "o(" : "e>",
    "u(" : "i>",
    "A)" : "A>",
    "E)" : "O<",
    "O(" : "E>",
    
    "a\"" : "@|",
    "e\"" : ":|",
    "i\"" : "i|",
    "o\"" : "o|",
    "i\"" : "i|",
    "u\"" : "u|",
    "E\"" : "E|",
    "e-" : "e|",
    "O\"" : "O|",
    "@" : "@[",
}

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
//This is a quick way of checking if a Featural ASCII sound is valid.
var fa_sound_set = new Set(['"H', '$S', '(H', '(R', '0K', ':|', '?H', '?P', '?R', '@[', '@|', 'A<', 'A>', 'E<', 'E>', 'E|', 'GB', 'GH', 'GN', 'GP', 'GR', 'I[', 'O<', 'O>', 'O|', 'U[', 'U]', 'a<', 'a>', 'bB', 'bH', 'bN', 'bP', 'bR', 'cH', 'cP', 'cQ', 'cS', 'dH', 'e<', 'e>', 'e|', 'fH', 'gB', 'gH', 'gL', 'gN', 'gP', 'gW', 'hH', 'i<', 'i>', 'i|', 'jB', 'jH', 'jL', 'jN', 'jP', 'jS', 'jW', 'kH', 'kP', 'lP', 'lQ', 'lS', 'lZ', 'nS', 'o<', 'o>', 'o|', 'pH', 'pP', 'pQ', 'qH', 'qP', 'rL', 'rN', 'rP', 'rS', 'rT', 'rW', 'sP', 'sQ', 'sS', 'sZ', 'tH', 'tQ', 'u<', 'u>', 'u|', 'vH', 'vN', 'vT', 'vW', 'wW', 'xH', 'xS', 'yW', 'z!', 'z6', 'zB', 'zL', 'zN', 'zP', 'zR', 'zS', 'zT', 'zW', 'zZ'])

//Given an FA digraph, return the corresponding hex code used in the sound
//page URl.
//
//str: a valid FA digraph, which has a length of 2.
//
//Returns a string of length 4 representing a 2 byte hex code.
function string_to_hex (str) {
    let hex = ""
    //https://stackoverflow.com/questions/20580045/javascript-character-ascii-to-hex
    hex += str.charCodeAt(0).toString(16);
    hex += str.charCodeAt(1).toString(16);

    return hex;
}

//False if the search textarea was never clicked, true otherwise.
var textarea_clicked = false;
//The text input for the search bar.
var search_text = document.querySelector("#search_text");
//The feedback for the search input that appears below the search bar.
var search_message = document.querySelector("#search_message");
//The "Search!" button which submits the form.
var search_button = document.querySelector("#search_button");
//This can either be "tipo" or "fa", for TIPO and Featural ASCII.
var search_mode = "tipo";
//The radio button corresponding to TIPO
var tipo_button = document.querySelector("#search_tipo");
//The radio button corresponding to Featural ASCII
var fa_button = document.querySelector("#search_fa");
var search_form = document.querySelector("#search_form");

//Default to some text in the textarea to convey its purpose.
search_text.value = "Sound"
//https://stackoverflow.com/questions/17925577/change-text-color-with-javascript
search_text.style.color = "grey";

//Set up the radio buttons to actually switch how the input is interpreted.
function set_tipo_mode () {search_mode = "tipo"};
function set_fa_mode () {search_mode = "fa"};

tipo_button.addEventListener("click", set_tipo_mode);
fa_button.addEventListener("click", set_fa_mode);

//The event that happens when the user clicks the search textarea.
//Shows a hint on how its used, removes the placeholder text and corrects
//the color.
function input_on_focus () {
    if (!textarea_clicked) {
        search_text.value = ""
        textarea_clicked = true;
    }
    search_text.style.color = "black";
    let hint = "Type either a TIPO or Featural ASCII grapheme. ";
    hint += "It must correlate to one sound that is linked in the site's IPA chart. ";
    hint += "This means that it will be either 1 or 2 characters long.";
    search_message.textContent = hint;
    search_message.style.display = "inline";
}

search_text.addEventListener("focus", input_on_focus);

//Is the grapheme actually a grapheme that exists in the IPA chart?
var valid_sound = false;
//Is the grapheme either a monograph or digraph, as required by FA and TIPO?
var valid_length = false;

//Depending on the input, either display an error hint or enable submission
//while removing any hint. Also, adjusts the search textarea's style depending
//on if the input is valid.
function validate_input() {
    valid_length = search_text.value.length == 1 || search_text.value.length == 2;
    if (valid_length) {
        if (search_mode == "fa" && fa_sound_set.has(search_text.value)) {
            valid_sound = true;
        } else if (
            search_mode == "tipo" &&
            fa_sound_set.has(tipo_to_fa[search_text.value])
        ) {
            valid_sound = true;
        }
    }

    if (valid_length && valid_sound) {
        search_message.style.display = "none";
        search_text.style.borderColor = "black";
    } else {
        if (!valid_length) {
            search_message.textContent = "The input has the wrong length.";
        } else {
            search_message.textContent = "The input does not correlate to an IPA sound.";
        }
        search_text.style.borderColor = "red";
        search_message.style.display = "inline";
    }
}

//Check the input after the user is done putting it in.
search_text.addEventListener("blur", validate_input);

search_form.addEventListener('submit', function(event){
    //We need this here for if the user tries to search with an empty input.
    validate_input();
    //We want to manually redirect to a link that we make.
    event.preventDefault();
    if (valid_length && valid_sound) {
        search_message.style.display = "inline";
        search_message.textContent = "Search successful! Redirecting...";
        //Generate the proper sound page link.
        let href = "sound_page.html?code="
        if (search_mode == "fa") {
            href += string_to_hex(search_text.value)
        } else if (search_mode == "tipo") {
            href += string_to_hex(tipo_to_fa[search_text.value]);
        }
        //https://www.w3schools.com/howto/howto_js_redirect_webpage.asp
        //We now redirect to the sound page.
        window.location.href = href;
    }
})