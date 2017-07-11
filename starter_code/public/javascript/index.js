const charactersAPI = new APIHandler("http://ih-api.herokuapp.com");

$(document).ready( () => {
  $('#fetch-all').on('click', (e) => {
    charactersAPI.getFullList().then(characterList => {
    console.log(characterList);
    characterList.forEach( character => {
      const $container = $('.characters-container');
      const $character = $('<div>').addClass('character-info');
      const $id = $('<div>').text(character.id);
      const $name = $('<div>').addClass('name').text(character.name);
      const $occupation = $('<div>').addClass('occupation').text(character.occupation);
      const $debt = $('<div>').addClass('debt').text(character.debt);
      const $weapon = $('<div>').addClass('weapon').text(character.weapon);
      $character.append($id).append($name).append($occupation).append($debt).append($weapon);
      $container.append($character);
    });
      }, (err) => {
        console.log(err);
      });
  });

  $('#fetch-one').on('click', (e) => {
    const charId = $("#charOne").val();
    charactersAPI.getOneRegister(charId).then(charOne => {
      console.log(charOne);
      $('.name').text(charOne.name);
      $('.occupation').text(charOne.occupation);
      $('.debt').text(charOne.debt);
      $('.weapon').text(charOne.weapon);
    });
  });

  $('#delete-one').on('click', (e) => {
      charactersAPI.deleteOneRegister($('#character-id-delete').val()).then( character => {
        console.log(`Character deleted ${$('#character-id-delete').val()}`);
    });

    });


      $('#edit-character-form').on('submit', (e) => {
        e.preventDefault();
        let idCharacter = $('#update-chr-id').val();
        let name = $('#update-name').val();
        let occupation = $('#update-occupation').val();
        let debt = $('#update-debt').val() === "on" ? true : false;
        let weapon = $('#update-weapon').val();
        const updatedCharacter = {
          name: name,
          occupation: occupation,
          debt: debt,
          weapon: weapon
        };
        console.log(idCharacter);
        charactersAPI.updateOneRegister(idCharacter, updatedCharacter);
      });


  $('#new-character-form').on('submit', (e) => {
     e.preventDefault();
     let name = $('#create-name').val();
     let occupation = $('#create-occupation').val();
     let debt = $('#create-debt').val() === "on" ? true : false;
     let weapon = $('#create-weapon').val();
     const newCharacter = {
       name: name,
       occupation: occupation,
       debt: debt,
       weapon: weapon
     };
     charactersAPI.createOneRegister(newCharacter);
   });

});
