class APIHandler {
	constructor(baseUrl) {
		// this.BASE_URL = baseUrl;
		// "http://localhost:8000"
		this.service = axios.create({
			baseURL: baseUrl,
		});
	}
	getFullList() {
		return this.service.get('/characters');
	}
	getOneRegister() {}
	createOneRegister() {}
	updateOneRegister() {}
	deleteOneRegister() {}
}
