// ------------ Exercise 2 : Ternary Operator ------------

// function winBattle(){
//     return true;
// }

// 1. Transform the winBattle() function to an arrow function.

const winBattle = () => true

// 2. Create a variable called experiencePoints.
// 3. Assign to this variable, a ternary operator. 
//    If winBattle() is true, the experiencePoints variable should be equal to 10, 
//    else the variable should be equal to 1.

const experiencePoints = winBattle() ? 10 : 1;

// 4. Console.log the experiencePoints variable.

console.log(experiencePoints);



// ------------ Exercise 3 : Is It A String ? ------------

// 1. Write a JavaScript arrow function that checks whether the value of the argument passed, 
// is a string or not. The function should return true or false
// Check out the example below to see the expected output

const isString = (value) => typeof value === 'string';

console.log(isString('hello'));
console.log(isString([1, 2, 4, 0]));



// ------------ Exercise 4 : Find The Sum ------------

// 1. Create a one line function (ie. an arrow function) that receives two 
// numbers as parameters and returns the sum.

const sum = (a, b) => a + b;
console.log(sum(9, 18));



// ------------ Exercise 5 : Kg And Grams ------------

// Create a function that receives a weight in kilograms and returns it in grams. 
// (Hint: 1 kg is 1000gr)

// 1. First, use function declaration and invoke it.

function kgToGram (kgWeight) {
    return kgWeight * 1000;
}

console.log(kgToGram(35));
console.log(kgToGram);

// 2. Then, use function expression and invoke it.

const kgToGramAgain = function (kgWeight) {
    return kgWeight * 1000;
}

console.log(kgToGramAgain(37));
console.log(kgToGramAgain);

// 3. Write in a one line comment, the difference between 
//    function declaration and function expression.

// Answer: function name be omitted in function expressions to create anonymous functions.

// 4. Finally, use a one line arrow function and invoke it.

const kgToGramArrow = (kgWeight) => kgWeight * 1000;

console.log(kgToGramArrow(42));
console.log(kgToGramArrow);



// ------------ Exercise 6 : Fortune Teller ------------

// 1. Create a self invoking function that takes 4 arguments: 
//    number of children, partner’s name, geographic location, job title.
// 2. The function should display in the DOM a sentence like 
//    "You will be a <job title> in <geographic location>, 
//     and married to <partner's name> with <number of children> kids."

(function(numberOfChildren, partnerName, location, jobTitle) {
            const sentence = `You will be a ${jobTitle} 
                            in ${location}, 
                            and married to ${partnerName} 
                            with ${numberOfChildren} kids.`;
            const fortuneDiv = document.createElement("div");
            fortuneDiv.className = "fortune";
            document.body.appendChild(fortuneDiv);
            fortuneDiv.textContent = sentence;
        })(3, "John", "New York", "Web Developer")

