const charactersAPI = new APIHandler("http://localhost:8000");

document
  .querySelector("#fetch-all")
  .addEventListener("click", async (req, res) => {
    try {
      const response = await charactersAPI.getFullList();
      const allChars = response.data;
      let cards = "";
      allChars.forEach((char) => {
        cards += `
          <div class="character-info">
              <div class="name">Name: ${char.name}</div>
              <div class="occupation">Occupation: ${char.occupation}</div>
              <div class="cartoon">Cartoon: ${char.cartoon ? "Yes" : "No"}</div>
              <div class="weapon">Weapon: ${char.weapon}</div>
          </div>
          `;
      });
      document.querySelector(".characters-container").innerHTML = cards;
    } catch (err) {
      console.log(err);
    }
  });

document
  .querySelector("#fetch-one")
  .addEventListener("click", async (req, res) => {
    try {
      const charId = document.querySelector('input[name="character-id"]').value;
      console.log(charId);
      const response = await charactersAPI.getOneRegister(charId);
      const char = response.data;
      let charData = `
      <div class="character-info">
          <div class="name">Name: ${char.name}</div>
          <div class="occupation">Occupation: ${char.occupation}</div>
          <div class="cartoon">Cartoon: ${char.cartoon ? "Yes" : "No"}</div>
          <div class="weapon">Weapon: ${char.weapon}</div>
      </div>
      `;
      document.querySelector(".characters-container").innerHTML = charData;
    } catch (err) {
      console.log(err);
    }
  });

const form = document
  .querySelector("#new-character-form")
  .addEventListener("submit", async (event) => {
    try {
      event.preventDefault();
      const formData = {
        name: document.querySelector(".char-name").value,
        occupation: document.querySelector(".char-occupation").value,
        weapon: document.querySelector(".char-weapon").value,
        cartoon: document.querySelector(".char-cartoon").checked,
      };
      console.log(formData);
      const response = await charactersAPI.createOneRegister(formData);
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  });

// window.addEventListener('load', () => {
//   document.getElementById('fetch-all').addEventListener('click', function (event) {

//   });

//   document.getElementById('fetch-one').addEventListener('click', function (event) {

//   });

//   document.getElementById('delete-one').addEventListener('click', function (event) {

//   });

//   document.getElementById('edit-character-form').addEventListener('submit', function (event) {

//   });

//   document.getElementById('new-character-form').addEventListener('submit', function (event) {

//   });
// });
