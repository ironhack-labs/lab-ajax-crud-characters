/////////////////////////////////////////////
//
//  API Configuration for ih crud api
//
/////////////////////////////////////////////

const initAxios = function () {
  const baseUrl = 'https://ih-crud-api.herokuapp.com/characters';
  axios({
    method: 'get',
    url: baseUrl,
    params: ''
  })
  return ihApi = axios.create({
    baseURL: baseUrl
  })
}
//////////////////////////////////////////////

class APIHandler {
  constructor() {
    this.api = initAxios();
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
