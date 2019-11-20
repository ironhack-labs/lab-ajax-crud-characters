class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;

  }

  getFullList() {
    return axios.get(`${this.BASE_URL}/characters`)
    /* .then(dataFromApi => {
      console.log(dataFromApi);
      res.json(dataFromApi)
      return dataFromApi.data;
   
    });
 */


  }

  getOneRegister(id) {
    return axios.get(`${this.BASE_URL}/characters/${id}`)
    /* .then(dataSingleFromApi => {
      console.log(dataSingleFromApi);
      res.json(dataSingleFromApi)

  }); */
}

  createOneRegister(newCharacter) {
    return axios.post(`${this.BASE_URL}/characters`, newCharacter)
  }

  updateOneRegister() {

  }

  deleteOneRegister(id) {
    return axios.delete(`${this.BASE_URL}/characters/${id}`)

  }
}

