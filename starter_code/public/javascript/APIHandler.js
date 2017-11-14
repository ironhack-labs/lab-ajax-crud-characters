class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
    this.item={
      name:"",
      occupation:"",
      debt:false,
      weapon:""
    };
  }

  getFullList () {
      $.ajax({
        method: 'GET',
        url:this.BASE_URL+"/characters",
        dataType: 'json',
        success: (response)=>{console.log(response);},
        error: this.handleError
      });
  }

  getOneRegister (id) {
    $.ajax({
      method: 'GET',
      url:this.BASE_URL+"/characters/"+id,
      dataType: 'json',
      success: (response)=>{console.log(response);},
      error: this.handleError
    });
  }

  createOneRegister (item) {
    this.fillItem(item);
    $.ajax({
      method: 'POST',
      url:this.BASE_URL+"/characters",
      dataType: 'json',
      data: this.item,
      success: (response)=>{console.log(response);},
      error: this.handleError
    });
  }

  updateOneRegister (id,item) {
    this.fillItem(item);
    $.ajax({
      method: 'PUT',
      url:this.BASE_URL+"/characters/"+id,
      dataType: 'json',
      data: this.item,
      success: (response)=>{console.log(response);},
      error: this.handleError
    });
  }

  deleteOneRegister (id) {
      $.ajax({
      method: 'DELETE',
      url:this.BASE_URL+"/characters/"+id,
      dataType: 'text',
      success: (response)=>{console.log(response);},
      error: this.handleError
    });
  }


fillItem(item){
  this.item.name=item.name;
  this.item.occupation=item.occupation;
  this.item.debt=item.debt,
  this.item.weapon=item.weapon;
}

handleError(err){
  console.log('Error');
  console.log(err.responseText);
}



// End CLass
}
