class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

/* 
<div class="characters-container">
      <div class="character-info">
        <div class="name">Character Name</div>
        <div class="occupation">Character Occupation</div>
        <div class="cartoon">Is a Cartoon?</div>
        <div class="weapon">Character Weapon</div>
      </div>
    </div>
*/

  buildCharacterBox(character){
    let charInfo = document.createElement('div')
    charInfo.className = 'character-info'
    charInfo.innerHTML = `
        <div class="name">Name:${character.name}</div>
        <div class="occupation">Occupation:${character.occuputation}</div>
        <div class="cartoon>Cartoon:${character.cartoon}</div>
        <div class="weapon>Weapon:${charInfo.weapon}</div>
    `
    document.querySelector('.characters-container').append(charInfo)

  }
  getFullList () {
    axios
    .get(`${this.BASE_URL}/characters`)
    .then(({data}) => {
      data.forEach(character => this.buildCharacterBox(character))
    })
    .catch(error => console.log(error))
  }

  getOneRegister (idCharacter) {
    axios.get(`${this.BASE_URL}/character/${idCharacter}`)
    .then(({data}) => this.buildCharacterBox(data))
    .catch((error) => console.log(error))
  }

  createOneRegister (character) {
    axios
    .post(`${this.BASE_URL}/characters`,character)
    .then(({data}) => console.log(data))
    .catch(error => console.log(error))
  }

  updateOneRegister (character) {
    const  {id} =character
    axios.patch(`${this.BASE_URL}/characters/${id}`,character)
    .then(({data})=>this.getFullList())
    .catch(error=>console.log(error))

  }

  deleteOneRegister (idCharacter) {
    axios.delete(`${this.BASE_URL}/characters/${idCharacter}`)
    .then(({data})=>this.buildCharacterBox(data))
    .catch(error=>console.log(error))

  }
}