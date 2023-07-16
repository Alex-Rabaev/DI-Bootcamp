// 2nd Daily Challenge

const morse = `{
  "0": "-----",
  "1": ".----",
  "2": "..---",
  "3": "...--",
  "4": "....-",
  "5": ".....",
  "6": "-....",
  "7": "--...",
  "8": "---..",
  "9": "----.",
  "a": ".-",
  "b": "-...",
  "c": "-.-.",
  "d": "-..",
  "e": ".",
  "f": "..-.",
  "g": "--.",
  "h": "....",
  "i": "..",
  "j": ".---",
  "k": "-.-",
  "l": ".-..",
  "m": "--",
  "n": "-.",
  "o": "---",
  "p": ".--.",
  "q": "--.-",
  "r": ".-.",
  "s": "...",
  "t": "-",
  "u": "..-",
  "v": "...-",
  "w": ".--",
  "x": "-..-",
  "y": "-.--",
  "z": "--..",
  ".": ".-.-.-",
  ",": "--..--",
  "?": "..--..",
  "!": "-.-.--",
  "-": "-....-",
  "/": "-..-.",
  "@": ".--.-.",
  "(": "-.--.",
  ")": "-.--.-"
}`

// 1. Create three functions. The two first functions should return a promise..

// 2. The first function is named toJs():
//    - this function converts the morse json string provided above to a morse javascript object.
//    - if the morse javascript object is empty, throw an error (use reject)
//    - else return the morse javascript object (use resolve)

// 3. The second function called toMorse(morseJS), takes one argument: the new morse javascript object.

//    - This function asks the user for a word or a sentence.
//    - if the user entered a character that doesn’t exist in the new morse javascript object, throw an error. (use reject)
//    - else return an array with the morse translation of the user’s word.

// 4. The third function called joinWords(morseTranslation), takes one argument: the morse translation array

//    - this function joins the morse translation by using line break and display it on the page (ie. On the DOM)

// 5. Chain the three functions.

function toJs() {
  return new Promise((resolve, reject) => {
    try {
      const morseJS = JSON.parse(morse);
      if (Object.keys(morseJS).length === 0) {
        reject("Morse JavaScript object is empty");
      } else {
        resolve(morseJS);
      }
    } catch (error) {
      reject("Error converting morse JSON to JavaScript object");
    }
  });
}

function toMorse(morseJS) {
  return new Promise((resolve, reject) => {
    const userInput = prompt("Enter a word or a sentence:");
    if (userInput === null) {
      reject("User canceled the input");
    } else {
      const words = userInput.toLowerCase().split(" ");
      const morseTranslation = [];
      try {
        for (let word of words) {
          const translation = [];
          for (let char of word) {
            if (morseJS[char]) {
              translation.push(morseJS[char]);
            } else {
              reject(`Invalid character "${char}"`);
            }
          }
          morseTranslation.push(translation.join(" "));
        }
        resolve(morseTranslation);
      } catch (error) {
        reject("Error translating to Morse code");
      }
    }
  });
}

function joinWords(morseTranslation) {
  const joinedMorse = morseTranslation.join("\n");
  console.log(joinedMorse);
}

toJs()
  .then((morseJS) => toMorse(morseJS))
  .then((morseTranslation) => joinWords(morseTranslation))
  .catch((error) => console.log(error));