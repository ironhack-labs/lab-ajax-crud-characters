class APIHandler {
  constructor (baseURL) {
    this.BASE_URL = baseURL;
    console.log('API is attached');
  }

  getFullList () {
    console.log("gefullList");
    console.log("in fetch all");
    $.ajax({
        method: "GET",
        url: `${this.BASE_URL}/characters`
        // url: `${this.BASE_URL}/characters`
        }).then((apiResults) => {
          console.log("SUCCESS!");
          console.log(apiResults);


          apiResults.forEach((oneResult)=>{
            const character_html= $(
            `
              <hr>
              <p>${oneResult.name} </p>
              <p>${oneResult.occupation} </p>
              <p>${oneResult.weapon} </p>
              <p>${oneResult.debt} </p>
              <hr>
              `
            );

            $(".character-info").append(character_html);
          });

      })
      .catch((err) => {
          console.log("ERROR!");
          console.log(err);
      });

  }

  getOneRegister () {





    const number = $("#character-id").val();

    $.ajax({
        method: "GET",
        url: `${this.BASE_URL}/characters/${number}`,
    }).then((apiResults) => {
          console.log("SUCCESS!");
          console.log(apiResults);
            const character_html= $(
            ` <hr>
              <p>${apiResults.name} </p>
              <p>${apiResults.occupation} </p>
              <p>${apiResults.weapon} </p>
              <p>${apiResults.debt} </p>
              <hr>
              `
            );
            $(".character-info").append(character_html);
      })
      .catch((err) => {
          console.log("ERROR!");
          console.log(err);
      });


  }

  createOneRegister (charName, charWeapo, charOccupation, charDebt) {




    $.ajax({
    method: "POST",

    url: `${this.BASE_URL}/characters/`,
    data: {
        name: charName,
        weapon: charOccupation,
        occupation: charweapon,
        debt:charDebt
    }
})
  .then((apiResult) => {
      console.log("POST success!");
      console.log(apiResult);

$(".createNewFeedback").append(
  `<li><b> ${apiResult.name}</b> <b>${apiResult.id}</b>
  </li>
  `
);

})


  .catch((err) => {
      console.log("ERROR!");
      console.log(err);
  });

  }

  updateOneRegister () {

  }

  deleteOneRegister () {

  }
}
