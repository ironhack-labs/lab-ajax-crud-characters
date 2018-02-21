class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList () {
    axios.get(this.BASE_URL + "/characters")
  .then(response => {
    console.log(response.data)
  })
  .catch(err => {
    console.error(err)
  })
  }

  getOneRegister () {
    axios.get(this.BASE_URL + "/:id")
  .then(response => {
    console.log(response.data)
  })
  .catch(err => {
    console.error(err)
  })
  }

  createOneRegister () {
    axios.post(this.BASE_URL + "/characters")
  .then(response => {
    console.log(response.data)
  })
  .catch(err => {
    console.error(err)
  })
  }

  updateOneRegister () {
    axios.put(this.BASE_URL + "/:id")
  .then(response => {
    console.log(response.data)
  })
  .catch(err => {
    console.error(err)
  })
  }

  deleteOneRegister () {
    axios.delete(this.BASE_URL + "/:id")
  .then(response => {
    console.log(response.data)
  })
  .catch(err => {
    console.error(err)
  })
  }
}