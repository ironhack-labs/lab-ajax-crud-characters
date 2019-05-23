const newCharacterInputs = document.querySelectorAll('#character-form input')
const updateCharacterInputs = document.querySelectorAll('#update-form input')

document.getElementById('character-form').onsubmit = e => {

    e.preventDefault()

    const character = {
        name: newCharacterInputs[0].value,
        occupation: newCharacterInputs[1].value,
        weapon: newCharacterInputs[2].value
    }

    axios.post('https://ih-crud-api.herokuapp.com/characters/', character)
        .then(response => {
            const { id, name, occupation } = response.data

            const listPoint = `<li>Personaje ${name} con ID ${id} (trabaja como ${occupation})</li>`
            document.getElementById('characters-list').innerHTML += listPoint

            newCharacterInputs.forEach(input => input.value = "")
        })
        .catch(error => console.log('¡ops! error:', error))
}





document.getElementById('getButton').onclick = () => {

    const characterId = document.getElementById('theCharId').value

    axios.get(`https://ih-crud-api.herokuapp.com/characters/${characterId}`)
        .then(response => {
            const { id, name, occupation, weapon } = response.data
            updateCharacterInputs[0].value = name
            updateCharacterInputs[1].value = occupation
            updateCharacterInputs[2].value = weapon
            updateCharacterInputs[3].value = id
        })
}







document.getElementById('update-form').onsubmit = e => {

    e.preventDefault()

    const characterId = updateCharacterInputs[3].value

    const updatedCharacter = {
        name: updateCharacterInputs[0].value,
        occupation: updateCharacterInputs[1].value,
        weapon: updateCharacterInputs[2].value
    }

    axios.put(`https://ih-crud-api.herokuapp.com/characters/${characterId}`, updatedCharacter)
        .then(response => {
            document.getElementById('update-result').innerHTML = `Personaje ${response.data.name} actualizado`
        })
        .catch(error => console.log('¡ops! error:', error))

    updateCharacterInputs.forEach(input => input.value = "")
}
