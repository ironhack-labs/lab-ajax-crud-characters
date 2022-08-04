class APIHandler {
	constructor(baseUrl) {
		this.BASE_URL = baseUrl;
		this.api = axios.create({
			baseURL: this.BASE_URL,
		});
		console.log(this.api);
	}

  getFullList () {
    return this.api.get('/characters');
  }

  getOneRegister (id) {
    return this.api.get(`/characters/${id}`)
  }

  createOneRegister (characterData) {
    return this.api.post('/character', characterData)
  }

  updateOneRegister (id, updatedInfo) {
    return this.api.put(`/characters/${id}`, updatedInfo)
  }

  deleteOneRegister (id) {
    return this.api.delete('/character', id)
  }
}