const charactersAPI = new APIHandler("http://ih-api.herokuapp.com");

$(document).ready(() => {
  $('#fetch-all').on('click', (e) => {
    charactersAPI.getFullList().then(characterList => {
      console.log(characterList);
    });
  });

  $('#fetch-one').on('click', (e) => {
    var id = $("input[name='character-id']")[0].value;
    charactersAPI.getOneRegister(id).then(characterList => {
      console.log(characterList);
    });
  });


  $('#delete-one').on('click', (e) => {
    var id = $("input[name='character-id-delete']")[0].value;
    charactersAPI.deleteOneRegister(id).then(characterList => {
      $(characterList).remove(characterInfo);
    });
  });

  $('#edit-character-form').on('submit', (e) => {
    charactersAPI.updateOneRegister().then(characterList => {
      $(characterList).append(updateInfo);
    });
  });

  $('#new-character-form').on('submit', (e) => {
    e.preventDefault()
    var char = {
      name : '',
      occupation : '',
      weapon : '',
      debt : false
    }
    
    var formData = $("#new-character-form").serializeArray();
    for (var i = 0; i < formData.length; i++){
      switch(formData[i].name){
        case 'name':
          char.name = formData[i].value;
          break;
        case 'occupation':
          char.occupation = formData[i].value;
          break;
        case 'weapon':
          char.weapon = formData[i].value;
          break;
        case 'debt':
          char.debt = true;
          break;
      }
    }
    
    charactersAPI.createOneRegister(formData).then(characterList => {
      
    });
  });
});
