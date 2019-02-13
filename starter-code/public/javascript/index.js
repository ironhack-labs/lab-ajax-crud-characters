const charactersAPI = new APIHandler("http://localhost:8000/characters")
let container = $('.characters-container')

$(document).ready( () => {
  document.getElementById('fetch-all').onclick = function(){
   charactersAPI.getFullList()
     .then(res => {
       container.empty()
       res.forEach(char => {
          container.append(`<div class="character-info">
            <div class="name">${char.name}</div>
            <div class="occupation">Occupation: ${char.occupation}</div>
            <div class="cartoon">Is a Cartoon? ${char.cartoon}</div>
            <div class="weapon">Weapon: ${char.weapon}</div>`)
      })
      })
     .catch(e => console.log(e))

  }
  
  document.getElementById('fetch-one').onclick = function () {
    let fetchOne = $("[name='character-id']")
    charactersAPI.getOneRegister(fetchOne.val())
      .then(char => {
        container.empty()
        container.append(`<div class="character-info">
            <div class="name">${char.name}</div>
            <div class="occupation">Occupation: ${char.occupation}</div>
            <div class="cartoon">Is a Cartoon? ${char.cartoon}</div>
            <div class="weapon">Weapon: ${char.weapon}</div>`)
      })
      .catch(e=>console.log(e))
  }
  
  document.getElementById('delete-one').onclick = function(){
    let deleteOne = $("[name='character-id-delete']") 
    let deleteButton = $("#delete-one")
    charactersAPI.deleteOneRegister(deleteOne.val())
      .then(()=>deleteButton.css('background-color', 'green'))
      .catch(e => {
        deleteButton.css('background-color', 'red')
        console.log(e)
      })
  }
  
  document.getElementById('edit-character-form').onsubmit = function (e) {
    e.preventDefault()
    let editButton = $("#edit-send-data")
    let editId = $("#chr-id").val()
    let editName = $("#editName").val()
    let editOccupation = $("#editOccupation").val()
    let editWeapon = $("#editWeapon").val()
    let editCartooon = $("#editCartoon").is(':checked')
    charactersAPI.updateOneRegister(editId, { id: editId, name: editName, occupation: editOccupation, weapon: editWeapon, cartoon: editCartooon })
      .then(() => editButton.css('background-color', 'green'))
      .catch(e => {
        editButton.css('background-color', 'red')
        console.log(e)
      })
  }
  
  document.getElementById('new-character-form').onsubmit = function (e) {
    e.preventDefault()
    let newButton = $("#send-data")
    let newName = $("[name='name']").val()
    let newOccupation = $("[name='occupation']").val()   
    let newWeapon = $("[name='weapon']").val()
    let newCartooon = $("[name='cartoon']").is(':checked')
    charactersAPI.createOneRegister({name: newName, occupation: newOccupation, weapon: newWeapon, cartoon: newCartooon})
    .then(()=>newButton.css('background-color', 'green'))
    .catch(e => {
      newButton.css('background-color', 'red')
      console.log(e)
    })
  }
})
