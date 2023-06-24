// ------------- Exercise 1 : Find The Numbers Divisible By 23 -------------

// 1. Create a function call displayNumbersDivisible() that takes no parameter.
// 2. In the function, loop through numbers 0 to 500.
// 3. Console.log all the numbers divisible by 23.
// 4. At the end, console.log the sum of all numbers that are divisible by 23.
// 5. Bonus: Add a parameter divisor to the function.

function displayNumbersDivisible(number) {
  let sum = 0;
  for (let num = number; num <= 500; num+= number) {
    sum += num;
  }
  console.log("Sum:", sum);
}

displayNumbersDivisible(23);



// ------------- Exercise 2 : Shopping List -------------

// 1. Add the stock and prices objects to your js file.
// 2. Create an array called shoppingList with the following items: “banana”, “orange”, and “apple”. It means that you have 1 banana, 1 orange and 1 apple in your cart.
// 3. Create a function called myBill() that takes no parameters.
// 4. The function should return the total price of your shoppingList. In order to do this you must follow these rules:
//    1. The item must be in stock. (Hint : check out if .. in)
//    2. If the item is in stock find out the price in the prices object.
// 5. Call the myBill() function.
// 6. Bonus: If the item is in stock, decrease the item’s stock by 1

const stock = {
  banana: 6,
  apple: 0,
  pear: 12,
  orange: 32,
  blueberry: 1,
};

const prices = {
  banana: 4,
  apple: 2,
  pear: 1,
  orange: 1.5,
  blueberry: 10,
};

const shoppingList = ["banana", "orange", "apple"];

function myBill() {
  let totalBill = 0;

  for (let i = 0; i < shoppingList.length; i++) {
    const item = shoppingList[i];
    if (item in stock && stock[item] > 0) {
      totalBill += stock[item] * prices[item];
      stock[item] ++;
    }
  }
  return totalBill;
}

const totalPrice = myBill();
console.log("Total Price:", totalPrice);
console.log("Updated Stock:", stock);



// ------------- Exercise 3 : What’s In My Wallet ? -------------

// 1. Create a function named changeEnough(itemPrice, amountOfChange) that receives two arguments :
//   - an item price
//   - and an array representing the amount of change in your pocket.

// 2. In the function, determine whether or not you can afford the item.
//   - If the sum of the change is bigger or equal than the item’s price (ie. it means that you can afford the item), the function should return true
//   - If the sum of the change is smaller than the item’s price (ie. it means that you cannot afford the item) the function should return false

function changeEnough(itemPrice, amountOfChange) {
  let totalChange = 0;
  for (let i = 0; i < amountOfChange.length; i++) {
    totalChange += amountOfChange[i];
  }
  return totalChange >= itemPrice;
}

// 3. Change will always be represented in the following order: quarters, dimes, nickels, pennies.

function changeEnough(itemPrice, amountOfChange) {
  const quarters = amountOfChange[0] * 0.25;
  const dimes = amountOfChange[1] * 0.1;
  const nickels = amountOfChange[2] * 0.05;
  const pennies = amountOfChange[3] * 0.01;

  const totalChange = quarters + dimes + nickels + pennies;
  return totalChange >= itemPrice;
}

console.log(changeEnough(1.5, [10, 50, 100, 100]));

// 4. After you created the function, invoke it like this:

const itemPrice = 4.25;
const amountOfChange = [25, 20, 5, 0]; // [quarters, dimes, nickels, pennies]

const canAfford = changeEnough(itemPrice, amountOfChange);
console.log("Can afford the item:", canAfford);



// ------------- Exercise 4 : Vacations Costs -------------

// 1. Define a function called hotelCost().
//   - It should ask the user for the number of nights they would like to stay in the hotel.
//   - If the user doesn’t answer or if the answer is not a number, ask again.
//   - The hotel costs $140 per night. The function should return the total price of the hotel.

function hotelCost() {
  let numNights;

  while (true) {
    numNights = prompt("How many nights would you like to stay in the hotel?");
    if (
      numNights !== null &&
      Number.isInteger(Number(numNights)) &&
      Number(numNights) > 0
    ) {
      break;
    }
  }

  const totalCost = 140 * Number(numNights);

  return totalCost;
}

totalPrice = hotelCost();
console.log("Total Hotel Cost:", totalPrice);

// 2. Define a function called planeRideCost().
// It should ask the user for their destination.
// If the user doesn’t answer or if the answer is not a string, ask again.
// The function should return a different price depending on the location.
//   - “London”: 183$
//   - “Paris” : 220$
//   - All other destination : 300$

function planeRideCost() {
  let destination;

  while (true) {
    destination = prompt("What is your destination?");
    if (destination !== null && typeof destination === "string") {
      break;
    }
  }

  let price;
  if (destination.toLowerCase() === "London") {
    price = 183;
  } else if (destination.toLowerCase() === "Paris") {
    price = 220;
  } else {
    price = 300;
  }

  return price;
}

// 3. Define a function called rentalCarCost().
// It should ask the user for the number of days they would like to rent the car.
// If the user doesn’t answer or if the answer is not a number, ask again.
// Calculate the cost to rent the car. The car costs $40 everyday.
// If the user rents a car for more than 10 days, they get a 5% discount.
// The function should return the total price of the car rental.

function rentalCarCost() {
  let numDays;

  while (true) {
    numDays = prompt("How many days would you loke to rent the car?");
    if (numDays !== null && Number.isInteger(Number(numDays))) {
      break;
    }
  }

  const dailyCost = 40;
  let totalCost = dailyCost * Number(numDays);

  if (Number(numDays) > 10) {
    const discount = 0.05; // 5% discount
    const discountAmount = totalCost * discount;
    totalCost -= discountAmount;
  }

  return totalCost;
}

totalPrice = rentalCarCost();
console.log("Total Car Rental Cost:", totalPrice);

// 4. Define a function called totalVacationCost() that returns the total cost of the user’s vacation by calling the 3 functions that you created above.
// Example : The car cost: $x, the hotel cost: $y, the plane tickets cost: $z.
// Hint: You have to call the functions hotelCost(), planeRideCost() and rentalCarCost() inside the function totalVacationCost().

function totalVacationCost() {
  const hotelCost = hotelCost();
  const planeTicketCost = planeRideCost();
  const carRentalCost = rentalCarCost();

  const totalCost = hotelCost + planeTicketCost + carRentalCost;

  console.log("The car cost: $" + carRentalCost);
  console.log("The hotel cost: $" + hotelCost);
  console.log("The plane tickets cost: $" + planeRideCost);
  console.log("Total vacation cost: $" + totalCost);

  return totalCost;
}

// 5. Call the function totalVacationCost()
totalVacationCost();

// 6. Bonus: Instead of using a prompt inside the 3 first functions, only use a prompt inside the totalVacationCost() function. You need to change the 3 first functions, accordingly.
// ---------------------

// 🌟 Exercise 5 : Users
