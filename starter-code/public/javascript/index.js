const charactersAPI = new APIHandler("http://localhost:8000/characters/")

window.onload = () => {
  console.log('antes ')
}
  document.getElementById('fetch-all').onclick = function () {
    charactersAPI.getFullList()
  }

  document.getElementById('fetch-one').onclick = function () {
    const id = document.getElementById('character-id').value
    charactersAPI.getOneRegister(id)
  }

  document.getElementById('delete-one').onclick = function () {
    const id = document.getElementById('character-id-delete').value
    charactersAPI.deleteOneRegister(id)
  }

  document.getElementById('edit-character-form').onsubmit = function () {
    
    event.preventDefault();
    const id = document.getElementById('chr-id-edit').value
    const name = document.getElementById('name-edit').value
    const occupation = document.getElementById('occupation-edit').value
    const weapon = document.getElementById('weapon-edit').value
    const cartoon = document.getElementById('cartoon-edit').checked
    //debugger
    console.log(name)
    charactersAPI.updateOneRegister(id,{name,occupation,weapon,cartoon})

  }

  document.getElementById('new-character-form').onsubmit = function () {
    //const id = document.querySelector('[name="chr-id-edit"]').value
    const name = document.querySelector('[name="name"]').value
    const occupation = document.querySelector('[name="occupation"]').value
    const weapon = document.querySelector('[name="weapon"]').value
    const cartoon = document.querySelector('[name="cartoon"]').checked
    debugger
    console.log(occupation)
    charactersAPI.createOneRegister({
      name: name,
      occupation: occupation,
      weapon: weapon,
      cartoon: cartoon
    })
    // charactersAPI.createOneRegister({name,occupation,weapon,cartoon})
  }

