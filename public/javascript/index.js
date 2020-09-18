// const { response } = require("express");

const charactersAPI = new APIHandler('http://localhost:8000');

window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', function (event) {
    event.preventDefault()
    charactersAPI.getFullList()
      .then(response => {
        const data = response.data
        
        const characterContainerDiv = document.getElementsByClassName('characters-container')[0]
        const displayCharacter = document.getElementsByClassName('character-info')[0]

        characterContainerDiv.removeChild(displayCharacter)
   
        data.forEach((element, index) => {
         
          const nameCharacter  = document.createElement('div')
          const occupationCharacter = document.createElement('div')
          const cartoonCharacter = document.createElement('div')
          const weaponCharacter = document.createElement('div')
       
          nameCharacter.innerHTML = `Name: <span>${element.name}</span>`
          occupationCharacter.innerHTML = `Occupation: <span>${element.occupation}</span>`
          cartoonCharacter.innerHTML = `Is a Cartoon? <span>${element.cartoon}</span>`
          weaponCharacter.innerHTML = `Weapon: <span>${element.weapon}</span>`
    
          const characterInfoDiv = document.createElement('div')
          characterInfoDiv.setAttribute('id', 'info-character')
          characterInfoDiv.append(nameCharacter, occupationCharacter, cartoonCharacter, weaponCharacter)
          characterContainerDiv.append(characterInfoDiv)
        });
    
      })
      .catch(err => console.log(err))
  });

  document.getElementById('fetch-one').addEventListener('click', function (event) {

  });

  document.getElementById('delete-one').addEventListener('click', function (event) {

  });

  document.getElementById('edit-character-form').addEventListener('submit', function (event) {

  });

  document.getElementById('new-character-form').addEventListener('submit', function (event) {

  });
});
