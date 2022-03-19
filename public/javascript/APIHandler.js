class APIHandler {
  constructor (baseUrl) {
    this.api = axios.create({
      baseURL: this.BASE_URL
    })
  }

  getFullList = async () => {
    return axios.get(`${this.BASE_URL}/characters`);
    }

    getOneRegister (characterId) {
      return axios.get(`${this.BASE_URL}/${characterId}`);
  }

  createOneRegister (oneRegister) {
    return axios.post(`${this.BASE_URL}/characters`, oneRegister);
  }

  updateOneRegister (characterId, oneRegister) {
    return axios.patch(`${this.BASE_URL}/${characterId}`, oneRegister);
  }

  deleteOneRegister () {
    return axios.delete(`${this.BASE_URL}/characters/${characterId}`);
  }
}
