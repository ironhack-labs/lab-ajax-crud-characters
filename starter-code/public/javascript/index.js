const charactersAPI = new APIHandler("http://localhost:8000")

const characterContainerDOMEL = document.querySelector(".character-info")
const characterName = document.querySelector(".name")
const characterOccupation = document.querySelector(".occupation")
const characterCartoon = document.querySelector(".cartoon")
const characterWeapon = document.querySelector(".weapon")


$(document).ready( () => {
  document.getElementById('fetch-all').onclick = function(){
   charactersAPI.getFullList()
  }
  
  document.getElementById('fetch-one').onclick = function(){
    charactersAPI.getOneRegister()
    
  }
  
  document.getElementById('delete-one').onclick = function(){
        
  }
  
  document.getElementById('edit-character-form').onsubmit = function(){
            
  }
  
  document.getElementById('new-character-form').onsubmit = function(){
                
  }
})
