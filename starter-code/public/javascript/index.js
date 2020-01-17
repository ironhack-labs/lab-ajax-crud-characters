const charactersAPI = new APIHandler('http://localhost:8000');

window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', async function (event) {
    const fullList = await charactersAPI.getFullList();
    // console.log(fullList);
    let container = document.querySelector('.characters-container');
    container.innerHTML = '';
    fullList.forEach(character => {
      container.innerHTML += `
      <div class="character-info">
        <div class="name">Id: ${character.id}</div>
        <div class="name">Name: ${character.name}</div>
        <div class="occupation">Occupation: ${character.occupation}</div>
        <div class="cartoon">Is a Cartoon? ${character.cartoon}</div>
        <div class="weapon">Weapon: ${character.weapon}</div>
      </div>
      `;
    });
  });

  document.getElementById('fetch-one').addEventListener('click', async function (event) {
    const oneElement = await charactersAPI.updateOneRegister(1);
    console.log(oneElement);
  });

  document.getElementById('delete-one').addEventListener('click', async function (event) {

  });

  document.getElementById('edit-character-form').addEventListener('submit', async function (event) {

  });

  document.getElementById('new-character-form').addEventListener('submit', async function (event) {
    // { name: 'Batman', occupation: 'hero', cartoon: true, weapon: 'A lot' }
    // { name: 'Robin', occupation: 'hero', cartoon: true, weapon: 'some' }

  });
});
