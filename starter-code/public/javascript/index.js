const charactersAPI = new APIHandler("http://localhost:8000")

$(document).ready( () => {

  const charactersContainer = document.querySelector(".characters-container")
  const characterId = document.querySelector("#character-id")
  const characterIdDelete = document.querySelector("#character-id-delete")


  document.getElementById('fetch-all').onclick = function(){
    charactersAPI.getFullList()
    .then (characters => {
      charactersContainer.innerHTML = ""
      characters.forEach (character => {
        const div = document.createElement("div")
        div.setAttribute("class", "character-info")
        for (let prop in character) {
          const innerDiv = document.createElement("div")
          innerDiv.setAttribute("class", `${prop}`)
          innerDiv.innerHTML = `<p>${prop}: <span class="yellow">${character[prop]}</span></p>`
          div.appendChild(innerDiv)
        }
        charactersContainer.appendChild(div)
      })
    })
  }
  
  document.getElementById('fetch-one').onclick = function(){
    charactersAPI.getOneRegister(characterId.value)
    .then (character => {
      if (character){
        charactersContainer.innerHTML = ""
        const div = document.createElement("div")
        div.setAttribute("class", "character-info")
        for (let prop in character) {
          const innerDiv = document.createElement("div")
          innerDiv.setAttribute("class", `${prop}`)
          innerDiv.innerHTML = `<p>${prop}: <span class="yellow">${character[prop]}</span></p>`
          div.appendChild(innerDiv)
          document.getElementById('fetch-one').style.backgroundColor = "green"
          setTimeout (() => {
            document.getElementById('fetch-one').style.backgroundColor = ""
            characterId.value = ""
          }, 500)
        }
        charactersContainer.appendChild(div)
      } else {
        charactersContainer.innerHTML = ""
        const div = document.createElement("div")
        div.setAttribute("class", "character-info")
        const innerDiv = document.createElement("div")
        innerDiv.innerText = "No character has this ID"
        div.appendChild(innerDiv)
        charactersContainer.appendChild(div)
        document.getElementById('fetch-one').style.backgroundColor = "red" 
        setTimeout (() => {
          document.getElementById('fetch-one').style.backgroundColor = ""
          characterId.value = ""
        }, 500)
      }
    })
  }
  
  document.getElementById('delete-one').onclick = function(){
    charactersAPI.deleteOneRegister (characterIdDelete.value)
    .then(response => {
        charactersContainer.innerHTML = ""
        const div = document.createElement("div")
        div.setAttribute("class", "character-info")
        const innerDiv = document.createElement("div")
        innerDiv.innerText = response
        div.appendChild(innerDiv)
        charactersContainer.appendChild(div)
        if (response === "Character has been successfully deleted"){
          document.getElementById('delete-one').style.backgroundColor = "green" 
          setTimeout (() => {
            document.getElementById('delete-one').style.backgroundColor = ""
            characterIdDelete.value = ""
          }, 500)        
        } else {
          document.getElementById('delete-one').style.backgroundColor = "red" 
          setTimeout (() => {
            document.getElementById('delete-one').style.backgroundColor = ""
            characterIdDelete.value = ""
          }, 500)
        }
    })
  }
  
  document.querySelector("#chr-id").onkeyup = function(){

    const editId = document.querySelector("#chr-id")
    const editName = document.querySelector("#name")
    const editOccupation = document.querySelector("#occupation")
    const editWeapon = document.querySelector("#weapon")
    const editCartoon = document.querySelector("#cartoon")

    charactersAPI.getOneRegister(document.querySelector("#chr-id").value)
    .then (character => {
      if (document.querySelector("#chr-id").value){
        if (character){
          document.querySelector("#name").value = character.name
          document.querySelector("#occupation").value = character.occupation
          document.querySelector("#weapon").value = character.weapon
          if (character.cartoon){
            document.querySelector("#cartoon").checked = true
          } else {
            document.querySelector("#cartoon").checked = false
          }
        } else {
          document.querySelector("#chr-id").style.backgroundColor = "red"
          setTimeout (() => {
            document.querySelector("#chr-id").style.backgroundColor = ""
            document.querySelector("#chr-id").value = ""
            editId.value = ""
            editName.value = ""
            editOccupation.value = ""
            editWeapon.value = ""
            editCartoon.checked = false
          }, 500)
        }
      } else {
          document.querySelector("#chr-id").style.backgroundColor = ""
          document.querySelector("#chr-id").value = ""
          editId.value = ""
          editName.value = ""
          editOccupation.value = ""
          editWeapon.value = ""
          editCartoon.checked = false
      }
    })  
  }

  document.getElementById('edit-character-form').onsubmit = function(e){
    e.preventDefault()

    const editId = document.querySelector("#chr-id")
    const editName = document.querySelector("#name")
    const editOccupation = document.querySelector("#occupation")
    const editWeapon = document.querySelector("#weapon")
    const editCartoon = document.querySelector("#cartoon")

    charactersAPI.updateOneRegister (editId.value,editName.value,editOccupation.value,editCartoon.checked,editWeapon.value)
    .then(character => {
      if (character){
        document.querySelector("#send-edit").style.backgroundColor = "green"
      } else {
        document.querySelector("#send-edit").style.backgroundColor = "red"
      }
      setTimeout (() => document.querySelector("#send-edit").style.backgroundColor = "", 500)
      charactersContainer.innerHTML = ""
      const div = document.createElement("div")
      div.setAttribute("class", "character-info")
      for (let prop in character) {
        const innerDiv = document.createElement("div")
        innerDiv.setAttribute("class", `${prop}`)
        innerDiv.innerHTML = `<p>${prop}: <span class="yellow">${character[prop]}</span></p>`
        div.appendChild(innerDiv)
      }
      charactersContainer.appendChild(div)
      editId.value = ""
      editName.value = ""
      editOccupation.value = ""
      editWeapon.value = ""
      editCartoon.checked = false
    })
  }
  
  document.getElementById('new-character-form').onsubmit = function(e){
    e.preventDefault()

    const newName = document.querySelector("#new-name")
    const newOccupation = document.querySelector("#new-occupation")
    const newWeapon = document.querySelector("#new-weapon")
    const newCartoon = document.querySelector("#new-cartoon")

    charactersAPI.createOneRegister (newName.value,newOccupation.value,newCartoon.checked,newWeapon.value)
    .then (character => {
      if (character){
        document.querySelector("#send-new").style.backgroundColor = "green"
      } else {
        document.querySelector("#send-new").style.backgroundColor = "red"
      }
      setTimeout (() => document.querySelector("#send-new").style.backgroundColor = "", 500)
      charactersContainer.innerHTML = ""
      const div = document.createElement("div")
      div.setAttribute("class", "character-info")
      for (let prop in character) {
        const innerDiv = document.createElement("div")
        innerDiv.setAttribute("class", `${prop}`)
        innerDiv.innerHTML = `<p>${prop}: <span class="yellow">${character[prop]}</span></p>`
        div.appendChild(innerDiv)
      }
      charactersContainer.appendChild(div)
      newName.value = ""
      newOccupation.value = ""
      newWeapon.value = ""
      newCartoon.checked = false
    })
  }
})



