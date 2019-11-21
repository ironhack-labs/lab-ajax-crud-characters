class APIHandler {
	constructor(baseUrl) {
		this.BASE_URL = baseUrl;
		this.charactersService = axios.create({
			baseURL: baseUrl
		});
	}

	getFullList() {
		return this.charactersService.get('/characters');
	}

	getOneRegister(id) {
		return this.charactersService.get(`/characters/${id}`);
	}

	createOneRegister(name, occupation, weapon, cartoon) {
		return this.charactersService.post('/characters', { name, occupation, weapon, cartoon });
	}

	updateOneRegister(id, name, occupation, weapon, cartoon) {
		return this.charactersService.patch('characters/');
	}

	deleteOneRegister(id) {
		return this.charactersService.delete(`/characters/${id}`, { name, occupation, weapon, cartoon });
	}
}
