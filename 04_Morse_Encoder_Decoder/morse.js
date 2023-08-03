const latinToMorse = {
    'A':'.-',
	'B':'-...',
	'C':'-.-.',
	'D':'-..',
	'E':'.',
	'F':'..-.',
	'G':'--.',
	'H':'....',
	'I':'..',
	'J':'.---',
	'K':'-.-',
	'L':'.-..',
	'M':'--',
	'N':'-.',
	'O':'---',
	'P':'.--.',
	'Q':'--.-',
	'R':'.-.',
	'S':'...',
	'T':'-',
	'U':'..-',
	'V':'...-',
	'W':'.--',
	'X':'-..-',
	'Y':'-.--',
	'Z':'--..'
}

const morseToLatin = {
    '-': "T",
    '--': "M",
    '---': "O",
    '--.': "G",
    '--.-': "Q",
    '--..': "Z",
    '-.': "N",
    '-.-': "K",
    '-.--': "Y",
    '-.-.': "C",
    '-..': "D",
    '-..-': "X",
    '-...': "B",
    '.': "E",
    '.-': "A",
    '.--': "W",
    '.---': "J",
    '.--.': "P",
    '.-.': "R",
    '.-..': "L",
    '..': "I",
    '..-': "U",
    '..-.': "F",
    '...': "S",
    '...-': "V",
    '....': "H"
}


let inputLatin = document.getElementById("sentenceInput-input").value;
let str = inputLatin.toUpperCase();
let latinArray = [];


const inputMorse = document.getElementById("morseInput-input").value;



const getLatinCharacterList = (str) =>{
    for (let i=0; i != str.length; i++) {
    latinArray.push(str[i]);
    //console.log(latinArray[i])
    }
}


const translateLatinCharacter = () =>{
    for (let i of latinArray) {
        //console.log(i)
        for (let [letter, morseChar] of Object.entries(latinToMorse)) {
            if (i === letter){
                document.getElementById("morseTranslation").innerHTML = morseChar;
            }
        }
    }
}

const getMorseCharacterList = (inputMorse) =>{
    //for (let i=0; i != inputMorse.length; i++) {
    //morseArray.push(inputMorse[i]);
    //console.log(morseArray[i])
    //}
    
    return morseArray = inputMorse.split(/(\s+)/);
}


const translateMorseCharacter = () =>{
    for (let i of morseArray) {
        //console.log(i)
        for (let [morseChar, letter ] of Object.entries(morseToLatin)) {
            if (i === morseChar){
                document.getElementById("latinTranslation").innerHTML = letter;
            }
        }
    }
}

const encode = (str) => {
    getLatinCharacterList(str);
    translateLatinCharacter();
}

const decode = (inputMorse) => {
    getMorseCharacterList(inputMorse);
    translateMorseCharacter();
}

//--------------------------------------------------------------------------

encode(str)
decode(inputMorse)