class APIHandler {
	constructor(baseUrl) {
		this.BASE_URL = baseUrl;
		this.COLLECTION = 'characters/';
	}

	getFullList() {
		axios.get(`${this.BASE_URL}${this.COLLECTION}`)
		.then(res => console.log(res.data))
		.catch(err => console.log(err))
	}

	getOneRegister(id) {
		axios.get(`${this.BASE_URL}${this.COLLECTION}/${id}`)
		.then(res => console.log(res.data))
		.catch(err => console.log(err))
	}

	createOneRegister(character) {
		axios.post(`${this.BASE_URL}${this.COLLECTION}`, character)
		.then(res => console.log(res))
		.catch(err => console.log(err))
	}

	updateOneRegister(id, characterToUpdate) {
		axios.put(`${this.BASE_URL}${this.COLLECTION}/${id}`, characterToUpdate)
		.then(res => console.log(res))
		.catch(err => console.log(err))
	}

	deleteOneRegister(id) {
		axios.delete(`${this.BASE_URL}${this.COLLECTION}/${id}`)		
		.then(res => console.log(res))
		.catch(err => console.log(err))
	}
}