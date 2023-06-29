// ------------ Exercise 2 : Move The Box ------------

function myMove() {
    const element = document.querySelector("#animate");
    let counter = 0;
    let idInterval = setInterval(function(){
        if (counter === 350){
            clearInterval(idInterval)
        } else {
            element.style.left = counter + "px";
            counter ++;
        }
    }, 1)
}