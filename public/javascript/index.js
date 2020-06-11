const charactersAPI = new APIHandler('http://localhost:8000');

window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', function (event) {
    charactersAPI.getFullList()
    .then(allCharacters => {
      const data = allCharacters.data;

      let html = "";

      data.forEach(character => {
        html = html + `
        <div class="character-info columns-2">
          <div>
            <div>Id:</div>
            <div>Name:</div>
            <div>Occupation:</div>
            <div>Is a Cartoon?:</div>
            <div>Weapon:</div>
          </div>
          <div class="col-2">
            <div>${character.id}</div>
            <div>${character.name}</div>
            <div>${character.occupation}</div>
            <div>${character.cartoon}</div>
            <div>${character.weapon}</div>
          </div>
        </div>
        `;
      });

      document.getElementById('fetch-all-container').innerHTML = html;
    })
    .catch(err => console.log('Error while getting the data: ', err));

    
  });

  document.getElementById('fetch-one').addEventListener('click', function (event) {
    const id = document.getElementById('search-id').value;
    charactersAPI.getOneRegister(id)
    .then(oneCharacter => {
      const character = oneCharacter.data;

      let html =  `
        <div class="character-info columns-2">
          <div>
            <div>Id:</div>
            <div>Name:</div>
            <div>Occupation:</div>
            <div>Is a Cartoon?:</div>
            <div>Weapon:</div>
          </div>
          <div class="col-2">
            <div>${character.id}</div>
            <div>${character.name}</div>
            <div>${character.occupation}</div>
            <div>${character.cartoon}</div>
            <div>${character.weapon}</div>
          </div>
        </div>
        `;


      document.getElementById('fetch-all-container').innerHTML = html;
    })
    .catch(err => console.log('Error while getting the data: ', err));
  });

  document.getElementById('delete-one').addEventListener('click', function (event) {
    const id = document.getElementById('delete-id').value;
    charactersAPI.deleteOneRegister(id)
      .then(responseFromAPI => {
        console.log("Personaje eliminado", responseFromAPI); 
      })
      .catch(err => console.log('Error while getting the data: ', err));
    
  });

  document.getElementById('edit-character-form').addEventListener('submit', function (event) {
    const id = document.getElementById('edit-id').value;

    const name = document.getElementById('edit-name').value;
    const occupation = document.getElementById('edit-occupation').value;
    const cartoon = document.getElementById('edit-cartoon').value;
    const weapon = document.getElementById('edit-weapon').value;

    const obj = {name, occupation, cartoon, weapon};

    charactersAPI.updateOneRegister(id, obj)
    .then(responseFromAPI => {
      console.log("Personaje editado", responseFromAPI); 
    })
    .catch(err => console.log('Error while getting the data: ', err));
  });

  document.getElementById('new-character-form').addEventListener('submit', function (event) {
    const name = document.getElementById('create-name').value;
    const occupation = document.getElementById('create-occupation').value;
    const cartoon = document.getElementById('create-cartoon').value;
    const weapon = document.getElementById('create-weapon').value;

    const obj = {name, occupation, cartoon, weapon};

    charactersAPI.createOneRegister(obj)
      .then(responseFromAPI => {
        console.log("Personaje creado", responseFromAPI); 
      })
      .catch(err => console.log('Error while getting the data: ', err));

  });
});
