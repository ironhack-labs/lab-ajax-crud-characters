const charactersAPI = new APIHandler("http://localhost:4000/characters")


$(document).ready(() => {

  document.getElementById('fetch-all').onclick = async function (e) {
    e.preventDefault()
    let charactersContainer = document.querySelector(".characters-container")
    let characters = await charactersAPI.getFullList()
    let data = characters.data
    // .then(data => {
    data.forEach(character => {
      let charHTML = `
          <div class="character-info">
          <div class="name">${character.name}</div>
          <div class="occupation">${character.occupation}</div>
          <div class="cartoon">Cartoon: ${character.cartoon}</div>
          <div class="weapon">Weapon: ${character.weapon}</div>
        </div>
          `
      charactersContainer.innerHTML += charHTML
    })

    console.log(data.data)
      // })
      .catch(err => console.log(err))
  }

  document.getElementById('fetch-one').onclick = async function (e) {
    e.preventDefault()
    let charId = document.querySelector("#character-id")
    let charIdValue = charId.value
    let ob = await charactersAPI.getOneRegister(charIdValue)
    let {
      data
    } = ob
    console.log(charIdValue)

    // .then((data, charIdValue) => {
    let charHTML = `
        <div class = "name" > Character Name: ${data.name}</div>
        <div class = "occupation" > Character Occupation: ${data.occupation}</div>
        <div class = "cartoon" > Is a Cartoon?: ${data.cartoon}</div>
        <div class = "weapon" > Character Weapon: ${data.weapon} </div>
      `
    document.querySelector('.characters-container').innerHTML += charHTML
    // })
    // .catch(err => console.log(err))

  }

  document.getElementById('delete-one').onclick = function (e) {
    e.preventDefault()
    let charDeleteId = document.querySelector("#delone")
    let charIdValueDel = charDeleteId.value
    console.log(charIdValueDel)

    charactersAPI.deleteOneRegister(charIdValueDel)
      .then((data, charIdValueDel) => {
        console.log(data.data)
      })
      .catch(err => console.log(err))
  }

  document.getElementById('edit-character-form').onsubmit = async function (e) {

    e.preventDefault()

    let idEdit = document.querySelector("#edit-id").value

    const updateChar = {
      name: document.querySelector("#edit-name").value,
      occupation: document.querySelector("#edit-occupation").value,
      weapon: document.querySelector("#edit-weapon").value,
      cartoon: document.querySelector("#edit-checkbox").value
    }



    console.log(idEdit, updateChar)

    await charactersAPI.updateOneRegister(idEdit, updateChar)
    // .then((data, idEdit) => {
    //   console.log(data.data)
    // })
    // .catch(err => console.log(err))

    let choose = true
    if (document.getElementById('edit-checkbox').value === false) choose = false
    const character = {
      id: document.getElementById('id-edit').value,
      name: document.getElementById('name-edit').value,
      occupation: document.getElementById('occupation-edit').value,
      cartoon: choose,
      weapon: document.getElementById('weapon-edit').value
    }
    charactersAPI.updateOneRegister(character.id, character)

  }


  document.getElementById('new-character-form').onsubmit = async function (e) {

    e.preventDefault()

    const newCharacter = {
      name: document.querySelector("#namePatch").value,
      occupation: document.querySelector("#occupationPatch").value,
      weapon: document.querySelector("#weaponPatch").value,
      cartoon: document.querySelector("#cartoonPatch").value
    }

    console.log(newCharacter)

    await charactersAPI.createOneRegister(newCharacter)
    // .then((data, newCharacter) => {



    let charHTML = `
        <h3> NEW CHARACTER </h3>
        <div class = "name" > Character Name: ${newCharacter.name}</div>
        <div class = "occupation" > Character Occupation: ${newCharacter.occupation}</div>
        <div class = "cartoon" > Is a Cartoon?: ${newCharacter.cartoon}</div>
        <div class = "weapon" > Character Weapon: ${newCharacter.weapon} </div>
      `
    document.querySelector('.characters-container').innerHTML += charHTML
    // })
    // .catch(err => console.log(err))
  }
})