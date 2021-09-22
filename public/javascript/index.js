const charactersAPI = new APIHandler('http://localhost:8000');

window.addEventListener('load', () => {
  const cardContainer = document.querySelector('.characters-container');
  const card = character => {
    return `
    <div class="character-info">
      <div class="id">
        ID: <span>${character.id}</span>
      </div>
      <div class="name">
        Name: <span>${character.name}</span>
      </div>
      <div class="occupation">
        Occupation: <span>${character.occupation}</span>
      </div>
      <div class="weapon">
        Weapon: <span>${character.weapon}</span>
      </div>
    </div>`;
  };

  document
    .getElementById('fetch-all')
    .addEventListener('click', function (event) {
      charactersAPI.getFullList().then(allCharacters => {
        cardContainer.innerHTML = '';
        const character = allCharacters.data;
        console.log(character);
        character.forEach(character => {
          cardContainer.innerHTML += card(character);
        });
      });
    });

  document
    .getElementById('fetch-one')
    .addEventListener('click', function (event) {
      const id = document.querySelector('input[name="character-id"]').value;

      charactersAPI
        .getOneRegister(id)
        .then(singleCharacter => {
          const character = singleCharacter.data;

          cardContainer.innerHTML += card(character);
        })
        .catch(err => {
          console.log(err);
        });
    });

  document.getElementById('delete-one').addEventListener('click', event => {
    const id = document.querySelector(
      'input[name="character-id-delete"]'
    ).value;
    charactersAPI.deleteOneRegister(id);
  });

  document
    .getElementById('edit-character-form')
    .addEventListener('submit', function (event) {
      const id = document.querySelector(
        '#edit-character-form input[name="chr-id"]'
      ).value;
      const occupation = document.querySelector(
        '#edit-character-form input[name="occupation"]'
      ).value;
      const name = document.querySelector(
        '#edit-character-form input[name="name"]'
      ).value;
      const weapon = document.querySelector(
        '#edit-character-form input[name="weapon"]'
      ).value;
      const cartoon = document.querySelector(
        '#edit-character-form input[name="cartoon"]'
      ).checked;

      const updatedCharacter = {
        name,
        occupation,
        weapon,
        cartoon,
      };

      charactersAPI.updateOneRegister(id, updatedCharacter);
    });

  document
    .getElementById('new-character-form')
    .addEventListener('submit', function (event) {
      const occupation = document.querySelector(
        '#new-character-form input[name="occupation"]'
      ).value;
      const name = document.querySelector(
        '#new-character-form input[name="name"]'
      ).value;
      const weapon = document.querySelector(
        '#new-character-form input[name="weapon"]'
      ).value;
      const cartoon = document.querySelector(
        '#new-character-form input[name="cartoon"]'
      ).checked;

      const newCharacter = {
        name,
        occupation,
        weapon,
        cartoon,
      };

      charactersAPI.createOneRegister(newCharacter).then(result => {
        console.log(result);
      });
    });
});
