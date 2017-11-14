const charactersAPI = new APIHandler("http://ih-crud-api.herokuapp.com");

$(document).ready(() => {
  $('#fetch-all').on('click', (e) => {
    e.preventDefault();
  });

  $('#fetch-one').on('click', (e) => {
    e.preventDefault();
    let id = $('#fetch-one').siblings('input').val();
    let dd = charactersAPI.getOneRegister(id).then(data => {
      charactersAPI.fillItem(data);
      $('.name').html(charactersAPI.item.name);
      $('.occupation').html(charactersAPI.item.occupation);
      $('.debt').html(charactersAPI.item.name);
      $('.weapon').html(charactersAPI.item.weapon);
      console.log(charactersAPI.item);

    });
  });

  $('#delete-one').on('click', (e) => {
    e.preventDefault();

  });

  $('#edit-character-form').on('submit', (e) => {
    e.preventDefault();

  });

  $('#new-character-form').on('submit', (e) => {
    e.preventDefault();

  });


  // console.log(charactersAPI.getFullList());

  //charactersAPI.createOneRegister({name:'jose',occupation:'otra',debt:false,weapon:'espada'});
  // charactersAPI.updateOneRegister(28,{name:'jose',occupation:'otra',debt:false,weapon:'trabuco'});
  //charactersAPI.deleteOneRegister(28);
});
