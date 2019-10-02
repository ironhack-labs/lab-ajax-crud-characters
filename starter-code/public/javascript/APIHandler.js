class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
    this.apiClient = axios.create({ baseURL: this.BASE_URL })
  }

  getFullList () {
    this.apiClient.get('/character')
      .then(data => {
        console.log(data);        
        return data;
      })
      .catch(err => console.log(err));
  }

  getOneRegister (id) {
    return this.apiClient.get(`/character/${id}`)
  }

  createOneRegister (obj) {
    this.apiClient.post(`/character`, obj)
      .then(data => {
        console.log(data);        
        return data;
      })
      .catch(err => console.log(err));
  }

  updateOneRegister (id, obj) {
    this.apiClient.put(`/character/${id}`, obj)
      .then(data => {
        console.log(data);        
        return data;
      })
      .catch(() => "Character not found");
  }
  }

  deleteOneRegister (id) {
    this.apiClient.delete(`/character/${id}`)
      .then(() => {
        console.log("Character has been succesfully deleted");        
        return "Character has been succesfully deleted";
      })
      .catch(() => "Character not found");
  }
}
