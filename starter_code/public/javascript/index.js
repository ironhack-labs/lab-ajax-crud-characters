const charactersAPI = new APIHandler("http://ih-crud-api.herokuapp.com");

$(document).ready(() => {
      $('#fetch-all').on('click', (e) => {
        e.preventDefault();
        charactersAPI.getFullList().then(data => {
          let newDomEl;
          for (let i = 0; i < data.length; i++) {

            if (i > 0) {
              newDomEl = $('.character-info:first').clone().appendTo('.characters-container');
            } else {
              newDomEl = $('.character-info:first');
            }
            newDomEl.children('.name').html("name: " + data[i].name);
            newDomEl.children('.occupation').html("occupation: " + data[i].occupation);
            newDomEl.children('.debt').html("debt: " + data[i].debt);
            newDomEl.children('.weapon').html("weapon: " + data[i].weapon);
            console.log(data[i]);
          }
        });
      });

  $('#fetch-one').on('click', (e) => {
    e.preventDefault();
    let id = $('#fetch-one').siblings('input').val();
     charactersAPI.getOneRegister(id).then(data => {
      charactersAPI.fillItem(data);
      $('.name').html(charactersAPI.item.name);
      $('.occupation').html(charactersAPI.item.occupation);
      $('.debt').html(charactersAPI.item.debt);
      $('.weapon').html(charactersAPI.item.weapon);
      console.log(charactersAPI.item);

    });
  });

  $('#delete-one').on('click', (e) => {
    e.preventDefault();
    let id = $('#delete-one').siblings('input').val();
    console.log(id);
    charactersAPI.deleteOneRegister(id);
  });

  $('#edit-character-form').on('submit', (e) => {
    e.preventDefault();

  });

  $('#new-character-form').on('submit', (e) => {
    e.preventDefault();
    let obj ={
      name: "ultimo",
      occupation:"ultimo",
      debt:true,
      weapon: "ultimo"
    };
   console.log(obj);
   charactersAPI.createOneRegister(obj);
  });


  //charactersAPI.createOneRegister({name:'jose',occupation:'otra',debt:false,weapon:'espada'});
  // charactersAPI.updateOneRegister(28,{name:'jose',occupation:'otra',debt:false,weapon:'trabuco'});
  //charactersAPI.deleteOneRegister(28);
});
