const charactersAPI = new APIHandler('http://localhost:8000');

window.addEventListener('load', () => {
  document
    .getElementById('fetch-all')
    .addEventListener('click', function (event) {
      charactersAPI.getFullList().then(res => console.log(res.data));
    });

  document
    .getElementById('fetch-one')
    .addEventListener('click', function (event) {
      const id = document.querySelector('input[name="character-id"]').value;

      charactersAPI
        .getOneRegister(id)
        .then(res => console.log(res))
        .catch(err => {
          console.log(err);
        });
    });

  document.getElementById('delete-one').addEventListener('click', event => {
    const id = document.querySelector(
      'input[name="character-id-delete"]'
    ).value;
    charactersAPI.deleteOneRegister(id).then(() => {
      // todo Finish the the action
    });
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
