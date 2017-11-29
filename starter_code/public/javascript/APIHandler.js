class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList () {

    $.ajax({
        method: "GET",
        url: `${this.BASE_URL}/characters`
    })
        .then( (charResults) => {
            const charArray = [];
            charResults.forEach( (oneChar) => {
                charArray.push({
                    name: oneChar.name,
                    occupation: oneChar.occupation,
                    debt: oneChar.debt,
                    weapon: oneChar.weapon
                });
            });

            console.log(charArray);

            $(".characters-container").empty();

            charArray.forEach((oneCharacter) => {
                const charHtml = $(`
                    <div class="character-info">
                      <div class="name">${oneCharacter.name}</div>
                      <div class="occupation">${oneCharacter.occupation}</div>
                      <div class="debt">${oneCharacter.debt}</div>
                      <div class="weapon">${oneCharacter.weapon}</div>
                    </div>
                `);

                $(".characters-container").append(charHtml);
            });

        })

        .catch( (err) => {
            console.log("ERROR!");
            console.log(err);
        });
}

  getOneRegister (id) {

      $.ajax({
          method: "GET",
          url: `${this.BASE_URL}/characters/${id}`
      })

          .then( (charResults) => {
              console.log("You successfully obtained one character!");
              console.log(charResults);

              $(".characters-container").empty();

              const singleCharacter = $(`
                <div class="character-info">
                  <div class="name">${charResults.name}</div>
                  <div class="occupation">${charResults.occupation}</div>
                  <div class="debt">${charResults.debt}</div>
                  <div class="weapon">${charResults.weapon}</div>
                </div>
              `);

              $(".characters-container").append(singleCharacter);
          })

          .catch( (err) => {
            console.log("ERROR!");
            console.log(err);
          });
  }

  createOneRegister (charName, charOccupation, charDebt, charWeapon) {

      $.ajax({
          method: "POST",
          url: `${this.BASE_URL}/characters`,
          data: {
            name: charName,
            occupation: charOccupation,
            debt: charDebt,
            weapon: charWeapon
          }
      })

          .then( (charResults) => {
              console.log("You've successfully added a character! Good for you.");
              console.log(charResults);

              const updateHtml = $(`
                    <br />
                    <p>
                      You've added <b>${charResults.name}</b>
                      (id: ${charResults.id})
                    </p>
                `);

                $(".feedback1").append(updateHtml);
          })

          .catch( (err) => {
            console.log("ERROR!");
            console.log(err);
          });
  }

  updateOneRegister (myId, myName, myJob, myDebt, myWeapon) {

      $.ajax({
          method: "PATCH",
          url: `${this.BASE_URL}/characters/${myId}`,
          data: {
            name: myName,
            occupation: myJob,
            debt: myDebt,
            weapon: myWeapon
          }
      })

          .then( (charResults) => {
              console.log("You've successfully updated a character!");
              console.log(charResults);

              const updateHtml = $(`
                    <br />
                    <p>
                      You've updated <b>${charResults.name}</b>
                      (id: ${charResults.id})
                    </p>
                `);

                $(".feedback2").append(updateHtml);
            })

          .catch( (err) => {
              console.log("ERROR!");
              console.log(err);
          });

  }

  deleteOneRegister (charId) {

      $.ajax({
          method: "DELETE",
          url: `${this.BASE_URL}/characters/${charId}`,
      })

          .then( () => {
              console.log("You've successfully deleted a character!");

              const updateHtml = $(`
                    <br />
                    <p>
                      You've deleted the entry successfully!
                    </p>
                `);

                $(".feedback3").append(updateHtml);
            })

          .catch( (err) => {
              console.log("ERROR!");
              console.log(err);
          });

  }
}
