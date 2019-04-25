const charactersAPI = new APIHandler("http://localhost:8000/characters")
//const endpoint = "http://localhost:8000/characters"
const buttonFetchAll = document.getElementById("fetch-all")
const buttonFetchOne = document.getElementById("fetch-one")
const buttonCreate = document.getElementById("new-character-form")
const buttonEditOne = document.getElementById("edit-character-form")
const buttonDeleteOne = document.getElementById("delete-one")

window.onload =  () => {
  buttonFetchAll.onclick = () => {
      charactersAPI.getAllRegiter() 
      .then(data => console.log(data))
      .catch(err => console.log(err))
  }

 buttonFetchOne.onclick = () => {
   const id = document.querySelector('input[name="character-id"]').value
    charactersAPI.getOneRegister(id)
    .then(data => console.log(data))
    .catch(err =>  console.log(err))
  }
  
  buttonCreate.onsubmit = (e) => {
    e.preventDefault()
    const name = document.querySelector('input[name="name"]').value
    const occupation = document.querySelector('input[name="occupation"]').value
    const weapon = document.querySelector('input[name="weapon"]').value
    const cartoon = document.querySelector('input[name="cartoon"]').checked

    charactersAPI.createOneRegister({name, occupation, weapon, cartoon})
    .then(() => console.log('You created a new character'))
    .catch(err =>  console.log(err)) 
  }
  
  buttonEditOne.onsubmit = (e) => {
    e.preventDefault()
    const id = buttonEditOne.querySelector('input[name="chr-id"]').value
    const name = buttonEditOne.querySelector('input[name="name"]').value
    const occupation = buttonEditOne.querySelector('input[name="occupation"]').value
    const weapon = buttonEditOne.querySelector('input[name="weapon"]').value
    const cartoon = buttonEditOne.querySelector('input[name="cartoon"]').checked
    
    charactersAPI.updateOneRegister({id, name, occupation, weapon, cartoon})
    .then(() => console.log('You updated a character'))
    .catch(err =>  console.log(err))
  }

  buttonDeleteOne.onclick = () => {
    const id = document.querySelector('input[name="character-id-delete"]').value
    charactersAPI.deleteOneRegister(id)
    .then(() => console.log("You deleted a character :("))
    .catch(err =>  console.log(err))
  }
}

  
