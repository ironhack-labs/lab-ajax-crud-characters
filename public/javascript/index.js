const charactersAPI = new APIHandler('http://localhost:8000');

window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', async event => {
    event.preventDefault();
    let str = '';
    document.getElementById('characters-container').innerHTML = str;

    const responseFromAPI = await charactersAPI.getFullList();
    console.log(responseFromAPI);
    responseFromAPI.forEach(character => {
      str += `<div class="character-info">
          <div class="id">id:<span class="float-right">${character.id}</span></div>
          <div class="name">Name:<span class="float-right">${character.name}</span></div>
          <div class="occupation">Occupation:<span class="float-right">${character.occupation}</span></div>
          <div class="cartoon">Is a Cartoon?:<span class="float-right">${character.cartoon}</span></div>
          <div class="weapon">Weapon:<span class="float-right">${character.weapon}</span></div>
          </div>`;
      document.getElementById('characters-container').innerHTML = str;
    });
  });

  document.getElementById('fetch-one').addEventListener('click', async event => {
    event.preventDefault();
    const idToSearch = document.getElementById('character-id').value;
    console.log(idToSearch);

    const character = await charactersAPI.getOneRegister(idToSearch);
    console.log(character);

    const str = `<div class="character-info">
          <div class="id">id:<span class="float-right">${character.id}</span></div>
          <div class="name">Name:<span class="float-right">${character.name}</span></div>
          <div class="occupation">Occupation:<span class="float-right">${character.occupation}</span></div>
          <div class="cartoon">Is a Cartoon?:<span class="float-right">${character.cartoon}</span></div>
          <div class="weapon">Weapon:<span class="float-right">${character.weapon}</span></div>
          </div>`;

    document.getElementById('characters-container').innerHTML = str;
  });

  document.getElementById('delete-one').addEventListener('click', async event => {
    event.preventDefault();
    const idToDelete = document.getElementById('character-id-delete').value;
    console.log(idToDelete);

    await charactersAPI.deleteOneRegister(idToDelete);

    const str = `<div class="character-info">
          <div class="id">id:<span class="float-right">${idToDelete} was removed</span></div>
          </div>`;

    document.getElementById('characters-container').innerHTML = str;
  });

  document.getElementById('edit-character-form').addEventListener('submit', async event => {
    event.preventDefault();
    let str = '';
    document.getElementById('characters-container').innerHTML = str;

    const editId = document.getElementById('edit-id').value;
    const editName = document.getElementById('edit-name').value;
    const editOccupation = document.getElementById('edit-occupation').value;
    const editWeapon = document.getElementById('edit-weapon').value;
    const editCartoon = document.getElementById('edit-cartoon').checked;

    const editCharacter = {
      name: editName,
      occupation: editOccupation,
      weapon: editWeapon,
      cartoon: editCartoon,
    };

    await charactersAPI.updateOneRegister(editId, editCharacter);

    const responseFromAPI = await charactersAPI.getFullList();
    responseFromAPI.forEach(character => {
      str += `<div class="character-info">
          <div class="id">id:<span class="float-right">${character.id}</span></div>
          <div class="name">Name:<span class="float-right">${character.name}</span></div>
          <div class="occupation">Occupation:<span class="float-right">${character.occupation}</span></div>
          <div class="cartoon">Is a Cartoon?:<span class="float-right">${character.cartoon}</span></div>
          <div class="weapon">Weapon:<span class="float-right">${character.weapon}</span></div>
          </div>`;
      document.getElementById('characters-container').innerHTML = str;
    });
  });

  document.getElementById('new-character-form').addEventListener('submit', async event => {
    event.preventDefault();
    let str = '';
    document.getElementById('characters-container').innerHTML = str;

    const newName = document.getElementById('new-name').value;
    const newOccupation = document.getElementById('new-occupation').value;
    const newWeapon = document.getElementById('new-weapon').value;
    const newCartoon = document.getElementById('new-cartoon').checked;

    const newCharacter = {
      name: newName,
      occupation: newOccupation,
      weapon: newWeapon,
      cartoon: newCartoon,
    };

    await charactersAPI.createOneRegister(newCharacter);

    const responseFromAPI = await charactersAPI.getFullList();
    responseFromAPI.forEach(character => {
      str += `<div class="character-info">
          <div class="id">id:<span class="float-right">${character.id}</span></div>
          <div class="name">Name:<span class="float-right">${character.name}</span></div>
          <div class="occupation">Occupation:<span class="float-right">${character.occupation}</span></div>
          <div class="cartoon">Is a Cartoon?:<span class="float-right">${character.cartoon}</span></div>
          <div class="weapon">Weapon:<span class="float-right">${character.weapon}</span></div>
          </div>`;
      document.getElementById('characters-container').innerHTML = str;
    });
  });
});
