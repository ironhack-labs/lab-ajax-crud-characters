const charactersAPI = new APIHandler('http://localhost:8000');

window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', event => {
    const responseFromAPI = charactersAPI.getFullList();
    console.log(responseFromAPI);
    let str = '';

    document.getElementsByClassName('characters-container').innerHTML = str;

    responseFromAPI.forEach(character => {
      str += `<div class="character-info">
          <div class="id">id:<span class="float-right">${character.id}</span></div>
          <div class="name">Name:<span class="float-right">${character.name}</span></div>
          <div class="occupation">Occupation:<span class="float-right">${character.occupation}</span></div>
          <div class="cartoon">Is a Cartoon?:<span class="float-right">${character.cartoon}</span></div>
          <div class="weapon">Weapon:<span class="float-right">${character.weapon}</span></div>
          </div>`;
      document.getElementById('characters-container').innerHTML = str;
    });
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
