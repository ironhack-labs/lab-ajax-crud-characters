const api = new APIHandler("https://ih-api.herokuapp.com/");

console.log(api.getFullList);

$(document).ready( () => {
  $('#fetch-all').on('click', (e) => {
    api.getFullList();
  });

  $('#fetch-one').on('click', (e) => {

  });

  $('#delete-one').on('click', (e) => {

  });

  $('#edit-character-form').on('submit', (e) => {

  });

  $('#new-character-form').on('submit', (e) => {

  });
});
