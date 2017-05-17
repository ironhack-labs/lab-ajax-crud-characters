const charactersAPI = new APIHandler("http://ih-api.herokuapp.com")

$(document).ready( () => {
  $('#fetch-all').on('click', (e) => {
        charactersAPI.getFullList();
  });


  $('#fetch-one').on('click', (e) => {

    //var id = $('.character-id').val();
      var id= $("input[name*='character-id']").val();
      console.log("id:"+id);
      charactersAPI.getOneRegister(id);
  });


  $('#delete-one').on('click', (e) => {
    var id=$("input[name*='character-id-delete']").val();
    console.log("id-delete: "+id);
    charactersAPI.deleteOneRegister (id);
  })

  $('#edit-character-form').on('submit', (e) => {

  })

  $('#new-character-form').on('submit', (e) => {

    charactersAPI.createOneRegister ();
     

  })
})
