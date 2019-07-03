class APIHandler {
    constructor(baseUrl) {
        this.BASE_URL = baseUrl + '/characters';
    }

    getFullList() {
        return axios
            .get(this.BASE_URL)
            .then(allcharacters => {
                return allcharacters
            }).catch((err) => {
                console.log(err)
            })
    }

    getOneRegister(id) {
        return axios
            .get(`${this.BASE_URL}/?id=${id}`)
            .then(onecharacter => {
                return onecharacter
            }).catch((err) => {
                console.log(err)
            })
    }

    createOneRegister(character) {
        return axios
            .post(this.BASE_URL, character)
            .then(onecharacter => {
                return onecharacter
            }).catch((err) => {
                console.log(err)
            })
    }

    updateOneRegister(id, object) {
        return axios
            .put(`${this.BASE_URL}/${id}`, object)
            .then(onecharacter => {
                return onecharacter
            }).catch((err) => {
                console.log(err)
            })
    }

    deleteOneRegister(id) {
        return axios
            .delete(`${this.BASE_URL}/${id}`)
            .then(onecharacter => {
                return onecharacter
            }).catch((err) => {
                console.log(err)
            })
    }


}