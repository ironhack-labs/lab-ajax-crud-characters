export default class APIHandler {
  // constructor (baseUrl, ressource) {
  //   // this.BASE_URL = baseUrl;

  constructor (baseURL, ressource) {
    this.targetRessource = ressource;
    this.api = axios.create({
      baseURL
    });
  }

  getFullList (callbk) {
    this.api.get(`/${this.targetRessource}`)
    .then(apiRes => callbk(apiRes.data))
    .catch(apiErr => callbk({err: apiErr}));
  }

  getOneRegister (callbk,id) {
    this.api.get(`/${this.targetRessource}/${id}`)
    .then(apiRes => callbk(apiRes.data))
    .catch(apiErr => callbk({err: apiErr}));
  }

  createOneRegister (callbk,chObj) {
    this.api.post(`/${this.targetRessource}`,chObj)
    .then(apiRes => callbk(apiRes.data))
    .catch(apiErr => callbk({err: apiErr}));
  }

  updateOneRegister (callbk,chObj) {
    this.api.patch(`/${this.targetRessource}/${chObj.id}`,chObj)
    .then(apiRes => callbk(apiRes.data))
    .catch(apiErr => callbk({err: apiErr}));
  }

  deleteOneRegister (callbk,id) {
    this.api.delete(`/${this.targetRessource}/${id}`)
    .then(apiRes => callbk(apiRes.data))
    .catch(apiErr => callbk({err: apiErr}));
  }
}
