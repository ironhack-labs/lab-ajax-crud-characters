const charactersAPI = new APIHandler('http://localhost:8000');

window.addEventListener('load', () => {

  //FETCH ALL CHARACTERS
  document.getElementById('fetch-all').addEventListener('click', function (event) {

    charactersAPI.getFullList()
      .then((reponses) => {
        const charactersContainer = document.getElementsByClassName('characters-container')[0];
        charactersContainer.innerHTML = ''; //Vidage de la div

        reponses.data.forEach(reponse => {
          const divElts = document.createElement('div');
          divElts.innerHTML = `<div class="character-info"><div class="name">name: ${reponse.name}</div><div class="occupation">occupation: ${reponse.occupation}</div><div class="cartoon">cartoon: ${reponse.cartoon}</div><div class="weapon">weapon: ${reponse.weapon}</div></div>`;

          charactersContainer.appendChild(divElts);
        })

      })
      .catch(err => console.log('Error while fetching', err))
  });

  //FETCH ONE CHARACTER
  document.getElementById('fetch-one').addEventListener('click', function (event) {
    const fetchOneId = document.getElementsByName('character-id')[0].value;
    const charactersContainer = document.getElementsByClassName('characters-container')[0];

    charactersAPI.getOneRegister(fetchOneId)
      .then((reponse) => {
        charactersContainer.innerHTML = ''; //Vidage de la div
        const answerId = reponse.data;
        const divElt = document.createElement('div');
        divElt.innerHTML = `<div class="character-info"><div class="name">name: ${answerId.name}</div><div class="occupation">occupation: ${answerId.occupation}</div><div class="cartoon">cartoon: ${answerId.cartoon}</div><div class="weapon">weapon: ${answerId.weapon}</div></div>`

        charactersContainer.appendChild(divElt);
      })
  });

  //DELETE ONE CHARACTER
  document.getElementById('delete-one').addEventListener('click', function (event) {
    const deleteOneId = document.getElementsByName('character-id-delete')[0].value;
    const buttonDeleteOne = document.getElementById('delete-one');
    charactersAPI.deleteOneRegister(deleteOneId);

    buttonDeleteOne.style.backgroundColor = 'green';
  });

  //EDIT ONE CHARACTER
  document.getElementById('edit-character-form').addEventListener('submit', function (event) {
    const updatedCharacterInfo = {
      name: 'Batman',
      occupation: "Saving the world",
      weapon: "His brain (and money...)",
      cartoon: true
    };

    charactersAPI.updateOneRegister(1, updatedCharacterInfo)
  });

  //CREATE ONE CHARACTER
  document.getElementById('new-character-form').addEventListener('submit', function (event) {
    const newCharacter = {
      name: "Spider-man",
      occupation: "Making webs",
      weapon: "webs",
      cartoon: true
    };

    charactersAPI.createOneRegister(newCharacter);
  });
});