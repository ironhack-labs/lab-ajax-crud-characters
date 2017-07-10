///// --[#]-- [CREATE NEW APIHandler OBJECT] ----- >>>>>
  const charactersAPI = new APIHandler("http://ih-api.herokuapp.com");
///// --[@]-- [CREATE NEW APIHandler OBJECT] ----- -END-

///// --[#]-- [DOM EVENTS] ----- >>>>>
  $(document).ready( () => {

    ///// --[#]-- [LIST ALL] ----- >>>>>
      $('#fetch-all').on('click', (e) => {
        charactersAPI.getFullList();
      })
    ///// --[@]-- [LIST ALL] ----- -END-

    ///// --[#]-- [LIST ONE] ----- >>>>>
        $('#fetch-one').on('click', (e) => {
          e.preventDefault();
          charactersAPI.getOneRegister($('#character-id').val());
        })
    ///// --[@]-- [LIST ONE] ----- -END-

    ///// --[#]-- [DELETE ONE] ----- >>>>>
      $('#delete-one').on('click', (e) => {
        e.preventDefault();
        charactersAPI.deleteOneRegister($('#character-id-delete').val());
      })
    ///// --[@]-- [DELETE ONE] ----- -END-

    ///// --[#]-- [EDIT ONE] ----- >>>>>
      $('#edit-character-form').on('submit', (e) => {
        e.preventDefault();
        const characterId   =   $('#target-chr-id').val();
        const editData = {
                    name      : $('#edit-name').val(),
                    occupation: $('#edit-occupation').val(),
                    weapon    : $('#edit-weapon').val(),
                    debt      : $('#edit-debt').val()
                  };
        charactersAPI.updateOneRegister(editData, characterId);
      })
    ///// --[@]-- [EDIT ONE] ----- -END-

    ///// --[#]-- [CREATE ONE] ----- >>>>>
      $('#new-character-form').on('submit', (e) => {
        e.preventDefault();
        const characterData = {
                    name      : $('#new-name').val(),
                    occupation: $('#new-occupation').val(),
                    weapon    : $('#new-weapon').val(),
                    debt      : $('#new-debt').val()
                  };
        console.log(characterData, characterId);
        charactersAPI.createOneRegister(characterData);
      })
    ///// --[@]-- [CREATE ONE] ----- -END-

  });
///// --[@]-- [DOM EVENTS] ----- -END-
