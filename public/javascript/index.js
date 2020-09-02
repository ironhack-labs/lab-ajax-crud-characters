const charactersAPI = new APIHandler('http://localhost:8000');
const $workplace = document.querySelector('.characters-container')

window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', async function (event) {
    const charArray = await charactersAPI.getFullList()
    $workplace.innerHTML = ''
    charArray.forEach(char => {
      $workplace.innerHTML += `
      <div class="character-info">
        <div class="card">
          <div class="concept">
            <div>id:</div>
            <div class="name">Name:</div>
            <div class="occupation">Occupation:</div>
            <div class="cartoon">Cartoon:</div>
            <div class="weapon">Weapon:</div>
          </div>
          <div class="concept-value">
            <div>${char.id} </div>
            <div class="name">${char.name} </div>
            <div class="occupation">${char.occupation}</div>
            <div class="cartoon">${char.cartoon}</div>
            <div class="weapon">${char.weapon}</div>
          </div>
        </div>
      </div>
      `
    });
  });

  document.getElementById('fetch-one').addEventListener('click', async function (event) {
    const charId = document.querySelector('#get-one').value
    $workplace.innerHTML = ''
    const character = await charactersAPI.getOneRegister(charId)
    console.log(character)
    $workplace.innerHTML=`      
    <div class="character-info">
      <div class="card">
        <div class="concept">
          <div>id:</div>
          <div class="name">Name:</div>
          <div class="occupation">Occupation:</div>
          <div class="cartoon">Cartoon:</div>
          <div class="weapon">Weapon:</div>
        </div>
        <div class="concept-value">
          <div>${character.id} </div>
          <div class="name">${character.name} </div>
          <div class="occupation">${character.occupation}</div>
          <div class="cartoon">${character.cartoon}</div>
          <div class="weapon">${character.weapon}</div>
        </div>
      </div>
  </div>`
  });

  document.getElementById('delete-one').addEventListener('click', async function (event) {
    const charId = document.querySelector('#del-one').value
    await charactersAPI.deleteOneRegister(charId)
  });

  document.getElementById('edit-character-form').addEventListener('submit', async function (event) {
    const id = document.querySelector('#edit-character-form').elements.id.value
    const name = document.querySelector('#edit-character-form').elements.name.value
    const occupation = document.querySelector('#edit-character-form').elements.occupation.value
    const weapon = document.querySelector('#edit-character-form').elements.weapon.value
    const cartoon = document.querySelector('#edit-character-form').elements.cartoon.checked
    await charactersAPI.updateOneRegister(id, name, occupation, weapon, cartoon)
  });

  document.getElementById('new-character-form').addEventListener('submit', async function (event) {
    const name = document.querySelector('#new-character-form').elements.name.value
    const occupation = document.querySelector('#new-character-form').elements.occupation.value
    const weapon = document.querySelector('#new-character-form').elements.weapon.value
    const cartoon = document.querySelector('#new-character-form').elements.cartoon.checked
    await charactersAPI.createOneRegister(name, occupation, weapon, cartoon)
  });
});
