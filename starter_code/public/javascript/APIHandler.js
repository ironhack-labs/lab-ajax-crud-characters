class APIHandler {
	constructor(baseUrl) {
		this.BASE_URL = baseUrl;
		this.COLLECTION = 'characters/';
	}

	getFullList() {
		const data = axios.get(`${this.BASE_URL}${this.COLLECTION}`)
			.then(res => { return res.data })
			.catch(err => {	return err })

		return data;
	}

	getOneRegister(id) {
		const data = axios.get(`${this.BASE_URL}${this.COLLECTION}${id}`)
			.then(res => { return res.data })
			.catch(err => { return err })

		return data;
	}

	createOneRegister(character) {
		const data = axios.post(`${this.BASE_URL}${this.COLLECTION}`, character)
			.then(res => { return res.data })
			.catch(err => { return err })
		
		return data;
	}

	updateOneRegister(id, characterToUpdate) {
		const data = axios.put(`${this.BASE_URL}${this.COLLECTION}${id}`, characterToUpdate)
			.then(res => { return res.data })
			.catch(err => { return 'Character not found' })

		return data;
	}

	deleteOneRegister(id) {
		const data = axios.delete(`${this.BASE_URL}${this.COLLECTION}${id}`)		
			.then(res => { return 'Character has been successfully deleted' })
			.catch(err => { return 'Character not found' })
	}
}