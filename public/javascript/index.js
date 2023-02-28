const charactersAPI = new APIHandler('http://localhost:8000');

window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', async function  (event) {
    try {
        let response = await charactersAPI.getFullList()
        let characters = await response.data
        let html = ''
        characters.forEach(character => {
        html += `<div class="character-info">
        <div class="name">${character.name}</div>
        <div class="occupation">${character.occupation}</div>
        <div class="cartoon">${character.cartoon}</div>
        <div class="weapon">${character.weapon}</div>
       </div>`
      })
      document.querySelector('.characters-container').innerHTML = html
    } catch (error) {
      console.log(err)
    }

  });

  document.getElementById('fetch-one').addEventListener('click', async function (event) {

  });

  document.getElementById('delete-one').addEventListener('click', function (event) {

  });

  document.getElementById('edit-character-form').addEventListener('submit', function (event) {

  });

  document.getElementById('new-character-form').addEventListener('submit', function (event) {

  });
});
