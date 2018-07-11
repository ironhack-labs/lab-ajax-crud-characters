const charactersAPI = new APIHandler("https://ih-crud-api.herokuapp.com/characters")

$(document).ready( () => {
  document.getElementById('fetch-all').onclick = function(){

  }
  
  document.getElementById('fetch-one').onclick = function(){
      let element = document.querySelector("input[name='character-id']").value;
      charactersAPI.getOneRegister(element)
      .then(data => {
        let elementName = document.getElementsByClassName('name');
        elementName[0].innerHTML = data.data.name;
        let elementOcupation = document.getElementsByClassName('occupation');
        elementOcupation[0].innerHTML = data.data.occupation ;        
        let elementCartoon = document.getElementsByClassName('cartoon');
        elementCartoon[0].innerHTML = data.data.cartoon;
        let elementWeapon = document.getElementsByClassName('weapon');
        elementWeapon[0].innerHTML = data.data.weapon;        
      })
      .catch(err => {
        console.log(err);
        });
    }
  
  
  document.getElementById('delete-one').onclick = function(){
    let element = document.querySelector("input[name='character-id-delete']").value;
    charactersAPI.deleteOneRegister(element)
    .then (()=> console.log(`Borrado de ${element} OK`))
    .catch(err => {
      console.log(err);
      });
  }
  
  document.getElementById('edit-character-form').onsubmit = function(){
            
  }
  
  document.getElementById('new-character-form').onsubmit = function(e){
    e.preventDefault();
    let newName = document.querySelector("input[name='name']").value; 
    let newOccupation = document.querySelector("input[name='occupation']").value; 
    let newWeapon = document.querySelector("input[name='weapon']").value;  
    let isCartoon = document.querySelector("input[name='cartoon']").checked;  
    let newObject = {
      name: newName,
      occupation: newOccupation,
      weapon: newWeapon
    };
    console.log(newObject);
    charactersAPI.createOneRegister(newObject)
    .then (()=> console.log(`Insertado elemento  ${newObject} OK`))
    .catch(err => {
      console.log(err);
      });
  }
})
