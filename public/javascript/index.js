const charactersAPI = new APIHandler();

window.addEventListener('load', () => {  // fetch all characters
  document.getElementById('fetch-all').addEventListener('click', function (event) {
      
    charactersAPI.getFullList()
        .then(res => console.log(res.data))
        .catch(err => console.log(err))
    
  });
                // Fetch only 1 character
  document.getElementById('fetch-one').addEventListener('click', function (event) {

    event.preventDefault()
    const id = document.getElementById("character-id").value
    
    //console.log(id)
    charactersAPI.getOneRegister(id)
        .then(res => console.log(res.data))
        .catch(err => console.log(err))
    
  });
                // Delete 1 character
  document.getElementById('delete-one').addEventListener('click', function (event) {

    event.preventDefault();
    const id = document.getElementById('character-id-delete').value;
    console.log(id)

    charactersAPI.deleteOneRegister(id)
        .then(res => console.log(`id ${id} Deleted`))
        .catch(err => console.log(err))
  });

                // Edit 1 character
  document.getElementById('edit-character-form').addEventListener('submit', function (event) {

  });

                // Create new character
  document.getElementById('new-character-form').addEventListener('submit', function (event) {

    event.preventDefault()
    const name = document.getElementById("new-name").value
    const occupation = document.getElementById("new-occupation").value
    const weapon = document.getElementById("new-weapon").value
    const cartoon = document.getElementById("new-checkbox").value
    console.log(name, occupation, weapon, cartoon)

    charactersAPI.createOneRegister(name, occupation, weapon, cartoon)
        .then(res => console.log(`one register created`))
        .catch(err => console.log(err))

  });
});
