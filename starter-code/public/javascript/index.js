const charactersAPI = new APIHandler('http://localhost:8000');

function renderCharacters(charactersList) {
  const container = document.querySelector('div.characters-container');
  container.innerHTML = '';
  console.log(charactersList);
  for (let i = 0; i < charactersList.length; i++) {
    const prototype = `
              <div class="id">Id: ${charactersList[i].id}</div>  
              <div class="name">Name: ${charactersList[i].name}</div>
              <div class="occupation">Occupation: ${charactersList[i].occupation}</div>
              <div class="cartoon">Cartoon: ${charactersList[i].cartoon}</div>
              <div class="weapon">Weapon: ${charactersList[i].weapon}</div>`;

    const newInfo = document.createElement('div');
    newInfo.setAttribute('class', 'character-info');
    newInfo.innerHTML = prototype;
    container.appendChild(newInfo);
  }
}

window.addEventListener('load', () => {
  document
    .getElementById('fetch-all')
    .addEventListener('click', function(event) {
      charactersAPI
        .getFullList()
        .then((result) => {
          renderCharacters(result);
        })
        .catch((err) => console.log(err));
    });

  document
    .getElementById('fetch-one')
    .addEventListener('click', function(event) {
      charactersAPI
        .getOneRegister(
          document.querySelector("input[name='character-id']").value,
        )
        .then((result) => {
          renderCharacters([result]);
        })
        .catch((err) => console.log(err));

      document.querySelector("input[name='character-id']").value = '';
    });

  document
    .getElementById('delete-one')
    .addEventListener('click', function(event) {
      charactersAPI.deleteOneRegister(
        document.querySelector("input[name='character-id-delete']").value,
      );
    });

  document
    .getElementById('edit-character-form')
    .addEventListener('submit', function(event) {
      charactersAPI.updateOneRegister(
        document.querySelector('#edit-character-form input[name="chr-id"]')
          .value,
        {
          name: document.querySelector(
            '#edit-character-form input[name="name"]',
          ).value,
          occupation: document.querySelector(
            '#edit-character-form input[name="occupation"]',
          ).value,
          weapon: document.querySelector(
            '#edit-character-form input[name="weapon"]',
          ).value,
          cartoon: document.querySelector(
            '#edit-character-form input[name="cartoon"]',
          ).checked,
        },
      );
    });

  document
    .getElementById('new-character-form')
    .addEventListener('submit', function(event) {
      charactersAPI.createOneRegister({
        name: document.querySelector('#new-character-form input[name="name"]')
          .value,
        occupation: document.querySelector(
          '#new-character-form input[name="occupation"]',
        ).value,
        weapon: document.querySelector(
          '#new-character-form input[name="weapon"]',
        ).value,
        cartoon: document.querySelector(
          '#new-character-form input[name="cartoon"]',
        ).checked,
      });

      document.querySelector('form#new-character-form').reset;
    });
});
