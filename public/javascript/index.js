const charactersAPI = new APIHandler('http://localhost:8000');

window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', function (event) {
    charactersAPI.getFullList();
  });

  document.getElementById('fetch-one').addEventListener('click', function (event) {      
      const charId = document.getElementById('character-id').value
      charactersAPI.getOneRegister(charId);
  
  });

  document.getElementById('delete-one').addEventListener('click', function (event) {
    
    const charId = document.getElementById('char-id-delete').value
    charactersAPI
      .deleteOneRegister(charId)
      .then(() => charactersAPI.getFullList())
      .catch(err => console.log('error al borrar', err))

  });

  document.getElementById('edit-character-form').addEventListener('submit', function (event) {
      event.preventDefault();
    
      const id = document.getElementById("id").value
      const name = document.getElementById("name").value
      const occupation = document.getElementById("occupation").value
      const weapon = document.getElementById("weapon").value
      const cartoon = document.getElementById("cartoon").value

      const upChar = { name, occupation, weapon, cartoon }

      console.log(upChar)


      charactersAPI.updateOneRegister (id, upChar)


  });

  document.getElementById('new-character-form').addEventListener('submit', function (event) {
    
    event.preventDefault();
    
    const name = document.getElementById("name").value
    const occupation = document.getElementById("occupation").value
    const weapon = document.getElementById("weapon").value
    const cartoon = document.getElementById("cartoon").value

    const newChar = { name, occupation, weapon, cartoon }

    console.log(newChar)


    charactersAPI.createOneRegister(newChar)

  });
});
