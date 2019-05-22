const charactersAPI = new APIHandler("http://localhost:8000")

$(document).ready(() => {
  document.getElementById('fetch-all').onclick = function () {
    charactersAPI.getFullList()
  }

  document.getElementById('fetch-one').onclick = function () {
    const id = document.getElementById("fetch-one-input").value
    charactersAPI.getOneRegister(id)
  }

  document.getElementById('delete-one').onclick = function () {
    const id = document.getElementById("delete-one-input").value
    charactersAPI.deleteOneRegister(id)
  }







  document.getElementById("edit-id").onkeyup = function () {

    const idtoEdit = document.getElementById("edit-id").value
    const editName = document.getElementById("edit-name")
    const editOcc = document.getElementById("edit-occupation")
    const editWeap = document.getElementById("edit-weapon")
    const editCart = document.getElementById("edit-cartoon")

    charactersAPI.getTheOneToEdit(idtoEdit)
      .then(data => {
        editName.value = data.name
        editOcc.value = data.occupation
        editWeap.value = data.weapon
        editCart.checked = data.cartoon
      })

  }

  document.getElementById('edit-character-form').onsubmit = function (e) {
    const idtoEdit = document.getElementById("edit-id").value
    const editName = document.getElementById("edit-name").value
    const editOcc = document.getElementById("edit-occupation").value
    const editWeap = document.getElementById("edit-weapon").value
    const editCart = document.getElementById("edit-cartoon").checked
    const updatedCharacter = { name: editName, occupation: editOcc, weapon: editWeap, cartoon: editCart }

    e.preventDefault()
    charactersAPI.updateOneRegister(idtoEdit, updatedCharacter)

  }

  document.getElementById('new-character-form').onsubmit = function (e) {
    const newName = document.getElementById("create-name").value
    const newOcc = document.getElementById("create-occupation").value
    const newWeap = document.getElementById("create-weapon").value
    const newCart = document.getElementById("create-cartoon").checked
    const newCharacter = { name: newName, occupation: newOcc, weapon: newWeap, cartoon: newCart }

    e.preventDefault()
    charactersAPI.createOneRegister(newCharacter)

    const formCreate = document.querySelectorAll("#new-character-form input")
    formCreate.forEach(input => input.value = "")
  }

})

const container = document.getElementsByClassName("characters-container")[0]

const printAll = (arg) => {
  console.log(arg)
  // <div class="characters-container">
  container.innerHTML = ""
  for (let i = 0; i < arg.length; i++) {
    container.innerHTML += `
    <div class="character-info">

      <div class="name"> Name:&nbsp&nbsp&nbsp&nbsp ${arg[i].name}</div>
      <div class="occupation">Occupation: &nbsp&nbsp&nbsp&nbsp${arg[i].occupation}</div>
      <div class="cartoon">Is a Cartoon?: &nbsp&nbsp&nbsp&nbsp${arg[i].cartoon}</div>
      <div class="weapon">Weapon: &nbsp&nbsp&nbsp&nbsp${arg[i].weapon}</div>

    </div>`

  }

}

const printOne = (arg) => {
  console.log(arg)
  container.innerHTML = `
    <div class="character-info">

      <div class="name"> Name:&nbsp&nbsp&nbsp&nbsp ${arg.name}</div>
      <div class="occupation">Occupation: &nbsp&nbsp&nbsp&nbsp${arg.occupation}</div>
      <div class="cartoon">Is a Cartoon?: &nbsp&nbsp&nbsp&nbsp${arg.cartoon}</div>
      <div class="weapon">Weapon: &nbsp&nbsp&nbsp&nbsp${arg.weapon}</div>

    </div>`
}
