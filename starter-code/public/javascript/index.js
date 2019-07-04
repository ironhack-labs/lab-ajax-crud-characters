const charactersAPI = new APIHandler("http://localhost:8000/characters")

$(document).ready(() => {
    document.getElementById('fetch-all').onclick = function(e) {
        e.preventDefault()

        charactersAPI.getFullList()
            .then(data => {
                console.log(data)

                const chars = document.querySelector('.characters-container')
                data.array.forEach(element => {
                    const newDiv = document.createElement('div');
                    newDiv.style.classList.toggle('character-info')
                    newDiv.innerHTML = `<div class="character-info">
                    <div class="name">${element.name}</div>
                    < div class = "occupation" > ${
                      element.occupation
                    } < /div>
                    < div class = "cartoon" > ${element.cartoon}
                    </div>
                    <div class = "weapon" > ${element.weapon}
   < /div>
                </div>`
                    chars.
                })
                document.querySelector('.name').innerHTML = `
        <div class="name">Character Name: ${data[0].name}</div>`
            })
            .catch(err => console.log(err))
    }

    document.getElementById('fetch-one').onclick = function(e) {
        e.preventDefault()

        const id = document.querySelector('#character-id').value
        charactersAPI.getOneRegister(id)
            .then(data => {
                console.log(data)
            })
            .catch(err => {
                console.log(err)
            })
    }
    document.getElementById('delete-one').onclick = function(e) {
        e.preventDefault()

        const id = document.querySelector('#deleteById').value
        charactersAPI.deleteOneRegister(id)
            .then(() => {
                console.log('deleted one character')
            })
            .catch(err => {
                console.log(err)
            })
    }
    document.getElementById('edit-character-form').onsubmit = function(e) {
        e.preventDefault()

        const id = document.querySelector('#edit-id').value
        const name = document.querySelector('#edit-name').value
        const occupation = document.querySelector('#edit-occupation').value
        const weapon = document.querySelector('#edit-weapon').value
        const cartoon = document.querySelector('#edit-checkbox').checked


        const character = {
            name,
            occupation,
            weapon,
            cartoon
        }
        charactersAPI.updateOneRegister(id, character)
            .then(data => {
                console.log("las quesadillas ni de pedllevan queso Alex  NEvERRRR")
            })
            .catch(err => {
                console.log(err)
            })
    }
    document.getElementById('new-character-form').onsubmit = function(e) {
        e.preventDefault()
        const name = document.querySelector('#create-name').value
        const occupation = document.querySelector('#create-occupation').value
        const weapon = document.querySelector('#create-weapon').value
        const cartoon = document.querySelector('#cartoon-checkbox').checked

        const character = {
            name,
            occupation,
            weapon,
            cartoon
        }
        charactersAPI.createOneRegister(character)
            .then(data => {
                console.log("Created character")
            })
            .catch(err => {
                console.log(err)
            })
    }
}) 
