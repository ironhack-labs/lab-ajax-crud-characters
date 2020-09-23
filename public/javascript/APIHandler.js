class APIHandler {
    constructor(baseUrl) {
        this.BASE_URL = baseUrl;
    }

    async getFullList() {
        const data = await axios
            .get('http://localhost:8000/characters')
            .then((res) => res.data)
            .catch((err) => console.log(err));
        return data;
    }

    async getOneRegister(id) {
        const char = await axios
            .get(`http://localhost:8000/characters/${id}`)
            .then((res) => res.data)
            .catch((err) => console.log(err));
        return char;
    }

    createOneRegister(obj) {
        axios
            .post('http://localhost:8000/characters', obj)
            .then(() => { alert(`Created ${obj.name}.`); })
            .catch((err) => console.log(err));
    }

    updateOneRegister() {

    }

    async deleteOneRegister(id) {
        const charToDelete = await axios
            .get(`http://localhost:8000/characters/${id}`)
            .then((res) => res.data)
            .catch((err) => { console.log(err); this.buttonFlag(false); });
        const confirmation = confirm(`Delete ${charToDelete.name}?`);
        if (confirmation) {
            axios
                .delete(`http://localhost:8000/characters/${id}`)
                .then(() => alert(`Deleted ${charToDelete.name}.`))
                .catch((err) => { console.log(err); this.buttonFlag(false); });
            this.buttonFlag(true);
        }
    }

    buttonFlag(thruth) {
        const button = document.getElementById('delete-one');
        if (thruth) {
            button.style.backgroundColor = 'green';
            setTimeout(() => { button.style.backgroundColor = 'none'; }, 3000);
        } else {
            button.style.backgroundColor = 'red';
            setTimeout(() => { button.style.backgroundColor = 'none'; }, 3000);
        }
    }
}
