// ------------- Exercise 1 : Find The Numbers Divisible By 23 -------------

// 1. Create a function call displayNumbersDivisible() that takes no parameter.
// 2. In the function, loop through numbers 0 to 500.
// 3. Console.log all the numbers divisible by 23.
// 4. At the end, console.log the sum of all numbers that are divisible by 23.
// 5. Bonus: Add a parameter divisor to the function.

function displayNumbersDivisible(number) {
  let sum = 0;
  for (let num = 0; num <= 500; num+= number) {
    sum += num;
    console.log(num);
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
  "banana": 6,
  "apple": 0,
  "pear": 12,
  "orange": 32,
  "blueberry": 1
};

const prices = {
  "banana": 4,
  "apple": 2,
  "pear": 1,
  "orange": 1.5,
  "blueberry": 10
};

const shoppingList = ["banana", "orange", "apple"];

function myBill() {
  let totalPrice = 0;

  for (let item of shoppingList) {
    if (item in stock && stock[item] > 0) {
      totalPrice += prices[item];
      stock[item] -= 1;
    }
  }

  return totalPrice;
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



// 3. Change will always be represented in the following order: quarters, dimes, nickels, pennies.

function changeEnough(itemPrice, amountOfChange) {
  const quarters = 0.25;
  const dimes = 0.10;
  const nickels = 0.05;
  const pennies = 0.01;

  const totalChange =
    amountOfChange[0] * quarters +
    amountOfChange[1] * dimes +
    amountOfChange[2] * nickels +
    amountOfChange[3] * pennies;
  return totalChange >= itemPrice;
}

// Test cases
console.log(changeEnough(4.25, [25, 20, 5, 0])); // true
console.log(changeEnough(14.11, [2, 100, 0, 0])); // false
console.log(changeEnough(0.75, [0, 0, 20, 5])); // true
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

function hotelCost(nights) {
  return 140 * nights;
}

// 2. Define a function called planeRideCost().
// It should ask the user for their destination.
// If the user doesn’t answer or if the answer is not a string, ask again.
// The function should return a different price depending on the location.
//   - “London”: 183$
//   - “Paris” : 220$
//   - All other destination : 300$

function planeRideCost(destination) {
  destination = destination.toLowerCase();

  if (destination === "london") {
    return 183;
  } else if (destination === "paris") {
    return 220;
  } else {
    return 300;
  }
}

// 3. Define a function called rentalCarCost().
// It should ask the user for the number of days they would like to rent the car.
// If the user doesn’t answer or if the answer is not a number, ask again.
// Calculate the cost to rent the car. The car costs $40 everyday.
// If the user rents a car for more than 10 days, they get a 5% discount.
// The function should return the total price of the car rental.

function rentalCarCost(days) {
  let cost = 40 * days;

  if (days > 10) {
    cost -= cost * 0.05; // Apply 5% discount
  }

  return cost;
}

// 4. Define a function called totalVacationCost() that returns the total cost of the user’s vacation by calling the 3 functions that you created above.
// Example : The car cost: $x, the hotel cost: $y, the plane tickets cost: $z.
// Hint: You have to call the functions hotelCost(), planeRideCost() and rentalCarCost() inside the function totalVacationCost().
// 5. Call the function totalVacationCost()
// 6. Bonus: Instead of using a prompt inside the 3 first functions, only use a prompt inside the totalVacationCost() function. You need to change the 3 first functions, accordingly.


function totalVacationCost() {
  let nights = parseInt(prompt("Enter the number of nights you would like to stay in the hotel:"));

  while (isNaN(nights) || nights === "") {
    nights = parseInt(prompt("Please enter a valid number of nights:"));
  }

  let destination = prompt("Enter your destination (London, Paris, or other):");

  while (!destination || typeof destination !== "string") {
    destination = prompt("Please enter a valid destination:");
  }

  let days = parseInt(prompt("Enter the number of days you would like to rent the car:"));

  while (isNaN(days) || days === "") {
    days = parseInt(prompt("Please enter a valid number of days:"));
  }

  const hotelCostValue = hotelCost(nights);
  const planeRideCostValue = planeRideCost(destination);
  const rentalCarCostValue = rentalCarCost(days);

  const totalCost = hotelCostValue + planeRideCostValue + rentalCarCostValue;

  console.log(
    `The car cost: $${rentalCarCostValue}, the hotel cost: $${hotelCostValue}, the plane tickets cost: $${planeRideCostValue}.`
  );

  return totalCost;
}

// Call the function totalVacationCost()
console.log(totalVacationCost());