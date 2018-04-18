class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }


  showCharacter(character)  {
    const newCharacterHtml = `
        <div class="character-info" id="character-info">
        <div class="id">${character.id}</div>
        <div class="name">${character.name}</div>
        <div class="occupation">${character.occupation}</div>
        <div class="cartoon">${character.cartoon}</div>
        <div class="weapon">${character.weapon}</div>
      </div>
 `;
    document.getElementById("character-container").innerHTML += newCharacterHtml;
}
  getFullList () {
    axios.get(`${this.BASE_URL}/characters`)
        .then(res => res.data)
        .then(data => {
            console.log(data);
            document.getElementById("character-container").innerHTML = '';
            data.forEach(e => {
                this.showCharacter(e);
            })
        })
  }

  getOneRegister () {

  }

  createOneRegister () {

  }

  updateOneRegister () {

  }

  deleteOneRegister () {

  }
}
