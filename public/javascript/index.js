const charactersAPI = new APIHandler('http://localhost:8000');

window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', function (event) {
    event.preventDefault();
    charactersAPI.getFullList()
  });

  document.getElementById('fetch-one').addEventListener('click', function (event) {
    event.preventDefault();

    const charId = document.querySelector('#fetchOneInput').value;
    console.log(charId);
    charactersAPI.getOneRegister(charId);
  });

  document.getElementById('delete-one').addEventListener('click', function (event) {
    event.preventDefault();

    const charId = document.querySelector('#fetchOneDelete').value;
    console.log(charId);
    charactersAPI.deleteOneRegister(charId);
  });

  document.getElementById('edit-character-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const id = document.querySelector('#idEdit').value;
    const name = document.querySelector('#nameEdit').value;
    const occupation = document.querySelector('#occupationEdit').value;
    const weapon = document.querySelector('#weaponEdit').value;
    const cartoon = document.querySelector('#cartoonEdit').value;

    const editChar = {
      id,
      name,
      occupation,
      weapon,
      cartoon
    };

    console.log(editChar);
    charactersAPI.updateOneRegister(editChar);
  });

  document.getElementById('new-character-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.querySelector('#nameInput').value;
    const occupation = document.querySelector('#occupationInput').value;
    const weapon = document.querySelector('#weaponInput').value;
    const cartoon = document.querySelector('#cartoonInput').value;

    const newChar = {
      name,
      occupation,
      weapon,
      cartoon
    };

    charactersAPI.createOneRegister(newChar);
  });
});
