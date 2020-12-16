const charactersAPI = new APIHandler('http://localhost:3000');

window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', (event) => {
    charactersAPI.getFullList() 
      .then((response) => {
        let htmlString = "";
        response.data.forEach(character => {
          htmlString += `<div class="character-info">`;
          htmlString += `<div class="id">Id: ${character.id}</div>`; 
          htmlString += `<div class="name">Name: ${character.name}</div>`; 
          htmlString += `<div class="occupation">Occupation: ${character.occupation}</div>`;
          htmlString += `<div class="cartoon">Is a Cartoon? ${character.cartoon}</div>`;
          htmlString += `<div class="weapon">Weapon: ${character.weapon}</div>`;
          htmlString += `</div>`;
        });
        document.querySelector('.characters-container').innerHTML = htmlString;
      })
      .catch((error) => {
        console.log(error)
      })
  });

  document.getElementById('fetch-one').addEventListener('click', function (event) {
    charactersAPI.getOneRegister(document.querySelector("input[name=character-id]").value)
      .then((response) => {
        let htmlString = "";
        const character = response.data;
        
        htmlString += `<div class="character-info">`;
        htmlString += `<div class="id">Id: ${character.id}</div>`; 
        htmlString += `<div class="name">Name: ${character.name}</div>`; 
        htmlString += `<div class="occupation">Occupation: ${character.occupation}</div>`;
        htmlString += `<div class="cartoon">Is a Cartoon? ${character.cartoon}</div>`;
        htmlString += `<div class="weapon">Weapon: ${character.weapon}</div>`;
        htmlString += `</div>`;

        document.querySelector('.characters-container').innerHTML = htmlString;
      })
      .catch((error) => {
        console.log(error)
        let htmlString = "";

        htmlString += `<div class="character-info">`;
        htmlString += `<p>The character is not in the database</p>`; 
        htmlString += `</div>`;

        document.querySelector('.characters-container').innerHTML = htmlString;
      })
  });

  document.getElementById('delete-one').addEventListener('click', function (event) {
    charactersAPI.deleteOneRegister(document.querySelector("input[name=character-id-delete]").value)
    .then((response) => {
      charactersAPI.getFullList(); 
      let htmlString = "";

        htmlString += `<div class="character-info">`;
        htmlString += `<p>Character deleted</p>`; 
        htmlString += `</div>`;

        document.querySelector('.characters-container').innerHTML = htmlString;
    })
    .catch((error) => {
      console.log(error)
        let htmlString = "";

        htmlString += `<div class="character-info">`;
        htmlString += `<p>Retrieve and try again</p>`; 
        htmlString += `</div>`;

        document.querySelector('.characters-container').innerHTML = htmlString;
    })
  });
  
  document.getElementById('edit-character-form').addEventListener('submit', event => {
    event.preventDefault();
    
    const charId = document.querySelector("input[name=chr-id]").value;
   
    const updatedCharacter = {
      name: document.getElementById("updated-name").value,
      occupation: document.getElementById("updated-occupation").value,
      weapon: document.getElementById("updated-weapon").value,
      cartoon: document.getElementById("updated-cartoon").checked
    };
  
    charactersAPI.updateOneRegister(updatedCharacter, charId)
    .then((response) => {
      charactersAPI.getFullList();
      document.getElementById('edit-character-form').reset();
      document.getElementById('update-data').style.backgroundColor = 'green';
    })
    .catch(error => {
      console.log(`Error while updating a character: ${error}`);
      document.getElementById('update-data').style.backgroundColor = 'red'; 
    })
    
  });

  
  document.getElementById('new-character-form').addEventListener('submit', function (event) {
    event.preventDefault();
    
    const newCharacter = {
      name: document.getElementById("new-name").value,
      occupation: document.getElementById("new-occupation").value,
      weapon: document.getElementById("new-weapon").value,
      cartoon: document.getElementById("new-cartoon").checked
    };
    
    charactersAPI.createOneRegister(newCharacter)
    .then((response) => {
      charactersAPI.getFullList();
      document.getElementById('new-character-form').reset();
      document.getElementById('send-data').style.backgroundColor = 'green';
    })
    .catch(error => {
      console.log(`Error while creating a character: ${error}`);
      document.getElementById('send-data').style.backgroundColor = 'red'; 
    })   
  });
});
