class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList() {
    $("#ulResult ul").remove();
    axios.get(this.BASE_URL + '/characters')
      .then(function (response) {
        let i = 1;
        response.data.characters.forEach(charac => {
          // $("#olResult").append($("<h5><strong>" + (i++) + "</strong></h5>"))
          $("#olResult").append($("<ol><li>name: " + charac.name + "</li><li>occupation: " +
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
    $("#ulResult").remove();
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
        response.data.characters.forEach(charac => {
          console.log(charac);
          $("#ulResult").append($("<ul>"));
          $("#ulResult").append($("<li>name: " + charac.name + "</li>"));
          $("#ulResult").append($("<li>occupation: " + charac.occupation + "</li>"));
          $("#ulResult").append($("<li>debt: " + charac.debt + "</li>"));
          $("#ulResult").append($("<li>weapon: " + charac.weapon + "</li>"));
          $("#ulResult").append($("</ul>"));
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