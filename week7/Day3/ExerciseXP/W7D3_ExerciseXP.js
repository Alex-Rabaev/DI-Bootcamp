// ------------- Exercise 1 : List Of People -------------

const people = ["Greg", "Mary", "Devon", "James"];

// _______________________________________
// Part I - Review About Arrays


// 1. Write code to remove “Greg” from the people array.

people.splice(0, 1);



// 2. Write code to replace “James” to “Jason”.

people.splice(people.length - 1, 1, "Jason");

// OR

// people.pop();
// people.push("Jason");



// 3. Write code to add your name to the end of the people array.

people.push("Alex");



// 4. Write code that console.logs Mary’s index. take a look at the indexOf method on Google.

console.log(people.indexOf("Mary"));

console.log(people);



// 5. Write code to make a copy of the people array using the slice method.
//      - The copy should NOT include “Mary” or your name.
//      - Hint: remember that now the people array should look like this const people = ["Mary", "Devon", "Jason", "Yourname"];
//      - Hint: Check out the documentation for the slice method

const peopleSecond = people.slice(1,3);
console.log(peopleSecond);




// 6. Write code that gives the index of “Foo”. Why does it return -1 ?

console.log(people.indexOf("Foo"));

// The indexOf() method returns -1 if the value is not found.



// 7. Create a variable called last which value is the last element of the array.
//    Hint: What is the relationship between the index of the last element in the array and the length of the array?


last = people[people.length - 1];
console.log(last);



// _______________________________________
// Part II - Loops


// 1. Using a loop, iterate through the people array and console.log each person.

for (let person of people) {
    console.log(person);
}

// 2. Using a loop, iterate through the people array and exit the loop after you console.log “Devon” .
//    Hint: take a look at the break statement in the lesson.

for (let person of people) {
    console.log(person);
    if (person === "Devon") { 
      break;
    }
}


// ------------- Exercise 2 : Your Favorite Colors -------------

// 1. Create an array called colors where the value is a list of your five favorite colors.

const colors = ["black", "green", "blue", "orange"]

// 2. Loop through the array and as you loop console.log a string like so: “My #1 choice is blue”, “My #2 choice is red” ect… .
//    Bonus: Change it to console.log “My 1st choice”, “My 2nd choice”, “My 3rd choice”, picking the correct suffix for each number.
//    Hint : create an array of suffixes to do the Bonus

const suffixes = ["st", "nd", "rd", "th"]

for (let i = 0; i < colors.length; i++) {
    const sentence = `My ${i + 1}${suffixes[i]} choice is ${colors[i]}`;
    console.log(sentence);
}

// ------------- Exercise 3 : Repeat The Question -------------

// 1. Prompt the user for a number.
//    Hint : Check the data type you receive from the prompt (ie. Use the typeof method)

const userInput = prompt("Enter a number:");
console.log(typeof userInput); // Data type of userInput is string

let number = Number(userInput); // Data type of number is number

// 2. While the number is smaller than 10 continue asking the user for a new number.
//    Tip : Which while loop is more relevant for this situation?

while (typeof number === "number" && number < 10)
{
   number = Number(prompt("Enter a new number:"));
}

console.log(`The number ${number} is greater than or equal to 10.`);