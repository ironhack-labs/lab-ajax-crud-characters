export default class APIHandler {

  constructor (baseURL, ressource) {
    this.targetRessource = ressource;
    this.api = axios.create({
      baseURL : baseURL
    });
  }

  getFullList(clbk) {
    this.api.get(`/${this.targetRessource}`)
    .then(apiRes => clbk(apiRes.data))
    .catch(apiErr => clbk({err: apiErr}));
  }

  getOneRegister(clbk, id) {
    this.api.get(`/${this.targetRessource}/${id}`)
    .then(apiRes => clbk(apiRes.data))
    .catch(apiErr => clbk({err: apiErr}));
  }

  createOneRegister(clbk, payload) {
    this.api.post(`/${this.targetRessource}`, payload)
    .then(apiRes => clbk(apiRes.data))
    .catch(apiErr => clbk({err: apiErr}));
  }

  updateOneRegister(clbk, payload) {
    this.api.patch(`/${this.targetRessource}/${payload.id}`, payload)
    .then(apiRes => clbk(apiRes.data))
    .catch(apiErr => clbk({err: apiErr}));
  }

  deleteOneRegister(clbk, id) {
    this.api.delete(`/${this.targetRessource}/${id}`)
    .then(apiRes => clbk(apiRes.data))
    .catch(apiErr => clbk(apiErr))
  }
}

