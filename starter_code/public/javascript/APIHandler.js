class APIHandler {
	constructor(baseUrl) {
		this.BASE_URL = baseUrl;
		this.COLLECTION = 'characters/';
	}

	getFullList() {
		return axios.get(`${this.BASE_URL}${this.COLLECTION}`)
			.then(res => { return res.data })
			.catch(err =>  { throw new Error() })
	}

	getOneRegister(id) {
		return axios.get(`${this.BASE_URL}${this.COLLECTION}${id}`)
			.then(res => { return res.data })
			.catch(err => { throw new Error() })
	}

	createOneRegister(character) {
		return axios.post(`${this.BASE_URL}${this.COLLECTION}`, character)
			.then(res => { return res.data })
			.catch(err => { throw new Error() })
	}

	updateOneRegister(id, characterToUpdate) {
		return axios.put(`${this.BASE_URL}${this.COLLECTION}${id}`, characterToUpdate)
			.then(res => { return res.data })
			.catch(err => { throw new Error() })
	}

	deleteOneRegister(id) {
		return axios.delete(`${this.BASE_URL}${this.COLLECTION}${id}`)		
			.then(res => { return res.data })
			.catch(err => { throw new Error() })
	}
}