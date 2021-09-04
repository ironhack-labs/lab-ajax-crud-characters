const charactersAPI = new APIHandler('http://localhost:8000');

window.addEventListener('load', () => {
  document
    .getElementById('fetch-all')
    .addEventListener('click', function (event) {
      charactersAPI.getFullList().then((response) => {
        console.log(response);
      });
    });

  // to fetch 1 object
  document
    .getElementById('fetch-one')
    .addEventListener('click', function (event) {
      const id = document.getElementById('character-id').value;
      charactersAPI.getOneRegister(id).then((response) => {
        console.log(response);
      });
    });

  // to delete an object
  document
    .getElementById('delete-one')
    .addEventListener('click', function (event) {});

  // to update the record
  document
    .getElementById('edit-character-form')
    .addEventListener('submit', (event) => {
      event.preventDefault();
      const id = document.getElementById('chr-id').value;
      const composition = [
        ...document.querySelectorAll('#edit-character-form input'),
      ].reduce((acc, input) => {
        return { ...acc, [input.name]: input.value };
      }, {});
      for (const property in composition) {
        if (!property) {
          delete composition[property];
        }
      }

      charactersAPI
        .updateOneRegister(id, composition)
        .then((response) => {
          return response;
        })
        .catch((err) => {
          console.log('Character not found', err);
        });
    });

  // to create an object
  document
    .getElementById('new-character-form')
    .addEventListener('submit', (event) => {
      event.preventDefault();
      const createButton = document.querySelector('#send-data');
      const inputs = [
        ...document.querySelectorAll('#new-character-form input'),
      ].reduce((acc, input) => {
        return { ...acc, [input.name]: input.value };
      }, {});

      if (inputs.name) {
        createButton.style.backgroundColor = '#00FFFF';
        charactersAPI
          .createOneRegister(inputs)
          .then((output) => console.log(output))
          .catch(() => {});
      } else {
        createButton.style.backgroundColor = '#DC143C';
      }
    });
});
