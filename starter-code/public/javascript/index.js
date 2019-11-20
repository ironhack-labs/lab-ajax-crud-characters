const charactersAPI = new APIHandler('http://localhost:8000');

window.addEventListener('load', () => {
  
  document.getElementById('fetch-all').addEventListener('click', function (event) {
    event.preventDefault()

    charactersAPI.getFullList()
      .then(list => {
        console.log(list.data);

      }
      )
  });

  document.getElementById('fetch-one').addEventListener('click', function (event) {
    event.preventDefault()
    id = searchId.value
    charactersAPI.getOneRegister(id)
      .then(people => {
        console.log(people)
      })

  });

  document.getElementById('delete-one').addEventListener('click', function (event) {
    event.preventDefault()
    let id = document.querySelector("#deleteCharacter").value 
    charactersAPI.deleteOneRegister(id)

  });

  document.getElementById('edit-character-form').addEventListener('submit', function (event) {
    event.preventDefault()
  });

  document.getElementById('new-character-form').addEventListener('submit', function (event) {
    event.preventDefault()
    let newCharacter =
    {
      name: newName.value,
      occupation: newOcupation.value,
      cartoon: newCartoon.checked,
      weapon: newWeapon.value
    }
    charactersAPI.createOneRegister(newCharacter)
    .then(juan => {
      console.log(juan.data);
    })
  });
});


