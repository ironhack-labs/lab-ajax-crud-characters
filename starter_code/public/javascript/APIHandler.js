class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList () {
    $('.character-info').remove();
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

  getOneRegister (charNum) {
    $('.characters-container').html(`<h2> Loading...</h2>`);
    $.ajax({
      url: `${this.BASE_URL}/characters/${charNum}/`,
      method: "GET"
    })
    .then( apiResults => {
      console.log( "SUCESS!" );
      console.log( apiResults );


        const charDomOne = $(`
          <div class="character-info">
          <h2 class="name">       ${apiResults.name}       </h2>
          <p  class="occupation"> ${apiResults.occupation} </p>
          <p  class="debt">       ${apiResults.debt}       </p>
          <p  class="weapon">     ${apiResults.weapon}     </p>
          </div>
        `);
        $('.characters-container').append(charDomOne);


    })
    .catch( err => {
      console.log( err );
      console.log( "ERROR!");
    });
  }

  createOneRegister (charName, charWeapon, charJob, charDebt) {
    $.ajax({
      method: "POST",
      url: "http://ih-crud-api.herokuapp.com/characters",
      data: {
        name: charName,
        weapon: charWeapon,
        occupation: charJob,
        debt: charDebt
      }
    })
    .then( apiResults => {
      console.log("POST Success!");
      console.log(apiResults);
    })
    .catch( err => {
      console.log("ERROR!");
      console.log( err );
    });
  }

  updateOneRegister () {

  }

  deleteOneRegister () {

  }
}
