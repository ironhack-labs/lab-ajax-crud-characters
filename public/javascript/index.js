const charactersAPI = new APIHandler("http://localhost:8000");

const render = (characters) => {
  if (typeof characters[0] !== "object") {
    characters = [characters];
  }
  const container = document.querySelector(".characters-container");
  console.log(container);
  container.innerHTML = "";
  characters.forEach((character) => {
    const card = document.createElement("div");
    card.classList.add("character-info");
    const id = document.createElement("div");
    id.classList.add("id");
    id.innerHTML = "<strong>ID:</strong> " + character.id;
    card.appendChild(id);
    const name = document.createElement("div");
    name.classList.add("name");
    name.innerHTML = "<strong>Name:</strong> " + character.name;
    card.appendChild(name);
    const occupation = document.createElement("div");
    occupation.classList.add("occupation");
    occupation.innerHTML =
      "<strong>Occupation:</strong> " + character.occupation;
    card.appendChild(occupation);
    const weapon = document.createElement("div");
    weapon.classList.add("occupation");
    weapon.innerHTML = "<strong>Weapon:</strong> " + character.weapon;
    card.appendChild(weapon);
    const cartoon = document.createElement("div");
    cartoon.classList.add("cartoon");
    cartoon.innerHTML = "<strong>Is Cartoon:</strong> " + character.cartoon;
    card.appendChild(cartoon);
    container.appendChild(card);
  });
};

window.addEventListener("load", () => {
  // Fetch All

  document
    .getElementById("fetch-all")
    .addEventListener("click", function (event) {
      charactersAPI
        .getFullList()
        .then((apiRes) => render(apiRes.data))
        .catch((err) => console.log(err));
    });

  // Fetch One

  document
    .getElementById("fetch-one")
    .addEventListener("click", function (event) {
      id = event.target.closest(".operation").querySelector("input").value;
      charactersAPI
        .getOneRegister(id)
        .then((apiRes) => render(apiRes.data))
        .catch((err) => console.log(err));
    });

  // Delete One

  document
    .getElementById("delete-one")
    .addEventListener("click", function (event) {
      id = event.target.closest(".operation").querySelector("input").value;
      charactersAPI
        .deleteOneRegister(id)
        .then((apiRes) => render(apiRes.data))
        .catch((err) => console.log(err));
    });

  // Edit One

  document
    .getElementById("edit-character-form")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      const id = event.target.querySelector(`[name = "chr-id"]`).value;
      const name = event.target.querySelector(`[name = "name"]`).value;
      const occupation = event.target.querySelector(`[name = "occupation"]`)
        .value;
      const weapon = event.target.querySelector(`[name = "weapon"]`).value;
      const cartoon = event.target.querySelector(`[name = "cartoon"]`).checked;
      charactersAPI
        .updateOneRegister(id, name, occupation, weapon, cartoon)
        .then((apiRes) => {
          render(apiRes.data);
          event.target.querySelector("button").style.background = "green";
        })
        .catch((err) => {
          console.log(err);
          event.target.querySelector("button").style.background = "red";
        });
    });

  // Create One

  document
    .getElementById("new-character-form")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      const name = event.target.querySelector(`[name = "name"]`).value;
      const occupation = event.target.querySelector(`[name = "occupation"]`)
        .value;
      const weapon = event.target.querySelector(`[name = "weapon"]`).value;
      const cartoon = event.target.querySelector(`[name = "cartoon"]`).checked;
      charactersAPI
        .createOneRegister(name, occupation, weapon, cartoon)
        .then((apiRes) => render(apiRes.data))
        .catch((err) => console.log(err));
    });
});
