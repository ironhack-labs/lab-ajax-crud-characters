class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList() {
     axios
      .get("http://localhost:8000/Characters")
      .then(allCharacters => {
       let hiddenInfo = document.querySelector(".character-info")
       hiddenInfo.style.display = 'none';
        allCharacters.data.forEach(element => {
          document.querySelector(".characters-container")
          .innerHTML += `<div class="character-info">
        <div class="id"> Id: ${element.id}</div>
        <div class="name"> Name: ${element.name}</div>
        <div class="occupation"> Occupation: ${element.occupation}</div>
        <div class="weapon"> Weapon: ${element.weapon}</div>
        <div class="cartoon"> Cartoon: ${element.cartoon}</div>
        </div>`;
        });
      })
      .catch(err => err);


  }

  getOneRegister() {
    let id = document.querySelector(".characterId").value 
    axios
    .get(`http://localhost:8000/characters/${id}`)
    .then(character => {
      document.querySelector(".characters-container").innerHTML = ""
      document.querySelector(".characters-container")
    .innerHTML += `<div class="character-info">
  <div class="id"> Id: ${character.data.id}</div>
  <div class="name"> Name: ${character.data.name}</div>
  <div class="occupation"> Occupation: ${character.data.occupation}</div>
  <div class="weapon"> Weapon: ${character.data.weapon}</div>
  <div class="cartoon"> Cartoon: ${character.data.cartoon}</div>
  </div>`;
  });
  }

  createOneRegister() {
axios
.post("http://localhost:8000/characters")

  }

  updateOneRegister() {
    axios
    .put("http://localhost:8000/characters/:id")
  }

  deleteOneRegister() {
    axios
    .delete("http://localhost:8000/characters/:id")
    
  }
}
