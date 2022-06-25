class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }
buildCharacterBox(character){
let charInfo = document.createElement('div');
charInfo.className = "characters-info";
charInfo.innerHTML = `
<div class="name">Id:${character.id}</div>        
<div class="name">Name:${character.name}</div>
        <div class="occupation">Occupation:${character.occupation}</div>
        <div class="cartoon">Cartoon:${character.cartoon}</div>
        <div class="weapon">Weapon:${character.weapon}</div>
      `;
      document.querySelector(".characters-container").append(charInfo);
}
  getFullList () {
axios.get(`${this.BASE_URL}/characters`)
.then(({data}) => {
  data.forEach((character) => this.buildCharacterBox(character));
    
  })
.catch((error)=> console.log(error, "error"));
  }

  getOneRegister (character) {
axios
  .get(`${this.BASE_URL}/characters/${idCharacter}`)
  .then(({data}) => this.buildCharacterBox(data))
  .catch((error) => console.log(error, "error"));
  }

  createOneRegister (character) {
axios
  .post(`${this.BASE_URL}/characters`,character)
  .then(({ data }) => this.getFullList())
  .catch((error) => console.log(error, "error"));
  }

  updateOneRegister (character) {
    const { id } = character
    axios
      .patch(`${this.BASE_URL}/characters/${id}`, character)
      .then(({ data }) => this.getFullList())
      .catch((error) => console.log(error, "error"));

  }

  deleteOneRegister (idCharacter) {
axios
  .delete(`${this.BASE_URL}/characters/${idCharacter}`)
  .then(({ data }) => this.buildCharacterBox(data))
  .catch((error) => console.log(error, "error"));
  }
}
