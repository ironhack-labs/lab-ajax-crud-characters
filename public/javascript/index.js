const charactersAPI = new APIHandler('http://localhost:8000');

window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', async function (event) {
    try {
      const characters = await charactersAPI.getFullList();
      displayCharacters(characters);
    } catch (error) {
      console.error('Error fetching and displaying characters:', error);
    }
  });

  document.getElementById('fetch-one').addEventListener('click', async function (event) {
    const characterId = document.getElementById('fetch-one-input').value;

    try {
      const character = await charactersAPI.getOneRegister(characterId);
      displayCharacters([character]);
    } catch (error) {
      console.error(`Error fetching and displaying character with ID ${characterId}:`, error);
    }
  });

  document.getElementById('delete-one').addEventListener('click', async function (event) {
    const characterId = document.getElementById('delete-one-input').value;

    try {
      await charactersAPI.deleteOneRegister(characterId);
      console.log(`Character with ID ${characterId} deleted successfully`);
    } catch (error) {
      console.error(`Error deleting character with ID ${characterId}:`, error);
    }
  });

  document.getElementById('edit-character-form').addEventListener('submit', async function (event) {
    event.preventDefault();

    const characterId = document.getElementById('edit-character-input').value;
    const updatedData = {
      name: document.getElementById('edit-name').value,
      occupation: document.getElementById('edit-occupation').value,
      weapon: document.getElementById('edit-weapon').value,
    };

    try {
      const updatedCharacter = await charactersAPI.updateOneRegister(characterId, updatedData);
      console.log('Updated character:', updatedCharacter);
    } catch (error) {
      console.error(`Error updating character with ID ${characterId}:`, error);
    }
  });

  document.getElementById('new-character-form').addEventListener('submit', async function (event) {
    event.preventDefault();

    const newCharacterData = {
      name: document.getElementById('new-name').value,
      occupation: document.getElementById('new-occupation').value,
      weapon: document.getElementById('new-weapon').value,
    };

    try {
      const createdCharacter = await charactersAPI.createOneRegister(newCharacterData);
      console.log('Created character:', createdCharacter);
    } catch (error) {
      console.error('Error creating character:', error);
    }
  });
});
