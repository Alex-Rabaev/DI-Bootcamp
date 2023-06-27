// #1
// function funcOne() {
//     let a = 5;
//     if(a > 1) {
//         a = 3;
//     }
//     alert(`inside the funcOne function ${a}`);
// }

// #1.1 - run in the console:
// funcOne() // Alert messege: "inside the funcOne function 3"
// #1.2 What will happen if the variable is declared 
// with const instead of let ? 
// Answer: It will be an error because this local variable is changing localy


//#2
// let a = 0;
// function funcTwo() {
//     a = 5;
// }

// function funcThree() {
//     alert(`inside the funcThree function ${a}`);
// }

// #2.1 - run in the console:
// funcThree() // Alert messege: "inside the funcThree function 0"
// funcTwo() // a = 5
// funcThree() // Alert messege: "inside the funcThree function 5"
// #2.2 What will happen if the variable is declared 
// with const instead of let ? 
// Answer: There will be an error after calling funcThree function second time


//#3
// function funcFour() {
//     window.a = "hello";
// }


// function funcFive() {
//     alert(`inside the funcFive function ${a}`);
// }

// #3.1 - run in the console:
// funcFour()
// funcFive() // Alert messege: "inside the funcFive function hello". Because variable a is now global

//#4
// let a = 1;
// function funcSix() {
//     let a = "test";
//     alert(`inside the funcSix function ${a}`);
// }


// #4.1 - run in the console:
// funcSix() // Alert messege: "inside the funcSix function test"
// #4.2 What will happen if the variable is declared 
// with const instead of let ?
// Answer: It still will run fine, because inside the function we don't use global variable _a_,
//      we use local variable _a_, by creating it inside of the function with line |let a = "test";|

//#5
// let a = 2;
// if (true) {
//     let a = 5;
//     alert(`in the if block ${a}`);
// }
// alert(`outside of the if block ${a}`);

// #5.1 - run the code in the console

// Alert messege: "in the if block 5"
// Alert messege: "in the if block 2"

// #5.2 What will happen if the variable is declared 
// with const instead of let ?

// Answer: the outcome will be the same. Because at the first alert messege we use local 
//         variable _a_ and at second alert messege we use global variable _a_. We created them
//         in different blocks. It would work the same even with declaring with const