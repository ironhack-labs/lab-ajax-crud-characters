class APIHandler {
	constructor(baseUrl) {
		this.api = axios.create({ baseURL: baseUrl });
		this.BASE_URL = baseUrl;
	}

	getFullList() {
		return this.api
			.get('/characters')
			.then((response) => {
				console.log('Retrieving all characters');
				return response.data;
			})
			.catch(() => {
				console.log('Something went wrong, there are no characters');
				return 'Something went wrong, there are no characters';
			});
	}

	getOneRegister(id) {
		return this.api
			.get(`/characters/${id}`)
			.then((response) => {
				console.log('Character FOUND by ID');
				return response.data;
			})
			.catch(() => {
				console.log('Character NOT found by ID');
				return 'Character not found by ID';
			});
	}

	createOneRegister(newCharacter) {
		return this.api.post('/characters', newCharacter).then(() => {
			console.log('New character created');
		});
	}

	updateOneRegister(id, editedCharacter) {
		return this.api
			.put(`${this.BASE_URL}/characters/${id}`, editedCharacter)
			.then(() => {
				console.log('Character has been successfully updated');
				return 'Character has been successfully updated';
			})
			.catch(() => 'Character not found');
	}

	deleteOneRegister(id) {
		return this.api
			.delete(`/characters/${id}`)
			.then(() => {
				console.log('Character has been successfully deleted');
				return 'Character has been successfully deleted';
			})
			.catch(() => 'Character not found');
	}
}

// Arrow functions no haría falta el return, ya que devuelven return | temario
// getFullList = () => this.api.get('/characters');
// getOneRegister = (id) => this.api.get(`/characters/${id}`);
// createOneRegister = (newCharacter) => this.api.post(`/characters`, newCharacter);
// updateOneRegister = (id, editedCharacter) => this.api.put(`/characters/${id}`, editedCharacter);
// deleteOneRegister = (id) => this.api.delete(`/characters/${id}`);
