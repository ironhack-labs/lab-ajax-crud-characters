//////////iteration 2////////////
class APIHandler {
  constructor(baseUrl) {
    this.service = axios.create({ baseURL: baseUrl });
  }

  getFullList() {
    return this.service.get('/characters');
  }

  getOneRegister(id) {
    return this.service.get('/characters/' + id);
  }

  createOneRegister(data) {
    return this.service.post('/characters', data);
  }

  updateOneRegister(id, data) {
    return this.service.patch('/characters/' + id, data);
  }

  deleteOneRegister(id) {
    return this.service.delete('/characters/' + id);
  }
}
