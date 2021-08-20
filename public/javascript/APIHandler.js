class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList () {
    return axios.get('http://localhost:8000/characters')
    .then(responseFromApi => { return responseFromApi })
    .catch(error => console.log(error));
  }

  getOneRegister (id) {
    return axios.get('http://localhost:8000/characters/'+id)
    .then(responseFromApi => console.log(responseFromApi.data))
    .catch(error => console.log(error));
  }

  createOneRegister (objToCreate) {
    console.log(objToCreate);
    return axios.post('http://localhost:8000/characters/', objToCreate)
    .then(responseFromApi => console.log(responseFromApi.data))
    .catch(error => console.log(error));
  }

  updateOneRegister (id, updatedObj) {
    return axios.patch('http://localhost:8000/characters'+id+"/", updatedObj )
    .then(responseFromApi => {return responseFromApi})
    .catch(error => console.log(error));
  }

  deleteOneRegister (idParam) {
    return axios.delete('http://localhost:8000/characters/'+ idParam )
    .then(responseFromApi => console.log("Delete Char "+responseFromApi.data))
    .catch(error => console.log(error));
  }
}
