const robots = [
    {
    id: 1,
    name: 'Leanne Graham',
    username: 'Bret',
    email: 'Sincere@april.biz',
    image: 'https://robohash.org/1?200x200'
    },
    {
    id: 2,
    name: 'Ervin Howell',
    username: 'Antonette',
    email: 'Shanna@melissa.tv',
    image: 'https://robohash.org/2?200x200'
    },
    {
    id: 3,
    name: 'Clementine Bauch',
    username: 'Samantha',
    email: 'Nathan@yesenia.net',
    image: 'https://robohash.org/3?200x200'
    },
    {
    id: 4,
    name: 'Patricia Lebsack',
    username: 'Karianne',
    email: 'Julianne.OConner@kory.org',
    image: 'https://robohash.org/4?200x200'
    },
    {
    id: 5,
    name: 'Chelsey Dietrich',
    username: 'Kamren',
    email: 'Lucio_Hettinger@annie.ca',
    image: 'https://robohash.org/5?200x200'
    },
    {
    id: 6,
    name: 'Mrs. Dennis Schulist',
    username: 'Leopoldo_Corkery',
    email: 'Karley_Dach@jasper.info',
    image: 'https://robohash.org/6?200x200'
    },
    {
    id: 7,
    name: 'Kurtis Weissnat',
    username: 'Elwyn.Skiles',
    email: 'Telly.Hoeger@billy.biz',
    image: 'https://robohash.org/7?200x200'
    },
    {
    id: 8,
    name: 'Nicholas Runolfsdottir V',
    username: 'Maxime_Nienow',
    email: 'Sherwood@rosamond.me',
    image: 'https://robohash.org/8?200x200'
    },
    {
    id: 9,
    name: 'Glenna Reichert',
    username: 'Delphine',
    email: 'Chaim_McDermott@dana.io',
    image:'https://robohash.org/9?200x200'
    },
    {
    id: 10,
    name: 'Clementina DuBuque',
    username: 'Moriah.Stanton',
    email: 'Rey.Padberg@karina.biz',
    image:'https://robohash.org/10?200x200'
    }
    ];


const mainDiv = document.querySelector(".card-container")
function displayCards (robots) {
    for (let robot of robots) {
        const cardDiv = document.createElement("div");
        cardDiv.classList.add("card");

        const cardImage = document.createElement("img");
        cardImage.src = robot["image"];
        cardImage.alt = `Robot #${robot["id"]}`;
        cardDiv.appendChild(cardImage);

        const nameText = document.createElement("h2");
        const emailText = document.createElement("p");
        nameText.textContent = robot["name"];
        cardDiv.appendChild(nameText);
        emailText.textContent = robot["email"];
        cardDiv.appendChild(emailText);

        mainDiv.appendChild(cardDiv);
    }
}
displayCards(robots);


function clear() {
    while (mainDiv.firstChild) {
        mainDiv.removeChild(mainDiv.lastChild);
    }
}

const searchFilter = document.querySelector("input");

searchFilter.addEventListener('input', (event) => {
    searchInput = event.target.value.toLowerCase();
    const newRobotList=robots.filter((robot)=> robot.name.toLowerCase().includes(searchInput));
                                            //    || robot.email.toLowerCase().includes(searchInput));
    clear();
    displayCards(newRobotList);
});

/* <div class="card">
    <img src="https://robohash.org/1?200x200" alt="Robot #1">
    <h2>Leanne Graham</h2>
    <p>Sincere@april.biz</p>
</div> */