class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList () {
      return axios.get(this.BASE_URL+`characters`)
          .then(res => res)
          
  }

  getOneRegister (id) {
      return axios.get(this.BASE_URL +`characters/${id}`)
          .then(res => res)
          .catch(error => {
              console.log(error)
          })

  }

  createOneRegister (data) {
      return axios.post(this.BASE_URL +`characters`,data)
          .then(res => res)
          .catch(error => {
              console.log(error)
          })
  }

  updateOneRegister (id,data) {
      return axios.patch(this.BASE_URL+`characters/${id}`,data)
          .then(res => res)
          .catch(error => {
              console.log(error)
          })
  }

  deleteOneRegister (id) {
      return axios.delete(this.BASE_URL+`characters/${id}`)
          .then(res =>res)
          .catch(error => {
              console.log(error)
          })
  }
}
