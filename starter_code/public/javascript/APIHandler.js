class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList () {
      return axios.get(`${this.BASE_URL}/characters`)
          .then(res => {
              return res.data;
              console.log(res)
          })
          .catch(error => {
              console.log(error)
          })
  }

  getOneRegister () {
      return axios.get(`${this.BASE_URL}/characters/${id}`)
          .then(res => {
              return res.data;
          })
          .catch(error => {
              console.log(error)
          })

  }

  createOneRegister () {
      return axios.post(`${this.BASE_URL}/characters`)
          .then(res => {
              return res.data;
          })
          .catch(error => {
              console.log(error)
          })
  }

  updateOneRegister () {
      return axios.patch(`${this.BASE_URL}/characters/${id}`)
          .then(res => {
              return res.data;
          })
          .catch(error => {
              console.log(error)
          })
  }

  deleteOneRegister () {
      return axios.delete(`${this.BASE_URL}/characters/${id}`)
          .then(res => {
              return res.data;
          })
          .catch(error => {
              console.log(error)
          })
  }
}
