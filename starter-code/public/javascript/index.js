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

      let characterId = Number(document.getElementById('char-id').value);
      console.log(characterId);
  
      // Make a GET request for one
      axios.get(`https://ih-crud-api.herokuapp.com/characters/${characterId}` )
        .then(response => {
          listOfCharacters.innerHTML = '';
          
          let character = document.createElement('div');
          character.setAttribute('class', 'character-info')
          character.innerHTML = `<div class="name">${response.data.name}</div>
                                <div class="occupation">${response.data.occupation}</div>
                                <div class="debt">${response.data.debt}</div>
                                <div class="weapon">${response.data.weapon}</div>`;
          
          listOfCharacters.appendChild(character);
  
          console.log('get successful and the response is: ',response );
        })
        .catch(error => {
            console.log('Oh No! Error is: ', error);  
        })
    }
  
  document.getElementById('delete-one').onclick = function(){
        
  }
  
  document.getElementById('edit-character-form').onsubmit = function(){
            
  }
  
  document.getElementById('new-character-form').onsubmit = function(){
                
  }
})
