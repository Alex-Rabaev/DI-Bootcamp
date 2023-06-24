// ------------- Exercise 4 : Building Management -------------


// Review About Objects
// 1. Copy and paste the above object to your Javascript file.

const building = {
    numberOfFloors: 4,
    numberOfAptByFloor: {
        firstFloor: 3,
        secondFloor: 4,
        thirdFloor: 9,
        fourthFloor: 2,
    },
    nameOfTenants: ["Sarah", "Dan", "David"],
    numberOfRoomsAndRent:  {
        sarah: [3, 990],
        dan:  [4, 1000],
        david: [1, 500],
    },
}

// 2. Console.log the number of floors in the building.

console.log("Number of floors:", building["numberOfFloors"]);

// 3. Console.log how many apartments are on the floors 1 and 3.

console.log("Number of apartments on the first floor:", building["numberOfAptByFloor"]["firstFloor"]);
console.log("Number of apartments on the third floor:", building["numberOfAptByFloor"]["thirdFloor"]);

// 4. Console.log the name of the second tenant and the number of rooms he has in his apartment.

console.log("The name of the second tenant:", building["nameOfTenants"][1]);
console.log("The number of rooms he has in his apartment:", building["numberOfRoomsAndRent"][building["nameOfTenants"][1].toLowerCase()][0]);

// 5. Check if the sum of Sarah’s and David’s rent is bigger than Dan’s rent. If it is, than increase Dan’s rent to 1200.

const rentSum = building["numberOfRoomsAndRent"]["sarah"][1] + building["numberOfRoomsAndRent"]["david"][1];
const rentDan = building["numberOfRoomsAndRent"]["dan"][1];

if (rentSum > rentDan) {
    console.log("The sum of Sarah's and David's rent is bigger than Dan's rent");
    building["numberOfRoomsAndRent"]["dan"][1] = 1200;
    console.log(`Now Dan's rent is ${building["numberOfRoomsAndRent"]["dan"][1]}`)
}



// ------------- Exercise 5 : Family -------------

// 1. Create an object called family with a few key value pairs.

const family = {
    lastname : "Connor",
    members : "5",
    pets : ["cat", "dog"],
}

// 2. Using a for in loop, console.log the keys of the object.

for (let key in family) {
    console.log(key);
}

// 3. Using a for in loop, console.log the values of the object.

for (let key in family) {
    console.log(key, "--->", family[key]);
}



// ------------- Exercise 6 : Rudolf -------------

const details = {
  my: 'name',
  is: 'Rudolf',
  the: 'raindeer'
}

// 1. Given the object above and using a for loop, console.log “my name is Rudolf the raindeer”
let sentence = "";
for (let key in details) {
    sentence += `${key} ${details[key]} `;
}
console.log(sentence.trim()); // .trim() is for removing the last space at the end of the sentence



// ------------- Exercise 7 : Secret Group -------------

const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];

// 1. A group of friends have decided to start a secret society. 
//    The society’s name will be the first letter of each of their names sorted in alphabetical order.
//    Hint: a string is an array of letters

names.sort(); // sorting names in alphabetical order

let societyName = "";

for (member of names) {
    societyName += member[0];
}
const secretSocietyName = societyName;

// 2. Console.log the name of their secret society. The output should be “ABJKPS”

console.log(secretSocietyName);