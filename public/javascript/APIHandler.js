class APIHandler {
	constructor(baseUrl) {
		this.BASE_URL = baseUrl;
	}

	async getFullList() {
		try {
			const response = await axios.get(`${this.BASE_URL}/characters/`);
			const data = response.data;
			console.log(data);
			return data;
		} catch (err) {
			console.log(err);
		}
	}

	async getOneRegister(characterId) {
		try {
			console.log(characterId);
			const response = await axios.get(
				`${this.BASE_URL}/characters/${characterId}`
			);
			const data = response.data;
			console.log(data);
			return data;
		} catch (err) {
			console.log(err);
		}
	}

	async createOneRegister(characterObject) {
		try {
			console.log(characterObject);
			const response = await axios.post(
				`${this.BASE_URL}/characters`,
				characterObject
			);
			const data = response.data;
			console.log(data);
			return data;
		} catch (err) {
			console.log(err);
			return err;
		}
	}

	async updateOneRegister(characterObject) {
		try {
			console.log(characterObject);
			const response = await axios.put(
				`${this.BASE_URL}/characters/${characterObject.id}`,
				characterObject
			);
			const data = response.data;
			console.log(data);
			return data;
		} catch (err) {
			console.log(err);
			return err;
		}
	}

	async deleteOneRegister(characterId) {
		try {
			console.log(characterId);
			await axios.delete(`${this.BASE_URL}/characters/${characterId}`);
			return true;
		} catch (err) {
			console.log(err);
			return err;
		}
	}
}
