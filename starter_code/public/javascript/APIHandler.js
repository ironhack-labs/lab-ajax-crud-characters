class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
  }

  createOneRegister(values) {
    $("#olResult").empty();
    let debt;
    (values.debt === "on") ? debt = true: debt = false;
    axios.post(this.BASE_URL + '/characters', {
        name: values.name,
        occupation: values.occupation,
        debt: debt,
        weapon: values.weapon,
      })
      .then(function (response) {
        console.log(response);
        paintText(response);
        response.data.characters.forEach(charac => {
          $("#olResult").append($("<ol><li>Id: " + charac._id + "</li><li>name: " + charac.name + "</li><li>occupation: " +
            charac.occupation + "</li><li>debt: " + charac.debt + "</li><li>weapon: " +
            charac.weapon + "</li></ol>"));
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  getFullList() {
    $("#olResult").empty();
    axios.get(this.BASE_URL + '/characters')
      .then(function (response) {
        console.log(response);
        paintText(response);
        response.data.characters.forEach(charac => {
          $("#olResult").append($("<ol><li>Id: " + charac._id + "</li><li>name: " + charac.name + "</li><li>occupation: " +
            charac.occupation + "</li><li>debt: " + charac.debt + "</li><li>weapon: " +
            charac.weapon + "</li></ol>"));
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  getOneRegister(id) {
    $("#olResult").empty();
    if(id){
      axios.get(this.BASE_URL + '/characters/' + id)
        .then(function (response) {
          console.log(response);
          paintText(response);
          $("#olResult").append($("<ol><li>Id: " + response.data.characters._id + "</li><li>name: " + response.data.characters.name + "</li><li>occupation: " +
            response.data.characters.occupation + "</li><li>debt: " + response.data.characters.debt + "</li><li>weapon: " +
            response.data.characters.weapon + "</li></ol>"));
  
        })
        .catch(function (error) {
          console.log(error);
        });
    }else{
      $("#olResult").append($(`<h4>You need an ID</h4>`));
    }
  }

  updateOneRegister(values) {
    $("#olResult").empty();
    let debt;
    (values.debt === "on") ? debt = true: debt = false;
    axios.post(this.BASE_URL + "/characters/update/" + values.chrid, {
        _id: values.chrid,
        name: values.name,
        occupation: values.occupation,
        debt: debt,
        weapon: values.weapon,
      })
      .then((response) => {
        console.log(response);
        paintText(response);
        response.data.characters.forEach(charac => {
          $("#olResult").append($("<ol><li>Id: " + charac._id + "</li><li>name: " + charac.name + "</li><li>occupation: " +
            charac.occupation + "</li><li>debt: " + charac.debt + "</li><li>weapon: " +
            charac.weapon + "</li></ol>"));
        });
      })
      .catch(function (error) {
        console.log(error);
      });

    }
      

  deleteOneRegister() {

  }
}
function paintText(response){  
  if(response.data.message){
    $("#olResult").append($(`<h4>${response.data.message}</h4>`));
  }
  if(response.data.error){
    $("#olResult").append($("<ol><li>Id: " + response.data.error.id + "</li><li>name: " + response.data.error.name + "</li><li>occupation: " +
        response.data.error.occupation + "</li><li>debt: " + response.data.error.debt + "</li><li>weapon: " +
        response.data.error.weapon + "</li></ol>"));
  }
}