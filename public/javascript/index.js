const charactersAPI = new APIHandler('http://localhost:8000');

// functions to do something on click, based on html id. i think...

window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', async () => {
    const character = await charactersAPI.getFullList();
    showCharacters();

  });

  document.getElementById('fetch-one').addEventListener('click', async () => {
    const id = document.getElementById('character-id').value;
    const character = await charactersAPI.getOneRegister(id);
    showCharacters();

  });

  document.getElementById('delete-one').addEventListener('click', async () => {
    const id = document.getElementById('character-id-delete').value;
    const response = await charactersAPI.deleteOneRegister(id);
    document.querySelector('.characters-container').innerHTML = 'deleted';


  });

  document.getElementById('edit-character-form').addEventListener('submit', async ()=> {
    const id = document.getElementById('edit-character-form').value;
    const characterInfo = {
      name: document.getElementById('chr-id').value,
      
    };
    const editedChar = await charactersAPI.updateOneRegister(id);

    showCharacters();
  });

  document.getElementById('new-character-form').addEventListener('submit', async ()=> {
    
})