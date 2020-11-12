const charactersAPI = new APIHandler('http://localhost:8000');

window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', async function (event) {
    const { data } = await charactersAPI.getFullList()
    $container = document.querySelector('#characters-container')
     data.forEach(elem   => {
       $container.innerHTML = `<div class="character-info">
       <div class="name">Character Name: ${elem.name}</div>
       <div class="occupation">Character Occupation: ${elem.occupationn}</div>
       <div class="cartoon">Is a Cartoon? ${elem.cartoon}</div>
       <div class="weapon">Character Weapon ${elem.weapon}</div>
     </div>`
     })
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
