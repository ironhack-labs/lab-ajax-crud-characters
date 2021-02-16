const charactersAPI = new APIHandler('http://localhost:8000');

window.addEventListener('load', () => {

  document.getElementById('fetch-all').addEventListener('click', function (event) {
    event.preventDefault();

    const charactersContainer = document.querySelector(".characters-container");
    charactersAPI.getFullList()
      .then((characters) => {
        charactersContainer.innerHTML = ""
        //console.log(characters.data);
    
        characters.data.forEach(character => {
        let  characterInfo = document.createElement('div')
        characterInfo.className = 'character-info'
          characterInfo.innerHTML = `
      <div class="name">Name: ${character.name}</div>
      <div class="occupation">occupation:${character.occupation}</div>
      <div class="cartoon">Cartoon: ${character.cartoon}</div>
      <div class="weapon">weapon: ${character.weapon}</div>
     `
    
           charactersContainer.appendChild(characterInfo)

        })
        console.log(`al final de getFullList`)
      
      })
      .catch((e) => console.log(e))

  });

  document.getElementById('fetch-one').addEventListener('click', function (event) {

  });

  document.getElementById('delete-one').addEventListener('click', function (event) {

  });

  document.getElementById('edit-character-form').addEventListener('submit', function (event) {

  });

  document.getElementById('new-character-form').addEventListener('submit', function (event) {

  });
});
