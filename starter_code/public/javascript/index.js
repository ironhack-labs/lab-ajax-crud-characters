const charactersAPI = new APIHandler("http://localhost:8000/characters/")

$(document).ready(() => {
  let characters = document.getElementsByClassName('characters-container')[0]
  let characterData = document.getElementsByClassName('character-info')[0]
    //wipe at start
  characters.removeChild(characterData)

  document.getElementById('fetch-all').onclick = function () {
    charactersAPI.getFullList()
      .then(characters => {
        characters.innerHTML= "" // reset html before print a new value
        //iterate through elements (characters) and call ShowOne.. to print all data from the json object
        characters.data.forEach(character => {
          showOneCharacter(character)
        });
      })
  }

  document.getElementById('fetch-one').onclick = function (element) {
    charactersAPI.getOneRegister(element.target.previousElementSibling.value)
    .then(character=>{
      characters.innerHTML=""
      showOneCharacter(character.data)
    })
    .catch(err => console.log(err))
    
  }

  document.getElementById('delete-one').onclick = function () {
    /*https://www.w3schools.com/jsref/prop_element_previouselementsibling.asp
      previousElementSibling returns the previous element of the specefied one
      ideal use here
    */
    charactersAPI.deleteOneRegister(this.previousElementSibling.value)
      .then(() => console.log(`Deleted ${this.previousElementSibling.value}`))
      .catch(err => console.log(err))
  }

  document.getElementById('edit-character-form').onsubmit = function (element) {
    element.preventDefault();
    charactersAPI.updateOneRegister(element.target.querySelector('[name=chr-id]').value,getSingleCharacter(element.target))
    .then(character=>{
      characters.innerHTML=""
      showOneCharacter(character.data)
      console.log(`Edited: ${this.character.data}`)
    })
    .catch(err => console.log(err))
  }

  document.getElementById('new-character-form').onsubmit = function (element) {
   element.preventDefault()
    charactersAPI.createOneRegister(getSingleCharacter(element.target))
    .then(character=>{
      characters.innerHTML="" //reset html before print a new value
      showOneCharacter(character.data)
    })
    .catch(err => console.log(err))
  }

  /* Method used to get Character data from json object */
  const getSingleCharacter = (element) =>{
    return {
      name:element.querySelector('[name = name]').value,
      occupation:element.querySelector('[name = occupation]').value,
      weapon:element.querySelector('[name = weapon]').value,
      cartoon:element.querySelector('[name = cartoon]').checked
    }
  }

  /* Method used to show Character */
  const showOneCharacter = (character => {
    /* https://www.w3schools.com/jsref/met_node_clonenode.asp 
        Used to clone node of specific element
    */
      let addNewCharacter= characterData.cloneNode(true)
      characters.append(addNewCharacter)
      PrintSingleCharacter(addNewCharacter, character)
  })

  /* Method used to print Character */
  const PrintSingleCharacter = (element, data) => {
    element.getElementsByClassName('id')[0].innerHTML = data.id
    element.getElementsByClassName('name')[0].innerHTML = data.name
    element.getElementsByClassName('occupation')[0].innerHTML = data.occupation
    element.getElementsByClassName('cartoon')[0].innerHTML = data.cartoon
    element.getElementsByClassName('weapon')[0].innerHTML = data.weapon
  }
  
})