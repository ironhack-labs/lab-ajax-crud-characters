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

  createOneRegister () {
    $.ajax({
    url: this.BASE_URL+ "/characters/",
    method: "POST",
    success: function (response) {
    console.log("todo bien!");
       }
     })
  ;

  }
  
  updateOneRegister () {

  }

  deleteOneRegister () {

  }
}
