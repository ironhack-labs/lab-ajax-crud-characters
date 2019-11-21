class APIHandler {
	constructor(baseUrl) {
		this.BASE_URL = baseUrl;
		this.charactersService = axios.create({
			baseURL: baseUrl
		});
	}

	emptyContainer() {
		let container = document.querySelector('.characters-container');
		if (container.childNodes.length > 0) {
			for (let i = 0; i < container.length; i++) {
				container.removeChild(container.childNodes[i]);
			}
		}
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
		return this.charactersService.delete(`/characters/${id}`);
	}
}
