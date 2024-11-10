//This dictionary maps the Featural ASCII representation of every IPA sound
//to a bunch of information about the symbol.
//https://docs.google.com/document/d/1t2nbwt5Skm46R-5bR7zJ92Bn43Xmbyv1Gd_FZLGooX4/edit?usp=sharing
//
//ipa = the IPA symbol of the character.
//hex = the UTF-8 of the character in hexadecimal.
//unicode = the name of the character given by the Unicode Consortium.
//tipo = The representation of the sound in TIPO (the ASCII script).
//fa = The representation of the sound in Featural ASCII
//manner = Manner of articulation. "How" the sound is made
//place = Place of articulation. "Where" the sound is made
//phonation = Voicing/phonation.
const info_dictionary = {
    "pP": {
        "ipa": "p",
        "hex": "0x0070",
        "unicode": "LATIN SMALL LETTER P",
        "tipo": "p",
        "fa": "pP",
        "phonation": "Voiceless",
        "place": "Bilabial",
        "manner": "Stop"
    },
    "bP": {
        "ipa": "b",
        "hex": "0x0062",
        "unicode": "LATIN SMALL LETTER B",
        "tipo": "b",
        "fa": "bP",
        "phonation": "Voiced",
        "place": "Bilabial",
        "manner": "Stop"
    },
    "bN": {
        "ipa": "m",
        "hex": "0x006d",
        "unicode": "LATIN SMALL LETTER M",
        "tipo": "m",
        "fa": "bN",
        "phonation": "Voiced",
        "place": "Bilabial",
        "manner": "Nasal"
    },
    "bR": {
        "ipa": "\u0299",
        "hex": "0x0299",
        "unicode": "LATIN LETTER SMALL CAPITAL B",
        "tipo": "bB",
        "fa": "bR",
        "phonation": "Voiced",
        "place": "Bilabial",
        "manner": "Trill"
    },
    "bH": {
        "ipa": "\u03b2",
        "hex": "0x03b2",
        "unicode": "GREEK SMALL LETTER BETA",
        "tipo": "bH",
        "fa": "bH",
        "phonation": "Voiced",
        "place": "Bilabial",
        "manner": "Fricative"
    },
    "pH": {
        "ipa": "\u0278",
        "hex": "0x0278",
        "unicode": "LATIN SMALL LETTER PHI",
        "tipo": "pH",
        "fa": "pH",
        "phonation": "Voiceless",
        "place": "Bilabial",
        "manner": "Fricative"
    },
    "vN": {
        "ipa": "\u0271",
        "hex": "0x0271",
        "unicode": "LATIN SMALL LETTER M WITH HOOK",
        "tipo": "m-",
        "fa": "vN",
        "phonation": "Voiced",
        "place": "Labiodental",
        "manner": "Nasal"
    },
    "vT": {
        "ipa": "\u2c71",
        "hex": "0x2c71",
        "unicode": "LATIN SMALL LETTER V WITH RIGHT HOOK",
        "tipo": "v`",
        "fa": "vT",
        "phonation": "Voiced",
        "place": "Labiodental",
        "manner": "Tap/Flap"
    },
    "fH": {
        "ipa": "f",
        "hex": "0x0066",
        "unicode": "LATIN SMALL LETTER F",
        "tipo": "f",
        "fa": "fH",
        "phonation": "Voiceless",
        "place": "Labiodental",
        "manner": "Fricative"
    },
    "vH": {
        "ipa": "v",
        "hex": "0x0076",
        "unicode": "LATIN SMALL LETTER V",
        "tipo": "v",
        "fa": "vH",
        "phonation": "Voiced",
        "place": "Labiodental",
        "manner": "Fricative"
    },
    "vW": {
        "ipa": "\u028b",
        "hex": "0x028b",
        "unicode": "LATIN SMALL LETTER V WITH HOOK",
        "tipo": "vW",
        "fa": "vW",
        "phonation": "Voiced",
        "place": "Labiodental",
        "manner": "Approximant"
    },
    "tH": {
        "ipa": "\u03b8",
        "hex": "0x03b8",
        "unicode": "GREEK SMALL LETTER THETA",
        "tipo": "tH",
        "fa": "tH",
        "phonation": "Voiceless",
        "place": "Dental",
        "manner": "Fricative"
    },
    "dH": {
        "ipa": "\u00f0",
        "hex": "0x00f0",
        "unicode": "LATIN SMALL LETTER ETH",
        "tipo": "dH",
        "fa": "dH",
        "phonation": "Voiced",
        "place": "Dental",
        "manner": "Fricative"
    },
    "sP": {
        "ipa": "t",
        "hex": "0x0074",
        "unicode": "LATIN SMALL LETTER T",
        "tipo": "t",
        "fa": "sP",
        "phonation": "Voiceless",
        "place": "Alveolar",
        "manner": "Stop"
    },
    "zP": {
        "ipa": "d",
        "hex": "0x0064",
        "unicode": "LATIN SMALL LETTER D",
        "tipo": "d",
        "fa": "zP",
        "phonation": "Voiced",
        "place": "Alveolar",
        "manner": "Stop"
    },
    "zN": {
        "ipa": "n",
        "hex": "0x006e",
        "unicode": "LATIN SMALL LETTER N",
        "tipo": "n",
        "fa": "zN",
        "phonation": "Voiced",
        "place": "Alveolar",
        "manner": "Nasal"
    },
    "zR": {
        "ipa": "r",
        "hex": "0x0072",
        "unicode": "LATIN SMALL LETTER R",
        "tipo": "r",
        "fa": "zR",
        "phonation": "Voiced",
        "place": "Alveolar",
        "manner": "Trill"
    },
    "zT": {
        "ipa": "\u027e",
        "hex": "0x027e",
        "unicode": "LATIN SMALL LETTER R WITH FISHHOOK",
        "tipo": "r`",
        "fa": "zT",
        "phonation": "Voiced",
        "place": "Alveolar",
        "manner": "Tap/Flap"
    },
    "sS": {
        "ipa": "s",
        "hex": "0x0073",
        "unicode": "LATIN SMALL LETTER S",
        "tipo": "s",
        "fa": "sS",
        "phonation": "Voiceless",
        "place": "Alveolar",
        "manner": "Sibilant"
    },
    "zS": {
        "ipa": "z",
        "hex": "0x007a",
        "unicode": "LATIN SMALL LETTER Z",
        "tipo": "z",
        "fa": "zS",
        "phonation": "Voiced",
        "place": "Alveolar",
        "manner": "Sibilant"
    },
    "cS": {
        "ipa": "\u0255",
        "hex": "0x0255",
        "unicode": "LATIN SMALL LETTER C WITH CURL",
        "tipo": "sJ",
        "fa": "cS",
        "phonation": "Voiceless",
        "place": "Palatal",
        "manner": "Sibilant"
    },
    "jS": {
        "ipa": "\u0291",
        "hex": "0x0291",
        "unicode": "LATIN SMALL LETTER Z WITH CURL",
        "tipo": "zJ",
        "fa": "jS",
        "phonation": "Voiced",
        "place": "Palatal",
        "manner": "Sibilant"
    },
    "sZ": {
        "ipa": "\u026c",
        "hex": "0x026c",
        "unicode": "LATIN SMALL LETTER L WITH BELT",
        "tipo": "sL",
        "fa": "sZ",
        "phonation": "Voiceless",
        "place": "Alveolar",
        "manner": "Lateral Fricative"
    },
    "zZ": {
        "ipa": "\u026e",
        "hex": "0x026e",
        "unicode": "LATIN SMALL LETTER LEZH",
        "tipo": "zL",
        "fa": "zZ",
        "phonation": "Voiced",
        "place": "Alveolar",
        "manner": "Lateral Fricative"
    },
    "zW": {
        "ipa": "\u0279",
        "hex": "0x0279",
        "unicode": "LATIN SMALL LETTER TURNED R",
        "tipo": "r\"",
        "fa": "zW",
        "phonation": "Voiced",
        "place": "Alveolar",
        "manner": "Approximant"
    },
    "zL": {
        "ipa": "l",
        "hex": "0x006c",
        "unicode": "LATIN SMALL LETTER L",
        "tipo": "l",
        "fa": "zL",
        "phonation": "Voiced",
        "place": "Alveolar",
        "manner": "Lateral Approximant"
    },
    "lP": {
        "ipa": "\u0288",
        "hex": "0x0288",
        "unicode": "LATIN SMALL LETTER T WITH RETROFLEX HOOK",
        "tipo": "t-",
        "fa": "lP",
        "phonation": "Voiceless",
        "place": "Retroflex",
        "manner": "Stop"
    },
    "rP": {
        "ipa": "\u0256",
        "hex": "0x0256",
        "unicode": "LATIN SMALL LETTER D WITH TAIL",
        "tipo": "d-",
        "fa": "rP",
        "phonation": "Voiced",
        "place": "Retroflex",
        "manner": "Stop"
    },
    "rN": {
        "ipa": "\u0273",
        "hex": "0x0273",
        "unicode": "LATIN SMALL LETTER N WITH RETROFLEX HOOK",
        "tipo": "n-",
        "fa": "rN",
        "phonation": "Voiced",
        "place": "Retroflex",
        "manner": "Nasal"
    },
    "rT": {
        "ipa": "\u027d",
        "hex": "0x027d",
        "unicode": "LATIN SMALL LETTER R WITH TAIL",
        "tipo": "rT",
        "fa": "rT",
        "phonation": "Voiced",
        "place": "Retroflex",
        "manner": "Tap/Flap"
    },
    "$S": {
        "ipa": "\u0283",
        "hex": "0x0283",
        "unicode": "LATIN SMALL LETTER ESH",
        "tipo": "sH",
        "fa": "$S",
        "phonation": "Voiceless",
        "place": "Postalveolar",
        "manner": "Sibilant"
    },
    "nS": {
        "ipa": "\u0292",
        "hex": "0x0292",
        "unicode": "LATIN SMALL LETTER EZH",
        "tipo": "zH",
        "fa": "nS",
        "phonation": "Voiced",
        "place": "Postalveolar",
        "manner": "Sibilant"
    },
    "lS": {
        "ipa": "\u0282",
        "hex": "0x0282",
        "unicode": "LATIN SMALL LETTER S WITH HOOK",
        "tipo": "s-",
        "fa": "lS",
        "phonation": "Voiceless",
        "place": "Retroflex",
        "manner": "Sibilant"
    },
    "rS": {
        "ipa": "\u0290",
        "hex": "0x0290",
        "unicode": "LATIN SMALL LETTER Z WITH RETROFLEX HOOK",
        "tipo": "z-",
        "fa": "rS",
        "phonation": "Voiced",
        "place": "Retroflex",
        "manner": "Sibilant"
    },
    "rW": {
        "ipa": "\u027b",
        "hex": "0x027b",
        "unicode": "LATIN SMALL LETTER TURNED R WITH HOOK",
        "tipo": "r-",
        "fa": "rW",
        "phonation": "Voiced",
        "place": "Retroflex",
        "manner": "Approximant"
    },
    "rL": {
        "ipa": "\u026d",
        "hex": "0x026d",
        "unicode": "LATIN SMALL LETTER L WITH RETROFLEX HOOK",
        "tipo": "l-",
        "fa": "rL",
        "phonation": "Voiced",
        "place": "Retroflex",
        "manner": "Lateral Approximant"
    },
    "cP": {
        "ipa": "c",
        "hex": "0x0063",
        "unicode": "LATIN SMALL LETTER C",
        "tipo": "c",
        "fa": "cP",
        "phonation": "Voiceless",
        "place": "Palatal",
        "manner": "Stop"
    },
    "jP": {
        "ipa": "\u025f",
        "hex": "0x025f",
        "unicode": "LATIN SMALL LETTER DOTLESS J WITH STROKE",
        "tipo": "gJ",
        "fa": "jP",
        "phonation": "Voiced",
        "place": "Palatal",
        "manner": "Stop"
    },
    "jN": {
        "ipa": "\u0272",
        "hex": "0x0272",
        "unicode": "LATIN SMALL LETTER N WITH LEFT HOOK",
        "tipo": "nJ",
        "fa": "jN",
        "phonation": "Voiced",
        "place": "Palatal",
        "manner": "Nasal"
    },
    "cH": {
        "ipa": "\u00e7",
        "hex": "0x00e7",
        "unicode": "LATIN SMALL LETTER C WITH CEDILLA",
        "tipo": "cH",
        "fa": "cH",
        "phonation": "Voiceless",
        "place": "Palatal",
        "manner": "Fricative"
    },
    "jH": {
        "ipa": "\u029d",
        "hex": "0x029d",
        "unicode": "LATIN SMALL LETTER J WITH CROSSED-TAIL",
        "tipo": "jH",
        "fa": "jH",
        "phonation": "Voiced",
        "place": "Palatal",
        "manner": "Fricative"
    },
    "jW": {
        "ipa": "j",
        "hex": "0x006a",
        "unicode": "LATIN SMALL LETTER J",
        "tipo": "j",
        "fa": "jW",
        "phonation": "Voiced",
        "place": "Palatal",
        "manner": "Approximant"
    },
    "jL": {
        "ipa": "\u028e",
        "hex": "0x028e",
        "unicode": "LATIN SMALL LETTER TURNED Y",
        "tipo": "jL",
        "fa": "jL",
        "phonation": "Voiced",
        "place": "Palatal",
        "manner": "Lateral Approximant"
    },
    "kP": {
        "ipa": "k",
        "hex": "0x006b",
        "unicode": "LATIN SMALL LETTER K",
        "tipo": "k",
        "fa": "kP",
        "phonation": "Voiceless",
        "place": "Velar",
        "manner": "Stop"
    },
    "gP": {
        "ipa": "g",
        "hex": "0x0067",
        "unicode": "LATIN SMALL LETTER G",
        "tipo": "g",
        "fa": "gP",
        "phonation": "Voiced",
        "place": "Velar",
        "manner": "Stop"
    },
    "gN": {
        "ipa": "\u014b",
        "hex": "0x014b",
        "unicode": "LATIN SMALL LETTER ENG",
        "tipo": "nG",
        "fa": "gN",
        "phonation": "Voiced",
        "place": "Velar",
        "manner": "Nasal"
    },
    "kH": {
        "ipa": "x",
        "hex": "0x0078",
        "unicode": "LATIN SMALL LETTER X",
        "tipo": "x",
        "fa": "kH",
        "phonation": "Voiceless",
        "place": "Velar",
        "manner": "Fricative"
    },
    "gH": {
        "ipa": "\u0263",
        "hex": "0x0263",
        "unicode": "LATIN SMALL LETTER GAMMA",
        "tipo": "gH",
        "fa": "gH",
        "phonation": "Voiced",
        "place": "Velar",
        "manner": "Fricative"
    },
    "gW": {
        "ipa": "\u0270",
        "hex": "0x0270",
        "unicode": "LATIN SMALL LETTER TURNED M WITH LONG LEG",
        "tipo": "w(",
        "fa": "gW",
        "phonation": "Voiced",
        "place": "Velar",
        "manner": "Approximant"
    },
    "gL": {
        "ipa": "\u029f",
        "hex": "0x029f",
        "unicode": "LATIN LETTER SMALL CAPITAL L",
        "tipo": "gL",
        "fa": "gL",
        "phonation": "Voiced",
        "place": "Velar",
        "manner": "Lateral Approximant"
    },
    "qP": {
        "ipa": "q",
        "hex": "0x0071",
        "unicode": "LATIN SMALL LETTER Q",
        "tipo": "q",
        "fa": "qP",
        "phonation": "Voiceless",
        "place": "Uvular",
        "manner": "Stop"
    },
    "GP": {
        "ipa": "\u0262",
        "hex": "0x0262",
        "unicode": "LATIN LETTER SMALL CAPITAL G",
        "tipo": "g-",
        "fa": "GP",
        "phonation": "Voiced",
        "place": "Uvular",
        "manner": "Stop"
    },
    "GN": {
        "ipa": "\u0274",
        "hex": "0x0274",
        "unicode": "LATIN LETTER SMALL CAPITAL N",
        "tipo": "nQ",
        "fa": "GN",
        "phonation": "Voiced",
        "place": "Uvular",
        "manner": "Nasal"
    },
    "GR": {
        "ipa": "\u0280",
        "hex": "0x0280",
        "unicode": "LATIN LETTER SMALL CAPITAL R",
        "tipo": "qR",
        "fa": "GR",
        "phonation": "Voiced",
        "place": "Uvular",
        "manner": "Trill"
    },
    "qH": {
        "ipa": "\u03c7",
        "hex": "0x03c7",
        "unicode": "GREEK SMALL LETTER CHI",
        "tipo": "x-",
        "fa": "qH",
        "phonation": "Voiceless",
        "place": "Uvular",
        "manner": "Fricative"
    },
    "GH": {
        "ipa": "\u0281",
        "hex": "0x0281",
        "unicode": "LATIN LETTER SMALL CAPITAL INVERTED R",
        "tipo": "rH",
        "fa": "GH",
        "phonation": "Voiced",
        "place": "Uvular",
        "manner": "Fricative"
    },
    "?H": {
        "ipa": "\u0127",
        "hex": "0x0127",
        "unicode": "LATIN SMALL LETTER H WITH STROKE",
        "tipo": "h+",
        "fa": "?H",
        "phonation": "Voiceless",
        "place": "Pharyngeal/Epiglottal",
        "manner": "Fricative"
    },
    "(H": {
        "ipa": "\u0295",
        "hex": "0x0295",
        "unicode": "LATIN LETTER PHARYNGEAL VOICED FRICATIVE",
        "tipo": "?H",
        "fa": "(H",
        "phonation": "Voiced",
        "place": "Pharyngeal/Epiglottal",
        "manner": "Fricative"
    },
    "0K": {
        "ipa": "\u0294",
        "hex": "0x0294",
        "unicode": "LATIN LETTER GLOTTAL STOP",
        "tipo": "?",
        "fa": "0K",
        "phonation": "Constricted",
        "place": "None (Possibly Glottal)",
        "manner": "Ejective Stop"
    },
    "?P": {
        "ipa": "\u02a1",
        "hex": "0x02a1",
        "unicode": "LATIN LETTER GLOTTAL STOP WITH STROKE",
        "tipo": "?+",
        "fa": "?P",
        "phonation": "Voiceless",
        "place": "Pharyngeal/Epiglottal",
        "manner": "Stop"
    },
    "hH": {
        "ipa": "h",
        "hex": "0x0068",
        "unicode": "LATIN SMALL LETTER H",
        "tipo": "h",
        "fa": "hH",
        "phonation": "Aspirated",
        "place": "Glottal",
        "manner": "Fricative"
    },
    "?R": {
        "ipa": "\u029c",
        "hex": "0x029c",
        "unicode": "LATIN LETTER SMALL CAPITAL H",
        "tipo": "hH",
        "fa": "?R",
        "phonation": "Voiceless",
        "place": "Pharyngeal/Epiglottal",
        "manner": "Trill"
    },
    "\"H": {
        "ipa": "\u0266",
        "hex": "0x0266",
        "unicode": "LATIN SMALL LETTER H WITH HOOK",
        "tipo": "h\"",
        "fa": "\"H",
        "phonation": "Breathy Voiced",
        "place": "Glottal",
        "manner": "Fricative"
    },
    "(R": {
        "ipa": "\u02a2",
        "hex": "0x02a2",
        "unicode": "LATIN LETTER REVERSED GLOTTAL STOP WITH STROKE",
        "tipo": "?;",
        "fa": "(R",
        "phonation": "Voiced",
        "place": "Pharyngeal/Epiglottal",
        "manner": "Trill"
    },
    "xH": {
        "ipa": "\u028d",
        "hex": "0x028d",
        "unicode": "LATIN SMALL LETTER TURNED W",
        "tipo": "xW",
        "fa": "xH",
        "phonation": "Voiceless",
        "place": "Labial-velar",
        "manner": "Fricative"
    },
    "wW": {
        "ipa": "w",
        "hex": "0x0077",
        "unicode": "LATIN SMALL LETTER W",
        "tipo": "w",
        "fa": "wW",
        "phonation": "Voiced",
        "place": "Labial-velar",
        "manner": "Approximant"
    },
    "yW": {
        "ipa": "\u0265",
        "hex": "0x0265",
        "unicode": "LATIN SMALL LETTER TURNED H",
        "tipo": "jW",
        "fa": "yW",
        "phonation": "Voiced",
        "place": "Labial-palatal",
        "manner": "Approximant"
    },
    "lZ": {
        "ipa": "\ua78e",
        "hex": "0xa78e",
        "unicode": "LATIN SMALL LETTER L WITH RETROFLEX HOOK AND BELT",
        "tipo": "*S",
        "fa": "lZ",
        "phonation": "Voiceless",
        "place": "Retroflex",
        "manner": "Lateral Fricative"
    },
    "xS": {
        "ipa": "\u0267",
        "hex": "0x0267",
        "unicode": "LATIN SMALL LETTER HENG WITH HOOK",
        "tipo": "xH",
        "fa": "xS",
        "phonation": "Voiceless",
        "place": "Labial-velar",
        "manner": "Sibilant"
    },
    "pQ": {
        "ipa": "\u0298",
        "hex": "0x0298",
        "unicode": "LATIN LETTER BILABIAL CLICK",
        "tipo": "b!",
        "fa": "pQ",
        "phonation": "Voiceless",
        "place": "Bilabial",
        "manner": "Click"
    },
    "tQ": {
        "ipa": "\u01c0",
        "hex": "0x01c0",
        "unicode": "LATIN LETTER DENTAL CLICK",
        "tipo": "d!",
        "fa": "tQ",
        "phonation": "Voiceless",
        "place": "Dental",
        "manner": "Click"
    },
    "sQ": {
        "ipa": "\u01c3",
        "hex": "0x01c3",
        "unicode": "LATIN LETTER RETROFLEX CLICK",
        "tipo": "t!",
        "fa": "sQ",
        "phonation": "Voiceless",
        "place": "Alveolar",
        "manner": "Click"
    },
    "lQ": {
        "ipa": "\u203c",
        "hex": "0x203c",
        "unicode": "DOUBLE EXCLAMATION MARK",
        "tipo": "r!",
        "fa": "lQ",
        "phonation": "Voiceless",
        "place": "Retroflex",
        "manner": "Click"
    },
    "cQ": {
        "ipa": "\u01c2",
        "hex": "0x01c2",
        "unicode": "LATIN LETTER ALVEOLAR CLICK",
        "tipo": "c!",
        "fa": "cQ",
        "phonation": "Voiceless",
        "place": "Palatal",
        "manner": "Click"
    },
    "bB": {
        "ipa": "\u0253",
        "hex": "0x0253",
        "unicode": "LATIN SMALL LETTER B WITH HOOK",
        "tipo": "b<",
        "fa": "bB",
        "phonation": "Voiced",
        "place": "Bilabial",
        "manner": "Implosive"
    },
    "zB": {
        "ipa": "\u0257",
        "hex": "0x0257",
        "unicode": "LATIN SMALL LETTER D WITH HOOK",
        "tipo": "d<",
        "fa": "zB",
        "phonation": "Voiced",
        "place": "Alveolar",
        "manner": "Implosive"
    },
    "jB": {
        "ipa": "\u0284",
        "hex": "0x0284",
        "unicode": "LATIN SMALL LETTER DOTLESS J WITH STROKE AND HOOK",
        "tipo": "c<",
        "fa": "jB",
        "phonation": "Voiced",
        "place": "Palatal",
        "manner": "Implosive"
    },
    "gB": {
        "ipa": "\u0260",
        "hex": "0x0260",
        "unicode": "LATIN SMALL LETTER G WITH HOOK",
        "tipo": "g<",
        "fa": "gB",
        "phonation": "Voiced",
        "place": "Velar",
        "manner": "Implosive"
    },
    "GB": {
        "ipa": "\u029b",
        "hex": "0x029b",
        "unicode": "LATIN LETTER SMALL CAPITAL G WITH HOOK",
        "tipo": "q<",
        "fa": "GB",
        "phonation": "Voiced",
        "place": "Uvular",
        "manner": "Implosive"
    },
    "z6": {
        "ipa": "\u027a",
        "hex": "0x027a",
        "unicode": "LATIN SMALL LETTER TURNED R WITH LONG LEG",
        "tipo": "l`",
        "fa": "z6",
        "phonation": "Voiced",
        "place": "Alveolar",
        "manner": "Lateral Tap"
    },
    "z!": {
        "ipa": "\u01c1",
        "hex": "0x01c1",
        "unicode": "LATIN LETTER LATERAL CLICK",
        "tipo": "l!",
        "fa": "z!",
        "phonation": "Voiced",
        "place": "Alveolar",
        "manner": "Lateral Click"
    },
    "a<": {
        "ipa": "a",
        "hex": "0x0061",
        "unicode": "LATIN SMALL LETTER A",
        "tipo": "a",
        "fa": "a<",
        "phonation": "Voiced",
        "manner": "Unrounded Vowel",
        "place": "Open Front"
    },
    "e<": {
        "ipa": "e",
        "hex": "0x0065",
        "unicode": "LATIN SMALL LETTER E",
        "tipo": "e",
        "fa": "e<",
        "phonation": "Voiced",
        "manner": "Unrounded Vowel",
        "place": "Close-mid Front"
    },
    "i<": {
        "ipa": "i",
        "hex": "0x0069",
        "unicode": "LATIN SMALL LETTER I",
        "tipo": "i",
        "fa": "i<",
        "phonation": "Voiced",
        "manner": "Unrounded Vowel",
        "place": "Close Front"
    },
    "o>": {
        "ipa": "o",
        "hex": "0x006f",
        "unicode": "LATIN SMALL LETTER O",
        "tipo": "o",
        "fa": "o>",
        "phonation": "Voiced",
        "manner": "Rounded Vowel",
        "place": "Close-mid Back"
    },
    "u>": {
        "ipa": "u",
        "hex": "0x0075",
        "unicode": "LATIN SMALL LETTER U",
        "tipo": "u",
        "fa": "u>",
        "phonation": "Voiced",
        "manner": "Rounded Vowel",
        "place": "Close Back"
    },
    "u<": {
        "ipa": "y",
        "hex": "0x0079",
        "unicode": "LATIN SMALL LETTER Y",
        "tipo": "y",
        "fa": "u<",
        "phonation": "Voiced",
        "manner": "Rounded Vowel",
        "place": "Close Front"
    },
    "a>": {
        "ipa": "\u0251",
        "hex": "0x0251",
        "unicode": "LATIN SMALL LETTER ALPHA",
        "tipo": "A",
        "fa": "a>",
        "phonation": "Voiced",
        "manner": "Unrounded Vowel",
        "place": "Open Back"
    },
    "E<": {
        "ipa": "\u025b",
        "hex": "0x025b",
        "unicode": "LATIN SMALL LETTER OPEN E",
        "tipo": "E",
        "fa": "E<",
        "phonation": "Voiced",
        "manner": "Unrounded Vowel",
        "place": "Open-mid Front"
    },
    "I[": {
        "ipa": "\u026a",
        "hex": "0x026a",
        "unicode": "LATIN LETTER SMALL CAPITAL I",
        "tipo": "I",
        "fa": "I[",
        "phonation": "Voiced",
        "manner": "Unrounded Vowel",
        "place": "Near-close Near-front"
    },
    "O>": {
        "ipa": "\u0254",
        "hex": "0x0254",
        "unicode": "LATIN SMALL LETTER OPEN O",
        "tipo": "O",
        "fa": "O>",
        "phonation": "Voiced",
        "manner": "Rounded Vowel",
        "place": "Open-mid Back"
    },
    "U]": {
        "ipa": "\u028a",
        "hex": "0x028a",
        "unicode": "LATIN SMALL LETTER UPSILON",
        "tipo": "U",
        "fa": "U]",
        "phonation": "Voiced",
        "manner": "Rounded Vowel",
        "place": "Near-close Near-back"
    },
    "U[": {
        "ipa": "\u028f",
        "hex": "0x028f",
        "unicode": "LATIN LETTER SMALL CAPITAL Y",
        "tipo": "Y",
        "fa": "U[",
        "phonation": "Voiced",
        "manner": "Rounded Vowel",
        "place": "Near-close Near-front"
    },
    "A<": {
        "ipa": "\u0276",
        "hex": "0x0276",
        "unicode": "LATIN LETTER SMALL CAPITAL OE",
        "tipo": "a)",
        "fa": "A<",
        "phonation": "Voiced",
        "manner": "Rounded Vowel",
        "place": "Open Front"
    },
    "o<": {
        "ipa": "\u00f8",
        "hex": "0x00f8",
        "unicode": "LATIN SMALL LETTER O WITH STROKE",
        "tipo": "e)",
        "fa": "o<",
        "phonation": "Voiced",
        "manner": "Rounded Vowel",
        "place": "Close-mid Front"
    },
    "e>": {
        "ipa": "\u0264",
        "hex": "0x0264",
        "unicode": "LATIN SMALL LETTER RAMS HORN",
        "tipo": "o(",
        "fa": "e>",
        "phonation": "Voiced",
        "manner": "Unrounded Vowel",
        "place": "Close-mid Back"
    },
    "i>": {
        "ipa": "\u026f",
        "hex": "0x026f",
        "unicode": "LATIN SMALL LETTER TURNED M",
        "tipo": "u(",
        "fa": "i>",
        "phonation": "Voiced",
        "manner": "Unrounded Vowel",
        "place": "Close Back"
    },
    "A>": {
        "ipa": "\u0252",
        "hex": "0x0252",
        "unicode": "LATIN SMALL LETTER TURNED ALPHA",
        "tipo": "A)",
        "fa": "A>",
        "phonation": "Voiced",
        "manner": "Rounded Vowel",
        "place": "Open Back"
    },
    "O<": {
        "ipa": "\u0153",
        "hex": "0x0153",
        "unicode": "LATIN SMALL LIGATURE OE",
        "tipo": "E)",
        "fa": "O<",
        "phonation": "Voiced",
        "manner": "Rounded Vowel",
        "place": "Open-mid Front"
    },
    "E>": {
        "ipa": "\u028c",
        "hex": "0x028c",
        "unicode": "LATIN SMALL LETTER TURNED V",
        "tipo": "O(",
        "fa": "E>",
        "phonation": "Voiced",
        "manner": "Unrounded Vowel",
        "place": "Open-mid Back"
    },
    "@|": {
        "ipa": "\u0250",
        "hex": "0x0250",
        "unicode": "LATIN SMALL LETTER TURNED A",
        "tipo": "a\"",
        "fa": "@|",
        "phonation": "Voiced",
        "manner": "Unrounded Vowel",
        "place": "Near-open Central"
    },
    ":|": {
        "ipa": "\u0259",
        "hex": "0x0259",
        "unicode": "LATIN SMALL LETTER SCHWA",
        "tipo": "e\"",
        "fa": ":|",
        "phonation": "Voiced",
        "manner": "Unrounded Vowel",
        "place": "Mid Central"
    },
    "i|": {
        "ipa": "\u0268",
        "hex": "0x0268",
        "unicode": "LATIN SMALL LETTER I WITH STROKE",
        "tipo": "i\"",
        "fa": "i|",
        "phonation": "Voiced",
        "manner": "Unrounded Vowel",
        "place": "Close Central"
    },
    "o|": {
        "ipa": "\u0275",
        "hex": "0x0275",
        "unicode": "LATIN SMALL LETTER BARRED O",
        "tipo": "o\"",
        "fa": "o|",
        "phonation": "Voiced",
        "manner": "Rounded Vowel",
        "place": "Close-mid Central"
    },
    "u|": {
        "ipa": "\u0289",
        "hex": "0x0289",
        "unicode": "LATIN SMALL LETTER U BAR",
        "tipo": "u\"",
        "fa": "u|",
        "phonation": "Voiced",
        "manner": "Rounded Vowel",
        "place": "Close Central"
    },
    "E|": {
        "ipa": "\u025c",
        "hex": "0x025c",
        "unicode": "LATIN SMALL LETTER REVERSED OPEN E",
        "tipo": "E\"",
        "fa": "E|",
        "phonation": "Voiced",
        "manner": "Unrounded Vowel",
        "place": "Open-mid Central"
    },
    "e|": {
        "ipa": "\u0258",
        "hex": "0x0258",
        "unicode": "LATIN SMALL LETTER REVERSED E",
        "tipo": "e-",
        "fa": "e|",
        "phonation": "Voiced",
        "manner": "Unrounded Vowel",
        "place": "Close-mid Central"
    },
    "O|": {
        "ipa": "\u025e",
        "hex": "0x025e",
        "unicode": "LATIN SMALL LETTER CLOSED REVERSED OPEN E",
        "tipo": "O\"",
        "fa": "O|",
        "phonation": "Voiced",
        "manner": "Rounded Vowel",
        "place": "Open-mid Central"
    },
    "@[": {
        "ipa": "\u00e6",
        "hex": "0x00e6",
        "unicode": "LATIN SMALL LETTER AE",
        "tipo": "@",
        "fa": "@[",
        "phonation": "Voiced",
        "manner": "Unrounded Vowel",
        "place": "Near-open Near-front"
    }
}

//Turn a 4 digit hex string into a 2 character ASCII string.
//hex = A 4 character string representing a 4 digit hex number (e.g. "a9e2")
//Returns the corresponding ASCII string of length 2.
function hex_string_to_str(hex) {
    //Add "0x" to the string so it can be an proper literal and get converted.
    let number = Number("0x" + hex);
    //Get the rightmost 8 digits.
    let second = number & 0xff;
    //Get the leftmost 8 digits.
    let first = (number >> 8) & 0xff;
    //https://www.tutorialspoint.com/convert-number-to-characters-in-javascript
    //Use an ASCII code to get an ASCII character.
    let output = String.fromCharCode(first);
    output += String.fromCharCode(second);

    return output;
}

//Take in a description, label, and the key for the info being displayed that
//serves as an element id and a key into an info dictionary.
//label = A string that will go first in the label and be bold.
//info = A string describing what info will be displayed.
function update_info(label, info) {
    document.getElementById(info)
        .innerHTML = `<strong>${label}</strong>` + info_dictionary[fa_key][info]
}

//https://www.sitepoint.com/get-url-parameters-with-javascript/
//Get the URL of the page, and turn it into an object that stores the
//parameters stored in the URL.
var params = new URLSearchParams(window.location.search);
var code = params.get('code'); //4 digit hex representation of FA grapheme.
//This global variable gets used in update_info.
var fa_key = hex_string_to_str(code);
update_info("IPA Symbol: ", "ipa")
update_info("TIPO Representation: ", "tipo")
update_info("Place of Articulation/Vowel Depth: ", "place")
update_info("Manner of Articulation: ", "manner")
update_info("Phonation (Voicing): ", "phonation")
update_info("Name in Unicode: ", "unicode")
update_info("UTF-8 Hexadecimal Representation: ", "hex")
update_info("Representation in Featural ASCII: ", "fa")
document.getElementById("ipa_sound").textContent = info_dictionary[fa_key]["ipa"]
//TO-DO: Get recording of every sound, programmatically name & link them