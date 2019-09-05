const charactersAPI = new APIHandler("http://localhost:8000")

$(document).ready( () => {
  document.getElementById('fetch-all').onclick = async function(){
    const fullList = await charactersAPI.getFullList();
      const charactersContainer = document.getElementsByClassName('characters-container');
      charactersContainer[0].innerHTML = '';
      fullList.forEach(element => {
        charactersContainer[0].innerHTML += `
            <div class="character-info">
              <div class="name">Character Name: ${element.name}</div>
              <div class="occupation">Character Occupation: ${element.occupation}</div>
              <div class="cartoon">Is a Cartoon? ${element.cartoon}</div>
              <div class="weapon">Character Weapon: ${element.weapon}</div> 
            </div>
            `;
    });

  }
  
  document.getElementById('fetch-one').onclick = async function(){
    let indexId = document.getElementById('character-id').value;
      const oneRegister = await charactersAPI.getOneRegister(indexId);
      const charactersContainer = document.getElementsByClassName('characters-container');
      charactersContainer[0].innerHTML = '';
      charactersContainer[0].innerHTML += `
      <div class="character-info">
        <div class="name">Character Name: ${oneRegister.name}</div>
        <div class="occupation">Character Occupation: ${oneRegister.occupation}</div>
        <div class="cartoon">Is a Cartoon? ${oneRegister.cartoon}</div>
        <div class="weapon">Character Weapon: ${oneRegister.weapon}</div> 
      </div>
      `;
  }

  document.getElementById('new-character-form').onsubmit = async function(event){
    const body = {
      name: event.target[0].value,
      occupation: event.target[1].value,
      weapon: event.target[2].value,
      cartoon: event.target[3].checked
    }
    await charactersAPI.createOneRegister(body)

    // event.preventDefault();
            
  }
  
  document.getElementById('delete-one').onclick = function(){
        
  }
  
  document.getElementById('edit-character-form').onsubmit = function(){
            
  }
  

})
