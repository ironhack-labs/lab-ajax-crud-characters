class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList () {

      $.ajax({
          method: "GET",
          url: "http://ih-crud-api.herokuapp.com/characters"
      })

          .then( (charResults) => {
              console.log("SUCCESS!");

              const charHtml = $(`
                <div class="character-info">
                  <div class="name">${charResults.name}</div>
                  <div class="occupation">${charResults.occupation}</div>
                  <div class="debt">${charResults.debt}</div>
                  <div class="weapon">${charResults.weapon}</div>
                </div>
              `);

              charResults.forEach((oneCharacter) => {
                  $(".characters-container").html(charHtml);
              });
          })

          .catch( (err) => {
              console.log("ERROR!");
              console.log(err);
          });
  }

  getOneRegister (charId) {

      $.ajax({
          method: "GET",
          url: `http://ih-crud-api.herokuapp.com/characters/${charId}`
      })

          .then( (charResults) => {
              console.log("You successfully obtained one character!");

              const singleCharacter = $(`
                <div class="character-info">
                  <div class="name">${charResults.name}</div>
                  <div class="occupation">${charResults.occupation}</div>
                  <div class="debt">${charResults.debt}</div>
                  <div class="weapon">${charResults.weapon}</div>
                </div>
              `);

              $(".characters-container").html(singleCharacter);
          })

          .catch( (err) => {
            console.log("ERROR!");
            console.log(err);
          });
  }

  createOneRegister (charName, charJob, charDebt, charWeapon) {

      $.ajax({
          method: "POST",
          url: "http://ih-crud-api.herokuapp.com/characters",
          data: {
            name: charName,
            occupation: charJob,
            debt: charDebt,
            weapon: charWeapon
          }
      })

          .then( (charResults) => {
              console.log("You've successfully added a character! Good for you.");
          })

          .catch( (err) => {
            console.log("ERROR!");
            console.log(err);
          });
  }

  updateOneRegister (myId, myName, myJob, myDebt, myWeapon) {

      $.ajax({
          method: "PATCH",
          url: `http://ih-crud-api.herokuapp.com/characters/${myId}`,
          data: {
            name: myName,
            occupation: myJob,
            debt: myDebt,
            weapon: myWeapon
          }
      })

          .then( (charResults) => {
              console.log("You've successfully updated a character!");
          })

          .catch( (err) => {
              console.log("ERROR!");
              console.log(err);
          });

  }

  deleteOneRegister (charId) {

      $.ajax({
          method: "DELETE",
          url: `http://ih-crud-api.herokuapp.com/characters/${charId}`,
      })

          .then( () => {
              console.log("You've successfully deleted a character!");
          })

          .catch( (err) => {
            console.log("ERROR!");
            console.log(err);
          });

  }
}
