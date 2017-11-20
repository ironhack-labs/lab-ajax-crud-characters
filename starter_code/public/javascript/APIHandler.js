class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList (ruta) {
    $.ajax({
   url: this.BASE_URL+ruta,
   method: "GET",
   success: function (response) {
     let data = response;
     for(var i = 0; i<data.length-1; i++){
       let info = data[i];
       $('.name').html(""+data[i].name+"");
       $('.occupation').html(""+data[i].occupation+"");
       $('.debt').html(""+data[i].debt+"");
       $('.weapon').html(""+data[i].weapon+"");
     }
}});
};
  getOneRegister (param) {
    $.ajax({
    url: this.BASE_URL+ "/characters/"+ param,
    method: "GET",
    success: function (response) {
      console.log(response);
         $('.name').html(""+response.name+"");
         $('.occupation').html(""+response.occupation+"");
         $('.debt').html(""+response.debt+"");
         $('.weapon').html(""+response.weapon+"");
       }
     })
  ;}

  createOneRegister (newCharacter) {
    $.ajax({
    url: this.BASE_URL+ "/characters/",
    method: "POST",
    data: newCharacter,
    dataType: "json",
    success: function (response) {
      console.log(response);
    alert("Character added successfully!");
    },
    error: function (err) {
      console.log("There was an error!");
    },
  });
}

  updateOneRegister (newEdit, param) {
    $.ajax({
    url: this.BASE_URL+ "/characters/"+ param,
    method: "PATCH",
    data: newEdit,
    dataType: "json",
    success: function (response) {
      console.log(response);
    alert("Character edited successfully!");
    },
    error: function (err) {
      console.log("There was an error!");
    },
  });

  }

  deleteOneRegister(param) {
    $.ajax({
      url: this.BASE_URL+"/characters/"+param,
      method: 'DELETE',
      success: function (response) {
        console.log(response);
      alert("Character deleted successfully!");
      },
      error: function (err) {
        console.log("There was an error!");
      },
    });
 }
}
