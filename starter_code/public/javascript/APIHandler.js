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
          <h2 class="name">       ${oneChar.name}       </h2>
          <p  class="occupation"> ${oneChar.occupation} </p>
          <p  class="debt">       ${oneChar.debt}       </p>
          <p  class="weapon">     ${oneChar.weapon}     </p>
        `);
            $('.character-info').html(charDom);
      });

    })
    .catch( err => {
      console.log( err );
      console.log( "ERROR!" );
    });
  }

  getOneRegister () {

  }

  createOneRegister () {

  }

  updateOneRegister () {

  }

  deleteOneRegister () {

  }
}
