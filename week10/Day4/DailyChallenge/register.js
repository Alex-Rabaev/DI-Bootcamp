const ids = ["first", "last", "email", "username", "password"];
const divs = ids.map((id) => document.getElementById(id));
const submitButton = document.getElementById("submit");

const [first, last, email, username, password] = divs;

divs.forEach((div) => div?.addEventListener("input", handleChange));

function handleChange(e) {
    submitButton.disabled = isAnyFieldEmpty();
}

function isAnyFieldEmpty() {
    return divs.some((div) => div.value === "");
}