class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

getFullList () {
  $.ajax({
      method: "GET",
      url:    `${this.BASE_URL}/characters`,
  })
    .then((apiResults) => {

        console.log("SUCCESS!");
        console.log(apiResults);

      const charArray = [];
      apiResults.forEach((oneChar) => {
        charArray.push({
          name: oneChar.name,
          occupation: oneChar.occupation,
          debt: oneChar.debt,
          weapon: oneChar.weapon
        });
      });

        $(".characters-container").empty();

        charArray.forEach((oneChar) => {

        const charDom = $(`
        <div class="character-info">
            <div class="name">
                Name:   <span>  ${oneChar.name}       </span>
            </div>
            <div class="occupation">
                Job:    <span>  ${oneChar.occupation} </span>
            </div>
            <div class="debt">
                Debt:   <span>  ${oneChar.debt}       </span>
            </div>
            <div class="weapon">
                Weapon: <span>  ${oneChar.weapon}       </span>
            </div>
        </div>
      `);
        $(".characters-container").append(charDom);
        });
      })
    .catch((err) => {

        console.log("ERROR");
        console.log(err);
    });
  } // getFullList()

  getOneRegister (oneId) {

    $.ajax({
        method: "GET",
        url: `${this.BASE_URL}/characters/${oneId}`,
    })
      .then((apiResults) => {

        $(".characters-container").empty();
        console.log("SUCCESS GET ONE!");
        console.log(apiResults);

        const singleChar = $(`
          <div class="character-info">
              <div class="name">
                  Name:   <span>  ${apiResults.name}       </span>
              </div>
              <div class="occupation">
                  Job:    <span>  ${apiResults.occupation} </span>
              </div>
              <div class="debt">
                  Debt:   <span>  ${apiResults.debt}       </span>
              </div>
              <div class="weapon">
                  Weapon: <span>  ${apiResults.weapon}     </span>
              </div>
          </div>
        `);
        $(".characters-container").append(singleChar);

      })
      .catch((err) => {
        console.log("ERROR GET ONE!");
        console.log(err);
      });
  } // getOneRegister()

  createOneRegister (charName, charJob, charWeapon, charDebt) {
    $.ajax({
        method: "POST",
        url:    `${this.BASE_URL}/characters`,
        // data to send through in the FORM BODY
        data:   {
          name:       charName,
          occupation: charJob,
          weapon:     charWeapon,
          debt:       charDebt,
        }
    })
      .then((apiResults) => {
          console.log("POST SUCCESS!");
          console.log(apiResults);

          const newCharHtml =(`
            <div class="character-info">
                <div class="name">
                    Name:   <span>  ${apiResults.name}       </span>
                </div>
                <div class="occupation">
                    Job:    <span>  ${apiResults.occupation} </span>
                </div>
                <div class="debt">
                    Debt:   <span>  ${apiResults.debt}       </span>
                </div>
                <div class="weapon">
                    Weapon: <span>  ${apiResults.weapon}     </span>
                </div>
            </div>
          `);

          $(".characters-container").append(newCharHtml);
      }) // END .then()
      .catch((err) =>{
        console.log("POST ERROR!");
        console.log(err);
      });
  } // createOneRegister()

  deleteOneRegister (oneId) {
    $.ajax({
        method: "DELETE",
        url: `${this.BASE_URL}/characters/${oneId}`,
    })
      .then((apiResults) => {
        console.log("Character has been successfully deleted!");
        console.log(apiResults);

      })
      .catch((err) => {
        console.log("Character not found");
        console.log(err);
      });
  } // deleteOneRegister()


  updateOneRegister () {

  }

}
