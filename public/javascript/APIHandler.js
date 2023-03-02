class APIHandler {
  constructor (baseURL) {
    this.api = axios.create({
      baseURL: baseURL
    });
    this.BASE_URL = baseURL;
  }

  getFullList = () => {
    return this.api.get('/characters');
  };

  getOneRegister = (id) => {
    return this.api.get(`/characters/${id}`);
  }

  createOneRegister = (characterInfo) => {
    return this.api.post(`/characters`, characterInfo);
  }
  
  updateOneRegister = (id, characterInfo) => {
    return this.api.put(`/characters/${id}`, characterInfo);
  }

  deleteOneRegister = (id) => {
    return this.api.delete(`/characters/${id}`);
  }
}

