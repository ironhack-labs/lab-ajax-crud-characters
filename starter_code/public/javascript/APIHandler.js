class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList () {
    return axios.get(this.BASE_URL + "/characters")
    .then(response => {
      return response.data;
    })
    .catch (error => {
      console.log(error);
    })
  }

  getOneRegister (id) {
    return axios.get(this.BASE_URL + "/characters/" + id)
    .then(response => {
      return response.data;
    })
    .catch (error => {
      console.log(error);
    })
  }

  createOneRegister (characterInfo) {
    return axios.post(this.BASE_URL + "/characters", characterInfo)
    .then (response => {
      return response.data;
      console.log(response);
      console.log('success')
    })
    .catch (error => {
      console.log(error);
      console.log('nope')
    })
  }

  updateOneRegister (id, characterInfo) {
    axios.put(this.BASE_URL + "/characters/" + id, characterInfo)
    .then(response => {
    })
    .catch (error => {
      console.log(error);
    })
  }
  
  deleteOneRegister (id) {
    axios.delete(this.BASE_URL + "/characters/" + id)
    .then(response => {
      })
    .catch (error => {
      console.log(error);
    })
  }
}
