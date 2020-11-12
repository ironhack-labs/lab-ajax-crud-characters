const charactersAPI = new APIHandler('http://localhost:8000');

function printChars(arr) {
    const $container = document.querySelector(`.characters-container`)
    $container.innerHTML = ""
    arr.forEach(element => {
        const cartoon = element.cartoon ? `Is a cartoon` : `Is not a cartoon`
        $container.innerHTML += `
          <div class="character-info">
            <div class="name">Character name: ${element.name}</div>
            <div class="occupation">Character occupation: ${element.occupation}</div>
            <div class="cartoon">${cartoon}</div>
            <div class="weapon">Character weapon: ${element.weapon}</div>
          </div>`
    })
}

window.addEventListener('load', () => {
    document.getElementById('fetch-all').addEventListener('click', async(event) => {
        event.preventDefault()
        const { data } = await charactersAPI.getFullList()
        printChars(data)
    });

    document.getElementById('fetch-one').addEventListener('click', async(event) => {
        event.preventDefault()
        const $getOne = document.querySelector(`#character-id`).value
        const { data } = await charactersAPI.getOneRegister($getOne)
        printChars([data])
    });

    document.getElementById('delete-one').addEventListener('click', async(event) => {
        event.preventDefault()
        const $deleteOne = document.querySelector(`#character-id-delete`)
        await charactersAPI.deleteOneRegister($deleteOne.value)
        $deleteOne.value = ''
        const { data } = await charactersAPI.getFullList()
        printChars(data)

    });

    document.getElementById('edit-character-form').addEventListener('submit', async(event) => {
        event.preventDefault()
        const { target } = event
        const id = target[0].value
        const name = target[1].value
        const occupation = target[2].value
        const weapon = target[3].value
        const cartoon = target[4].value
        const editedChar = { name, occupation, weapon, cartoon }
        charactersAPI.updateOneRegister(id, editedChar)
        target[0].value = ''
        target[1].value = ''
        target[2].value = ''
        target[3].value = ''
        target[4].value = ''
        const { data } = await charactersAPI.getFullList()
        printChars(data)
    });

    document.getElementById('new-character-form').addEventListener('submit', async(event) => {
        event.preventDefault()
        const { target } = event
        const name = target[0].value
        const occupation = target[1].value
        const weapon = target[2].value
        const cartoon = target[3].value
        charactersAPI.createOneRegister({ name, occupation, weapon, cartoon })
        target[0].value = ''
        target[1].value = ''
        target[2].value = ''
        target[3].value = ''
        const { data } = await charactersAPI.getFullList()
        printChars(data)
    });
});