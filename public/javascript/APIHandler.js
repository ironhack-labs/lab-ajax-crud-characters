class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList() {
    axios
      .get(`${BaseUrl}/characters`)
      .then(response => {
        console.log('The response from the API is: ', response.data);
      })
      .catch(err => console.log('error while getting the data: ', err));
  }

  getOneRegister() {
    axios
      .get(`${baseUrl}/:id`)
      .then(response => {
        console.log('The response from the API is: ', response.data);
      })
      .catch(err => console.log('error while getting the character: ', err));
  }

  createOneRegister() {

  }

  updateOneRegister() {

  }

  deleteOneRegister() {

  }
}