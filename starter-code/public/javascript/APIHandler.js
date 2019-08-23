class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList () {
   return axios.get(this.BASE_URL)
    .then((response) => {
      console.log(response.data)
      return response.data
    })
    .catch((error) => {
      console.log(error)
      return error;
    })
  }

  getOneRegister (id) {
    return axios.get(this.BASE_URL + `/${id}`)
    .then((response) => {
      console.log(response.data)
      return response.data
    })
    .catch((error) => {
      console.log(error)
    })
  }

  createOneRegister (itemToAdd) {
    return axios.post(this.BASE_URL, itemToAdd)
    .then((response) => {
      console.log(response.data)
      return response.data
    })
    .catch((error) => {
      console.log(error)
    })

  }

  updateOneRegister (id, updatedItem) {
    return axios.put(this.BASE_URL + `/${id}`, updatedItem )
    .then((response) => {
      console.log(response.data)
      return response.data
    })
    .catch((error) => {
      console.log(error)
    })
    
  }

  deleteOneRegister (id) {
    return axios.delete(this.BASE_URL + `/${id}`)
    .then((response) => {
      console.log(response.data)
      return response.data

    })
    .catch((error) => {
      console.log(error)
    })
  }
}
