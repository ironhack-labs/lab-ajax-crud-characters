const charactersAPI = new APIHandler("http://localhost:8000")

$(document).ready( () => {
  document.getElementById('fetch-all').onclick = function(){
    let listData = charactersAPI.getFullList()
    listData.then(charList => {
      let charContainer = $('.characters-container').empty()
      charList.data.forEach(function(elem) {
        let charInfo = $('<div>').addClass('character-info');
        charContainer.append(charInfo);

        let charName = $('<div>').addClass('name').text('name: '+elem.name);
        charInfo.append(charName);

        let charOccupation = $('<div>').addClass('occupation').text('occupation: '+elem.occupation);
        charInfo.append(charOccupation);

        let charCartoon = $('<div>').addClass('cartoon').text('carton?: '+elem.cartoon);
        charInfo.append(charCartoon);

        let charWeapon = $('<div>').addClass('weapon').text('weapon: '+elem.weapon);
        charInfo.append(charWeapon);
      });
    });
  };

  document.getElementById('fetch-one').onclick = function(){
    let oneData = charactersAPI.getOneRegister($('#character-id').val())
    oneData.then(character => {
      let charContainer = $('.characters-container').empty()
      let charInfo = $('<div>').addClass('character-info');
      charContainer.append(charInfo);

      let charName = $('<div>').addClass('name').text('name: '+character.data.name);
      charInfo.append(charName);

      let charOccupation = $('<div>').addClass('occupation').text('occupation: '+character.data.occupation);
      charInfo.append(charOccupation);

      let charCartoon = $('<div>').addClass('cartoon').text('carton?: '+character.data.cartoon);
      charInfo.append(charCartoon);

      let charWeapon = $('<div>').addClass('weapon').text('weapon: '+character.data.weapon);
      charInfo.append(charWeapon);
    })
    .catch((e) => console.log(e))
  }
  
  document.getElementById('delete-one').onclick = function(){
        
  }
  
  document.getElementById('edit-character-form').onsubmit = function(){
            
  }
  
  document.getElementById('new-character-form').onsubmit = function(){
                
  }
})
