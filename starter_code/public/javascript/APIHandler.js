class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList() {
    $("#olResult").empty();
    axios.get(this.BASE_URL + '/characters')
      .then(function (response) {
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

  getOneRegister() {
    axios.get(this.BASE_URL + '/characters', {
        params: {
          ID: 12345
        }
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
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

  updateOneRegister() {

  }

  deleteOneRegister() {

  }
}