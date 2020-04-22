const charactersAPI = new APIHandler('https://minions-api.herokuapp.com');
const btn = document.getElementById("send-data")
window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', function (event) {
    charactersAPI
      .getFullList()
      .then(responseFromApi => {
        alert("Profe, son muchos para pintarlos, mira la consola. YAY! :3")
        console.log(responseFromApi.data)
      })
      .catch(err => console.log("An error ocurred" + err))
  });

  document.getElementById('fetch-one').addEventListener('click', function (event) {

    const charId = document.querySelector("#character-id").value
    console.log(charId)
    charactersAPI
      .getOneRegister(charId)
      .then(responseFromApi => {
        const allChars = responseFromApi.data
        document.querySelector(".name").innerHTML = "Character Name: " + allChars.name
        document.querySelector(".occupation").innerHTML = "Character Occupation: " + allChars.occupation
        document.querySelector(".cartoon").innerHTML = "Is a cartoon?: " + allChars.cartoon
        document.querySelector(".weapon").innerHTML = "Character Weapon: " + allChars.weapon
        console.log(responseFromApi.data)
      })
      .catch(err => console.log("An error ocurred" + err))
  });

  document.getElementById('delete-one').addEventListener('click', function (event) {

    const charId = document.querySelector("#character-id-delete").value
    console.log(charId)
    charactersAPI
      .deleteOneRegister(charId)
      .then(console.log("borrado"))
      .catch(err => console.log("An error ocurred" + err))
  });

  document.getElementById('edit-character-form').addEventListener('submit', function (event) {
    event.preventDefault()

    const charId = document.querySelector("#editId").value
    const charInfo = {
      name: document.getElementById("editName").value,
      occupation: document.getElementById("editOccupation").value,
      weapon: document.getElementById("editWeapon").value,
      cartoon: document.getElementById("editCartoon").checked
    }
    charactersAPI
      .updateOneRegister(charId, charInfo.name, charInfo.occupation, charInfo.weapon, charInfo.cartoon)
      .then(btn.style.background = "green")
      .catch(err => {
        btn.style.background = "red"
        console.log("An error ocurred" + err)
      })
  });

  document.getElementById('new-character-form').addEventListener('submit', function (event) {
    event.preventDefault()
    const charInfo = {
      name: document.getElementById("newName").value,
      occupation: document.getElementById("newOccupation").value,
      weapon: document.getElementById("newWeapon").value,
      cartoon: document.getElementById("newCartoon").checked
    }
    charactersAPI
      .createOneRegister(charInfo.name, charInfo.occupation, charInfo.weapon, charInfo.cartoon)
      .then(btn.style.background = "green")
      .catch(err => {
        btn.style.background = "red"
        console.log("An error ocurred" + err)
      })
  });
});