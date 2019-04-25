class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList() {
    axios.get(this.BASE_URL)
      .then(({ data }) => {
        console.log(data)
      })
      .catch(err => console.log(err))

  }

  getOneRegister(id) {
    axios.get(this.BASE_URL + id)
      .then(({ data }) => {
        console.log(data)
      })
      .catch(err => console.log(err))
  }

  createOneRegister(dataCharacter) {
    axios.post(`${this.BASE_URL}`,{...dataCharacter})
      .then(({ data }) => {
        console.log(data)
      })
      .catch(err => console.log(err))
  }

  updateOneRegister(id,info) {
    axios.patch(`${this.BASE_URL}${id}`,{...info})
      .then(({ data }) => {
        console.log(data)
      })
      .catch(err => console.log(err))
  }

  deleteOneRegister(id) {
    axios.delete(this.BASE_URL + id)
      .then(({ data }) => {
        console.log(data)
      })
      .catch(err => console.log(err))
  }
}
