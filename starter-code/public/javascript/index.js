const charactersAPI = new APIHandler('http://localhost:8000');

window.addEventListener('load', () => {

  document.getElementById('fetch-all').addEventListener('click', function (event) {

    charactersAPI.getFullList()
    .then(response => {
      console.log(response)
      let respuesta = ""
      let container = document.querySelector(".characters-container");

      for(let i = 0; i < response.data.length; i++){
        respuesta = respuesta + `<div class="character-info">
          <div class="name">${response.data[i].name}</div>
          <div class="occupation">${response.data[i].occupation}</div>
          <div class="cartoon">${response.data[i].cartoon}</div>
          <div class="weapon">${response.data[i].weapon}</div>
        </div>`
      }
      container.innerHTML = respuesta
    })
    .catch(err => console.log("Error while getting the data", err));
  });

  
  document.getElementById('fetch-one').addEventListener('click', function (event) {
    
    const characterId = document.getElementById('character-id').value;
    charactersAPI.getOneRegister(characterId)
    .then(responseFromApi => {
      let container = document.querySelector(".characters-container");
      let response = `<div class="name">${responseFromApi.data.name}</div>
        <div class="occupation">${responseFromApi.data.occupation}</div>
        <div class="cartoon">${responseFromApi.data.cartoon}</div>
        <div class="weapon">${responseFromApi.data.weapon}</div>`
      container.innerHTML = response;
    })
    .catch(err => console.log("Error while getting the data", err));
  });
//delete
  document.getElementById('delete-one').addEventListener('click', function (event) {
    const characterId = document.getElementById('character-id').value;
    charactersAPI.deleteOneRegister(characterId)
    .then((response => console.log("Character deleted"))
    .catch(err => console.log(err))
  );

// Problemas con el update:
    

  document.getElementById('edit-character-form').addEventListener('submit', function (event) {
    event.preventDefault();
    const theId = document.getElementById('edit-character-form').value;
    const theName = document.getElementById("nameEdit").value;
    const theOccupation = document.getElementById("occupationEdit").value;
    const theWeapon = document.getElementById("weaponEdit").value;
    const theCartoon = document.getElementById("cartoonEdit").value;

    charactersAPI.updateOneRegister (theId) 
    .then(response => {
      const updatedcharacterInfo = {
        theName  = response.data.name,
        theOccupation = response.data.occupation,
        theWeapon = response.data.weapon,
        theCartoon = response.data.cartoon,
      }
      
      console.log('update succesfull: ', response);
      document.getElementById('edit-character-form').reset()
    })
    .catch(error => console.log(error))
    }
  )
  //No tengo muy claro si funciona la función de: createOneRegister()

  document.getElementById('new-character-form').addEventListener('submit', function (event) {
    event.preventDefault();
    let newCharacter = {
      name: document.getElementById("name").value,
      occupation: document.getElementById("occupation").value,
      cartoon: document.getElementById("cartoon").value,
      weapon: document.getElementById("weapon").value,
    }
    charactersAPI.createOneRegister(newCharacter)
    .then(response => console.log("Post succesful"))
    .catch(err => console.log("Error!!" , err));
  });
});
