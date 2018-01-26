class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList() {
    axios.get(this.BASE_URL + '/characters')
      .then(function (response) {
        console.log(response);
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
    
    axios.post(this.BASE_URL + '/characters', {
      name: values.name,
      occupation: values.occupation,
      debt: values.debt,
      weapon: values.weapon,
    })
    .then(function (response) {
      console.log(response);
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