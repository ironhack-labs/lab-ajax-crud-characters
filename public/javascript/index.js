const apiHandler = new APIHandler('http://localhost:8000');

// Fetch and display all characters
document.getElementById('fetch-all').addEventListener('click', function() {
  apiHandler.getFullList().then(characters => {
    const container = document.querySelector('.characters-container');
    container.innerHTML = ''; // Clear previous entries
    characters.forEach(character => {
      const characterCard = `
        <div class="character-info">
          <div class="name">Name: ${character.name}</div>
          <div class="occupation">Occupation: ${character.occupation}</div>
          <div class="cartoon">Cartoon: ${character.cartoon ? 'Yes' : 'No'}</div>
          <div class="weapon">Weapon: ${character.weapon}</div>
        </div>`;
      container.innerHTML += characterCard; // Append new character info
    });
  }).catch(error => console.error('Failed to fetch characters:', error));
});

// Fetch and display a single character by ID
document.getElementById('fetch-one').addEventListener('click', function() {
  const id = document.querySelector('input[name="character-id"]').value;
  apiHandler.getOneRegister(id).then(character => {
    const container = document.querySelector('.characters-container');
    container.innerHTML = ''; // Clear previous entries
    const characterCard = `
      <div class="character-info">
        <div class="name">Name: ${character.name}</div>
        <div class="occupation">Occupation: ${character.occupation}</div>
        <div class="cartoon">Cartoon: ${character.cartoon ? 'Yes' : 'No'}</div>
        <div class="weapon">Weapon: ${character.weapon}</div>
      </div>`;
    container.innerHTML = characterCard; // Display character info
  }).catch(error => console.error('Failed to fetch character:', error));
});

// Delete a character by ID
document.getElementById('delete-one').addEventListener('click', function() {
  const id = document.querySelector('input[name="character-id-delete"]').value;
  apiHandler.deleteOneRegister(id).then(() => {
    document.getElementById('delete-one').style.backgroundColor = 'green'; // Change button color on success
  }).catch(() => {
    document.getElementById('delete-one').style.backgroundColor = 'red'; // Change button color on error
  });
});

// Handle new character creation
document.getElementById('new-character-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form from reloading the page
  const characterData = {
    name: document.querySelector('#new-character-form input[name="name"]').value,
    occupation: document.querySelector('#new-character-form input[name="occupation"]').value,
    weapon: document.querySelector('#new-character-form input[name="weapon"]').value,
    cartoon: document.querySelector('#new-character-form input[name="cartoon"]').checked
  };
  apiHandler.createOneRegister(characterData).then(() => {
    document.getElementById('create-data').style.backgroundColor = 'green'; // Change button color on success
  }).catch(() => {
    document.getElementById('create-data').style.backgroundColor = 'red'; // Change button color on error
  });
});

// Handle character update
document.getElementById('edit-character-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form from reloading the page
  const id = document.querySelector('#edit-character-form input[name="chr-id"]').value;
  const updateData = {
    name: document.querySelector('#edit-character-form input[name="name"]').value,
    occupation: document.querySelector('#edit-character-form input[name="occupation"]').value,
    weapon: document.querySelector('#edit-character-form input[name="weapon"]').value,
    cartoon: document.querySelector('#edit-character-form input[name="cartoon"]').checked
  };
  apiHandler.updateOneRegister(id, updateData).then(() => {
    document.getElementById('update-data').style.backgroundColor = 'green'; // Change button color on success
  }).catch(() => {
    document.getElementById('update-data').style.backgroundColor = 'red'; // Change button color on error
  });
});
