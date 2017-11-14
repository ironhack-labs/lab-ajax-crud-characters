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
    $.ajax({
      url: "http://pokeapi.co/api/v2/pokemon/" + id,
      method: "GET",
      success: function (response) {
        console.log(response);
      },
      error: function (err) {
        console.log(err);
      },
    });
  };

  createOneRegister (data) {
    let name = $('#name').val();
    let occupation = $('#occupation').val();
    let weapon = $('#weapon').val();
    let debt = $('#debt').val();

    let characterData = {name, occupation, weapon, debt};

    $.ajax({
      url: "http://ih-crud-api.herokuapp.com/characters",
      method: "POST",
      data: data,
      success: function (response) {
        console.log(response);
      },
      error: function (err) {
        console.log("Ops! Something went wrong.");
      },
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
