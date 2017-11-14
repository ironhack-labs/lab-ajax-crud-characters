class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList() {
    $.ajax({
      url: this.BASE_URL+'/characters/',
      method: "GET",
      success: function(response) {
        printTheFullList(response);
      },
      error: function(err) {
        console.log(err);
      }
    });
  }

  getOneRegister(id) {
    $.ajax({
      url: this.BASE_URL+'/characters/'+id,
      method: "GET",
      success: function(response) {
        bringTheCharacter(response);
      },
      error: function(err) {
        console.log(err);
      }
    });
  }

  createOneRegister(newChar) {
    let name = $("#create-name").val();
    let occupacy = $("#create-occupation").val();
    let debt = $("#create-debt").val() === "on" ? true : false;
    let weapon = $("#create-weapon").val();
    const characterInfo = {
      name: name,
      occupation: occupacy,
      debt: debt,
      weapon: weapon
    };
    console.log(characterInfo);
    console.log("creating element");
    $.ajax({
      // Notice that we are using POST
      url: this.BASE_URL+'/characters/',
      type: "POST",
      // The data key is for sending data in a POST, PUT or PATCH!
      data: characterInfo,
      success: showFeedback,
      error: handleError
    });
  }

  updateOneRegister() {
    let id = $("#update-id").val();
    let name = $("#update-name").val();
    let occupacy = $("#update-occupation").val();
    let debt = $("#update-debt").val() === "on" ? true : false;
    let weapon = $("#update-weapon").val();
    const characterInfo = {
      name: name,
      occupacy: occupacy,
      debt: debt,
      weapon: weapon
    };
    console.log(characterInfo);
    $.ajax({
      type: "PATCH",
      url: this.BASE_URL+'/characters/'+id,
      data: characterInfo,
      success: showFeedback,
      error: handleError
    });
  }

  deleteOneRegister() {
    let id = $("#delete-id").val();
    $.ajax({
      type: "DELETE",
      url: this.BASE_URL+'/characters/'+id,
      success: showFeedback,
      error: handleError
    });
  }
}

function showFeedback(postResponse) {
  console.log("post success");
  console.log(postResponse);
}

function handleError(err) {
  console.log("Oh no! Error:");
  console.log(err);
}
