const charactersAPI = new APIHandler('http://localhost:8000');

window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', async (event) => {
    const allCharacters = await charactersAPI.getFullList();
    // json with all the characters
    const result = allCharacters.data;
    console.log(result)
  });

  document.getElementById('fetch-one').addEventListener('click', async (event) => {
    const id = document.querySelector('#characterId').value;
    console.log(id)
    const char = await charactersAPI.getOneRegister(id);
    console.log(char.data);
  });

  document.getElementById('delete-one').addEventListener('click', async (event) => {
    const id = document.querySelector('#deleteId').value;
    console.log(id);
    await charactersAPI.deleteOneRegister(id);
  });

  document.getElementById('edit-character-form').addEventListener('submit', async  (event) => {
    const id = document.querySelector('#edit-id').value;

    const name = document.querySelector('#edit-name').value;
    const occupation = document.querySelector('#edit-occupation').value;
    const weapon = document.querySelector('#edit-weapon').value;
    const cartoon = document.querySelector('#edit-cartoon').checked; 
    
    const charData = { name, occupation, weapon, cartoon };
    const updated = await charactersAPI.updateOneRegister(id, charData);
    console.log(updated);
  });

  document.getElementById('new-character-form').addEventListener('submit', async (event) => {
    const name = document.querySelector('#new-name').value;
    const occupation = document.querySelector('#new-occupation').value;
    const weapon = document.querySelector('#new-weapon').value;
    const cartoon = document.querySelector('#new-cartoon').checked; 
    
    const charData = { name, occupation, weapon, cartoon };
    const updated = await charactersAPI.createOneRegister(charData);
    console.log(updated);
  });
});
