class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
    this.query = axios.create({
      baseURL: this.BASE_URL 
    });
  }

  getFullList () {
    return this.query.get( '/characters' )
      .then( response => {
        return response.data;
      } )
      .catch( error => { throw error })
  }

  getOneRegister ( what ) {
    return this.query.get( '/characters/' + what )
      .then( response => {
        $('input[name=character-id]').val('');
        $('#fetch-one').css("background-color", "green");
        return response.data;
      } )
      .catch( error => {
        $('.characters-container').html('<h1>Sorry!! No item found</h1>');
        $('#fetch-one').css("background-color", "red");
        throw error
      })
  }

  createOneRegister ( newCharacter ) {
    this.query.post('/characters/', newCharacter)
    .then( response => {
      console.log( response );
      $('#new-character-form :input').val('');
      $('#send-data').css("background-color", "green");
    })
    .catch( error => {
      $('#send-data').css("background-color", "red");
      throw error;
    })
  }

  updateOneRegister ( characterId, updatedCharacter ) {
    this.query.patch( `/characters/${characterId}`, updatedCharacter )
    .then( response => {
      console.log( "Item UPDATED" );
      $('#edit-character-form :input').val('');
      $('#edit-character-form #send-data').css('background', 'green');
    })
    .catch( error => {
      $('#edit-character-form #send-data').css('background', 'red');
      throw error
    })
  }

  deleteOneRegister ( characterId ) {
    this.query.delete('/characters/' + characterId)
    .then( response => {
      console.log( "Item DELETED" );
      $('input[name=character-id-delete]').val('');
      $('#delete-one').css("background-color", "green");
    } )
    .catch( error => {
      $('input[name=character-id-delete]').val('');
      $('#delete-one').css("background-color", "red");
      throw error
    })
  }
}
