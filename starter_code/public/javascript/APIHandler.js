class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList () {
    axios .get(`${this.BASE_URL}`)
          .then(res => showAll(res.data));
  }

  createOneRegister (obj) {
    axios .post(`${this.BASE_URL}`, obj)
          .then(res => created());
  }

  readOneRegister (id) {
    axios .get(`${this.BASE_URL}${id}`)
          .then(res => showOne(res.data));
  }

  updateOneRegister (id, obj) {
    axios .patch(`${this.BASE_URL}${id}`, obj)
          .then(res => updated());
  }

  deleteOneRegister (id) {
    axios .delete(`${this.BASE_URL}${id}`)
          .then(res => deleted());
  }

}