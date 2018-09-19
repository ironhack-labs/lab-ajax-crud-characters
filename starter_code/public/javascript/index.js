const charactersAPI = new APIHandler("http://localhost:8000")

let showCharacter = (character) => {
  let elem = $('<div>').addClass("character-info");
  
  let id = $('<div>').addClass("id").text(`Id: `);
  let idspan = $('<span>').addClass("id").text(`${character.data.id}`);
  let name = $('<div>').addClass("occupation").text(`Name: `);
  let namespan = $('<span>').addClass("occupation").text(`${character.data.name}`);
  let occupation = $('<div>').addClass("occupation").text(`Ocupation: `);
  let occupationspan = $('<span>').addClass("occupation").text(`${character.data.occupation}`);
  let cartoon = $('<div>').addClass("cartoon").text(`Cartoon: `);
  let cartoonspan = $('<span>').addClass("cartoon").text(`${character.data.cartoon}`);
  let weapon = $('<div>').addClass("weapon").text(`Weapon: `);
  let weaponspan = $('<span>').addClass("weapon").text(`${character.data.weapon}`);
  id.append(idspan);
  elem.append(id);
  name.append(namespan);
  elem.append(name);
  occupation.append(occupationspan);
  elem.append(occupation);
  cartoon.append(cartoonspan);
  elem.append(cartoon);
  weapon.append(weaponspan);
  elem.append(weapon);
  $('#characters').append(elem);
}

let printAll = () => {
  charactersAPI.getFullList().then(list => {
  $('#characters').empty();
  list.forEach(elem => {
    charactersAPI.getOneRegister(elem.id).then(c => showCharacter(c));
  })
})
}


$(document).ready( () => {

  document.getElementById('fetch-all').onclick = function(){
    charactersAPI.getFullList();
    printAll();

  }
  
  document.getElementById('fetch-one').onclick = function(){
    let charId = document.getElementById('char-id').value;
    console.log("ELEMENT", charId)
      $('#characters').empty();
      charactersAPI.getOneRegister(charId).then(c => showCharacter(c));
     
  }
  
  document.getElementById('delete-one').onclick = function(e){
    e.preventDefault();
    charactersAPI.deleteOneRegister(document.getElementById('del-id').value);
    printAll();
        
  }
  
  document.getElementById('edit-character-form').onsubmit = function(e){
    e.preventDefault();
    const updateInfo = {
      name: document.getElementById("name-edit").value,
      occupation: document.getElementById("occ-edit").value,
      weapon: document.getElementById("weapon-edit").value,
      cartoon: document.getElementById("cartoon-edit").checked
    }
    charactersAPI.updateOneRegister(document.getElementById("id-edit").value, updateInfo);
    printAll();
            
  }
  
  document.getElementById('new-character-form').onsubmit = function(e){
    e.preventDefault();
    const characterInfo = {
      name: document.getElementById("name-input").value,
      occupation: document.getElementById("occ-input").value,
      weapon: document.getElementById("weapon-input").value,
      cartoon: document.getElementById("cartoon-input").checked
    }
    charactersAPI.createOneRegister(characterInfo);
    printAll();
                
  }
})
