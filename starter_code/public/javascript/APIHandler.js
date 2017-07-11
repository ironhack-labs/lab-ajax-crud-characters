class APIHandler {

  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  //--------------------------------------------------------------------

 getFullList() {

    $.ajax({
  url: this.BASE_URL + "/characters",
  method: "GET",
  success: (responseFromApi) => {
    $(".characters-container").html('');
    alert(" SUCCESSS!");
    console.log(responseFromApi);
    //The callback function that will be executed if the request is completed succesfully
    //This function will have a parameter with the server response.
    responseFromApi.forEach ((char) =>{
      $(".characters-container").append(`
        <div class="character-info">
          <div class="name">${char.name}</div>
          <div class="occupation">${char.occupation}</div>
          <div class="weapon">${char.weapon}</div>
          <div class="debt">${char.debt}</div>
          </div>
      `);
    });
  },
  error: (errorFromApi) => {
    alert("Sorry! Data error.");
      console.log(errorFromApi);
    //The callback function that will be executed if the request fails, whether it was a client or a server error
    //It will have a parameter with error that caused the request to fail
  }
});
}

  //--------------------------------------------------------------------

   getOneRegister(myId) {
    $.ajax({        // 1st argument -> giant settings object
                // Minimum 4 settings: url, method, success & error
  url: this.BASE_URL + "/characters/" + myId,// URL from Insomnia
  method: "GET",                         // get, post put, patch or delete
  // if succesful, put some of the data on the screen (DOM manipulation)
  success: (responseFromApi) => {
    // The 1st parameter of the "success" callback will always
    // be the data we get from the API (name of param doesnt matter)
    console.log("Response" + myId);
    console.log(responseFromApi);
    const char = responseFromApi;
    $(".characters-container").html(`
      <div class="character-info">
        <div class="name">${char.name}</div>
        <div class="occupation">${char.occupation}</div>
        <div class="weapon">${char.weapon}</div>
        <div class="debt">${char.debt}</div>
        </div>
    `);
},

  // if error, show error feedback (DOM manipulation)
  error: (errorFromApi) => {
    alert("Sorry! Data error.");
    console.log(errorFromApi);
  }
});
  }

  //--------------------------------------------------------------------

createOneRegister() {
    $.ajax({        // 1st argument -> giant settings object
                // Minimum 4 settings: url, method, success & error
  url: this.BASE_URL,                     // URL from Insomnia
  method: "POST",                         // get, post put, patch or delete

  // the "DATA" setting is only used when you need to send extra info to the Arrays
  data: newAPIHandlerDetails,
  // newAPIHandlerDetails is an object that contains:
  // name, occupation, weapon & debt

  // if succesful, put some of the data on the screen (DOM manipulation)
  success: (responseFromApi) => {
    console.log("YES! POST SUCCESS!");
    $("#characterList").append(`
      <li>
      <p> Name: ${responseFromApi.name}</p>
      <p> Occupation: ${responseFromApi.occupation} </p>
      <p> Weapon: ${responseFromApi.weapon}</p>
      <p> Debt: ${responseFromApi.debt}</p>
      </li>
      `);
},

  // if error, show error feedback (DOM manipulation)
  error: (errorFromApi) => {
    alert("Sorry! POST error.");
    console.log(errorFromApi);
  }
});
  }


  //--------------------------------------------------------------------

  updateOneRegister() {
    $.ajax({
  url: baseUrl + myId,
  method: "PATCH",
  data: newAPIhandler,
  // newInfo is an object that contains:
  // name, occupation & weapon properties

  success: (responseFromApi) => {
    alert("UPDATE SUCCESS!");
    console.log(responseFromApi);
  },
  error:(errorFromApi) => {
    alert("Sorry! Update Error");
    console.log(errorFromApi);
  }
});
  }

  //-------------------------------------------------------------------

deleteOneRegister(myId) {
  $.ajax({
url: this.BASE_URL + "/characters/" + myId,
method: "DELETE",
// newInfo is an object that contains:
// name, occupation & weapon properties

success: (responseFromApi) => {
  alert("DELETE SUCCESS!");
  console.log("Response" + myId);
  console.log(responseFromApi);
   $("#delete-one").css("backgroundcolor", "green");
},
error:(errorFromApi) => {
  alert("Sorry! Error");
  console.log(errorFromApi);
  $("#delete-one").css("backgroundcolor", "red");
}
});
  }
}
