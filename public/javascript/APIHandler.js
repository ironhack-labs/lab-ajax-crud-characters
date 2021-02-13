class APIHandler {
    constructor(baseUrl) {
        this.BASE_URL = baseUrl;
    }

    getFullList() {
        axios
            .get(`${this.BASE_URL} / characters`)
            .then((response) => {
                console.log(response.data)
            })
            .catch((e) => showPopup(e))
    }

    getOneRegister(id) {
        axios
            .get(`${this.BASE_URL} / characters/ ${id}`)
            .then((response) => {
                console.log(response.data)
            })

    }

    createOneRegister(data) {
        axios
            .post(`${this.BASE_URL} / characters`, data)
            .then((response) => {
                console.log(response.data)
            })
            .catch((e) => showPopup(e))
    }

    updateOneRegister(data, id) {
        axios
            .put(`${this.BASE_URL} / characters/ ${id}`, data)
            .then((response) => {
                console.log(response.data)
            })
            .catch((e) => showPopup(e))

    }

    deleteOneRegister(id) {
        axios
            .delete(`${this.BASE_URL} / characters/ ${id}`)
            .then((response) => {
                console.log(response.data)
            })
            .catch((e) => showPopup(e))

    }
}