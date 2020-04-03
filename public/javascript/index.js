const charactersAPI = new APIHandler('http://localhost:8000');

const renderElements = () => {
  let container = document.querySelector('.characters-container');
    let content = '';
    charactersAPI.getFullList()
      .then( characters => {
        console.log(characters);
        let data = characters.data;
        data.map( character => {
          let { id, name, occupation, weapon, cartoon } = character;

          content += `<div class="character-info">
          <div class="id">Id:
            <span class="field_title">${id}</span>
          </div>
          <div class="name">Name:
            <span class="field_title">${name}</span>
          </div>
          <div class="occupation">Occupation:
            <span class="field_title">${occupation}</span>
          </div>
          <div class="cartoon">Weapon
            <span class="field_title">${weapon}</span>
          </div>
          <div class="weapon">Cartoon:
            <span class="field_title">${cartoon}</span>
          </div>
        </div>`
        });

        container.innerHTML = content;
      }) 
      .catch(error => console.log(error))
}

window.addEventListener('load', () => {
  
  document.getElementById('fetch-all').addEventListener('click', function (event) {
        event.preventDefault();
        renderElements();
  }, false);

  document.getElementById('fetch-one').addEventListener('click', function (event) {
    event.preventDefault();
    let container = document.querySelector('.characters-container');
    let input = document.querySelector('input[name="character-id"]');
    let value = input.value;
    
    charactersAPI.getOneRegister(value)
      .then( character => {

        let { id, name, occupation, weapon, cartoon } = character.data;
        console.log(character.data);
        container.innerHTML = `<div class="character-info">
          <div class="id">Id:
            <span class="field_title">${id}</span>
          </div>
          <div class="name">Name:
            <span class="field_title">${name}</span>
          </div>
          <div class="occupation">Occupation:
            <span class="field_title">${occupation}</span>
          </div>
          <div class="cartoon">Weapon
            <span class="field_title">${weapon}</span>
          </div>
          <div class="weapon">Cartoon:
            <span class="field_title">${cartoon}</span>
          </div>
        </div>`

      })
      .catch(error => console.log(error));
  });

  document.getElementById('delete-one').addEventListener('click', function (event) {
    let id = document.querySelector('input[name="character-id-delete"]').value;
    charactersAPI.deleteOneRegister(id)
      .then(response =>{
         console.log(response)
         renderElements();
        })
      .catch(error => console.log(error));
  });

  document.getElementById('edit-character-form').addEventListener('submit', function (event) {

  });

  document.getElementById('new-character-form').addEventListener('submit', function (event) {

  });
});
