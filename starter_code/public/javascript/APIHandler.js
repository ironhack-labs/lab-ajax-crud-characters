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
        let i = 1;
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
    axios.get(this.BASE_URL + '/characters/' + id)
      .then(function (response) {
        console.log(response);
        $("#olResult").append($("<ol><li>Id: " + response.data.characters._id + "</li><li>name: " + response.data.characters.name + "</li><li>occupation: " +
          response.data.characters.occupation + "</li><li>debt: " + response.data.characters.debt + "</li><li>weapon: " +
          response.data.characters.weapon + "</li></ol>"));

      })
      .catch(function (error) {
        console.log(error);
      });
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


  // $.ajax({
  //   // Notice that we are using PATCH. You could also use PUT.
  //   method: 'PATCH',
  //   url: this.BASE_URL + "/characters/"+values.chrid,
  //   data: {
  //     id:values.chrid,
  //     name: values.name,
  //     occupation: values.occupation,
  //     debt: debt,
  //     weapon: values.weapon,
  //   },
  //   success: (patchResponse) => {
  //     console.log('Update SUCCESS!');
  //     console.log(patchResponse);
  //   },
  //   error: handleError
  // });


  deleteOneRegister() {

  }
}