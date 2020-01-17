class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList () {
    return axios.get(`${this.BASE_URL}/characters`)
    .then(response => {
      // console.log(`Response from the API is :`, response.data);
      return response.data;
    })
    .catch(error => console.log('The error is: ', error));
  }

  getOneRegister (theId) {
    return axios.get(`${this.BASE_URL}/characters/${theId}`)
    .then(response => {
      // console.log(`Response from the API is :`, response.data);
      return response.data;
    })
    .catch(error => {
      if (error.response.status == 404){
        console.log("Character not found");
      } else {
          console.log('err => ', error);
      }
    });
  }

  createOneRegister (characterInfo) {
    return axios.post(`${this.BASE_URL}/characters`, characterInfo)
    .then(response => {
      // console.log(`Response from the API is :`, response.data);
      return response.data;
    })
    .catch(error => console.log('The error is: ', error));
  }

  updateOneRegister (theId, characterInfo) {
    return axios.get(`${this.BASE_URL}/characters/${theId}`)
    .then(response => {
      const data = Object.assign({}, response.data, characterInfo);
      return axios.put(`${this.BASE_URL}/characters/${theId}`, data)
      .then(res => {
        // console.log(`Response from the API is :`, res.data);
        return res.data;
      })
      .catch(err => console.log('The error is: ', err));
    })
    .catch(error => {
      if (error.response.status == 404){
        console.log("Character not found");
      } else {
          console.log('err => ', error);
      }
    });
  }

  deleteOneRegister (theId) {
    return axios.get(`${this.BASE_URL}/characters/${theId}`)
    .then(() => {
      return axios.delete(`${this.BASE_URL}/characters/${theId}`)
      .then(() => {
        console.log("Character has been successfully deleted");
        return true;
      })
      .catch(err => console.log('The error is: ', err));
    })
    .catch(error => {
      if (error.response.status == 404){
        console.log("Character not found");
      } else {
          console.log('err => ', error);
      }
    });
  }

}
