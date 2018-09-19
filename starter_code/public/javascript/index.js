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
    let oneData = charactersAPI.getOneRegister($('#character-id-search').val())
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
    });
  }
  
  document.getElementById('delete-one').onclick = function(){
    var deleteData = charactersAPI.deleteOneRegister($('#character-id-delete').val())
    deleteData.then(() => {
      $('#delete-one').css('background-color', 'green')
    })
    .catch(() => $('#delete-one').css('background-color', 'red'))
  }
  
  document.getElementById('edit-character-form').onsubmit = function(){
    let editId = $('#edit-id')
    let editName = $('#edit-name').val();
    let editOccupation = $('#edit-occupation').val();
    let editWeapon = $('#edit-weapon').val();
    let editCartoon = $('#edit-cartoon').prop('checked')
    let editCharacter = {
      name: editName,
      occupation: editOccupation,
      weapon: editWeapon,
      cartoon: editCartoon
    }
    let data = charactersAPI.updateOneRegister(parseInt(editId), editCharacter)
    data.then(() => {
      $('#send-edit-data').css('background-color', 'green')
    })
    .catch(() => $('#send-edit-data').css('background-color', 'red'))
  }
  
  document.getElementById('new-character-form').onsubmit = function(){
    let createName = $('#create-name').val();
    let createOccupation = $('#create-occupation').val();
    let createWeapon = $('#create-weapon').val();
    let createCartoon = $('#create-cartoon').prop('checked')
    let newCharacter = {
      name: createName,
      occupation: createOccupation,
      weapon: createWeapon,
      cartoon: createCartoon
    }
    let data = charactersAPI.createOneRegister(newCharacter)
    data.then(() => {
      $('#send-create-data').css('background-color', 'green')
    })
    .catch(() => $('#send-create-data').css('background-color', 'red'))
  }
})
