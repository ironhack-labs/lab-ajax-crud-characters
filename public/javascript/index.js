const charactersAPI = new APIHandler('http://localhost:8000');
const charactersAPI = new APIHandler('http://localhost:7000');

window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', function (event) {
  document
    .getElementById('fetch-all')
    .addEventListener('click', async function (event) {
      const list = await charactersAPI.getFullList();
      document.querySelector('.characters-container').innerHTML = '';
      list.data.forEach((el) => {
        const newElement = `<div class="character-info">
        <div class="name">Name : ${el.name}</div>
        <div class="occupation">Occupation: ${el.occupation}</div>
        <div class="cartoon">Is ${el.cartoon ? '' : 'not'} cartoon</div>
        <div class="weapon">Weapon: ${el.weapon}</div>
      </div>`;
        document
          .querySelector('.characters-container')
          .insertAdjacentHTML('beforeend', newElement);
      });
    });

  });
  document
    .getElementById('fetch-one')
    .addEventListener('click', async function (event) {
      const id = document.querySelector('input[name="character-id"]').value;
      console.log(id);
      const character = await charactersAPI.getOneRegister(id);
      console.log(character.data);
      const newElement = `<div class="character-info">
        <div class="name">Name : ${character.data.name}</div>
        <div class="occupation">Occupation: ${character.data.occupation}</div>
        <div class="cartoon">Is ${
          character.data.cartoon ? '' : 'not'
        } cartoon</div>
        <div class="weapon">Weapon: ${character.data.weapon}</div>
      </div>`;
      document.querySelector('.characters-container').innerHTML = '';
      document
        .querySelector('.characters-container')
        .insertAdjacentHTML('beforeend', newElement);
    });

  document.getElementById('fetch-one').addEventListener('click', function (event) {
  document
    .getElementById('delete-one')
    .addEventListener('click', async function (event) {
      try {
        const id = document.querySelector(
          'input[name="character-id-delete"]'
        ).value;
        console.log(id);
        const character = await charactersAPI.deleteOneRegister(id);
        console.log(character);
        document.querySelector('button#delete-one').style.backgroundColor =
          'green';
      } catch (error) {
        console.log(error);
        document.querySelector('button#delete-one').style.backgroundColor =
          'red';
      }
    });

  });
  document
    .getElementById('edit-character-form')
    .addEventListener('submit', async function (event) {
      try {
        event.preventDefault();
        const id = event.target[0].value ? event.target[0].value : '';
        const character = await charactersAPI.getOneRegister(id);
        const name = event.target[1].value
          ? event.target[1].value
          : character.data.name;
        const occupation = event.target[2].value
          ? event.target[2].value
          : character.data.occupation;
        const weapon = event.target[3].value
          ? event.target[3].value
          : character.data.weapon;
        const cartoon = event.target[4].value
          ? event.target[4].value === 'on'
            ? true
            : false
          : character.data.cartoon;
        const info = { name, occupation, weapon, cartoon };
        console.log(info, id);
        const characterUpdate = await charactersAPI.updateOneRegister(id, info);
        console.log(characterUpdate);
        document.querySelector(
          '#edit-character-form button#send-data'
        ).style.backgroundColor = 'green';
      } catch (error) {
        document.querySelector(
          '#edit-character-form button#send-data'
        ).style.backgroundColor = 'red';
      }
    });

  document.getElementById('delete-one').addEventListener('click', function (event) {

  });

  document.getElementById('edit-character-form').addEventListener('submit', function (event) {

  });

  document.getElementById('new-character-form').addEventListener('submit', function (event) {

  });
  document
    .getElementById('new-character-form')
    .addEventListener('submit', async function (event) {
      try {
        event.preventDefault();
        const list = await charactersAPI.getFullList();
        const id = list.data[list.data[length - 1] + 1];
        const name = event.target[0].value;
        const occupation = event.target[1].value;
        const weapon = event.target[2].value;
        const cartoon = event.target[3].value === 'on' ? true : false;
        const info = { id, name, occupation, weapon, cartoon };
        console.log(info);
        const character = await charactersAPI.createOneRegister(info);
        console.log(character);
        document.querySelector(
          '#new-character-form button#send-data'
        ).style.backgroundColor = 'green';
      } catch (error) {
        document.querySelector(
          '#new-character-form button#send-data'
        ).style.backgroundColor = 'red';
      }
    });
});