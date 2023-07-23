// ADD BUTTON SUBMIT
const button = document.getElementById("btn_search"); // create a button named "submit" taking it from hte HTML by ID
button.addEventListener("click", getPerson); // add the action named "click" to the button to get some person from the link below by using function "getPerson"

// FUNCTION TO GET ANY PERSON
async function getPerson() {
  //   // Call Loading Data
  //   updateWithLoading();
  // create function, which allows us to add the STAR WARS character
  const loadingIcon = `<p class="loading" style="display: none;">Loading...</p>`;
  const personInfo = document.getElementById("person_info"); // we create the area with the info about STAR WARS character
  console.log(personInfo);
  try {
    const number = Math.floor(Math.random() * 84) + 1; // create a way to choose the character randomly with the build-in math function
    const response = await fetch(`https://www.swapi.tech/api/people/${number}`); // create a variable which is responsible for receiving number of person from the API

    if (response.ok) { // if JSON file will contain "ok" the code inside will run
      const starwarsdata = await response.json(); // convert the data from API to JSON type
      const name = starwarsdata.result.properties["name"]; // get data of name from JSON file "starwarsdata" addressing to key
      const height = starwarsdata.result.properties["height"]; // get data of height from JSON file "starwarsdata" addressing to key
      const gender = starwarsdata.result.properties["gender"]; // the same
      const birth_year = starwarsdata.result.properties["birth year"]; // the same
      const homeworldUrl = starwarsdata.result.properties["homeworld"]; // https://www.swapi.tech/api/planets/31
      console.log(homeworldUrl);

      const homeworldResponse = await fetch(homeworldUrl); // receive the homeworld name from the other API https://www.swapi.tech/api/planets/31
      const homeworldData = await homeworldResponse.json(); // convert the data from API to JSON type
      const homeworld = homeworldData.result.properties["name"]; // get data of name from JSON file "homeworldData" addressing to key
      console.log(homeworld);

      // CREATE DOM ELEMENTS
      const title = document.createElement("h2"); // create h2 element in the HTML file which consists the title
      title.textContent = name; // turn to the title and put there the name of the person

      const heightParagraph = document.createElement("p"); // create paragraph in the HTML file which consists the data of height
      heightParagraph.textContent = `Height: ${height}`; // fill the paragraph with content referring to the data obtained above from the API

      const genderParagraph = document.createElement("p"); // create paragraph in the HTML file which consists the data of gender
      genderParagraph.textContent = `Gender: ${gender}`; // fill the paragraph...

      const birthYearParagraph = document.createElement("p"); // create paragraph in the HTML file which consists the birth year data
      birthYearParagraph.textContent = `Birth year: ${birth_year}`; // fill the paragraph ...

      const homeworldParagraph = document.createElement("p"); // create paragraph in the HTML file which consists the data of homeworld
      homeworldParagraph.textContent = `Homeworld: ${homeworld}`; // fill the paragraph ...

      deleteInfo(); // It needs to replace information about one person with information about another

      // Append elements to personInfo div
      personInfo.appendChild(title); // add the data about person's name to display on the webpage
      personInfo.appendChild(heightParagraph); // add the data about person's height to display on the webpage
      personInfo.appendChild(genderParagraph); // add the data about person's gender to display on the webpage
      personInfo.appendChild(birthYearParagraph); // add the data about person's birth year to display on the webpage
      personInfo.appendChild(homeworldParagraph); // add the data about person's homeworld to display on the webpage
    } else {
      console.log("in error");
      throw new Error("That person isn't available"); // if JSON file will NOT contain "ok"
    }
  } catch (error) {
    console.log("error"); // It also means the error, but I do not understand why we need it
  }
}

// Replace information about one person with information about another
function deleteInfo() {
  const divInfo = document.getElementById("person_info");
  divInfo.textContent = "";
}

// // Display when updating info (pending data)
// function updateWithLoading() {
//   // Icon link: https://fontawesome.com/how-to-use/on-the-web/styling/animating-icons
//   names.innerYTML = `<i class="fa-solid fa-sync fa-spin" style="display: none"></i>`;
//   height.textContent = "";
//   gender.textContent = "";
//   birthYear.textContent = "";
//   homeWorld.textContent = "";
// }
