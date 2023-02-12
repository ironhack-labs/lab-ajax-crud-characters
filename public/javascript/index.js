const charactersAPI = new APIHandler("http://localhost:8000");

window.addEventListener("load", () => {
  // fetch all characters
  document.querySelector("#fetch-all").addEventListener("click", async () => {
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

  // fetch one character
  document.querySelector("#fetch-one").addEventListener("click", async () => {
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

  // create new character
  document
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
        const button = document.querySelector(".create-btn");
        button.style.backgroundColor = "green";
      } catch (err) {
        console.log(err);
        button.style.backgroundColor = "red";
      }
    });

  // delete one character
  document.querySelector("#delete-one").addEventListener("click", async () => {
    try {
      const charId = document.querySelector(
        'input[name="character-id-delete"]'
      ).value;
      const deletedChar = await charactersAPI.deleteOneRegister(charId);
      console.log(deletedChar);
    } catch (err) {
      console.log(err);
    }
  });

  // edit character
  const editForm = document.querySelector("#edit-character-form");
  editForm.addEventListener("submit", async (event) => {
    // selecting the elements
    const charId = document.querySelector('input[name="chr-id"]').value;
    const formData = {
      name: editForm.querySelector('input[name="name"]').value,
      occupation: editForm.querySelector('input[name="occupation"]').value,
      weapon: editForm.querySelector('input[name="weapon"]').value,
      cartoon: editForm.querySelector('input[name="cartoon"]').checked,
    };
    const button = document.querySelector(".update-btn");
    try {
      event.preventDefault();
      await charactersAPI.updateOneRegister(charId, formData);
      button.style.backgroundColor = "green";
    } catch (err) {
      console.log(err);
      button.style.backgroundColor = "red";
    }
  });
});
