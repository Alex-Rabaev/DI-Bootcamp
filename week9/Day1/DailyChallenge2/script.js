// ------------ Daily Challenge : True Or False ------------

// Create a function that returns true if all parameters are truthy, and false otherwise.

// Examples
// allTruthy(true, true, true) ➞ true

// allTruthy(true, false, true) ➞ false

// allTruthy(5, 4, 3, 2, 1, 0) ➞ false

function allTruthy (...data) {
    const result = data.every(element => element != false);
    console.log(result);
}

allTruthy(true, true, true);
allTruthy(true, false, true);
allTruthy(5, 4, 3, 2, 1, 2);