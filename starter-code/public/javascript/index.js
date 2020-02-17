// import APIHandler from "./APIHandler.js"
// const charactersAPI = new APIHandler('http://localhost:8000');

// function fetchAll() {
//   charactersAPI
//   .getFullList()
//   .then(res => {
//     console.log(res)
//   })
// }

// window.addEventListener('load', () => {
//   document.getElementById('fetch-all').addEventListener('click', function (event) {
//     fetchAll();
//   });

//   document.getElementById('fetch-one').addEventListener('click', function (event) {

//   });

//   document.getElementById('delete-one').addEventListener('click', function (event) {

//   });

//   document.getElementById('edit-character-form').addEventListener('submit', function (event) {

//   });

//   document.getElementById('new-character-form').addEventListener('submit', function (event) {

//   });
// });


import APIHandler from './APIHandler.js';
const charactersAPI = new APIHandler('http://localhost:8000');
const target = document.querySelector('.characters-container')
const inputFetchOne = document.querySelector(`input[name="character-id"]`);
const deleteBtn = document.getElementById('delete-one');
const newCharBtn = document.querySelector('#new-character-form #send-data')
const editCharBtn = document.querySelector('#edit-character-form #send-data')

function charTpl(obj) {
  return `<div class="character-info">
        <div class="id">id: ${obj.id}</div>
        <div class="name">name: ${obj.name}</div>
        <div class="occupation">occupation: ${obj.occupation}</div>
        <div class="weapon">weapon: ${obj.weapon}</div>
        <div class="cartoon">is a cartoon: ${obj.cartoon}</div>
      </div>`
}

function errTpl(err) {
  return `<div class="character-info"><div class="err">Err : ${err}</div></div>`
}

async function fetchAll(event) {
  let characters = await charactersAPI.getFullList();
  target.innerHTML = ``;
  characters.data.forEach(character => target.innerHTML += charTpl(character))
}
fetchAll();

async function fetchOne(event) {
  try {
    let characters = await charactersAPI.getOneRegister(inputFetchOne.value);
    target.innerHTML = ``;
    target.innerHTML += charTpl(characters.data)
  } catch (e) {
    target.innerHTML = errTpl('Character not found');
  }
}
window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', fetchAll);

  document.getElementById('fetch-one').addEventListener('click', fetchOne);

  document.getElementById('new-character-form').addEventListener('submit', async function (event) {
    event.preventDefault();
    const character = {
      name: document.querySelector(`#new-character-form input[name="name"]`).value,
      occupation: document.querySelector(`#new-character-form input[name="occupation"]`).value,
      weapon: document.querySelector(`#new-character-form input[name="weapon"]`).value,
      cartoon: document.querySelector(`#new-character-form input[name="cartoon"]`).checked
    };
    //return console.log(character)
    try {
      await charactersAPI.createOneRegister(character);
      newCharBtn.classList.add('green_bg')
      fetchAll()
    } catch (e) {
      newCharBtn.classList.add('red_bg')
    }
  });

  deleteBtn.addEventListener('click', async function (event) {
    const inputDeleteOne = document.querySelector(`input[name="character-id-delete"]`);
    deleteBtn.classList = ''
    try {
      await charactersAPI.deleteOneRegister(inputDeleteOne.value)
      deleteBtn.classList.add('green_bg')
    } catch (e) {
      deleteBtn.classList.add('red_bg')
    }
    inputDeleteOne.value = '';
    fetchAll()
  });

  document.getElementById('edit-character-form').addEventListener('submit', async function (event) {
    event.preventDefault();
    const character = {
      id: document.querySelector(`#edit-character-form input[name="chr-id"]`).value,
      name: document.querySelector(`#edit-character-form input[name="name"]`).value,
      occupation: document.querySelector(`#edit-character-form input[name="occupation"]`).value,
      weapon: document.querySelector(`#edit-character-form input[name="weapon"]`).value,
      cartoon: document.querySelector(`#edit-character-form input[name="cartoon"]`).checked
    };
    try {
      await charactersAPI.updateOneRegister(character)
      editCharBtn.classList.add('green_bg')
      fetchAll()
    } catch (e) {
      editCharBtn.classList.add('red_bg')
    }
  });

});
