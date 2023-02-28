const charactersAPI = new APIHandler('http://localhost:8000');

window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', function (event) {
    event.preventDefault();
    charactersAPI.getFullList()
      .then(characters => {
        const characterContainer = document.querySelector('.characters-container');
        characterContainer.innerHTML = '';
        characters.forEach(character => {
          const newDiv = document.createElement('div');
          newDiv.classList.add('character-info');
          newDiv.innerHTML = `
            <div class="name">Name: ${character.name}</div>
            <div class="occupation">Occupation: ${character.occupation}</div>
            <div class="cartoon">Is a Cartoon? ${character.cartoon}</div>
            <div class="weapon">Weapon: ${character.weapon}</div>
          `;
          characterContainer.appendChild(newDiv);
        });
      })
      .catch(error => console.log(error));
  });

  document.getElementById('fetch-one').addEventListener('click', function (event) {
    event.preventDefault();
    const id = document.querySelector(".operation input").value;
    charactersAPI
      .getOneRegister(id)
      .then((response) => {
        const characterContainer = document.querySelector('.characters-container');
        characterContainer.innerHTML = '';
        let nuevo =  `<div class="character-info">
            <div class="name">Name: ${response.name}</div>
            <div class="occupation">Occupation: ${response.occupation}</div>
            <div class="cartoon">Is a Cartoon? ${response.cartoon}</div>
            <div class="weapon">Weapon: ${response.weapon}</div>
          </div>`;
        characterContainer.innerHTML = nuevo;
      })
      .catch((err) => console.log(err));
  });

  document.getElementById('delete-one').addEventListener('click', function (event) {
    event.preventDefault();
    const characterId = document.querySelector(".operation.delete input").value;
    charactersAPI.deleteOneRegister(characterId)
      .then(response => {
        console.log(response);
        document.getElementById('delete-one').style.backgroundColor = 'green';
      })
      .catch(error => {
        console.log(error);
        document.getElementById('delete-one').style.backgroundColor = 'red';
      });
  });
  
  document.getElementById('edit-character-form').addEventListener('submit', function (event) {
    event.preventDefault();
  
    const form = document.getElementById('edit-character-form');
    const formData = new FormData(form);
  
    const characterId = formData.get('chr-id');
    const name = formData.get('name');
    const occupation = formData.get('occupation');
    const weapon = formData.get('weapon');
    const cartoon = formData.get('cartoon') === 'on';
  
    const updatedCharacter = { name, occupation, weapon, cartoon };
  
    charactersAPI.updateOneRegister(characterId, updatedCharacter)
      .then(response => {
        console.log(response);
        document.getElementById('send-data-edit').style.backgroundColor = 'green';
      })
      .catch(error => {
        console.log(error);
        document.getElementById('send-data-edit').style.backgroundColor = 'red';
      });
  });
  
  document.getElementById('new-character-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const form = document.getElementById('new-character-form');
    const formData = new FormData(form);

    const name = formData.get('name');
    const occupation = formData.get('occupation');
    const weapon = formData.get('weapon');
    const cartoon = formData.get('cartoon') === 'on';

    const newCharacter = { name, occupation, weapon, cartoon };

    charactersAPI.createOneRegister(newCharacter)
      .then(response => {
        console.log(response);
        document.getElementById('send-data-create').style.backgroundColor = 'green';
      })
      .catch(error => {
        console.log(error);
        document.getElementById('send-data-create').style.backgroundColor = 'red';
      });
  });
})