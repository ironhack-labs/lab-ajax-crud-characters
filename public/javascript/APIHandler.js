class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList (path) {
    return axios.get(this.BASE_URL + path).then(response => response.data).catch(err=> err)
  }

  getOneRegister (path, id) {
    return axios.get(this.BASE_URL+path+'/'+id).then(response => response.data).catch(err=> err)
  }

  createOneRegister (path, data) {
    return axios.post(this.BASE_URL + path, data).then(response => response.data).catch(err=> err)
  }

  updateOneRegister (path, id, data) {
    return axios.put(this.BASE_URL + path+'/'+id, data).then(response => response.data).catch(err=> err)
  }

  deleteOneRegister (path, id) {
    return axios.delete(this.BASE_URL + path+'/'+id).then(response => response.data).catch(err=> err)
  }
}
