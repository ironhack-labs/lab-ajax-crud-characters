'use strict';

class APIHandler {
    constructor(baseUrl) {
        this.BASE_URL = 'https://ih-crud-api.herokuapp.com/characters';
    }

    getFullList() {
        axios
            .get(this.BASE_URL)
            .then(response => this.renderCharactersCards(response.data))
            .catch(error => console.log(error));
    }

    getOneRegister(registerId) {
        axios
            .get(`${this.BASE_URL}/${registerId}`)
            .then(response => this.renderCharactersCards(response.data))
            .catch(error => console.log(error));
    }

    createOneRegister(characterInfo, submit_button) {
        axios
            .post(this.BASE_URL, characterInfo)
            .then(response => console.log(response.data),
                this.changeButtonColor(submit_button, 'green')
            )
            .catch(error => console.log(error),
                this.changeButtonColor(submit_button, 'red')
            );
    }

    updateOneRegister(registerId, updateInfo, submit_button) {
        axios
            .patch(`${this.BASE_URL}/${registerId}`, updateInfo)
            .then(response => console.log(response.data),
                this.changeButtonColor(submit_button, 'green')
            )
            .catch(error => console.log(error),
                this.changeButtonColor(submit_button, 'red')
            );
    }

    deleteOneRegister(registerId, submit_button) {
        axios
            .delete(`${this.BASE_URL}/${registerId}`)
            .then(this.changeButtonColor(submit_button, 'green'))
            .catch(error => console.log(error),
                this.changeButtonColor(submit_button, 'red')
            );
    }

    renderCharactersCards(data) {
        if (data.length !== undefined) {
            data.forEach(character => {
                console.log(character);
            });
        } else {
            let name = document.getElementsByClassName('name')[0].innerHTML;
            document.getElementsByClassName('name')[0].innerHTML = name + data.name;
            // document.getElementsByClassName('name')[0].innerHTML = `${name}: ${data.name}`;
        }

        console.log(data);
    }

    changeButtonColor(btn, color) {
        btn.style.backgroundColor = color;
    }
}
