const charactersAPI = new APIHandler("http://localhost:8000")

$(document).ready( () => {

  
    let listOfCharacters = document.querySelector('.characters-container');
  
    document.getElementById('fetch-all').onclick = function(){
      // Make a GET request for all
      axios.get('https://ih-crud-api.herokuapp.com/characters')
        .then(response => {
          listOfCharacters.innerHTML = '';
            
          response.data.forEach((each)=>{
            let character = document.createElement('div');
            character.setAttribute('class', 'character-info')
            character.innerHTML = `<div class="name">${each.name}</div>
                                  <div class="occupation">${each.occupation}</div>
                                  <div class="debt">${each.debt}</div>
                                  <div class="weapon">${each.weapon}</div>`;
            
            listOfCharacters.appendChild(character);
          });
            console.log('post successful and the response is: ',response );
        })
        .catch(error => {
            console.log('Oh No! Error is: ', error);  
        })
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
