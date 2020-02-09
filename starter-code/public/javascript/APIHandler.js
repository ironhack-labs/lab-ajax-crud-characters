class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
    this.$charactersContainer = document.querySelector('.characters-container')
  }

  getFullList = async (event) => {

    event.preventDefault()

    const { data } = await axios.get('http://localhost:8000/characters')

    this.$charactersContainer.innerHTML = ''

    data.forEach(character => {

      const characterInfo = document.createElement('div')
      characterInfo.className = 'character-info'

      const characterId = document.createElement('p')
      characterId.innerHTML = `Character ID: <span>${character.id}<span>`

      const characterName = document.createElement('p')
      characterName.className = 'name'
      characterName.innerHTML = `Character Name: <span>${character.name}<span>`

      const characterOccupation = document.createElement('p')
      characterOccupation.className = 'occupation'
      characterOccupation.innerHTML = `Character Occupation: <span>${character.occupation}<span>`

      const characterCartoon = document.createElement('p')
      characterCartoon.className = 'cartoon'
      characterCartoon.innerHTML = `Is a cartoon?: <span>${character.cartoon}<span>`

      const characterWeapon = document.createElement('p')
      characterWeapon.className = 'occupation'
      characterWeapon.innerHTML = `Character Weapon: <span>${character.weapon}<span>`


      characterInfo.appendChild(characterId)
      characterInfo.appendChild(characterName)
      characterInfo.appendChild(characterOccupation)
      characterInfo.appendChild(characterCartoon)
      characterInfo.appendChild(characterWeapon)


      this.$charactersContainer.appendChild(characterInfo)

    })

  }

  getOneRegister = async (event) => {

    event.preventDefault()

    const characterId = document.querySelector('input[name="character-id"]').value

    const character = await axios.get(`http://localhost:8000/characters/${characterId}`)

    this.createOneRegister(character.data)

  }

  createOneRegister (character) {

    this.$charactersContainer.innerHTML = ''

    const characterInfo = document.createElement('div')
    characterInfo.className = 'character-info'

    const characterId = document.createElement('p')
    characterId.innerHTML = `Character ID: <span>${character.id}<span>`

    const characterName = document.createElement('p')
    characterName.className = 'name'
    characterName.innerHTML = `Character Name: <span>${character.name}<span>`

    const characterOccupation = document.createElement('p')
    characterOccupation.className = 'occupation'
    characterOccupation.innerHTML = `Character Occupation: <span>${character.occupation}<span>`

    const characterCartoon = document.createElement('p')
    characterCartoon.className = 'cartoon'
    characterCartoon.innerHTML = `Is a cartoon?: <span>${character.cartoon}<span>`

    const characterWeapon = document.createElement('p')
    characterWeapon.className = 'occupation'
    characterWeapon.innerHTML = `Character Weapon: <span>${character.weapon}<span>`


    characterInfo.appendChild(characterId)
    characterInfo.appendChild(characterName)
    characterInfo.appendChild(characterOccupation)
    characterInfo.appendChild(characterCartoon)
    characterInfo.appendChild(characterWeapon)


    this.$charactersContainer.appendChild(characterInfo)

  }

  updateOneRegister () {

  }

  deleteOneRegister () {

  }
}
