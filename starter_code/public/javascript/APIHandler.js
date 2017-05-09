class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

 getFullList (){
    $.ajax({
      method: 'GET',
      url: this.BASE_URL,
       success: function(response){
         console.log(response);
      },
       error: function(err){
        console.log(err);
      }
      });
     };

  getOneRegister (charID) {
    $.ajax({
      method: 'GET',
      url: this.BASE_URL+charID,
       success: function(response){
         console.log(response);
      },
       error: function(err){
        console.log(err);
      }
      });
  };


  createOneRegister () {
    let name= $('#name-new').val();
    let occupation= $('#occupation-new').val();
    let weapon= $('#weapon-new').val();
    let debt=$('#debt-new').val()
    const characterInfo = {name: name, occupation: occupation, debt:debt, weapon:weapon}
    $.ajax({
      method: 'POST',
      url: this.BASE_URL,
      data: characterInfo,
       success: function(response){
         console.log(response);
      },
       error: function(err){
        console.log(err);
      }
      });

    };


  updateOneRegister (charID) {
    let name= $('#name-update').val();
    let occupation= $('#occupation-update').val();
    let weapon=$('#weapon-update').val();
    let debt=$('#debt-update').val()
    const updateInfo = {name: name, occupation: occupation, debt:debt, weapon:weapon}
    $.ajax({
      method: 'PATCH',
      url: this.BASE_URL+charID,
      data: updateInfo,
       success: function(response){
         console.log(response);
      },
       error: function(err){
        console.log(err);
      }
      });

  }

  deleteOneRegister (charID) {
    $.ajax({
      method: 'DELETE',
      url: this.BASE_URL+charID,
       success: function(response){
         console.log(response);
      },
       error: function(err){
        console.log(err);
      }
      });
  }
}
