const charactersAPI = new APIHandler("http://localhost:8000");

const cName = document.getElementsByClassName("name");
const occupation = document.getElementsByClassName("occupation");
const isCartoon = document.getElementsByClassName("cartoon");
const weapon = document.getElementsByClassName("weapon");

const createCard = (c) => {
  const characterContaner = document.querySelector(".characters-container");
  const card = document.createElement("div");

  characterContaner.appendChild(card);
  card.classList.add("character-info");
  card.innerHTML = `
    <div class="name">Name: ${c.name}</div>
    <div class="occupation">Occupation: ${c.occupation}</div>
    <div class="cartoon">Is Cartoon: ${c.cartoon ? "Yes" : "No"}</div>
    <div class="weapon">Weapon: ${c.weapon}</div>
  `;
};

window.addEventListener("load", () => {
  document
    .getElementById("fetch-all")
    .addEventListener("click", async (event) => {
      event.preventDefault();

      try {
        const characters = await charactersAPI.getFullList();
        characters.forEach((character) => {
          createCard(character);
        });
      } catch (err) {
        console.error(err);
      }
    });

  document
    .getElementById("fetch-one")
    .addEventListener("click", async (event) => {
      event.preventDefault();

      const id = document.querySelector('input[name="character-id"]').value;

      try {
        const character = await charactersAPI.getOne(id);
        createCard(character);
      } catch (err) {
        console.error(err);
      }
    });

  document
    .getElementById("delete-one")
    .addEventListener("click", async (event) => {
      event.preventDefault();

      const id = document.querySelector(
        'input[name="character-id-delete"]'
      ).value;

      try {
        await charactersAPI.deleteOne(id);
      } catch (err) {
        console.error(err);
      } finally {
        const deleteBtn = document.getElementById("delete-one");
        deleteBtn.style.backgroundColor = "green";
      }
    });

  document
    .getElementById("edit-character-form")
    .addEventListener("submit", async (event) => {
      event.preventDefault();

      const id = document.querySelector(
        '#edit-character-form input[name="chr-id"]'
      ).value;
      const name = document.querySelector(
        '#edit-character-form input[name="name"]'
      ).value;
      const occupation = document.querySelector(
        '#edit-character-form input[name="occupation"]'
      ).value;
      const weapon = document.querySelector(
        '#edit-character-form input[name="weapon"]'
      ).value;
      const cartoon = document.querySelector(
        '#edit-character-form input[name="cartoon"]'
      );

      const isCartoon = cartoon.checked ? true : false;

      try {
        await charactersAPI.updateOne(id, {
          id,
          name,
          occupation,
          weapon,
          cartoon: isCartoon,
        });
      } catch (err) {
        console.error(err);
      } finally {
        const updateBtn = document.getElementById("send-data");
        updateBtn.style.backgroundColor = "green";
      }
    });

  document
    .getElementById("new-character-form")
    .addEventListener("submit", async (event) => {
      event.preventDefault();

      const name = document.querySelector(
        '#new-character-form input[name="name"]'
      ).value;
      const occupation = document.querySelector(
        '#new-character-form input[name="occupation"]'
      ).value;
      const weapon = document.querySelector(
        '#new-character-form input[name="weapon"]'
      ).value;
      const cartoon = document.querySelector(
        '#new-character-form input[name="cartoon"]'
      );

      const isCartoon = cartoon.checked ? true : false;

      try {
        await charactersAPI.createOne({
          name,
          occupation,
          weapon,
          cartoon: isCartoon,
        });
      } catch (err) {
        console.error(err)
      } finally {
        const createBtn = document.getElementById("send-data");
        createBtn.style.backgroundColor = "green";
      }
    });
});
