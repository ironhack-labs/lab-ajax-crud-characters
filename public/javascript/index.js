const charactersAPI = new APIHandler('http://localhost:8000');

const characterId = document.querySelector('#character-id');
const characterIdDelete = document.querySelector('#character-id-delete');
const characterIdEdit = document.querySelector('#character-id-edit');
const charName = document.querySelector('#name');
const charWeapon = document.querySelector('#weapon');
const charOccupation = document.querySelector('#occupation');
const charCartoon = document.querySelector('#cartoon');
const charNameEdit = document.querySelector('#name-edit');
const charWeaponEdit = document.querySelector('#weapon-edit');
const charOccupationEdit = document.querySelector('#occupation-edit');
const charCartoonEdit = document.querySelector('#cartoon-edit');



window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', function (event) {
    
    charactersAPI.getFullList()
      .then(ApiCharacter => {
        console.log(ApiCharacter.data)
      })
      .catch(err => console.log(err))
  });

  document.getElementById('fetch-one').addEventListener('click', function (event) {
    event.preventDefault();
    charactersAPI.getOneRegister(characterId.value)
      .then(ApiCharacter => {
        // if (characterId.value >= charactersAPI.length ) 
        characterId.focus()
        characterId.value = ""
        console.log(ApiCharacter.data)
      })
      .catch(err => {
        console.log("enter a valid value / " + err);
      })
  });

  document.getElementById('delete-one').addEventListener('click', function (event) {
    event.preventDefault();
    charactersAPI.deleteOneRegister(characterIdDelete.value)
      .then(ApiCharacter => {
        // if (characterId.value >= charactersAPI.length ) 
        characterId.focus()
        characterId.value = ""
        console.log("Delete Object - " + ApiCharacter.data)
      })
  });

  document.getElementById('edit-character-form').addEventListener('submit', function (event) {
    event.preventDefault();
    charactersAPI.updateOneRegister(characterIdEdit.value, {
      "name": charNameEdit.value,
      "occupation": charOccupationEdit.value,
      "weapon": charWeaponEdit.value,
      "cartoon": charCartoonEdit.checked
      })
      .then(characterEdit => console.log(characterEdit))
      .catch(console.log("Character not found"))
    
  });

  document.getElementById('new-character-form').addEventListener('submit', function (event) {
    event.preventDefault();  
    charactersAPI.createOneRegister( {
      "name": charName.value,
      "occupation": charOccupation.value,
      "weapon": charWeapon.value,
      "cartoon": charCartoon.checked
      }
    )
    .then(newChar => console.log(newChar))
    .catch(err => console.log(err));
  });
});


// function for update form

function displayInfos(id) {
  axios.get(charactersAPI.BASE_URL + "/characters/" + id )
  .then(response => {
    const { name, occupation, weapon, cartoon } = response.data;
    charNameEdit.value = name;
    charOccupationEdit.value = occupation;
    charWeaponEdit.value = weapon;
    charCartoonEdit.value = cartoon;
  })
}

characterIdEdit.onkeyup = (evt) => {
  displayInfos(evt.target.value);
};