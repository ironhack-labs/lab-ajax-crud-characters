const charactersAPI = new APIHandler('http://localhost:8000');

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('fetch-all').addEventListener('click', async function (event) {
    try {
      console.log("fetch all clicked");
      const response = await charactersAPI.getFullList("characters");
      const allCharacters = {
        characters: response,
      };
      console.log("Here are the characters", allCharacters);
    } catch (error) {
      console.error(error);
    }
  });

  document.getElementById('fetch-one').addEventListener('click', async function (event) {
    try {
      console.log("fetch one clicked");
      const idInput = document.querySelector("#onechar").value;
      const oneCharacter = await charactersAPI.getOneRegister(idInput);
      console.log("One character of given id found", oneCharacter);
    } catch (error) {
      console.error(error);
    }
  });

  document.getElementById('delete-one').addEventListener('click', async function (event) {
    try {
      console.log("delete one clicked");
      const idDelete = document.querySelector("#deletedchar").value;
      const oneCharacter = await charactersAPI.deleteOneRegister(idDelete);
      console.log("One character of given id deleted", oneCharacter);
    } catch (error) {
      console.error(error);
    }
  });

  document.getElementById('new-character-form').addEventListener('submit', async function (event) {
    try {
      event.preventDefault();
      console.log("new character form submitted");
      const idInput = document.querySelector("#new-char-id").value;
      const nameInput = document.querySelector("#new-char-name").value;
      const occupationInput = document.querySelector("#new-char-occupation").value;
      const weaponInput = document.querySelector("#new-char-weapon").value;
      const cartoonInput = document.querySelector("#new-char-cartoon").checked;
      const newCharacter = await charactersAPI.createOneRegister({ id: idInput, name: nameInput, occupation: occupationInput, weapon: weaponInput, cartoon: cartoonInput });
      console.log("New character created", newCharacter);
      document.getElementById('new-character-form').reset();
    } catch (error) {
      console.error(error);
    }
  });

  document.getElementById('edit-character-form').addEventListener('submit', async function (event) {
    try {
      event.preventDefault();
      console.log("edit character form submitted");
      const idInput = document.querySelector("#edit-char-id").value;
      const nameInput = document.querySelector("#edit-char-name").value;
      const occupationInput = document.querySelector("#edit-char-occupation").value;
      const weaponInput = document.querySelector("#edit-char-weapon").value;
      const cartoonInput = document.querySelector("#edit-char-cartoon").checked;
      const data = { name: nameInput, occupation: occupationInput, weapon: weaponInput, cartoon: cartoonInput };
      const editChar = await updateOneRegister(idInput, data);
      console.log("Edited Characters:", editChar);
    } catch (error) {
      console.error(error);
    }
  });

});
