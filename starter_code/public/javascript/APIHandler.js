class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList () {
    axios.get(`${APIHandler}/characters`)
    .then(response => {
      console.log(response.data)
    })
    .catch(err => {
      console.log(err)
    })
  }

  getOneRegister (id) {
    axios.get(`${APIHandler}/characters/${id}`)
    .then(response => {
      console.log(response.data)
    })
    .catch(err => {
      console.log(err)
    })
  }

  createOneRegister () {
    axios.post(`${APIHandler}/characters`,data)
    .then(response => {
      console.log("post success");
      console.log(response)
    })
    .catch(err => {
      console.log(err)
    })
  }

  updateOneRegister (id,newdata) {
    axios.patch(`${APIHandler}/characters/${id}`,newdata)
    .then(response => {
      console.log(response.data)
    })
    .catc(err => {
      console.log(err)
    })
  }

  deleteOneRegister (id) {
    axios.put(`${APIHandler}/characters/${id}`)
    .then(response => {
      console.log(response)
    })
    .catch(err => {
      console.log(err)
    })
  }
}
