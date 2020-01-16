class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList () {
    axios.get(`${this.BASE_URL}/characters`)
    .then(response => {
      console.log(`Response from the API is :`, response.data);
    })
    .catch(error => console.log('The error is: ', error));
  }

  getOneRegister (theId) {
    axios.get(`${this.BASE_URL}/characters/${theId}`)
    .then(response => {
      console.log(`Response from the API is :`, response.data);
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
    axios.post(`${this.BASE_URL}/characters`, characterInfo)
    .then(response => {
      console.log(`Response from the API is :`, response.data);
    })
    .catch(error => console.log('The error is: ', error));
  }
// { name: 'Batman', occupation: 'hero', cartoon: true, weapon: 'A lot' }
// { name: 'Robin', occupation: 'hero', cartoon: true, weapon: 'some' }

  updateOneRegister (theId, characterInfo) {
    axios.get(`${this.BASE_URL}/characters/${theId}`)
    .then(response => {
      const data = Object.assign({}, response.data, characterInfo);
      axios.put(`${this.BASE_URL}/characters/${theId}`, data)
      .then(res => {
        console.log(`Response from the API is :`, res.data);
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
    axios.get(`${this.BASE_URL}/characters/${theId}`)
    .then(() => {
      axios.delete(`${this.BASE_URL}/characters/${theId}`)
      .then(() => {
        console.log("Character has been successfully deleted");
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
