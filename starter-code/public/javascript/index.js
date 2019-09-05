const charactersAPI = new APIHandler('http://localhost:8000');

$(document).ready(() => {
  document.getElementById('fetch-all').onclick = function (){
    fullList();
  };

  document.getElementById('fetch-one').onclick = async function () {
    const id = document.getElementById('search').value;
    const {data} = await charactersAPI.getOneRegister(id);
    const charactersContainer = document.getElementById('characters-container');
    charactersContainer.innerHTML = '';
    charactersContainer.innerHTML += `
    <div class="character-info">
    <div class="name">Name: ${data.name}</div>
    <div class="occupation">Occupation: ${data.occupation}</div>
    <div class="cartoon">Is a Cartoon: ${data.cartoon}</div>
    <div class="weapon">Character Weapon: ${data.weapon}</div>
    `;
  };

  document.getElementById('delete-one').onclick = async function () {
    const id = document.getElementById('delete').value;
    await charactersAPI.deleteOneRegister(id);
    await fullList();
    document.getElementById('delete').value = '';
    
  };

  document.getElementById('edit-character-form').onsubmit = async function () {
    event.preventDefault();
    const id = document.getElementById('edit').value;
    const name = document.getElementById('edit-name').value;
    const occupation = document.getElementById('edit-occupation').value;
    const weapon = document.getElementById('edit-weapon').value;
    const cartoon = document.getElementById('edit-cartoon').checked;
    const editCharacter = {name, occupation, weapon, cartoon}
    const edit = await charactersAPI.updateOneRegister(id, editCharacter)
    fullList();
    document.getElementById('edit').value = '';
    document.getElementById('edit-name').value = '';
    document.getElementById('edit-occupation').value = '';
    document.getElementById('edit-weapon').value = '';
    document.getElementById('edit-cartoon').checked = false;

  };

  document.getElementById('new-character-form').onsubmit = async function (event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const occupation = document.getElementById('occupation').value;
    const weapon = document.getElementById('weapon').value;
    const cartoon = document.getElementById('cartoon').checked;
    const newCharacter = {name, occupation, weapon, cartoon}
    await charactersAPI.createOneRegister(newCharacter)
    await fullList();
    document.getElementById('name').value = ''
    document.getElementById('occupation').value = ''
    document.getElementById('weapon').value = ''
    document.getElementById('cartoon').checked = false
  };


});

async function fullList () {
  const characters = await charactersAPI.getFullList();
  const charactersContainer = document.getElementById('characters-container');
  charactersContainer.innerHTML = '';
  for (let i = 0; i < characters.data.length; i++) {
    charactersContainer.innerHTML += `
    <div class="character-info">
    <div class="name">Name: ${characters.data[i].name}</div>
    <div class="occupation">Occupation: ${characters.data[i].occupation}</div>
    <div class="cartoon">Is a Cartoon: ${characters.data[i].cartoon}</div>
    <div class="weapon">Character Weapon: ${characters.data[i].weapon}</div>
    `;
  }
}

// {
//   "characters": [
//     {
//       "id": 1,
//       "name": "Han Solo",
//       "occupation": "Smuggler",
//       "weapon": "Blaster Pistol",
//       "cartoon": true
//     },
//     {
//       "id": 2,
//       "name": "Luke Skywalker",
//       "occupation": "Jedi Knight",
//       "weapon": "Lightsaber",
//       "cartoon": false
//     },
//     {
//       "id": 3,
//       "name": "Sponge Bob",
//       "occupation": "Lives under the sea",
//       "weapon": "Crabby Patty",
//       "cartoon": true
//     }
//   ]
// }