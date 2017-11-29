class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList () {
    $('.character-info').html(`<h2> Loading... </h2>`);
    $.ajax({
      url: `http://ih-crud-api.herokuapp.com/characters`,
      method: "GET"
    })
    .then( apiResults => {
      console.log("SUCCESS!");
      console.log(apiResults);

      apiResults.forEach( oneChar => {
        const charDom = $(`
          <div class="character-info">
            <h2 class="name">       ${oneChar.name}       </h2>
            <p  class="occupation"> ${oneChar.occupation} </p>
            <p  class="debt">       ${oneChar.debt}       </p>
            <p  class="weapon">     ${oneChar.weapon}     </p>
          </div>
        `);
            $('.characters-container').append(charDom);
      });

    })
    .catch( err => {
      console.log( err );
      console.log( "ERROR!" );
    });
  }

  getOneRegister () {
    $.ajax({
      url: `http://ih-crud-api.herokuapp.com/characters/:id`,
      method: "GET"
    })
    .then( apiResults => {
      console.log( "SUCESS!" );
      console.log( apiResults );
    })
    .catch( err => {
      console.log( err );
      console.log( "ERROR!");
    });
  }

  createOneRegister () {

  }

  updateOneRegister () {

  }

  deleteOneRegister () {

  }
}
