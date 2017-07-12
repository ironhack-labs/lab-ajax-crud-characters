class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL =  "http:/ih-api.herokuapp.com";
  }



  getFullList () {
    $.ajax({
      url: this.BASE_URL + "/" + "characters",
      method: "GET",
      success: function (responseFromCharacterAPI){
        // console.log('No Error, Hooray!');
        console.log(responseFromCharacterAPI);

      $('#characterInfo').html(`
${responseFromCharacterAPI.name}
${responseFromCharacterAPI.occupation}
${responseFromCharacterAPI.debt}
${responseFromCharacterAPI.weapon}`
  );
},
  error: function (errorFromApi){
    // console.log('Error, I\'m sad!');
    console.log(errorFromApi);
  },
});
}

  getOneRegister (myId) {
    $.ajax({
      url: this.BASE_URL + "/characters/" + myId,
      method: "GET",
      success: function (responseFromCharacterAPI){
        console.log('No Error, Hooray!');
        console.log(responseFromCharacterAPI);

    //   $('#characterInfo').html(`
    // ${responseFromCharacterAPI.name}
    // ${responseFromCharacterAPI.occupation}
    // ${responseFromCharacterAPI.weapon}`
    // );
    },
    error: function (errorFromApi){
    console.log('Error, I\'m sad!');
    console.log(errorFromApi);
    },
    });
  }
//line 38 on index.js is calling createOneRegister
  createOneRegister (newCharacterDetails) {
    $.ajax({
      url: this.BASE_URL + "/characters/",
      method: "POST",
      data: newCharacterDetails,
      success: function (responseFromCharacterAPI){
        console.log('No Error, Hooray!');
        console.log(responseFromCharacterAPI);

    //   $('#characterInfo').html(`
    // ${responseFromCharacterAPI.name}
    // ${responseFromCharacterAPI.occupation}
    // ${responseFromCharacterAPI.weapon}`
    // );
    },
    error: function (errorFromApi){
    console.log('Error, I\'m sad!');
    console.log(errorFromApi);
    },
    });
  }

  updateOneRegister () {

  }

  deleteOneRegister () {

  }
}
