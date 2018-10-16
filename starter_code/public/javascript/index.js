const charactersAPI = new APIHandler("http://localhost:3000/characters/");

$(document).ready( () => {
  document.getElementById('fetch-all').onclick = function(){ 
    charactersAPI.getFullList(); 
    /*console.log("QUISE GENERAR UNA PROMESA Y NO SE ESPERA A QUE LA FUNCION SE EJECUTE :(((((");*/
    /*const characters = new Promise(function(resolve, reject) {  
      //let data = charactersAPI.getFullList();
      if (true) {
         resolve(charactersAPI.getFullList());  
      }
      else {
         reject('Error en la consulta '+"data");
      }
    });
    characters.then(val => {
      //let data = charactersAPI.getFullList();
      let mainDiv = document.getElementsByClassName('characters-container');
      console.log('Entro al then '+ val);
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
    })*/
  }
  
  document.getElementById('fetch-one').onclick = function(){
    let id = document.getElementsByName('character-id');
    if(id[0].value === "") {
      charactersAPI.cardMessage("You need an ID to search");
      return;
    }
    charactersAPI.getOneRegister(id[0].value);
    console.log('fetch-one' + id[0].value);
  }
  
  document.getElementById('delete-one').onclick = function(){
    let id = document.getElementsByName('character-id-delete');
    if(id[0].value === "") {
      charactersAPI.cardMessage("You need an ID to delete");
      return;
    }
    charactersAPI.deleteOneRegister(id[0].value);
    console.log('delete-one');        
  }
  
  document.getElementById('edit-character-form').onsubmit = function(e){
    e.preventDefault();
    let id = document.getElementById('idUpdate').value,
        name = document.getElementById('nameUpdate').value,
        occupation = document.getElementById('occupationUpdate').value,
        weapon = document.getElementById('weaponUpdate').value,
        cartoon = document.getElementById('checkUpdate').checked
    if(id === "" && (name === "" || occupation === "" || weapon === "")) {
      charactersAPI.cardMessage("You need ID and some value to update");
      return;
    }
    let newCharacter = {
      "name": name,
      "occupation": occupation,
      "weapon": weapon,
      "cartoon": cartoon
    }
    charactersAPI.updateOneRegister(newCharacter,id);
    console.log('edit-character-form');            
  }
  
  document.getElementById('new-character-form').onsubmit = function(e){
    e.preventDefault();
    let name = document.getElementById('nameNew').value,
        occupation = document.getElementById('occupationNew').value,
        weapon = document.getElementById('weaponNew').value,
        cartoon = document.getElementById('checkNew').checked
    if(name === "" || occupation === "" || weapon === "") {
      charactersAPI.cardMessage("You need all values to register");
      return;
    }
    let newCharacter = {
      "name": name,
      "occupation": occupation,
      "weapon": weapon,
      "cartoon": cartoon
    }
    charactersAPI.createOneRegister(newCharacter);
    console.log('new-character-form' + newCharacter);                
  }
})
