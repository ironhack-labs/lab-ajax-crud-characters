const charactersAPI = new APIHandler("https://minions-api.herokuapp.com")


const updateCharacterInputs = document.querySelectorAll('#edit-character-form input')

//CREATE CONTAINER

const createContainer = (arg)=>{
  const charactersContainer = document.getElementsByClassName('characters-container')[0]
  charactersContainer.innerHTML= ``
      const ChildCharactersContainer1 = document.createElement("div")
      charactersContainer.appendChild(ChildCharactersContainer1).innerHTML = `Name:${arg.name}`
      
      const ChildCharactersContainer2 = document.createElement("div")
      charactersContainer.appendChild(ChildCharactersContainer2).innerHTML = `Occupation:${arg.occupation}`
      
      const ChildCharactersContainer3 = document.createElement("div")
      charactersContainer.appendChild(ChildCharactersContainer3).innerHTML = `Weapon:${arg.weapon}`
}
$(document).ready( () => {
  //DELETE CHARACTER FORM
  document.getElementById('fetch-all').onclick = e =>{
    charactersAPI.getFullList()
    .then(allCharacters => {
      const charactersContainer = document.getElementsByClassName('characters-container')[0]
      charactersContainer.innerHTML= ``
      allCharacters.forEach(elm => {
        const ChildCharactersContainer1 = document.createElement("div")
      charactersContainer.appendChild(ChildCharactersContainer1).innerHTML = `Name:${elm.name}`
      
      const ChildCharactersContainer2 = document.createElement("div")
      charactersContainer.appendChild(ChildCharactersContainer2).innerHTML = `Occupation:${elm.occupation}`
      
      const ChildCharactersContainer3 = document.createElement("div")
      charactersContainer.appendChild(ChildCharactersContainer3).innerHTML = `Weapon:${elm.weapon}`
      
      })
    })
    .catch(error => console.log('¡ops! error:', error))
  }
  //SEARCH CHARACTER FORM
  
  document.getElementById('fetch-one').onclick = function(){
    charactersAPI.getOneRegister()
    
  }

  //DELETE CHARACTER FORM
  
  document.getElementById('delete-one').onclick = function(){
    charactersAPI.deleteOneRegister () 
  }

  //EDIT CHARACTER FORM
  
  document.getElementById('edit-character-form').onsubmit = function(event){
    event.preventDefault()
    charactersAPI.updateOneRegister()
  }

  //NEW CHARACTER FORM

  document.getElementById('send-data').onclick = function(event){
    event.preventDefault()
    charactersAPI.createOneRegister()
  }
})

