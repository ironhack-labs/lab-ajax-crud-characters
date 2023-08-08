const charactersAPI = new APIHandler('http://localhost:8000');

window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', async function (event) {
    try {
      const characters = await charactersAPI.getFullList();
      // Display the fetched characters in your application UI
      console.log('All characters:', characters);
    } catch (error) {
      console.error('Error fetching characters:', error);
    }
  });

  document.getElementById('fetch-one').addEventListener('click', async function (event) {
    const characterId = document.getElementById('character-id').value;
    try {
      const character = await charactersAPI.getOneRegister(characterId);
      // Display the fetched character in your application UI
      console.log('Character:', character);
    } catch (error) {
      console.error('Error fetching a character:', error);
    }
  });

  document.getElementById('delete-one').addEventListener('click', async function (event) {
    const characterId = document.getElementById('character-id-delete').value;
    try {
      await charactersAPI.deleteOneRegister(characterId);
      // Change button background color on success
      event.target.style.backgroundColor = 'green';
    } catch (error) {
      console.error('Error deleting character:', error);
      // Change button background color on error
      event.target.style.backgroundColor = 'red';
    }
  });

  document.getElementById('edit-character-form').addEventListener('submit', async function (event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const characterId = formData.get('chr-id');
    const characterData = {
      name: formData.get('name'),
      occupation: formData.get('occupation'),
      weapon: formData.get('weapon'),
      cartoon: formData.get('cartoon') === 'on',
    };

    try {
      await charactersAPI.updateOneRegister(characterId, characterData);
      // Change button background color on success
      document.getElementById('edit-data').style.backgroundColor = 'green';
    } catch (error) {
      console.error('Error updating character:', error);
      // Change button background color on error
      document.getElementById('edit-data').style.backgroundColor = 'red';
    }
  });

  document.getElementById('new-character-form').addEventListener('submit', async function (event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const characterData = {
      name: formData.get('name'),
      occupation: formData.get('occupation'),
      weapon: formData.get('weapon'),
      cartoon: formData.get('cartoon') === 'on',
    };

    try {
      await charactersAPI.createOneRegister(characterData);
      // Change button background color on success
      document.getElementById('send-data').style.backgroundColor = 'green';
    } catch (error) {
      console.error('Error creating character:', error);
      // Change button background color on error
      document.getElementById('send-data').style.backgroundColor = 'red';
    }
  });
});
