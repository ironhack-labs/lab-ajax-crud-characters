const charactersAPI = new APIHandler('http://localhost:8000');

window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', () => {

    charactersAPI
      .getFullList()
      .then(reponseFromApi => {

        let charactersContainer = document.querySelector(".characters-container");
        charactersContainer.innerHTML = "";

        reponseFromApi.data.forEach(ele => {
          const {id, name, occupation, cartoon, weapon} = ele;
          charactersContainer.innerHTML += `<div class="character-info">
                                              <div class="id">Id: ${id}</div>
                                              <div class="name">Name: ${name}</div>
                                              <div class="occupation">Occupation: ${occupation}</div>
                                              <div class="cartoon">Is a Cartoon?: ${cartoon}</div>
                                              <div class="weapon">Weapon: ${weapon}</div>
                                            </div>`;
        });
        // console.log(reponseFromApi.data);
      })
      .catch(error => console.log(error));

  });

  document.getElementById('fetch-one').addEventListener('click', (event) => {

    const characterId = document.querySelector('input[name=character-id]').value;
    charactersAPI
      .getOneRegister(characterId)
      .then(reponseFromApi => {

        const {id, name, occupation, cartoon, weapon} = reponseFromApi.data;

        let charactersContainer = document.querySelector('.characters-container');
        charactersContainer.innerHTML = "";

        charactersContainer.innerHTML = `<div class="character-info">
                                          <div class="id">Id: ${id}</div>
                                          <div class="name">Name: ${name}</div>
                                          <div class="occupation">Occupation: ${occupation}</div>
                                          <div class="cartoon">Is a Cartoon?: ${cartoon}</div>
                                          <div class="weapon">Weapon: ${weapon}</div>
                                        </div>`;
                                
        // console.log(charactersContainer);
      })
      .catch(err => console.log(err));

  });

  document.getElementById('delete-one').addEventListener('click', (event) => {

    const characterId = document.querySelector('input[character-id-delete]').value;
    charactersAPI.deleteOneRegister(characterId);

  });

  document.getElementById('edit-character-form').addEventListener('submit', (event) => {
    event.preventDefault();

    const id = document.getElementById('idEdit').value;
    const name = document.getElementById('nameEdit').value;
    const occupation = document.getElementById('occupationEdit').value;
    const weapon = document.getElementById('weaponEdit').value;
    const cartoon = document.getElementById('cartoonEdit').value;

    const editedCharacter = {
      id,
      name,
      occupation,
      weapon,
      cartoon
    };

    charactersAPI.updateOneRegister(editedCharacter);

  });

  document.getElementById('new-character-form').addEventListener('submit', (event) => {
    event.preventDefault();

    const name = document.getElementById('nameInput').value;
    const occupation = document.getElementById('occupationInput').value;
    const weapon = document.getElementById('weaponInput').value;
    const cartoon = document.getElementById('cartoonInput').value;

    const newCharacter = {
      name,
      occupation,
      weapon,
      cartoon
    };

    charactersAPI.createOneRegister(newCharacter);
  });
});
