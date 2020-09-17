// const { response } = require("express");

const charactersAPI = new APIHandler('http://localhost:8000');

window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', function (event) {
    event.preventDefault()
    charactersAPI.getFullList()
      .then(response => {
        const data = response.data
   
        data.forEach((element) => {
          console.log(element.name)
          const characterContainerDiv = document.getElementsByClassName('characters-container')
          const displayCharacter = document.getElementsByClassName('character-info')
          const nameCharacter = document.getElementsByClassName('name')
          const occupationCharacter = document.getElementsByClassName('occupation')
          const cartoonCharacter = document.getElementsByClassName('cartoon')
          const weaponCharacter = document.getElementsByClassName('weapon')
    
          console.log(nameCharacter)
       
          nameCharacter.innerHTML = element.name
          occupationCharacter.innerHTML = element.occupation
          cartoonCharacter.innerHTML = element.cartoon
          weaponCharacter.innerHTML = element.weapon
    
          characterContainerDiv.append(nameCharacter)
    
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
