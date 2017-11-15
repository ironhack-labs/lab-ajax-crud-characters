class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList() {
    $.ajax({
      url: this.BASE_URL + "/characters",
      method: "GET",
      success: function(response) {
        removeAndDrawDivs(response);
        console.log(response);
      },
      error: function(err) {
        console.log("cagada");
      }
    });
  };

  getOneRegister(id) {
    $.ajax({
      url: this.BASE_URL + "/characters/" + id,
      method: "GET",
      success: function(response) {
        removeAndDrawDivs(response);
        console.log(response);
      },
      error: function(err) {
        console.log("cagada");
      }
    });
  };


  createOneRegister() {
    let name = $('#newName').val();
    let occupacy = $('#newOccu').val();
    let debt = $('#hasDebt').val() === "on" ? true : false;
    let weapon = $('#newWeapon').val();
    const characterInfo = {
      name: name,
      occupation: occupacy,
      debt: debt,
      weapon: weapon
    };
    console.log(characterInfo);
    console.log("creating element");
    $.ajax({
      type: 'POST',
      url: this.BASE_URL + "/characters",
      data: characterInfo,
      success: function(response) {
        removeAndDrawDivs(response);
        console.log(response);
      },
      // showFeedback,
      error: function(err) {
        console.log("cagada");
      }
    });
  };


  updateOneRegister() {
    let debt = $('#debtHas').val() === "on" ? true : false;
    let id = $('#myId').val();
    let name = $('#newName').val();
    let occupacy = $('#newOccu').val();
    let weapon = $('#newWeapon').val();
    const updateInfo = {
      name: name,
      occupation: occupacy,
      debt: debt,
      weapon: weapon
    };
    console.log("creating element");

     const charId = $('#myId').val();
    $.ajax({
      method: 'PATCH',
      url: `https://ih-crud-api.herokuapp.com/characters/${charId}`,
      data: updateInfo,
      success: function(response) {
        removeAndDrawDivs(response);
        console.log(response);
      },
      // showFeedback,
      error: function(err) {
        console.log("cagada");
      }
    });
  };

  deleteOneRegister(id) {
    $.ajax({
      url: this.BASE_URL + "/characters/" + id,
      method: "DELETE",
      success: function(response) {
        removeAndDrawDivs(response);
        console.log(response);
      },
      error: function(err) {
        console.log("cagada");
      }
    });

  };
};

//hacemos funcion xq hay un chorro para borrar
function removeAndDrawDivs(response) {
  let div = document.querySelector(".character-info");
  console.log(div);
  $(".character-info").remove();


};
