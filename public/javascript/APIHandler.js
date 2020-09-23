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

    createOneRegister(data) {
        const buttonID = 'send-data create';
        axios
            .post('http://localhost:8000/characters', data)
            .then(() => { this.buttonFlag(true, buttonID); alert(`Created ${data.name}.`); })
            .catch((err) => { this.buttonFlag(false, buttonID); console.log(err); });
    }

    updateOneRegister(id, data) {
        const buttonID = 'send-data edit';
        axios
            .put(`http://localhost:8000/characters/${id}`, data)
            .then(() => { this.buttonFlag(true, buttonID); alert(`Edited ${data.name}`); })
            .catch((err) => { this.buttonFlag(false, buttonID); console.log(err); });
    }

    async deleteOneRegister(id) {
        const buttonID = 'delete-one';
        const charToDelete = await axios
            .get(`http://localhost:8000/characters/${id}`)
            .then((res) => res.data)
            .catch((err) => { this.buttonFlag(false, buttonID); console.log(err); });
        const confirmation = confirm(`Delete ${charToDelete.name}?`);
        if (confirmation) {
            axios
                .delete(`http://localhost:8000/characters/${id}`)
                .then(() => alert(`Deleted ${charToDelete.name}.`))
                .catch((err) => { this.buttonFlag(false, buttonID); console.log(err); });
            this.buttonFlag(true, buttonID);
        }
    }

    buttonFlag(thruth, domID) {
        const button = document.getElementById(domID);
        if (thruth) {
            button.style.backgroundColor = 'green';
        } else {
            button.style.backgroundColor = 'red';
        }
    }

    domLoop(data) {
        const parent = document.getElementById('parent');
        parent.innerHTML = '';
        data.forEach((char) => {
            parent.innerHTML += `
                <div class="character-info">
                    <div class="id">ID: ${char.id}</div>
                    <div class="name">Name: ${char.name}</div>
                    <div class="occupation">Occupation: ${char.occupation}</div>
                    <div class="cartoon">Is a Cartoon? ${char.cartoon}</div>
                    <div class="weapon">Weapon: ${char.weapon}</div>
                </div>`;
        });
    }

    refresh() {
        /* const deleteButton = document.getElementById('delete-one');
        const editButton = document.getElementById('send-data edit');
        const createButton = document.getElementById('send-data create'); */
        setTimeout(async () => {
            const parent = document.getElementById('parent');
            parent.innerHTML = '';
            this.domLoop(await this.getFullList());
            document.getElementById('delete-one').style.backgroundColor = 'none';
            document.getElementById('send-data edit').style.backgroundColor = 'none';
            document.getElementById('send-data create').style.backgroundColor = 'none';
            /* deleteButton.style.backgroundColor = 'none';
            editButton.style.backgroundColor = 'none';
            createButton.style.backgroundColor = 'none'; */
        }, 3000);
    }
}
