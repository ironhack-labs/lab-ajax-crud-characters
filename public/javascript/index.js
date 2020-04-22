const charactersAPI = new APIHandler('http://localhost:8000');

window.addEventListener('load', () => {



    document.getElementById('fetch-all').addEventListener('click', function (event) {

        event.preventDefault()

        apiMethods.getFullList()
            .then(fullList => {
                let charactersContainer = document.querySelector(".characters-container")
                for (let index = 130; index < 151; index++) {
                    console.log(fullList[index])
                    const element = document.createElement("div")
                    element.className = "character-info"
                    element.innerHTML = `
                        <div class="name">Character Name: ${fullList[index].name}</div>
                        <div class="occupation">Character Occupation: ${fullList[index].occupation}</div>
                        <div class="cartoon">Is a Cartoon? ${fullList[index].cartoon}</div>
                        <div class="weapon">Character Weapon: ${fullList[index].weapon}</div>
                    `
                    charactersContainer.appendChild(element)
                }
            })
    });

    document.getElementById('fetch-one').addEventListener('click', function (event) {

        event.preventDefault()

        const id = document.querySelector("#characterIDInput").value

        apiMethods.getOneRegister(id)
            .then(foundRegister => {
                let charactersContainer = document.querySelector(".characters-container")
                charactersContainer.innerHTML = `
                    <div class="character-info">
                            <div class="name">Character Name: ${foundRegister.name}</div>
                            <div class="occupation">Character Occupation: ${foundRegister.occupation}</div>
                            <div class="cartoon">Is a Cartoon? ${foundRegister.cartoon}</div>
                            <div class="weapon">Character Weapon: ${foundRegister.weapon}</div>
                        </div> 
                `
                let editCharacterInfoContainer = document.querySelector('#edit-character-form')
                editCharacterInfoContainer.innerHTML = `
                    <div class="field">
                        <label for="id">ID: </label>
                        <input type="text" name="chr-id" value="${foundRegister.id}">
                    </div>
                    <div class="field">
                        <label for="name">Name: </label>
                        <input type="text" name="name" value="${foundRegister.name}">
                    </div>
                    <div class="field">
                        <label for="occupation">Occupation: </label>
                        <input type="text" name="occupation" value="${foundRegister.occupation}">
                    </div>
                    <div class="field">
                        <label for="weapon">Weapon: </label>
                        <input type="text" name="weapon" value="${foundRegister.weapon}">
                    </div>
                    <div class="field">
                        <label for="cartoon">Is a Cartoon: </label>
                        <input name="cartoon" type="checkbox" value="${foundRegister.cartoon}">
                    </div>
                    <button id="send-data">Update</button>
        `
            })
            .catch(error => console.log(error))

    });

    document.getElementById('delete-one').addEventListener('click', function (event) {

        event.preventDefault()

        let idToDelete = document.querySelector('.operation.delete input').value

        apiMethods.getOneRegister(idToDelete)
            .then(foundObject => {
                apiMethods.deleteOneRegister(foundObject)
                    .then(deletedObject => console.log("Objeto Borrado!", deletedObject))
                    .catch(error => console.log(error))
            })
            .catch(error => console.log(error))



    });

    document.getElementById('edit-character-form').addEventListener('submit', function (event) {

        event.preventDefault()

        let editCharacterInfo = document.querySelectorAll('#edit-character-form input')

        const objectToUpdate = {
            id: editCharacterInfo[0].value,
            name: editCharacterInfo[1].value,
            occupation: editCharacterInfo[2].value,
            weapon: editCharacterInfo[3].value,
            cartoon: editCharacterInfo[4].value,
        }

        apiMethods.updateOneRegister(objectToUpdate)
            .then(updatedObject => {
                // document.querySelector("#edit-character-form").reset() // No hemos podido utilizar este método porque daba error, asi que hemos utilizado un foreach instead      
                editCharacterInfo.forEach(element => element.value = "")
                apiMethods.getOneRegister(updatedObject.id)
                    .then(foundObject => {
                        let charactersContainer = document.querySelector(".characters-container")
                        charactersContainer.innerHTML = `
                        <div class="character-info">
                            <div class="name">Character Name: ${foundObject.name}</div>
                            <div class="occupation">Character Occupation: ${foundObject.occupation}</div>
                            <div class="cartoon">Is a Cartoon? ${foundObject.cartoon}</div>
                            <div class="weapon">Character Weapon: ${foundObject.weapon}</div>
                        </div> 
                        `
                    })
                    .catch(error => console.log(error))
            })
            .catch(error => console.log(error))

    });

    document.getElementById('new-character-form').addEventListener('submit', function (event) {

        event.preventDefault()

        let createCharacterInfo = document.querySelectorAll('#new-character-form input')

        const cartoon = createCharacterInfo[3].value === "on" ? true : false

        const objectToCreate = {
            name: createCharacterInfo[0].value,
            occupation: createCharacterInfo[1].value,
            weapon: createCharacterInfo[2].value,
            cartoon: cartoon,
        }
        console.log(objectToCreate)

        apiMethods.createOneRegister(objectToCreate)
            .then(createdObject => {
                console.log(createdObject)
                // document.querySelector("#edit-character-form").reset() // No hemos podido utilizar este método porque daba error, asi que hemos utilizado un foreach instead      
                createCharacterInfo.forEach(element => element.value = "")
                apiMethods.getOneRegister(createdObject.id)
                    .then(foundObject => {
                        let charactersContainer = document.querySelector(".characters-container")
                        charactersContainer.innerHTML = `
                        <div class="character-info">
                            <div class="name">Character Name: ${foundObject.name}</div>
                            <div class="occupation">Character Occupation: ${foundObject.occupation}</div>
                            <div class="cartoon">Is a Cartoon? ${foundObject.cartoon}</div>
                            <div class="weapon">Character Weapon: ${foundObject.weapon}</div>
                        </div> 
                        `
                    })
                    .catch(error => console.log(error))
            })
            .catch(error => console.log(error))

    });
});


