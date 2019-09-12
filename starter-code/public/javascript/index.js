//rgba(88, 98, 123, 0.95);

const charactersAPI = new APIHandler('http://localhost:8000')

$(document).ready(() => {
  document.getElementById('fetch-all').onclick = async function(e) {
    e.preventDefault()
    try {
      const result = await charactersAPI.getFullList()
      document.getElementById('newlist').innerHTML = ''

      for (let index = 0; index < result.data.length; index++) {
        theid = result.data[index].id
        name = result.data[index].name
        occupation = result.data[index].occupation
        cartoon = result.data[index].cartoon
        weapon = result.data[index].weapon

        const newCharacterHTML = `
        <div class="character-info">
          <div class="weapon">${theid}</div>
          <div class="name">${name}</div>
          <div class="occupation">${occupation}</div>
          <div class="cartoon">${cartoon}</div>
          <div class="weapon">${weapon}</div>
        </div>
        `

        document.getElementById('newlist').innerHTML += newCharacterHTML
        document.querySelector('#fetch-all').style.backgroundColor = 'green'
      }
    } catch {
      document.querySelector('#fetch-all').style.backgroundColor = 'red'
    }
  }

  document.getElementById('fetch-one').onclick = async function(e) {
    e.preventDefault()
    const theId = document.getElementById('theId').value

    try {
      const result = await charactersAPI.getOneRegister(theId)
      document.getElementById('newlist').innerHTML = ''
      console.log(result)
      name = result.data.name
      occupation = result.data.occupation
      cartoon = result.data.cartoon
      weapon = result.data.weapon

      const newCharacterHTML = `
      <div class="character-info">
        <div class="name">${name}</div>
        <div class="occupation">${occupation}</div>
        <div class="cartoon">${cartoon}</div>
        <div class="weapon">${weapon}</div>
      </div>
      `
      console.log(newCharacterHTML)
      document.getElementById('newlist').innerHTML += newCharacterHTML
      document.querySelector('#fetch-one').style.backgroundColor = 'green'
    } catch {
      document.querySelector('#fetch-one').style.backgroundColor = 'red'
    }
  }

  document.getElementById('edit-character-form').onsubmit = async function(e) {
    e.preventDefault()
    const id = document.getElementById('editId').value
    const name = document.getElementById('editName').value
    const occupation = document.getElementById('editOccupation').value
    const cartoon = document.getElementById('editCartoon').checked
    const weapon = document.getElementById('editWeapon').value

    const character = {
      name,
      occupation,
      cartoon,
      weapon
    }
    try {
      const result = await charactersAPI.updateOneRegister(id, character)
      document.querySelector('#send-data-edit').style.backgroundColor = 'green'
    } catch {
      document.querySelector('#send-data-edit').style.backgroundColor = 'red'
    }
  }

  document.getElementById('new-character-form').onsubmit = async function(e) {
    e.preventDefault()
    const name = document.getElementById('newName').value
    const occupation = document.getElementById('newOccupation').value
    const cartoon = document.getElementById('newCartoon').checked
    const weapon = document.getElementById('newWeapon').value

    const character = {
      name,
      occupation,
      cartoon,
      weapon
    }
    try {
      const result = await charactersAPI.createOneRegister(character)
      document.querySelector('#send-data-new').style.backgroundColor = 'green'
    } catch {
      document.querySelector('#send-data-new').style.backgroundColor = 'red'
    }
  }

  document.getElementById('delete-one').onclick = async function(e) {
    e.preventDefault()
    const theId = document.getElementById('theDeleteId').value
    try {
      const result = await charactersAPI.deleteOneRegister(theId)
      document.querySelector('#delete-one').style.backgroundColor = 'green'
    } catch {
      document.querySelector('#delete-one').style.backgroundColor = 'red'
    }
  }
})
