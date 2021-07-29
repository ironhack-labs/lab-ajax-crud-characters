


class APIHandler {


  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList () {
      return axios.get(this.BASE_URL + "/characters")

      
  }



  getOneRegister (id) {
    return axios.get(this.BASE_URL + `/characters/${id}`);
  }

  createOneRegister (character) {
    return axios.post(this.BASE_URL + `/characters`, character);
  }

  updateOneRegister (updateOneChar) {
    return axios.put(this.BASE_URL + `/characters/${id}`, updateOneChar);
  }

  deleteOneRegister () {
    return axios.delete(this.BASE_URL + `/characters/${id}`);
  }
}
  const charactersAPI = new APIHandler("http://localhost:8000/");