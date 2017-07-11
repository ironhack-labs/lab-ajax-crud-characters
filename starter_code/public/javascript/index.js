const charactersAPI = new APIHandler("http://ih-api.herokuapp.com");

$(document).ready(() => {
  $('#fetch-all').on('click', (e) => {
    charactersAPI.getFullList().then(characterList => {
      console.log(characterList);
    });
  });

  $('#fetch-one').on('click', (e) => {
    charactersAPI.getOneRegister().then(characterList => {
      console.log(characterList);
    });
  });

  $('#delete-one').on('click', (e) => {
    charactersAPI.deleteOneRegister().then(characterList => {
      $(characterList).remove(characterInfo);
    });
  });

  $('#edit-character-form').on('submit', (e) => {
    charactersAPI.updateOneRegister().then(characterList => {
      $(characterList).append(updateInfo);
    });
  });

  $('#new-character-form').on('submit', (e) => {
    charactersAPI.createOneRegister().then(characterList => {
      $(characterList).append(characterInfo);
    });
  });
});
