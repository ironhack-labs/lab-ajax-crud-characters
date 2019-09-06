const charactersAPI = new APIHandler("http://localhost:8000")

$(document).ready(() => {
  document.getElementById('fetch-all').onclick = async () => {
    const allCharacters = await charactersAPI.getFullList();

    const container = document.querySelector('.characters-container');
    container.innerHTML = '';
    allCharacters.forEach((character) => {
      container.innerHTML += `
      <div class="character-info">
        <div>
          Id:
          <span>
            ${character.id}
          </span>
        </div>
        <div>
          Name:
          <span>
            ${character.name}
          </span>
        </div>
        <div>
          Occupation:
          <span>
            ${character.occupation}
          </span>
        </div>
        <div>
          Is a Cartoon?:
          <span>
            ${character.cartoon}
          </span>
        </div>
        <div>
          Weapon:
          <span>
            ${character.weapon}
          </span>
        </div>
      </div>
      `;
    });
  };

  document.getElementById('fetch-one').onclick = async () => {
    const characterId = document.getElementById('characterId').value;
    const characterFound = await charactersAPI.getOneRegister(characterId);
    const container = document.querySelector('.characters-container');
    container.innerHTML = '';
    container.innerHTML += `
    <div class="character-info">
      <div>
        Id:
        <span>
          ${characterFound.data.id}
        </span>
      </div>
      <div>
        Name:
        <span>
          ${characterFound.data.name}
        </span>
      </div>
      <div>
        Occupation:
        <span>
          ${characterFound.data.occupation}
        </span>
      </div>
      <div>
        Is a Cartoon?:
        <span>
          ${characterFound.data.cartoon}
        </span>
      </div>
      <div>
        Weapon:
        <span>
          ${characterFound.data.weapon}
        </span>
      </div>
    </div>
    `;
  };

  document.getElementById('delete-one').onclick = async () => {
    const deleteId = document.getElementById('deleteId').value;
    const deleted = await charactersAPI.deleteOneRegister(deleteId);
    if (deleted) {
      document.getElementById('delete-one').classList.add('active');
    } else {
      document.getElementById('delete-one').classList.add('inactive');
    }
  };

  document.getElementById('edit-character-form').onsubmit = async (event) => {
    event.preventDefault();
    const editId = document.getElementById('editId').value;
    const editName = document.getElementById('editName').value;
    const editOccupation = document.getElementById('editOccupation').value;
    const editWeapon = document.getElementById('editWeapon').value;
    const editIsCartoon = document.getElementById('editIsCartoon').checked;
    const characterToEdit = {
      name: editName,
      occupation: editOccupation,
      weapon: editWeapon,
      cartoon: editIsCartoon,
    };
    const characterEdited = await charactersAPI.updateOneRegister(editId, characterToEdit);
    if (characterEdited) {
      document.getElementById('edit-data').classList.add('active');
    } else {
      document.getElementById('edit-data').classList.add('inactive');
    }
  };

  document.getElementById('new-character-form').onsubmit = async () => {
    event.preventDefault();
    const newName = document.getElementById('newName').value;
    const newOccupation = document.getElementById('newOccupation').value;
    const newWeapon = document.getElementById('newWeapon').value;
    const newIsCartoon = document.getElementById('newIsCartoon').checked;
    const characterToCreate = {
      name: newName,
      occupation: newOccupation,
      weapon: newWeapon,
      cartoon: newIsCartoon,
    };
    const characterCreated = await charactersAPI.createOneRegister(characterToCreate);
    if (characterCreated) {
      document.getElementById('send-data').classList.add('active');
    } else {
      document.getElementById('send-data').classList.add('inactive');
    }
  };
});
