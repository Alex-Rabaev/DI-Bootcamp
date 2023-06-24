// ------------- Daily Challenge: Stars -------------


// 1. Write a JavaScript program that recreates the pattern below.
// 2. Do this challenge twice: first by using one loop, then by using two nested for loops.

// *  
// * *  
// * * *  
// * * * *  
// * * * * *
// * * * * * *


function printPatternOneLoop(rows) {
  let stars = '';
  for (let i = 1; i <= rows; i++) {
    stars += '* ';
    console.log(stars);
  }
}

function printPatternTwoLoops(rows) {
  for (let i = 1; i <= rows; i++) {
    let stars = '';
    for (let j = 1; j <= i; j++) {
      stars += '* ';
    }
    console.log(stars);
  }
}


const rows = 6;
printPatternOneLoop(rows);
printPatternTwoLoops(rows);