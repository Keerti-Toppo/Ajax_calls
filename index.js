const URL = "https://jsonplaceholder.typicode.com/users";
const main = document.getElementById("main");
main.innerHTML = "<p>Loading...</p>";
fetch(URL)
  .then((response) => response.json())
  .then((users) => main.innerHTML = getListOfNames(users));
const getListOfNames = (users) => {
    const names = users
        .map((users) => `<li>${users.name}</li>`)
        .join("\n");
    return `<ul>${names}</ul>`;
};
