const charactersAPI = new APIHandler("https://minions-api.herokuapp.com/")
// inprime en el DOM
console.log(charactersAPI)
$(document).ready( () => {
  document.getElementById('fetch-all').onclick = function(){
    const allCharacters = {
      name: charactersAPI[0].value ,
      occupation: charactersAPI.occupation,
      weapon: charactersAPI.weapon
    }
    axios.post("https://minions-api.herokuapp.com/characters", allCharacters)
    .then(response => {
      console.log('post successful and the response is: ', response);
    })
    .catch(error => {
      console.log('Oh No! Error is: ', error);
    })
    console.log(allCharacters)
  }
  
  document.getElementById('fetch-one').onclick = function(){
    
  }
  
  document.getElementById('delete-one').onclick = function(){
        
  }
  
  document.getElementById('edit-character-form').onsubmit = function(){
            
  }
  
  document.getElementById('new-character-form').onsubmit = function(){
                
  }
})
