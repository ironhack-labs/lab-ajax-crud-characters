class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  showCharacter (character){
      const newCharacterHtml = `
      <div class= "character-info>

        <div class="id">id:${character.id}</div>
        <div class="name">${character.name}</div>
        <div class="occupation">${character.occupation}</div>
        <div class="cartoon">${character.cartoon}</div>
        <div class="weapon">${character.weapon}</div>
        
      </div>
      `;
      document.getElementById("character-box").innerHTML += newCharacterHtml;
  }

  getFullList () {
    axios.get(`${this.BASE_URL}/characters`)
    .then(res => res.data)
    .then(data => {
        console.log(data);
        document.getElementById("character-box").innerHTML = '';
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
