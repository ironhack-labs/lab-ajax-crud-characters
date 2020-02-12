const charactersAPI = new APIHandler('https://minions-api.herokuapp.com');
let person

window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', function (event) {
    charactersAPI.getFullList()
      .then(theCharacter => {
        let person = theCharacter.data
        document.querySelector('.characters-container').innerHTML = ""
        person.forEach(theCharacter => {
          console.log(theCharacter)
          const details = `<div class="character-info">
        <div class="name" id="searchName"> ${theCharacter.name}</div>
        <div class="occupation" id="searchOccupation"> ${theCharacter.occupation} </div>
        <div class="cartoon" id="searchCartoon"> ${theCharacter.cartoon} </div>
        <div class = "weapon" id="searchWeapon"> ${theCharacter.weapon} </div>
      </div>`

          document.querySelector('.characters-container').innerHTML += details
        })

      })
  })
})

document.getElementById('fetch-one').addEventListener('click', function (event) {

  const characterId = document.getElementById('charid').value

  charactersAPI.getOneRegister(characterId).then(theCharacter => {
    let person = theCharacter.data
    document.querySelector('.characters-container').innerHTML = ""
    const details = `<div class="character-info">
        <div class="name" id="searchName"> ${person.name}</div>
        <div class="occupation" id="searchOccupation"> ${person.occupation} </div>
        <div class="cartoon" id="searchCartoon"> ${person.cartoon} </div>
        <div class = "weapon" id="searchWeapon"> ${person.weapon} </div>
      </div>`

    document.querySelector('.characters-container').innerHTML = details


  })

});

document.getElementById('delete-one').addEventListener('click', function (event) {

  const characterId = document.getElementById('delid').value
  charactersAPI.deleteOneRegister(characterId)

});

document.getElementById('edit-character-form').addEventListener('submit', function (event) {

  event.preventDefault()

  const characterId = document.getElementById("editId").value

  charactersAPI.getOneRegister(characterId).then(theCharacter => {
    let person = theCharacter.data

    document.getElementById("editName").value = person.name
      document.getElementById("editOccupation").value = person.occupation
      document.getElementById("editWeapon").value = person.weapon

      return person
    })
    .then(person => charactersAPI.updateOneRegister(characterId, person))


});

document.getElementById('new-character-form').addEventListener('submit', function (event) {

  event.preventDefault()

  const characterInfo = {
    name: document.getElementById("createName").value,
    occupation: document.getElementById("createOccupation").value,
    weapon: document.getElementById("createWeapon").value,
    cartoon: document.getElementById("createCartoon").checked
  }


  charactersAPI.createOneRegister(characterInfo)

});