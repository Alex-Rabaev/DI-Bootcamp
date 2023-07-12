// ------------ Exercise 1 : HTML Form ------------

// 1. Create a form like the one above. The form should contain three inputs:
//      - a small text input asking for a name,
//      - a larger textarea input to write a message,
//      - a submit input (“Send”)

// see the index.html file

// 2. When you click the Send button, the form will be submitted with a GET method.

// Where will the sent data appear?

// file:///C:/Study_Developers_Institute/DI-Bootcamp/week9/Day1/ExerciseXP/index.html?username=John&comments=this+is+a+comment%0D%0A



// ------------ Exercise 2 : HTML Form #2 ------------

// 1. Use the same form structure as Exercise 1.
// 2. When you click the Send button, the form will be submitted with a POST method.
// 3. Where will the sent data appear? Hint : Look at the Network Tab

// At the Network tab --> index.html --> Payload tab



// ------------ Exercise 3 : JSON Mario ------------

// Using this code:

const marioGame = {
  detail : "An amazing game!",
  characters : {
      mario : {
        description:"Small and jumpy. Likes princesses.",
        height: 10,
        weight: 3,
        speed: 12,
      },
      bowser : {
        description: "Big and green, Hates princesses.",
        height: 16,
        weight: 6,
        speed: 4,
      },
      princessPeach : {
        description: "Beautiful princess.",
        height: 12,
        weight: 2,
        speed: 2,
      }
  },
}
// 1. Convert this JS object into a JSON object. What happens to the nested objects ?

const marioGameJson = JSON.stringify(marioGame);

// 2. Convert and pretty print this JS object into a JSON object.

console.log(JSON.stringify(marioGame, null, 2));

// 3. Use your web inspector to add a breakpoint. Check the values of the JSON object in the debugger.
