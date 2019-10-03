class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
    this.client = axios.create({
      baseURL: this.BASE_URL
    });
  }

  getFullList() {
    this.client
      .get('characters')
      .then(responseFromAPI => {
        console.log("Response from API is: ", responseFromAPI.data);
        return responseFromAPI.data;
      })
      .catch(err => console.log("Error is: ", err));
  }

  getOneRegister(id) {
     return this.client.get(`characters/${id}`);
      
  }

  createOneRegister(obj) {
    this.client
      .post(`characters`, obj)
      .then(responseFromAPI => {
          console.log("Response from API is: ", responseFromAPI.data);
          return responseFromAPI.data;
      })
      .catch(err => console.log("Error is: ", err));
  }

  updateOneRegister(id, obj) {
    this.client
      .put(`characters/${id}`, obj)
      .then(responseFromAPI => {
          console.log("Response from API is: ", responseFromAPI.data)
          return responseFromAPI.data;
      })
      .catch(err => console.log("Error is: ", err));
  }

  deleteOneRegister(id) {
    this.client
      .delete(`characters/${id}`)
      .then(responseFromAPI => {
          console.log("Response from API is: ", responseFromAPI.data)
          return responseFromAPI.data;
      })
      .catch(err => console.log("Error is: ", err));
  }
}