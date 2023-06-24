// ------------- Daily Challenge: 99 Bottles Of Beer -------------

// 1. Prompt the user for a number to begin counting down bottles.

// 2. In the song, everytime a bottle drops,
//    the subtracted number should go up by 1.

// For example,


//     We start the song at 99 bottles
//     -> Take _1_ down, pass it around
//     -> we have now 98 bottles

//     -> then, Take _2_ down, pass them around
//     -> we have now 96 bottles

//     -> then, Take _3_ down, pass them around
//     -> we have now 93 bottles

//     ... ect


// 3. The song should end with “0 bottle of beer on the wall” or “no bottle of beer on the wall”.

// 4. Note : Make sure you get the grammar correct.
//      - For 1 bottle, you pass “it” around.
//      - For more than one bottle, you pass “them” around.



function generateBeerSong(numBottles) {
    for (let i = 1; numBottles > 0; i >= numBottles ? i = numBottles : i++) {
        console.log(`${numBottles} bottle${numBottles !== 1 ? 's' : ''} of beer on the wall`);
        console.log(`${numBottles} bottle${numBottles !== 1 ? 's' : ''} of beer`);
        console.log(`Take ${i} down, pass ${i === 1 ? 'it' : 'them'} around`);
        numBottles = numBottles - i;
        if (numBottles >= 1) {
            console.log(`${numBottles} bottle${numBottles !== 1 ? 's' : ''} of beer on the wall\n`);
        } else {
            console.log(`No more bottles of beer on the wall\n`);
        }
    }
}

let numBottles = parseInt(prompt('Enter the number of bottles to start the song:'));
generateBeerSong(numBottles);

