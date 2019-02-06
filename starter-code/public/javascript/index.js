const charactersAPI = new APIHandler("http://localhost:8000")

$(document).ready( () => {
  document.getElementById('fetch-all').onclick = function(e){
    e.preventDefault();
    
    charactersAPI.getFullList()
    .then(characters =>{
      console.log(characters.data);

      let html = '';
      characters.data.forEach(element => {
        html += `
        <div class="character-info">
          <div class="name">Character Name: ${element.name}</div>
          <div class="occupation">Character Occupation: ${element.occupation}</div>
          <div class="cartoon">Is a Cartoon?: ${element.cartoon}</div>
          <div class="weapon">Character Weapon: ${element.weapon}</div>
      </div>`
      });

      console.log(html)

      document.querySelector('.characters-container').innerHTML = html;
    })
  }
  
  document.getElementById('fetch-one').onclick = function(e){
    
    e.preventDefault();

    const fetchId = document.querySelector(".operation input").value;
    charactersAPI.getOneRegister(fetchId)
    .then(character =>{
      
      let characterInfo = `
      <div class="character-info">
          <div class="name">Character Name: ${character.name}</div>
          <div class="occupation">Character Occupation: ${character.occupation}</div>
          <div class="cartoon">Is a Cartoon?: ${character.cartoon}</div>
          <div class="weapon">Character Weapon: ${character.weapon}</div>
      </div>`
    
      document.querySelector('.characters-container').innerHTML = characterInfo;
    })

  }
  
  document.getElementById('delete-one').onclick = function(){
  

    let deleteId = document.querySelector('.operation-delete input').value;
    let deleteObj = null

    charactersAPI.getOneRegister(deleteId)
    
    .then((character) => {
      deleteObj = character
    })
    .catch(err => {
      console.log(err)
    })

    charactersAPI.deleteOneRegister(deleteId)
    .then(() => {
      console.log(deleteObj)
    })
  }
  
  document.getElementById('edit-character-form').onsubmit = function(){
            
  }
  
  document.getElementById('new-character-form').onsubmit = function(){
                
  }
})
