class APIHandler {
    constructor(baseUrl) {
        this.BASE_URL = baseUrl;
        this.api = axios.create({
            baseURL: baseUrl,
        });
    }

    getFullList() {
        return this.api.get('/characters');
    }

    getOneRegister(id) {
        return this.api.get(`/characters/${id}`);
    }

    createOneRegister(data) {
        return this.api.post('/characters', data);
    }

    updateOneRegister(id, data) {
        return this.api.put(`/characters/${id}`, data);
    }

    deleteOneRegister(id) {
        return this.api.delete(`/characters/${id}`);
    }
}
