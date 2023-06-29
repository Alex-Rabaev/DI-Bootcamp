// ------------ Exercise 1 : Colors ------------
console.log("Exercise 1 : Colors");
// Using this array :

const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];

// 1. Write a JavaScript program that displays the colors in the following order: 
//    “1# choice is Blue.” “2# choice is Green.” “3# choice is Red.” ect…

colors.forEach((color, index) => {
    console.log(`1# choice is ${color}`);
});

// 2. Check if at least one element of the array is equal to the value “Violet”. 
//    If yes, console.log("Yeah"), else console.log("No...")
//    Hint : Use the array methods taught in class. Look at the lesson Array Methods.

(colors.some((element) => element === "Violet")) ? console.log("Yeah") : console.log("No...");



// ------------ Exercise 2 : Colors #2 ------------
console.log("Exercise 2 : Colors #2");
// Using these arrays :

// const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
const ordinal = ["th","st","nd","rd"];

// 1. Write a JavaScript program that displays the colors in the following order : 
//    “1st choice is Blue .” “2nd choice is Green.” “3rd choice is Red.” ect…
//    Hint : Use the array methods taught in class and ternary operator.

colors.forEach((color, i) => {
    i > 2 ? console.log(`${i+1}${ordinal[0]} choice is ${color}.`) 
          : console.log(`${i+1}${ordinal[i+1]} choice is ${color}.`);
});



// ------------ Exercise 3 : Analyzing ------------
console.log("Exercise 3 : Analyzing");
// Analyze these pieces of code before executing them. What will be the outputs ?

// ------1------
const fruits = ["apple", "orange"];
const vegetables = ["carrot", "potato"];

const result = ['bread', ...vegetables, 'chicken', ...fruits];
console.log(result);
// output: ['bread', 'carrot', 'potato', 'chicken', 'apple', 'orange']


// ------2------
const country = "USA";
console.log([...country]);
// output: ["U", "S", "A"]

// ------Bonus------
let newArray = [...[,,]];
console.log(newArray);
// output: [undefined, undefined] // I executed the code



// ------------ Exercise 4 : Employees ------------
console.log("Exercise 4 : Employees");
// Using this array:

const users = [{ firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
             { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
             { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
             { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
             { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
             { firstName: 'Wes', lastName: 'Reid', role: 'Instructor'},
             { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor'}];

// 1. Using the map() method, push into a new array the firstname of the user and a welcome message. 
//    You should get an array that looks like this :
//    const welcomeStudents = ["Hello Bradley", "Hello Chloe", "Hello Jonathan", "Hello Michael", "Hello Robert", "Hello Wes", "Hello Zach"]

const welcomeStudents = users.map((student) => `Hello ${student["firstName"]}`);
console.log(welcomeStudents);

// 2. Using the filter() method, create a new array, containing only the Full Stack Residents.

const FullStackStudents = users.filter((student) => student["role"] === 'Full Stack Resident');
console.log(FullStackStudents);

// 3. Bonus : Chain the filter method with a map method, to return an array 
//            containing only the lastName of the Full Stack Residents.

const FullStackStudentsLnames = users
                            .filter((student) => student["role"] === 'Full Stack Resident')
                            .map((element) => element["lastName"]);
console.log(FullStackStudentsLnames);



// ------------ Exercise 5 : Star Wars ------------
console.log("Exercise 5 : Star Wars");
// Using this array 

const epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];

// Use the reduce() method to combine all of these into a single string.

const epicSentence = epic.reduce((acc, word, index) => index === epic.length - 1 
                                                        ? acc + word 
                                                        : acc + word + " ", "");
console.log(epicSentence);



// ------------ Exercise 6 : Employees #2 ------------
console.log("Exercise 6 : Employees #2");
// Using this object:

const students = [{name: "Ray", course: "Computer Science", isPassed: true}, 
               {name: "Liam", course: "Computer Science", isPassed: false}, 
               {name: "Jenner", course: "Information Technology", isPassed: true}, 
               {name: "Marco", course: "Robotics", isPassed: true}, 
               {name: "Kimberly", course: "Artificial Intelligence", isPassed: false}, 
               {name: "Jamie", course: "Big Data", isPassed: false}];

// Using the filter() method, create a new array, containing the students that passed the course.

const passedStudents = students.filter((student) => student["isPassed"]);
console.log(passedStudents);

// Bonus : Chain the filter method with a forEach method, 
// to congratulate the students with their name and course name 
// (ie. “Good job Jenner, you passed the course in Information Technology”, 
// “Good Job Marco you passed the course in Robotics” ect…)

students.filter((student) => student["isPassed"]).forEach((person) => {
    console.log(`Good job ${person["name"]}, you passed the course in ${person["course"]}`);
});

