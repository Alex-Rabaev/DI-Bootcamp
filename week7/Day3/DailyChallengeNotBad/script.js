// ------------- Daily Challenge: Not Bad -------------

// 1. Create a variable called sentence. The value of the variable should be a string that contains the words “not” and “bad”.
//    For example, “The movie is not that bad, I like it”.

// 2. Create a variable called wordNot where it’s value is the first appearance (ie. the position) 
//    of the substring “not” (from the sentence variable).

// 3. Create a variable called wordBad where it’s value is the first appearance (ie. the position)
//    of the substring “bad” (from the sentence variable).

// 4. If the word “bad” comes after the word “not”, you should replace the whole “not…bad” substring with “good”, 
//    then console.log the result.
//    For example, the result here should be : “The movie is good, I like it”
// 5. If the word “bad” does not come after “not” or the words are not in the sentence, console.log the original sentence.


function notBadIsGood (sentence) {
    let wordNot = sentence.indexOf("not");
    let wordBad = sentence.indexOf("bad");
    if (wordNot !== -1 && wordBad !== -1 && wordNot < wordBad) {
        let newSentence = sentence.slice(0, wordNot) + "good" + sentence.slice(wordBad + 3);
        console.log(newSentence);
        return newSentence;
    } else {
        console.log(sentence);
        return sentence;
    }       
}

let sentence1 = "The movie is not that bad, I like it";
notBadIsGood(sentence1);

let sentence2 = "This dinner is not that bad! You cook well";
notBadIsGood(sentence2);

let sentence3 = "This movie is not so bad!";
notBadIsGood(sentence3);

let sentence4 = "This dinner is bad!";
notBadIsGood(sentence4);
