
function isAnagram(str1, str2) {
    const str1Nospace = str1.replace(/\s/g, "").toLowerCase();
    // console.log(str1Nospace);
    const sortedStr1 = str1Nospace.split("").sort().join("");
    // console.log(sortedStr1);
    const str2Nospace = str2.replace(/\s/g, "").toLowerCase();
    // console.log(str2Nospace);
    const sortedStr2 = str2Nospace.split("").sort().join("");
    // console.log(sortedStr2);
    sortedStr1===sortedStr2 ? console.log(`yes, strings "${str1}" and "${str2}" are anagram`) : 
                              console.log(`no, strings "${str1}" and "${str2}" are not anagram`);
    return sortedStr1===sortedStr2;
}

const str1 = "Hello world";
const str2 = "Bye bye world";

isAnagram(str1, str2); // true - "yes, those strings are anagram"

const ex1 = "Astronomer";
const ex2 = "Moon starer";

isAnagram(ex1, ex2);

const ex3 = "School master";
const ex4 = "The classroom";

isAnagram(ex3, ex4);

const ex5 = "The Morse Code";
const ex6 = "Here come dots";

isAnagram(ex5, ex6);