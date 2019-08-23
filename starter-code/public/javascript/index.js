const charactersAPI = new APIHandler("http://localhost:8000")

$(document).ready( () => {
  document.getElementById('fetch-all').onclick = function(){
    charactersAPI.getFullList()
  }

  document.getElementById('reset').onclick = function(){
    let html = `<div class="character-info">
                <div class="name">Character Name</div>
                <div class="occupation">Character Occupation</div>
                <div class="cartoon">Is a Cartoon?</div>
                <div class="weapon">Character Weapon</div>
                </div>`;
      document.querySelector(".characters-container").innerHTML = html;
  }
  
  document.getElementById('fetch-one').onclick = function(){
    let id = document.querySelector('.operation input[name="character-id"]').value;
    charactersAPI.getOneRegister(id);
  }
  
  document.getElementById('delete-one').onclick = function(){
    let id = document.querySelector('.operation input[name="character-id-delete"]').value;
    charactersAPI.deleteOneRegister(id); 

    document.getElementById(id).remove();
  }
  
  document.getElementById('edit-character-form').onsubmit = function(e){
    e.preventDefault();
    const char = {
      name: document.querySelector('#edit-character-form input[name="name"]').value,
      id: document.querySelector('#edit-character-form input[name="chr-id"]').value,
      occupation: document.querySelector('#edit-character-form input[name="occupation"]').value,
      weapon: document.querySelector('#edit-character-form input[name="weapon"]').value,
      cartoon: document.querySelector('#edit-character-form input[type="checkbox"]').checked
    }
    charactersAPI.updateOneRegister(char);
  }
  
  document.getElementById('new-character-form').onsubmit = function(e){
    e.preventDefault();

    // Alternative Method
    // let name = e.target[0].value;
    // let occupation = e.target[1].value;
    // let weapon = e.target[2].value;
    // let cartoon = e.target[3].checked;

    // let characterObj = {name, occupation, weapon, cartoon};
    // charactersAPI.createOneRegister(characterObj)

    const character ={ 
        name: document.querySelector('#new-character-form input[name="name"]').value,
        occupation: document.querySelector('#new-character-form input[name="occupation"]').value,
        weapon: document.querySelector('#new-character-form input[name="weapon"]').value,
        cartoon: document.querySelector('#new-character-form input[type="checkbox"]').checked
      };
      console.log(character);
      charactersAPI.createOneRegister(character);
  }
})