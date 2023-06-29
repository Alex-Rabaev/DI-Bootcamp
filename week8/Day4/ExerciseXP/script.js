// ------------ Exercise 1 : Location ------------
console.log("Exercise 1 : Location");
// 1. Analyze the code below. What will be the output?

const person = {
    name: 'John Doe',
    age: 25,
    location: {
        country: 'Canada',
        city: 'Vancouver',
        coordinates: [49.2827, -123.1207]
    }
}

const {name, location: {country, city, coordinates: [lat, lng]}} = person;

console.log(`I am ${name} from ${city}, ${country}. Latitude(${lat}), Longitude(${lng})`);
// Output: I am John Doe from Vancouver, Canada. Latitude(49.2827), Longitude(-123.1207)



// ------------ Exercise 2: Display Student Info ------------
console.log("Exercise 2: Display Student Info");


function displayStudentInfo(objUser){
    const {first: firstname, last: lasname} = objUser;
    console.log(`Your full name is ${firstname} ${lasname}`);
}

displayStudentInfo({first: 'Elie', last:'Schoppik'});

// Using the code above, destructure the parameter inside the function and 
// return a string as the example seen below:
//output : 'Your full name is Elie Schoppik'



// ------------ Exercise 3: User & Id ------------

// Using this object:
const users = { user1: 18273, user2: 92833, user3: 90315 }

// 1. Using methods taught in class, turn the users object into an array:
// Excepted output: [ [ 'user1', 18273 ], [ 'user2', 92833 ], [ 'user3', 90315 ] ]
// FYI : The number is their ID number.

// const usersArray = [];
// for (let user in users) {
//     const [userKey, userID] = [user, users[user]];
//     usersArray.push([userKey,userID]);
// }
const usersArray = Object.entries(users);
console.log(usersArray);

// 2. Modify the outcome of part 1, by multipling the user’s ID by 2.
// Excepted output: [ [ 'user1', 36546 ], [ 'user2', 185666 ], [ 'user3', 180630 ] ]

// const usersArrayTwo = [];
// for (let user in users) {
//     const [userKey, userID] = [user, users[user]*2];
//     usersArrayTwo.push([userKey,userID]);
// }
const usersArrayTwo = Object.entries(users).map(([key, value]) => [key, value * 2]);
console.log(usersArrayTwo);



// ------------ Exercise 4 : Person Class ------------
console.log("Exercise 4 : Person Class");
// 1. Analyze the code below. What will be the output?
class Person {
  constructor(name) {
    this.name = name;
  }
}

const member = new Person('John');
console.log(typeof member);
// Output: object
console.log(member);
// Output: Person {name: 'John'}



// ------------ Exercise 5 : Dog Class ------------

// Using the Dog class below:

class Dog {
  constructor(name) {
    this.name = name;
  }
};
// 1. Analyze the options below. Which constructor will successfully extend the Dog class?
//   // 1
// class Labrador extends Dog {
//   constructor(name, size) {
//     this.size = size;
//   }
// };


  // 2
class Labrador extends Dog {
  constructor(name, size) {
    super(name);
    this.size = size;
  }
};


//   // 3
// class Labrador extends Dog {
//   constructor(size) {
//     super(name);
//     this.size = size;
//   }
// };


//   // 4
// class Labrador extends Dog {
//   constructor(name, size) {
//     this.name = name;
//     this.size = size;
//   }
// };

// Answer: Subclass №2 will successfully extend the Dog class.



// ------------ Exercise 6 : Challenges ------------
console.log("Exercise 6 : Challenges");
// 1. Evaluate these (ie True or False)

// [2] === [2] - false, because addresses are different (memory location)
// {} === {} - false, because addresses are different (memory location)


// 2. What is, for each object below, the value of the property number and why?

const object1 = { number: 5 }; 
const object2 = object1; 
const object3 = object2; 
const object4 = { number: 5};

object1.number = 4;
console.log(object2.number) // 4
console.log(object3.number) // 4
console.log(object4.number) // 5

// Answer:
// Three variables (object1, object2, object3) point to the same object in memory, 
// because object2 and object3 are assigned the reference to object1.
// But object4 is a separate object with its own number property set to 5


// 3. Create a class Animal with the attributes name, type and color. 
//    The type is the animal type, for example: dog, cat, dolphin ect …

class Animal {
  constructor(name, type, color) {
    this.name = name;
    this.type = type;
    this.color = color;
  }
};

// 4. Create a class Mamal that extends from the Animal class. 
//    Inside the class, add a method called sound(). 
//    This method takes a parameter: the sound the animal makes, 
//    and returns the details of the animal (name, type and color) as well as the sound it makes.

class Mamal extends Animal {
  constructor(name, type, color) {
    super(name, type, color);
  }
  sound(animalSound) {
    return `${animalSound} I'm a ${this.type}, named ${this.name} and I'm ${this.color}`;
  }
};

// 5. Create a farmerCow object that is an instance of the class Mamal. 
//    The object accepts a name, a type and a color and calls 
//    the sound method that “moos” her information.
//    For example: Moooo I'm a cow, named Lily and I'm brown and white

const farmerCow = new Mamal("Lily", "cow", "brown and white");
console.log(farmerCow.sound("Moooo"));