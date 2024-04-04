const charactersAPI = new APIHandler('http://localhost:8000');

window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', function (event) {
    charactersAPI.getAllCharacters()
      .then(response => {
        console.log(response.data); // For now, we're just logging the data
        // Here, you'd convert this data into HTML elements to display the characters
      })
      .catch(error => console.error(error));
  });

  document.getElementById('fetch-one').addEventListener('click', function (event) {
    const id = document.getElementById('character-id').value; // Assuming you have an input field with this ID
    charactersAPI.getCharacter(id)
      .then(response => {
        console.log(response.data); // Logging the single character data
        // Convert this data to display the character details
      })
      .catch(error => console.error(error));
  });

  document.getElementById('delete-one').addEventListener('click', function (event) {
    const id = document.getElementById('delete-id').value; // Assuming an input field for ID
    charactersAPI.deleteCharacter(id)
      .then(() => {
        console.log(`Character with id ${id} deleted`);
        this.style.backgroundColor = 'green'; // Visual feedback for successful deletion
      })
      .catch(error => {
        console.error(error);
        this.style.backgroundColor = 'red'; // Visual feedback for an error
      });
  });

  document.getElementById('edit-character-form').addEventListener('submit', function (event) {
    event.preventDefault();
  
    const id = this.elements.id.value; // Assuming there's an input field named 'id' in your form
    const characterData = {
      name: this.elements.name.value,
      occupation: this.elements.occupation.value,
      weapon: this.elements.weapon.value,
      cartoon: this.elements.cartoon.checked
    };
  
    charactersAPI.updateCharacter(id, characterData)
      .then(response => {
        console.log(response.data);
        this.elements.submit.style.backgroundColor = 'green';
      })
      .catch(error => {
        console.error(error);
        this.elements.submit.style.backgroundColor = 'red';
      });
  });

  document.getElementById('new-character-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the form from submitting in the traditional way
  
    const characterData = {
      name: this.elements.name.value,
      occupation: this.elements.occupation.value,
      weapon: this.elements.weapon.value,
      cartoon: this.elements.cartoon.checked
    };
  
    charactersAPI.createCharacter(characterData)
      .then(response => {
        console.log(response.data); // Logging the created character
        this.elements.submit.style.backgroundColor = 'green'; // Assuming your submit button has a name="submit"
      })
      .catch(error => {
        console.error(error);
        this.elements.submit.style.backgroundColor = 'red';
      });
  });
});
