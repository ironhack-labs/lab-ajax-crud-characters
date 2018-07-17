class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }
  
  getFullList () {
    return axios.get(this.BASE_URL + "/characters")
    .then(response => {
      return response.data;
    })
  }
  
  getOneRegister (id) {
    return axios.get(this.BASE_URL + "/characters/" + id)
    .then(response => {
      return response.data
    })
    .catch(err => {
      console.error(err)
    })
  }

  
  createOneRegister (characterInfo) {
    return axios.post(this.BASE_URL + "/characters/", characterInfo)
    .then(response => {
      console.log('post success');
      console.log(response)
    })
    .catch(error => {
      console.log('Error with POST request!');  
      console.log(error)
    })
  }
  
  updateOneRegister (characterInfo, id) {
    console.log("ID ", id)
    return axios.patch(this.BASE_URL + "/characters/" + id, characterInfo)
    .then(response => {
      console.log('update success');
      console.log(response)
    })
    .catch(error => {
      console.log('Error with update request!');  
      console.log(error)
    })
  }
  
  deleteOneRegister (id) {
    return axios.delete(this.BASE_URL + "/characters/" + id)
    .then(response => {
      console.log('delete worked!')
    })
    .catch(err => {
      console.error(err)
    })
  }
}