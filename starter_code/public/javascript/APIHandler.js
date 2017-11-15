class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList () {
    $.ajax({
      url: "http://ih-crud-api.herokuapp.com/characters",
      method: "GET",
      success: function (response) {
        console.log(response);
      },
      error: function (err) {
        console.log("Ops! Something went wrong.");
      },
    });
  };

  getOneRegister (id) {
    let characterId = $('#character-id').val();
    console.log(characterId);
    if (characterId>0) {
      $.ajax({
        url: ("http://ih-crud-api.herokuapp.com/characters/"+characterId),
        method: "GET",
        success: function (response) {
        console.log(response);
        },
        error: function (err) {
          console.log(err);
        },
      });
    } else {
      console.log("Invalid Id");
    }
  };

  createOneRegister () {
    let name = $('#new-name').val();
    let occupation = $('#new-occupation').val();
    let weapon = $('#new-weapon').val();
    let debt = $('#new-debt').val();
    console.log(name, occupation, weapon, debt);

    const characterInfo = {name, occupation, weapon, debt};
    console.log(characterData);

    $.ajax({
      method: 'POST',
      url: 'https://ih-crud-api.herokuapp.com/characters',
      data: characterInfo,
      success: showFeedback,
      error: handleError
    });
  };

  updateOneRegister () {
    axios.get('http://ih-crud-api.herokuapp.com/characters/:id')
      .then((response) => {
        console.log(response);
        var characters = response;
      });
  };

  deleteOneRegister () {
    axios.get('http://ih-crud-api.herokuapp.com/characters/:id')
      .then((response) => {
        console.log(response);
        var characters = response;
      });
  };
};
