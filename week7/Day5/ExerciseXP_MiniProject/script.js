// ---------- Exercise 1 : Play A Guessing Game ----------

    // First Part
// 1. Create a JS file and link it to the index.html file.

// 2. Take a look at your html file, you should have a button with an “onclick” event. 
//    This event is equal to the function playTheGame(). 
//    It means that when you will click on the button, 
//    the function playTheGame() will be called.


// 2. In the JS file, create a function called playTheGame() that takes no parameter.
//      1. In the function, start by asking the user if they would like to play the game 
//         (Hint: use the built-in confirm() function).

//          1. If the answer is false, alert “No problem, Goodbye”.

//          2. If his answer is true, follow these steps:
//             1. Ask the user to enter a number between 0 and 10 (Hint: use the built-in prompt() function). 
//                You then have to check the validity of the user’s number :

//                  - If the user didn’t enter a number (ie. if he entered another data type) 
//                    alert “Sorry Not a number, Goodbye”.
//                  - If the user didn’t enter a number between 0 and 10 alert “Sorry it’s not a good number, Goodbye”.
//                  - Else (ie. he entered a number between 0 and 10), create a variable named computerNumber 
//                    where the value is a random number between 0 and 10 (Hint: Use the built-in Math.random() function). 
//                    Make sure that the number is rounded.


    // Second Part
// 1. Outside of the playTheGame() function, create a new function named compareNumbers(userNumber,computerNumber) 
//    that takes 2 parameters : userNumber and computerNumber

// 2.The point of this function is to check if the userNumber is the same as the computerNumber:
//      1. If userNumber is equal to computerNumber, alert “WINNER” and stop the game.

//      2. If userNumber is bigger than computerNumber, alert “Your number is bigger then the computer’s, 
//         guess again” (Hint: use the built-in prompt() function to ask the user for a new number).

//      3. If userNumber is lower than computerNumber, alert “Your number is smaller then the computer’s, 
//         guess again” (Hint: use the built-in prompt() function to ask the user for a new number).

//      4. If the user guessed more than 3 times, alert “out of chances” and exit the function.


// Bonus
// 1. In the First Part, instead of stopping the process if the user didn’t enter a valid number. 
//    Continue asking for a number until the user enters a valid number.

function playTheGame() {
    var play = confirm("Would you like to play the game?");

    if (!play) {
        alert("No problem. Goodbye!");
    } else {
        var userNumber;

        do {
            userNumber = parseInt(prompt("Please enter a number between 0 and 10:"));
        } while (isNaN(userNumber) || userNumber < 0 || userNumber > 10);

        var computerNumber = Math.round(Math.random() * 10);

        compareNumbers(userNumber, computerNumber);
    }
}


function compareNumbers(userNumber, computerNumber) {
    var attempts = 0;

    while (attempts < 3) {
        
        if (userNumber === computerNumber) {
            alert("WINNER!");
            return;
        } else if (userNumber > computerNumber) {
            attempts++;
            if (attempts === 3) {
                alert("Out of chances");
                return;
            }
            userNumber = parseInt(prompt("Your number is bigger than the computer's, guess again:"));
        } else {
            attempts++;
            if (attempts === 3) {
                alert("Out of chances");
                return;
            }
            userNumber = parseInt(prompt("Your number is smaller than the computer's, guess again:"));
        }
    }
}