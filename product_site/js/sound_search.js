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
var fa_sound_set = new Set(['"H', '$S', '(H', '(R', '0K', ':|', '?H', '?P', '?R', '@[', '@|', 'A<', 'A>', 'E<', 'E>', 'E|', 'GB', 'GH', 'GN', 'GP', 'GR', 'I[', 'O<', 'O>', 'O|', 'U[', 'U]', 'a<', 'a>', 'bB', 'bH', 'bN', 'bP', 'bR', 'cH', 'cP', 'cQ', 'cS', 'dH', 'e<', 'e>', 'e|', 'fH', 'gB', 'gH', 'gL', 'gN', 'gP', 'gW', 'hH', 'i<', 'i>', 'i|', 'jB', 'jH', 'jL', 'jN', 'jP', 'jS', 'jW', 'kH', 'kP', 'lP', 'lQ', 'lS', 'lZ', 'nS', 'o<', 'o>', 'o|', 'pH', 'pP', 'pQ', 'qH', 'qP', 'rL', 'rN', 'rP', 'rS', 'rT', 'rW', 'sP', 'sQ', 'sS', 'sZ', 'tH', 'tQ', 'u<', 'u>', 'u|', 'vH', 'vN', 'vT', 'vW', 'wW', 'xH', 'xS', 'yW', 'z!', 'z6', 'zB', 'zL', 'zN', 'zP', 'zR', 'zS', 'zT', 'zW', 'zZ'])

function string_to_hex (str) {
    let hex = ""
    //https://stackoverflow.com/questions/20580045/javascript-character-ascii-to-hex
    hex += str.charCodeAt(0).toString(16);
    hex += str.charCodeAt(1).toString(16);

    return hex;
}

var textarea_clicked = false;
var search_div = document.querySelector("div.search");
var search_text = document.querySelector("#search_text");
var search_message = document.querySelector("#search_message");
var search_button = document.querySelector("#search_button");
var search_mode = "tipo";
var tipo_button = document.querySelector("#search_tipo");
var fa_button = document.querySelector("#search_fa");
var search_form = document.querySelector("#search_form");

const search_button_color = search_button.style.color;
const search_button_bg_color = search_button.style.backgroundColor;

search_text.value = "Sound"
//https://stackoverflow.com/questions/17925577/change-text-color-with-javascript
search_text.style.color = "grey";
search_button.style.backgroundColor = "grey";
search_button.style.color = "grey";

function set_tipo_mode () {search_mode = "tipo"};
function set_fa_mode () {search_mode = "fa"};

tipo_button.addEventListener("click", set_tipo_mode);
fa_button.addEventListener("click", set_fa_mode);

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

var valid_sound = false;
var valid_length = false;

function input_on_blur() {
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
        search_button.style.color = search_button_color;
        search_button.style.backgroundColor = search_button_bg_color;
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
        search_button.style.color = "grey";
        search_button.style.backgroundColor = "grey";
    }
}

search_text.addEventListener("blur", input_on_blur);

search_form.addEventListener('submit', function(event){
    event.preventDefault();
    if (valid_length && valid_sound) {
        let href = "sound_page.html?code="
        if (search_mode == "fa") {
            href += string_to_hex(search_text.value)
        } else if (search_mode == "tipo") {
            href += string_to_hex(tipo_to_fa[search_text.value]);
        }
        //https://www.w3schools.com/howto/howto_js_redirect_webpage.asp
        window.location.href = href;
    }
})