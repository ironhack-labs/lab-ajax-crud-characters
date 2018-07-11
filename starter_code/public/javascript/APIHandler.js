/////////////////////////////////////////////
//
//  API Configuration for ih crud api
//
/////////////////////////////////////////////
const initAxios = function (url) {
  axios({
    method: 'get',
    url: url,
    params: ''
  })
  return ihApi = axios.create({
    baseURL: url
  })
}
//////////////////////////////////////////////

class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
    this.api = initAxios(this.BASE_URL);
  }

  getFullList() {
    return this.api.get('');
  }

  getOneRegister(id) {
    return this.api.get(id)
  }

  createOneRegister(newCharacter) {
    return this.api.post('',newCharacter)
  }

  updateOneRegister(id, newCharacter) {
    return this.api.put(id, newCharacter)
  }

  deleteOneRegister(id) {
    return this.api.delete(id)
  }
}
