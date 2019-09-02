export class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
    this.handler = axios.create({
      BASE_URL: this.BASE_URL
    });
  }

  getFullList() {
    return this.handler.get();
    // .then(APIres => console.log(APIres))
    // .catch(err => console.log(err));
  }

  getOneRegister(id) {
    this.handler
      .get(id)
      .then(APIres => console.log(APIres))
      .catch(err => console.log(err));
  }

  createOneRegister(id) {
    this.handler
      .post(id)
      .then(APIres => console.log(APIres))
      .catch(err => console.log(err));
  }

  updateOneRegister(id, modification) {
    this.handler
      .patch(id, modification)
      .then(APIres => console.log(APIres))
      .catch(err => console.log(err));
  }

  deleteOneRegister(id) {
    this.handler
      .delete(id)
      .then(APIres => console.log(APIres))
      .catch(err => console.log(err));
  }
}
