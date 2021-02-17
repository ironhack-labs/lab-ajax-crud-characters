class APIHandler {
    constructor(baseUrl) {
        this.BASE_URL = baseUrl;
    }

    getFullList() {
        axios
            .get(`${this.BASE_URL}/characters`)
            .then((response) => {
                //console.log(response.data)
                const characters = response.data
                    //Seleccionamos el contenedor donde va la info y que vamos a modificar
                const charList = document.querySelector('.character-info')
                charList.innerHTML = ''
                characters.forEach((character) => {
                    //Recorremos characters y le agregamos el html con los campos a rellenar
                    charList.innerHTML += `<div class="name">Name: ${character.name}</div>
            <div class="occupation">Occupation: ${character.occupation}</div>
            <div class="cartoon">Cartoon: ${character.cartoon}</div>
            <div class="weapon">Weapon: ${character.weapon}</div>
            <hr>`
                })
            })
            .catch(error => {
                console.log(`error getting characters due to ${error}`);
            });
    }
    getOneRegister(id) {
        // seleccionamos el valor del id del formulario
        id = document.getElementById('character-id').value
        axios
            .get(`${this.BASE_URL}/characters/${id}`)
            .then((response) => {
                //console.log(response.data)
                //Asignalmos a una constate los datos recibidos
                const singleCharacter = response.data
                    //cambio la clase a opertion2 para que no sea igual que la otra y le inserto el html nuevo
                const charList1 = document.querySelector('.operation2')
                charList1.innerHTML += `<div class="name">Name: ${singleCharacter.name}</div>
            <div class="occupation">Occupation: ${singleCharacter.occupation}</div>
            <div class="cartoon">Cartoon: ${singleCharacter.cartoon}</div>
            <div class="weapon">Weapon: ${singleCharacter.weapon}</div>`
            })
            .catch(error => {
                console.log(`error getting single character due to ${error}`);
            });
    }
    createOneRegister() {
        //Añadimos un id al html para utilizarlo ahora
        const name = document.getElementById(`nameAdd`).value;
        const occupation = document.getElementById(`occupationAdd`).value;
        const weapon = document.getElementById(`weaponAdd`).value;
        const cartoon = document.getElementById(`cartoonAdd`).value;
        axios
            .post(`${this.BASE_URL}/characters`, {
                name,
                occupation,
                weapon,
                cartoon
            })
            .then(response => {
                this.getFullList()
            })
            .catch(error => {
                console.log(`error creating user due to: ${error}`);
            });
    }
    updateOneRegister() {
        const id = document.getElementById(`idUpdate`).value;
        const name = document.getElementById(`nameUpdate`).value;
        const occupation = document.getElementById(`occupationUpdate`).value;
        const cartoon = document.getElementById(`cartoonUpdate`).value;
        const weapon = document.getElementById(`weaponUpdate`).value;
        axios
            .put(`${this.BASE_URL}/characters/${id}`, {
                name,
                occupation,
                cartoon,
                weapon
            })
            .then(response => {
                this.getFullList();
            })
            .catch(error => {
                console.log(`error updating characters due to ${error}`);
            });
    }
    deleteOneRegister(id) {
        id = document.getElementById(`idDelete`).value;
        axios
            .delete(`${this.BASE_URL}/characters/${id}`)
            .then(response => {
                this.getFullList();
            })
            .catch(error => {
                console.log(`error deleting due to: ${error}`);
            });
    }
}