const charactersAPI = new APIHandler('http://localhost:8000');

window.addEventListener('load', () => {
  document
    .getElementById('fetch-all')
    .addEventListener('click', function (event) {
      charactersAPI
        .getFullList()
        .then((response) => {
          const body = document.querySelector('body');
          const charSection = createCharacterSection(response.data);
          body.insertBefore(charSection, document.querySelector('.ref'));
        })
        .catch((err) => console.log(err));
    });

  document
    .getElementById('fetch-one')
    .addEventListener('click', function (event) {
      const id = document.querySelector('.fetch-input').value;

      charactersAPI
        .getOneRegister(id)
        .then((response) => {
          // console.log(response.data);
          const body = document.querySelector('body');
          const charSection = getOne(response.data);
          body.insertBefore(charSection, document.querySelector('.ref'));
        })

        .catch((err) => console.log(err));
    });

  document
    .getElementById('delete-one')
    .addEventListener('click', function (event) {
      const id = document.querySelector('.delete-input').value;
      const deleteBtn = document.getElementById('delete-one');

      charactersAPI
        .getOneRegister(id)
        .then((response) => {
          console.log('Deleted item:', response.data.name);
          deleteBtn.style.backgroundColor = 'green';
        })
        .catch((err) => {
          console.log(err);
          deleteBtn.style.backgroundColor = 'red';
        });
    });

  document
    .getElementById('edit-character-form')
    .addEventListener('submit', function (event) {
      event.preventDefault();

      const editBtn = document.querySelector('#edit-character-form #send-data');
      const id = document.querySelector('.edit-id-input').value;
      const name = document.querySelector('.edit-name-input').value;
      const occupation = document.querySelector('.edit-occupation-input').value;
      const weapon = document.querySelector('.edit-weapon-input ').value;
      const cartoon = document.querySelector('.edit-checkbox-input ').checked;

      const editCharacter = {
        name,
        occupation,
        weapon,
        cartoon,
      };
      console.log(editCharacter);

      charactersAPI
        .updateOneRegister(id, editCharacter)
        .then((response) => {
          console.log('Edited item: ', response.data.name);
          editBtn.style.backgroundColor = 'green';
        })
        .catch((err) => {
          console.log(err);
          editBtn.style.backgroundColor = 'red';
        });
    });

  document
    .getElementById('new-character-form')
    .addEventListener('submit', function (event) {
      event.preventDefault();

      const createBtn = document.querySelector(
        '#new-character-form #send-data'
      );
      const name = document.getElementById('new-name-input').value;
      const occupation = document.getElementById('new-occupation-input').value;
      const weapon = document.getElementById('new-weapon-input').value;
      const cartoon = document.getElementById('new-cartoon-checkbox').checked;

      const newCharacter = {
        name,
        occupation,
        weapon,
        cartoon,
      };

      charactersAPI
        .createOneRegister(newCharacter)
        .then((response) => {
          console.log('A new character created: ', response.data.name);
          createBtn.style.backgroundColor = 'green';
        })
        .catch((err) => {
          console.log(err);
          createBtn.style.backgroundColor = 'red';
        });
    });
});
