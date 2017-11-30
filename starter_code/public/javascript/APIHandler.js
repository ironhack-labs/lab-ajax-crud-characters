class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList () {
    $.ajax({
      url:`http://ih-crud-api.herokuapp.com/characters`,
      method: "GET"
    })
    .then((apiResult) => {
      console.log("SUCCESS!");
      console.log(apiResult);
      const charArray = apiResult;
      $(".characters-container").empty();
      charArray.forEach((oneChar)=>{
        $(".characters-container").append(
          `
          <div class="character-info">
            <div class="name"> ${oneChar.name} </div>
            <div class="occupation"> ${oneChar.occupation} </div>
            <div class="debt"> ${oneChar.debt} </div>
            <div class="weapon"> ${oneChar.weapon}</div>
          </div>
        `);
      });
    })
    .catch((err) => {
      console.log("Get list ERROR");
      console.log(err);
    });

}

  getOneRegister (oneCharacter) {
    $.ajax({
      url:`http://ih-crud-api.herokuapp.com/characters/${oneCharacter}/`,
      method: "GET"
    })
    .then((apiResult) => {
      console.log("SUCCESS!");
      console.log(apiResult);
      const oneDom = $(`
        <div class="character-info">
          <div class="name"> ${apiResult.name} </div>
          <div class="occupation"> ${apiResult.occupation} </div>
          <div class="debt"> ${apiResult.debt} </div>
          <div class="weapon"> ${apiResult.weapon}</div>
        </div>
        `);

        $(".characters-container").html(oneDom);
    })
    .catch((err) => {
      console.log("Get list ERROR");
      console.log(err);
    });
  }

  createOneRegister () {
    $.ajax({
      method: "POST",
      url:" http://ih-crud-api.herokuapp.com/characters",
      data: {
          name: name,
          occupation: occupation,
          weapon: weapon,
          debt: debt
      }
    })
    .then((apiResult) => {
      console.log("POST success!");
      const newChar = $(`
        <div class="character-info">
          <div class="name"> ${apiResult.name} </div>
          <div class="occupation"> ${apiResult.occupation} </div>
          <div class="debt"> ${apiResult.debt} </div>
          <div class="weapon"> ${apiResult.weapon}</div>
        </div>
        `);
        $(".characters-container").html(oneDom);
    })
    .catch((err) => {
      console.log("ERROR");
      console.log(err);
    });
  }

  updateOneRegister () {

  }

  deleteOneRegister (oneCharacter) {
    $.ajax({
      url:`http://ih-crud-api.herokuapp.com/characters/${oneCharacter}/`,
      method: "DELETE"
    })
    .then((apiResult) => {
      console.log("SUCCESS!");
      console.log(apiResult);
      const oneDom = $(`
        <div class="character-info">
          <div class="name"> ${apiResult.name} </div>
          <div class="occupation"> ${apiResult.occupation} </div>
          <div class="debt"> ${apiResult.debt} </div>
          <div class="weapon"> ${apiResult.weapon}</div>
        </div>
        `);

        $(".characters-container").html(oneDom);
    })
    .catch((err) => {
      console.log("Get list ERROR");
      console.log(err);
    });
  }
}
