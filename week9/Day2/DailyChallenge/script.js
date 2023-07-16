// 1rst Daily Challenge
// 1. Create two functions. Each function should return a promise.
// 2. The first function called makeAllCaps(), takes an array of words as an argument
//      - If all the words in the array are strings, resolve the promise. 
//        The value of the resolved promise is the array of words uppercased.
//      - else, reject the promise with a reason.
// 3 . The second function called sortWords(), takes an array of words uppercased as an argument
//      - If the array length is bigger than 4, resolve the promise. 
//        The value of the resolved promise is the array of words sorted in alphabetical order.
//      - else, reject the promise with a reason.

function makeAllCaps(words) {
  return new Promise((resolve, reject) => {
    const isAllStrings = words.every(word => typeof word === "string");
    if (isAllStrings) {
      const uppercasedWords = words.map(word => word.toUpperCase());
      resolve(uppercasedWords);
    } else {
      reject("Array contains non-string elements");
    }
  });
}

function sortWords(words) {
  return new Promise((resolve, reject) => {
    if (words.length > 4) {
      const sortedWords = words.sort();
      resolve(sortedWords);
    } else {
      reject("Array length is not greater than 4");
    }
  });
}

// Test cases
makeAllCaps([1, "pear", "banana"])
  .then((arr) => sortWords(arr))
  .then((result) => console.log(result))
  .catch(error => console.log(error));
// Output: Array contains non-string elements

makeAllCaps(["apple", "pear", "banana"])
  .then((arr) => sortWords(arr))
  .then((result) => console.log(result))
  .catch(error => console.log(error));
// Output: Array length is not greater than 4

makeAllCaps(["apple", "pear", "banana", "melon", "kiwi"])
  .then((arr) => sortWords(arr))
  .then((result) => console.log(result))
  .catch(error => console.log(error));
// Output: ["APPLE","BANANA","KIWI","MELON","PEAR"]