const charactersAPI = new APIHandler("http://localhost:8000")

$(document).ready( () => {
  document.getElementById('fetch-all').onclick = function(){
    charactersAPI.getFullList()
    .then(allChars => {
      console.log(allChars);
      // Get the "characters-container" div
      const $container = document.querySelector(".characters-container");
      // Delete the existing "character-info" div
      let $charInfo = $container.querySelector(".character-info")
      $container.removeChild($charInfo);
      for (let char of allChars) {
        appendCharacter($container, char)
      }
    })
  }
  
  document.getElementById('fetch-one').onclick = function(){
    const $id = document.querySelector("input[name=character-id]");
    const id = parseInt($id.value);
    charactersAPI.getOneRegister(id)
    .then(oneChar => {
      console.log(oneChar);
      // Get the "characters-container" div
      const $container = document.querySelector(".characters-container");
      // Delete the existing "character-info" div
      let $charInfo = $container.querySelector(".character-info")
      $container.removeChild($charInfo);
      appendCharacter($container, oneChar);
    })
  }
  
  document.getElementById('delete-one').onclick = function(){
    const $id = document.querySelector("input[name=character-id-delete]");
    const id = parseInt($id.value);
    charactersAPI.deleteOneRegister(id);
  }
  
  document.getElementById('edit-character-form').onsubmit = function(){
    const $id = document.getElementById('edit-id');
    const id = parseInt($id.value);
    const name = document.getElementById('edit-name').value;
    const occupation = document.getElementById('edit-occupation').value;
    const weapon = document.getElementById('edit-weapon').value;
    const cartoon = document.getElementById('edit-cartoon').checked;

    charactersAPI.updateOneRegister(id, {id: id, name: name, occupation: occupation, weapon: weapon, cartoon: cartoon});
  }
  
  document.getElementById('new-character-form').onsubmit = function(){
    // Get values from form
    // JSON-server automatically gives them an ID
    const name = document.getElementById('create-name').value;
    const occupation = document.getElementById('create-occupation').value;
    const weapon = document.getElementById('create-weapon').value;
    const cartoon = document.getElementById('create-cartoon').checked;
    charactersAPI.createOneRegister({name: name, occupation: occupation, weapon: weapon, cartoon: cartoon});
  }
})

function appendCharacter(container, charInfo) {
  let $charInfo = document.createElement('div');
  $charInfo.classList += "character-info";

  $charName = document.createElement('div');
  $charName.classList += 'name';
  $charName.innerText = `Name: ${charInfo.name}`;
  $charOccupation = document.createElement('div');
  $charOccupation.classList += 'occupation';
  $charOccupation.innerText = `Occupation: ${charInfo.occupation}`;
  $charCartoon = document.createElement('div');
  $charCartoon.classList += 'cartoon';
  $charCartoon.innerText = `Is a cartoon? ${charInfo.cartoon ? 'Yes' : 'No'}`
  $charWeapon = document.createElement('div');
  $charWeapon.classList += 'weapon';
  $charWeapon.innerTdext = `Weapon: ${charInfo.weapon}`;
  
  $charInfo.appendChild($charName);
  $charInfo.appendChild($charOccupation);
  $charInfo.appendChild($charCartoon);
  $charInfo.appendChild($charWeapon);
  container.appendChild($charInfo);
}