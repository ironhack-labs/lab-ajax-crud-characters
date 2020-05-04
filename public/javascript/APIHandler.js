// Get all the characters info from http://localhost:8000/characters
// Get a single character info from http://localhost:8000/characters/:id
// Create a single character posting the data to http://localhost:8000/characters
// Delete a single character through his id in http://localhost:8000/characters/:id
// Edit a single character through his id in http://localhost:8000/characters/:id


class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList () {
    return axios
      .get(this.BASE_URL + `/characters`)
      .then(response => {
        return response.data;
    })
    .catch(err => {
      console.log(`There was some sort of error: ${err}`);
    });
  }

  getOneRegister (id) {
    
    return axios
      .get(this.BASE_URL + `/characters/${id}`)
      .then(response => {
        console.log(response.data)
        return response.data;
    })
    .catch(err => {
      console.log(`There was some sort of error: ${err}`);
    });
  }

  createOneRegister () {

    return axios
    .post(this.BASE_URL + `/characters`, character)
    .then(response => {
      console.log(response);
    })
    .catch(err => {
      console.log(`There was some sort of error: ${err}`);
    });
  }

  updateOneRegister () {

    axios
    .patch(`http://localhost:8000/characters/${id}`, updatedRegister)
    .then(response => {
      console.log(response);
    })
    .catch(err => {
      console.log(`There was some sort of error: ${err}`);
    });
  }

  deleteOneRegister () {
    axios
    .delete(`http://localhost:8000/characters/${id}`)
    .then(response => {
      console.log(response);
    })
    .catch(err => {
      console.log(`There was some sort of error: ${err}`);
    });
  }
}
