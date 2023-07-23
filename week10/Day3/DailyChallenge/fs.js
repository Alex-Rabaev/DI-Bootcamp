// Instructions
// Download this Github repository.

// Create an fs.js file and use the Node js File System to read the RightLeft file. In the file, you will see a list of symbols : > and <. Each one of this symbol has a meaning:
// > means that you move 1 step to the right
// < means that you move 1 step to the left

const fs = require('fs');
rightLeft()

async function rightLeft(){
    fs.readFile('RightLeft.txt', 'utf-8', (err, data) => {
        if(err){
            console.log(err);
            return
        }

        let firstLeft = 0;
        let position = 0;

        for (let i = 0; i < data.length; i++){
            position = data[i] === '<' ? position-1 : data[i] === '>' ? position +1 : position;
            if (position === -1 && firstLeft === 0){
                firstLeft = i+1
            } 
        }

        const side = position > 0 ? 'right': 'left';
        position = Math.abs(position);

        console.log('Final position', position, side);
        console.log('First time on the left side on the step', firstLeft);
    })

}
// When you start reading the file, you start at the position 0
// If the file begins like this ">>>" after 3 steps you would be in position 3
// If the file begins like this ">>><<" after 5 steps you would be in position 1


// Use the corresponding operations to calculate the final position at the end of the file - The answer should be: 74 steps to the right.


// Use the corresponding operations to calculate the number of steps needed to hit position the -1 for the first time - The answer should be: 1795 steps.


