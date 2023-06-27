// ------------ Exercise 7 : Welcome ------------

// John has just signed in to your website and you want to welcome him.

// 1. Create a Navbar in your HTML file.
// 2. In your js file, create a self invoking funtion that takes 1 argument: 
//    the name of the user that just signed in.
// 3. The function should add a div in the nabvar, 
//    displaying the name of the user and his profile picture.

(function(username) {
    const userDiv = document.createElement("div");
    userDiv.textContent = `Welcome, ${username}!`;

    const userImg = document.createElement("img");
    userImg.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGmSh-MpXTdmoU-aaVYFQNY68EB9sliBdrxjX5NV-mdQ&s";
    userImg.alt = "profile picture";
    userImg.id = "john_photo";

    const navbar = document.getElementById("navbar");
    navbar.insertBefore(userDiv, navbar.firstChild);
    userDiv.insertBefore(userImg, userDiv.firstChild);
    
})("John");
