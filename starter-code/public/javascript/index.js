const charactersAPI = new APIHandler("https://minions-api.herokuapp.com/")




$(document).ready(() => {
  document.getElementById('fetch-all').onclick = function () {
    charactersAPI.getFullList()
  }

  document.getElementById('fetch-one').onclick = function () {
    const theId = document.getElementsByName("character-id").value
    charactersAPI.getOneRegister(`${theId}`)
      .then(theCharacter => {
        Name[1].value = theCharacter.data.name
        Occupation[1].value = theCharacter.data.occupation
        Weapon[1].value = theCharacter.data.weapon
        document.getElementById('character-id-input').value = theCharacter.data.id
      })
      .catch(err => console.log(err))
  }

  document.getElementById('delete-one').onclick = function () {

  }

  document.getElementById('edit-character-form').onsubmit = function () {

  };

  document.getElementById('new-character-form').onsubmit = e => {
    e.preventDefault();

    charactersAPI.createOneRegister();

  };
})
