// run this on Terminal to make API works
// $ json-server --watch db.json --port 8000
const charactersAPI = new APIHandler('http://localhost:8000');

window.addEventListener('load', () => {
  // Get all the characters - method -> .getFullList()
  document.getElementById('fetch-all').addEventListener('click', async (event) => {
    const allCharacters = await charactersAPI.getFullList();
    // json with all the characters
    const result = allCharacters.data;
    console.log(result);
  
    const parent = document.querySelector('.characters-container');
    console.log(parent);
    let templateAll = '';
    const cards = result.forEach(item => {
    let templateCard = `
      <div class="character-info">
        <div class="id">Id: ${item.id}</div>
        <div class="name">Name: ${item.name}</div>
        <div class="occupation">Occupation: ${item.occupation}</div>
        <div class="cartoon">Is a Cartoon?${item.cartoon}</div>
        <div class="weapon">Weapon: ${item.weapon}</div>
      </div>
    `;
    templateAll += templateCard;
    return templateAll;
    });
    console.log(cards)
    // remove all the divs first
    parent.querySelectorAll('div').forEach(div => div.remove());
    // display the new cards
    parent.insertAdjacentHTML('afterbegin', templateAll);
  });

  // Get one character - method -> .getOneRegister(id)
  document.getElementById('fetch-one').addEventListener('click', async (event) => {
    const id = document.querySelector('#characterId').value;
    console.log(id)
    const dataChar = await charactersAPI.getOneRegister(id);
    const char = dataChar.data;
    console.log(char)

    const parent = document.querySelector('#findOne');
    let template =  `
    <div class="character-info">
      <div class="id">Id: ${char.id}</div>
      <div class="name">Name: ${char.name}</div>
      <div class="occupation">Occupation: ${char.occupation}</div>
      <div class="cartoon">Is a Cartoon?${char.cartoon}</div>
      <div class="weapon">Weapon: ${char.weapon}</div>
    </div>
  `;
    parent.querySelectorAll('div').forEach(div => div.remove())
    parent.insertAdjacentHTML('afterbegin', template);
  });

  // Delete one character - method -> .deleteOneRegister(id)
  document.getElementById('delete-one').addEventListener('click', async (event) => {
    const id = document.querySelector('#deleteId').value;
    console.log(id);
    await charactersAPI.deleteOneRegister(id);
  });

  // Update one character - method -> .updateOneRegister(id, charData);
  document.getElementById('edit-character-form').addEventListener('submit', async  (event) => {
    // get the id to find the one to edit
    const id = document.querySelector('#edit-id').value;
    //const originalData = await charactersAPI.getOneRegister(id);
    const name = document.querySelector('#edit-name').value;
    const occupation = document.querySelector('#edit-occupation').value;
    const weapon = document.querySelector('#edit-weapon').value;
    const cartoon = document.querySelector('#edit-cartoon').checked; 
    const charData = { name, occupation, weapon, cartoon };
    const updated = await charactersAPI.updateOneRegister(id, charData)
    //console.log(updated)
    //document.querySelector("#update-data").style.backgroundColor = "green" ;
      
  });

  // Create one character - method -> .createOneRegister(charData);
  document.getElementById('new-character-form').addEventListener('submit', async (event) => {
    const name = document.querySelector('#new-name').value;
    const occupation = document.querySelector('#new-occupation').value;
    const weapon = document.querySelector('#new-weapon').value;
    const cartoon = document.querySelector('#new-cartoon').checked; 
    const charData = { name, occupation, weapon, cartoon };
    const updated = await charactersAPI.createOneRegister(charData);
    alert(updated);
  });

});