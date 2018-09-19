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