class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
  }

  // Function + route to get all characters' info:
  getFullList() {
    return axios.get("http://localhost:8000/characters").then(response => {
      const fullList = response.data;
      fullList.forEach(character => {
        const container = document.createElement("div");
       container.className = "character-info";
        container.innerHTML = `<p>id: ${character.id}</p> <p>name: ${character.name}</p> <p>occupation: ${character.occupation}</p> <p>weapon: ${character.weapon}</p> <p>cartoon: ${character.cartoon}</p>`;
        const targetedElement = document.getElementsByClassName(
          "characters-container"
        )[0];
        targetedElement.appendChild(container);
      });
    });
  }

  // Function + route to get a single character info:
  getOneRegister(id) {
    return axios
      .get(`http://localhost:8000/characters/${id}`)
      .then(response => {
        const oneCharacter = response.data;
        return oneCharacter;
      });
  }

  // Function + route to create a single character:
  createOneRegister(object) {
    return axios
      .post("http://localhost:8000/characters", object)
      .then(response => {
        const createdCharacter = response.data;
        return createdCharacter;
      })
      .catch(err => {
        console.error(err);
      });
  }

  updateOneRegister(id, occupation) {
    return axios
      .patch(`http://localhost:8000/characters/${id}`, { occupation })
      .then(response => {
        const updatedCharacter = response.data;
        console.log(updatedCharacter);
        return updatedCharacter;
      })
      .catch(err => {
        console.error("Character not found");
      });
  }

  deleteOneRegister(id) {
    return axios
      .delete(`http://localhost:8000/characters/${id}`)
      .then(console.log("Character has been successfully deleted"))
      .catch(err => {
        console.error("Character not found");
      });
  }
}
