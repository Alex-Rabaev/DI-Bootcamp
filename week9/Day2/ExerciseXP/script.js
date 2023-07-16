// ------------ Exercise 1 : Comparison ------------

// 1. Create a function called compareToTen(num) that takes a number as an argument.
// 2. The function should return a Promise:
//      - the promise resolves if the argument is less than or equal to 10
//      - the promise rejects if argument is greater than 10.

function compareToTen(num) {
  return new Promise((resolve, reject) => {
    if (num <= 10) {
      resolve("Number is less than or equal to 10");
    } else {
      reject("Number is greater than 10");
    }
  });
}

compareToTen(15)
  .then(result => console.log(result))
  .catch(error => console.log(error));
// Output: Number is greater than 10

compareToTen(8)
  .then(result => console.log(result))
  .catch(error => console.log(error));
// Output: Number is less than or equal to 10


// ------------ Exercise 2 : Promises ------------

// 1. Create a promise that resolves itself in 4 seconds and returns a “success” string.

function delayedResolve() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("success");
    }, 4000);
  });
}

delayedResolve()
  .then(result => console.log(result))
  .catch(error => console.log(error));



// ------------ Exercise 3 : Resolve & Reject ------------

// 1. Use Promise.resolve(value) to create a promise that will resolve itself with a value of 3.
// 2. Use Promise.reject(error) to create a promise that will reject itself with the string “Boo!”

const promiseResolve = Promise.resolve(3);
const promiseReject = Promise.reject("Boo!");

promiseResolve
  .then(result => console.log(result))
  .catch(error => console.log(error));
// Output: 3

promiseReject
  .then(result => console.log(result))
  .catch(error => console.log(error));
// Output: Boo!