class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList () {
    axios
    .get(`${this.BASE_URL}/characters`)
    .then((res) => {
      console.log(res.data)
    })
    .catch((e) => console.log(e))
  }

  getOneRegister (id) {
    axios
    .get(`${this.BASE_URL}/characters/${id}`)
    .then((res) => {
      console.log(res.data)
    })
    .catch((e) => console.log(e))
  }

  createOneRegister (data) {
    axios
    .post(`${this.BASE_URL}/characters`, data)
    .then((res) => {
      console.log(res.data)
      
    })
    .catch((e) => console.log(e));
  }

  updateOneRegister (id,data) {
    axios
    .put(`${this.BASE_URL}/characters/${id}`, data)
    .then((res) => {
      console.log(res.data)
    })
    .catch((e) => console.log(e));
  }

  deleteOneRegister (id) {
    axios
    .delete(`${this.BASE_URL}/characters/${id}`)
    .then((res) => {
      console.log(`The document with id ${id} have been deleted`)
    })
    .catch((e) => console.log(e));

  }
}
