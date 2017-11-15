class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList() {
    $.ajax({
      url: "http://ih-crud-api.herokuapp.com/characters",
      success: function(response) {
      for (var i = 0; i < response.length; i++) {
      consola.log(response[i]);
      $(" .characters-container ").append(
        " <div class = 'character-info'> " +
        " <div class = 'name'> Name: " + response[i].name + " </ div> " +
        " <div class = 'occupation'> Occupation: " + response[i].occupation + " </ div> " +
        " <div class = 'debt'> Debt: " + response[i].debt + " </ div> " +
        " <div class = 'weapon'> Weapon: " + response[i].weapon + " </ div> " +
        " </ div> "
  );};
},
  error: function (err) {
  console.log(err);
},
});
  }





getOneRegister() {

}

createOneRegister() {

}

updateOneRegister() {

}

deleteOneRegister() {

}
}
