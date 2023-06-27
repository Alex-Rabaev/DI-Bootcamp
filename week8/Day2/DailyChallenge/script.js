// ------------ Daily Challenge: Groceries ------------

// Using this object :

let client = "John";

const groceries = {
    fruits : ["pear", "apple", "banana"],
    vegetables: ["tomatoes", "cucumber", "salad"],
    totalPrice : "20$",
    other : {
        payed : true,
        meansOfPayment : ["cash", "creditCard"]
    }
}

// 1. Create an arrow function named displayGroceries, that 
//    console.logs the 3 fruits from the groceries object. Use the forEach method.

const displayGroceries = () => {
  groceries.fruits.forEach((fruit) => {
    console.log(fruit);
  });
}

// 2. Create another arrow function named cloneGroceries.
//      - In the function, create a variable named user that is a copy of the client variable. 
//        (Tip : make the user variable equal to the client variable)
//      - Change the client variable to “Betty”. Will we also see this modification 
//        in the user variable? Why?
//      - In the function, create a variable named shopping that is equal 
//        to the groceries variable.
//      - Change the value of the totalPrice key to 35$. 
//        Will we also see this modification in the shopping object? Why?
//      - Change the value of the payed key to false. 
//        Will we also see this modification in the shopping object? Why?

const cloneGroceries = () => {
  let user = client;
  client = "Betty";
  console.log(user);
  // The user variable will still be "John" because it was a copy 
  // of the original value of the client variable.

  let shopping = groceries;
  shopping.totalPrice = "35$";
  console.log(groceries.totalPrice);
  // The modification in the shopping object will be reflected 
  // in the groceries object because they reference the same object.

  shopping.other.payed = false;
  console.log(groceries.other.payed); 
  // The modification in the shopping object will be reflected 
  // in the groceries object because they reference the same object.
}

// 3. Invoke the cloneGroceries function.

cloneGroceries();