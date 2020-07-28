const charactersAPI = new APIHandler('http://localhost:8000');

const characterContainer = document.querySelector('.characters-container');

window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', function (event) {
    charactersAPI.getFullList()
      .then(response => {
        characterContainer.innerHTML = ""; //Vacía el container.
        response.data.forEach(character => {
          const newDiv = document.createElement('div');
          newDiv.innerHTML = `<div class="character-info">
        <div class="name">Character Name: ${character.name}</div>
        <div class="occupation">Character occupation: ${character.occupation}</div>
        <div class="cartoon">Is a Cartoon? ${character.cartoon}</div>
        <div class="weapon">Character weapon: ${character.weapon}</div>
      </div>`

          characterContainer.appendChild(newDiv);
        });
      })
      .catch((err) => console.log(err))
  });

  document.getElementById('fetch-one').addEventListener('click', function (event) {
    const id = document.getElementsByName("character-id")[0].value

    charactersAPI.getOneRegister(id)
      .then(response => {
        characterContainer.innerHTML = ""; //Vacía el container.
        const oneCharacter = response.data;
        const newDiv = document.createElement('div');
        newDiv.innerHTML = `<div class="character-info">
      <div class="name">Character Name: ${oneCharacter.name}</div>
      <div class="occupation">Character occupation: ${oneCharacter.occupation}</div>
      <div class="cartoon">Is a Cartoon? ${oneCharacter.cartoon}</div>
      <div class="weapon">Character weapon: ${oneCharacter.weapon}</div>
    </div>`

        characterContainer.appendChild(newDiv);
      })
      .catch((err) => console.log(err))
  });

  document.getElementById('delete-one').addEventListener('click', function (event) {
    const id = document.getElementsByName("character-id-delete")[0].value
    charactersAPI.deleteOneRegister(id)
  });

  document.getElementById('edit-character-form').addEventListener('submit', function (event) {
    const id = document.getElementsByName("chr-id")[0].value
    const nameInput = document.getElementsByName("name")[1].value;
    const occupationInput = document.getElementsByName("occupation")[1].value;
    const weaponInput = document.getElementsByName("weapon")[1].value;
    const cartoonInput = document.getElementsByName("cartoon")[1].checked; //El valor checked cambia checked por TRUE y unchecked por FALSE

    const updatedCharacter = {
      name: nameInput,
      occupation: occupationInput,
      weapon: weaponInput,
      cartoon: cartoonInput
    }

    charactersAPI.updateOneRegister(id, updatedCharacter)
  });

  document.getElementById('new-character-form').addEventListener('submit', function (event) {
    const nameInput = document.getElementsByName("name")[0].value;
    const occupationInput = document.getElementsByName("occupation")[0].value;
    const weaponInput = document.getElementsByName("weapon")[0].value;
    const cartoonInput = document.getElementsByName("cartoon")[0].checked;

    const newCharacter = {
      name: nameInput,
      occupation: occupationInput,
      weapon: weaponInput,
      cartoon: cartoonInput
    }

    charactersAPI.createOneRegister(newCharacter)
  });
});