const charactersAPI = new APIHandler("http://localhost:8000")

$(document).ready( () => {
  document.getElementById('fetch-all').onclick = function(){
    charactersAPI.getFullList()
    .then(res => {
        console.log(res);
    })
  }
  
  document.getElementById('fetch-one').onclick = function(){
    let id = document.getElementById('fetch-one1').value
    charactersAPI.getOneRegister(id)
    .then(res => {
        console.log(res);
    })
  }
  
  document.getElementById('delete-one').onclick = function(){
    let id = document.getElementById('delete-one1').value
    charactersAPI.deleteOneRegister(id)
    .then(res => {
        console.log(res);
    })
  }
  
  document.getElementById('edit-character-form').onsubmit = function(){
    event.preventDefault();
    let iCharact = document.getElementById('icha').value;
    let name = document.getElementById('iname').value;
    let occupation = document.getElementById('ioccupation').value;
    let weapon = document.getElementById('iweapon').value;
    let cartoon = document.getElementById('icartoon').value;
    
    let newCharact = {
      name: name,
      occupation: occupation,
      weapon: weapon,
      cartoon: cartoon
    };
    console.log(newCharact)
    charactersAPI.updateOneRegister(newCharact, iCharact)        
  }
  
  document.getElementById('new-character-form').onsubmit = function(){
    event.preventDefault();
    let name = document.getElementById('name').value;
    let occupation = document.getElementById('occupation').value;
    let weapon = document.getElementById('weapon').value;
    let cartoon = document.getElementById('cartoon').value;
    
    let newCharact = {
      name: name,
      occupation: occupation,
      weapon: weapon,
      cartoon: cartoon
    };

    charactersAPI.createOneRegister(newCharact)
  }
})
