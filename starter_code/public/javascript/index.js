const charactersAPI = new APIHandler("http://localhost:8000/characters/");

$(document).ready( () => {
  document.getElementById('fetch-all').onclick = function(){  

    const characters = new Promise(function(resolve, reject) {  
      let data = charactersAPI.getFullList();
      if (data !== undefined ) {
         resolve(data);  
      }
      else {
         reject('Error en la consulta '+data);
      }
    });
    characters.then(val => {
      let mainDiv = document.getElementsByClassName('characters-container');
      console.log('Entro al then '+val);
      val.forEach(character => {
        let div = document.createElement('div');
        let card = '<div class="character-info">';
        card +=  '<div class="name">Character Name</div>';
        card +=  '<div class="occupation">Character Occupation</div>';
        card +=  '<div class="cartoon">Is a Cartoon?</div>';
        card +=  '<div class="weapon">Character Weapon</div>';
        card +=  '</div>';
        div.appendChild(card);
        mainDiv.append(div);
      });
    })  
  }
  
  document.getElementById('fetch-one').onclick = function(){
    console.log('fetch-one');
  }
  
  document.getElementById('delete-one').onclick = function(){
    console.log('delete-one');        
  }
  
  document.getElementById('edit-character-form').onsubmit = function(){
    console.log('edit-character-form');            
  }
  
  document.getElementById('new-character-form').onsubmit = function(){
    console.log('new-character-form');                
  }
})
