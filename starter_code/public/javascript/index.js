const charactersAPI = new APIHandler("http://ih-api.herokuapp.com")

$(document).ready( () => {
  $('#fetch-all').on('click', (e) => {
    charactersAPI.getFullList().then(p => {console.log(p)})
  })

  $('#fetch-one').on('click', (e) => {
    let one = $('.selectID').val()
    charactersAPI.getOneRegister(one).then(p => {console.log(e)})
  })

  $('#delete-one').on('click', (e) => {
    let deleteOne = $('input:text[name = character-id-delete]').val()
      charactersAPI.deleteOneRegister(deleteOne)

  })

  $('#edit-character-form').on('submit', (e) => {
    event.preventDefault();
    const idEdit = $("#idEdit").val();
    const nameEdit = $("#nameEdit").val();
    const occupationEdit = $("#occupationEdit").val();
    const weaponEdit = $("#weaponEdit").val();
    const debtEdit = $("#debtEdit").val();
    const user = {
      id: idEdit,
      name: nameEdit,
      occupation: occupationEdit,
      weapon: weaponEdit,
      debt:debtEdit,
    };
    charactersAPI.updateOneRegister(user)
      .then(user => {
        console.log(user);
      })
      .catch(user =>{
        console.log("error");
      });
  });

  $('#new-character-form').on('submit', (e) => {
    event.preventDefault();
    let enter = {
      name: $('input:text[name = name]').val(),
      occupation: $('input:text[name = occupation]').val(),
      weapon: $('input:text[name = weapon]').val(),
    };
    charactersAPI.createOneRegister(enter)
      .then(p => console.log(p));
  });
})
