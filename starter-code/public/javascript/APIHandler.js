class APIHandler {
  constructor(baseURL) {
    this.characters = axios.create({ baseURL: baseURL });
  }

  getFullList() {
    this.characters
      .get("/characters")
      .then(characters => {
        console.log(characters);

        characters.data.forEach(elm => {
          const { id, name, occupation, weapon } = elm;
          const characterLi = `<li><strong>Character created</strong><br>Name: ${name} (id ${id}), occupation: ${occupation}, weapon: ${weapon}`;
          document.getElementById("character-info").innerHTML += characterLi;
        });
      })
      .catch(err => console.log(err));
  }

  createOneRegister() {}

  updateOneRegister() {}

  deleteOneRegister() {}
}
