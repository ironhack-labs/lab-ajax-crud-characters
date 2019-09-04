

const charactersAPI = new APIHandler("http://localhost:8000")
const displayCharacters = document.querySelector('.characters-container');
const getInput = document.getElementById('character-id');



function displayCharacter(chars) {
  console.log(chars)

  chars.forEach(char => {
    const tpl = `
      <div class="character-info">
        <div class="name">Id: ${char.id} </div>
        <div class="name">Name: ${char.name} </div>
        <div class="occupation">Occupation: ${char.occupation} </div>
        <div class="cartoon">Is a Cartoon? ${char.cartoon} </div>
        <div class="weapon">Weapon: ${char.weapon} </div>
    </div>`

    displayCharacters.innerHTML += tpl;
  });
}

function displayOneCharacter(oneCharacter) {
  displayCharacters.innerHTML = '';
  displayCharacters.innerHTML +=
    `<div class="character-info">
      <div class="name">Id: ${oneCharacter.id} </div>
      <div class="name">Name: ${oneCharacter.name} </div>
      <div class="occupation">Occupation: ${oneCharacter.occupation} </div>
      <div class="cartoon">Is a Cartoon? ${oneCharacter.cartoon} </div>
      <div class="weapon">Weapon: ${oneCharacter.weapon} </div>
    </div>`
}



$(document).ready( () => {
  document.getElementById('fetch-all').onclick = function(){

    charactersAPI.getFullList("/characters")
    .then((dbRes) => displayCharacter(dbRes.data))
    .catch(dbErr => console.log(dbErr))
  }

  
  document.getElementById('fetch-one').onclick = function(){

    charactersAPI.getOneRegister(getInput.value)
      .then(dbRes => displayOneCharacter(dbRes.data))
      .catch(dbErr => console.log(dbErr))
  }

  document.getElementById('delete-one').onclick = function(){
    const getId = document.querySelector('.delete [name="character-id-delete"]').value;
    charactersAPI.deleteOneRegister(getId);
  }
  
  document.getElementById('edit-character-form').onsubmit = function(e){
    e.preventDefault();

    const editCharacter = document.getElementById('edit-character-form');
    
    const id = editCharacter.querySelector('[name=chr-id]').value;
    const name = editCharacter.querySelector('[name=name]').value;
    const occupation = editCharacter.querySelector('[name=occupation]').value;
    const weapon = editCharacter.querySelector('[name=weapon]').value;
    const cartoon = editCharacter.querySelector('[name=cartoon]').checked;

    charactersAPI.updateOneRegister({id, name, occupation, weapon, cartoon}, id);


  }
  
  document.getElementById('new-character-form').onsubmit = function(e){
    e.preventDefault();
    let name = "";
    let occupation = "";
    let weapon = "";
    let cartoon = false;

      const inputs = this.querySelectorAll(".field input")
      inputs.forEach(i => {
        if(i.name === "name") name = i.value;
        if(i.name === "occupation") occupation = i.value;
        if(i.name === "weapon") weapon = i.value;
        if(i.name === "cartoon") cartoon = i.checked;
      });

      charactersAPI.createOneRegister(name, occupation, cartoon, weapon).then(res => console.log(res)).catch(err => console.log(err))
  };
});


// OR 
// document.getElementById('new-character-form').onsubmit = function(e){
//   e.preventDefault();
//   const formCreate = document.getElementById('new-character-form');
//   const name = formCreate.querySelector('[name=name]').value;
//   const occupation = formCreate.querySelector('[name=occupation]').value;
//   const weapon = formCreate.querySelector('[name=weapon]').value;
//   const cartoon = formCreate.querySelector('[name=cartoon]').checked;

//   charactersAPI.createOneRegister({name, occupation, weapon, cartoon});
// };




