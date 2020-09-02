const charactersAPI = new APIHandler('http://localhost:8000');

window.addEventListener('load', () => {
  
  document.getElementById('fetch-all').addEventListener('click', async function (event) {
    const character = await charactersAPI.getFullList()
    const $view = document.querySelector(".characters-container")
    $view.innerHTML = ""
    character.forEach(character =>{
      $view.innerHTML += `
      <div class="characters-container">
      <div class="name">Character Id: ${character.id} </div>
      <div class="name">Character Name: ${character.name} </div>
      <div class="occupation">Character Occupation: ${character.occupation}</div>
      <div class="cartoon">Is a Cartoon?: ${character.cartoon}</div>
      <div class="weapon">Character Weapon: ${character.weapon}</div><br><br>
      </div> `
    })
  });

  document.getElementById('fetch-one').addEventListener('click', async function (event) {
    const $characterId = document.querySelector(".character-id").value
    const character = await charactersAPI.getOneRegister($characterId)
    const $view = document.querySelector(".characters-container")
    $view.innerHTML = ""
    $view.innerHTML = `
    <div class="name">Character Id: ${character.id} </div>
    <div class="name">Character Name: ${character.name} </div>
    <div class="occupation">Character Occupation: ${character.occupation}</div>
    <div class="cartoon">Is a Cartoon?: ${character.cartoon}</div>
    <div class="weapon">Character Weapon: ${character.weapon}</div> `
  
  });

  document.getElementById('delete-one').addEventListener('click', async function (event) {
      const $characterId = document.querySelector(".character-id-delete").value
      const character = await charactersAPI.deleteOneRegister($characterId)
  });

  document.getElementById('edit-character-form').addEventListener('submit', async function (event) {
    const $id = document.querySelector(".character-id").value
    const $name = document.querySelector(".edit_name").value
    const $ocupation = document.querySelector(".edit_occu").value
    const $weapon = document.querySelector(".edit_weapon").value
    await charactersAPI.updateOneRegister($id, $name, $ocupation, $weapon)
  });

  document.getElementById('new-character-form').addEventListener('submit', async function (event) {
    const $name = document.querySelector(".name-new").value
    const $ocupation = document.querySelector(".ocupation-new").value
    const $weapon = document.querySelector(".weapon-new").value
    const $cartoon = document.querySelector(".cartoon-new").checked
    await charactersAPI.createOneRegister($name, $ocupation, $weapon, $cartoon)
  });
});
