const charactersAPI = new APIHandler('http://localhost:8000');

window.addEventListener('load', () => {
  document
    .getElementById('fetch-all')
    .addEventListener('click', function (event) {
      document.getElementsByClassName('characters-container')[0].innerHTML = '';
      charactersAPI
        .getFullList()
        .then((output) => {
          output.data.forEach((element) => {
            document.getElementsByClassName(
              'characters-container'
            )[0].innerHTML += `
          <div class="character-info">
            <div class="name">Id: <span>${element.id}</span></div>
            <div class="name">Name: <span>${element.name}</span></div>
            <div class="occupation">Occupation: <span>${element.occupation}</span></div>
            <div class="cartoon">Is a Cartoon?: <span>${element.cartoon}</span></div>
            <div class="weapon">Weapon: <span>${element.weapon}</span></div>
          </div>
        `;
          });
        })
        .catch((error) => {
          console.log(error);
        });
    });

  document
    .getElementById('fetch-one')
    .addEventListener('click', function (event) {
      const characterId = document.querySelector('.operation input').value;
      charactersAPI
        .getOneRegister(characterId)
        .then((output) => {
          document.getElementsByClassName(
            'characters-container'
          )[0].innerHTML = `
          <div class="character-info">
            <div class="name">Id: <span>${output.data.id}</span></div>
            <div class="name">Name: <span>${output.data.name}</span></div>
            <div class="occupation">Occupation: <span>${output.data.occupation}</span></div>
            <div class="cartoon">Is a Cartoon?: <span>${output.data.cartoon}</span></div>
            <div class="weapon">Weapon: <span>${output.data.weapon}</span></div>
          </div>
        `;
        })
        .catch((error) => {
          console.log(error);
        });
    });

  document
    .getElementById('delete-one')
    .addEventListener('click', function (event) {
      const characterId = document.querySelector('.operation.delete input')
        .value;
      charactersAPI
        .deleteOneRegister(characterId)
        .then(() => {
          document.getElementById('delete-one').className = 'success-color';
        })
        .catch((error) => {
          document.getElementById('delete-one').className = 'failure-color';
          console.log(error);
        });
    });

  document
    .getElementById('edit-character-form')
    .addEventListener('submit', function (event) {
      event.preventDefault();
      const inputInfo = document
        .getElementById('edit-character-form')
        .querySelectorAll('input');
      const characterInfo = {
        name: inputInfo[1].value,
        occupation: inputInfo[2].value,
        weapon: inputInfo[3].value,
        cartoon: inputInfo[4].checked,
      };
      charactersAPI
        .updateOneRegister(inputInfo[0].value, characterInfo)
        .then(() => {
          document.querySelector('#edit-character-form #send-data').className =
            'success-color';
          setTimeout(() => {
            document.querySelector(
              '#edit-character-form #send-data'
            ).className = '';
          }, 4000);
        })
        .catch((error) => {
          document.querySelector('#edit-character-form #send-data').className =
            'failure-color';
          setTimeout(() => {
            document.querySelector(
              '#edit-character-form #send-data'
            ).className = '';
          }, 4000);
          console.log(error);
        });
    });

  document
    .getElementById('new-character-form')
    .addEventListener('submit', function (event) {
      event.preventDefault();
      const inputInfo = document
        .getElementById('new-character-form')
        .querySelectorAll('#new-character-form input');
      const newCharacter = {
        name: inputInfo[0].value,
        occupation: inputInfo[1].value,
        weapon: inputInfo[2].value,
        cartoon: inputInfo[3].checked,
      };
      charactersAPI
        .createOneRegister(newCharacter)
        .then(() => {
          document.querySelector('#new-character-form #send-data').className =
            'success-color';
          setTimeout(() => {
            document.querySelector('#new-character-form #send-data').className =
              '';
          }, 4000);
        })
        .catch((error) => {
          document.querySelector('#new-character-form #send-data').className =
            'failure-color';
          setTimeout(() => {
            document.querySelector('#new-character-form #send-data').className =
              '';
          }, 4000);
          console.log(error);
        });
    });
});
