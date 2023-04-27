const charactersAPI = new APIHandler('http://localhost:8000');

window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', async (event) => {
    const response = await charactersAPI.getFullList();
    console.log("All characters:", response);
  });

  document.getElementById('fetch-one').addEventListener('click', async (event) => {
    const idInput = document.querySelector("#character-id").value;
    const oneCharacter = await charactersAPI.getOneRegister(idInput);
    console.log("one character found:", oneCharacter);
  });

  document.getElementById('delete-one').addEventListener('click', async (event) => {
    event.preventDefault(); 
    
    const charId = document.querySelector('.operation-delete input[name=character-id-delete]').value;
    const deletedChar = await charactersAPI.deleteOneRegister(charId);
    console.log("one character deleted:", deletedChar);
  });

  document.getElementById('edit-character-form').addEventListener('submit', async (event) => {
    event.preventDefault();

    const charId = document.querySelector('#edit-character-form input[name=chr-id]').value;
    const name = document.querySelector('#edit-character-form input[name=name]').value;
    const occupation = document.querySelector('#edit-character-form input[name=occupation]').value;
    const weapon = document.querySelector('#edit-character-form input[name=weapon]').value;
    const cartoon = document.querySelector('#edit-character-form input[name=cartoon]').checked;

    const updatedCharInfo = { name, occupation, cartoon, weapon };
    const updatedChar = await charactersAPI.updateOneRegister(charId, updatedCharInfo);
    console.log("New character added:", updatedChar);
  });

  document.getElementById('new-character-form').addEventListener('submit', async (event) => {
    event.preventDefault();

    const name = document.querySelector('#new-character-form input[name=name]').value;
    const occupation = document.querySelector('#new-character-form input[name=occupation]').value;
    const weapon = document.querySelector('#new-character-form input[name=weapon]').value;
    const cartoon = document.querySelector('#new-character-form input[name=cartoon]').checked;

    const newChar = { name, occupation, cartoon, weapon };
    const addedChar = await charactersAPI.createOneRegister(newChar);
    console.log("New character added:", addedChar);
  });
});
