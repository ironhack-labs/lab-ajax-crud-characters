const charactersAPI = new APIHandler('http://localhost:8000');

window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', function (event) {
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
  }, false);

  document.getElementById('fetch-one').addEventListener('click', function (event) {
    let container = document.querySelector('.characters-container');
    let input = document.querySelector('input[name="character-id"]');

    charactersAPI.getOneRegister(id)
  });

  document.getElementById('delete-one').addEventListener('click', function (event) {

  });

  document.getElementById('edit-character-form').addEventListener('submit', function (event) {

  });

  document.getElementById('new-character-form').addEventListener('submit', function (event) {

  });
});
