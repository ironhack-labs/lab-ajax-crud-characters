class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
  }

  
  getFullList() {
    axios.get("http://localhost:8000/characters").then(result => {
      const container = document.getElementsByClassName(
        "characters-container"
      )[0];
      result.data.forEach(element => {
        let newCharacterDiv = document.createElement("div");
        newCharacterDiv.classList = "character-info";
        newCharacterDiv.innerHTML = `
        <div class="chr-id">Name: <span>${element.id}</span></div>
        <div class="name">Name: <span>${element.name}</span></div>
        <div class="occupation">Occupation: <span>${element.occupation}</span></div>
        <div class="cartoon">Is a Cartoon? <span>${element.cartoon}</span></div>
        <div class="weapon">Weapon: <span>${element.weapon}</span></div>`;
        container.appendChild(newCharacterDiv);
      });
    });
  }

  getOneRegister() {
    const id = document.querySelector(
      "body > section:nth-child(1) > section > div:nth-child(2) > input[name=character-id]"
    ).value;
    console.log("id=" + id);
    axios.get("http://127.0.0.1:8000/characters/" + id).then(result => {
      console.log(result.data);

      document.querySelector(
        "body > section:nth-child(1) > div > div > div.name"
      ).innerHTML = result.data.name;

      document.querySelector(
        "body > section:nth-child(1) > div > div > div.occupation"
      ).innerHTML = result.data.occupation;

      document.querySelector(
        "body > section:nth-child(1) > div > div > div.cartoon"
      ).innerHTML = result.data.cartoon;

      document.querySelector(
        "body > section:nth-child(1) > div > div > div.weapon"
      ).innerHTML = result.data.weapon;

      /// Update Edit-Forms
      document.querySelector(
        "#edit-character-form > div:nth-child(1) > input[name=chr-id]"
      ).value = id;
      document.querySelector(
        "#edit-character-form > div:nth-child(2) > input[type=text]"
      ).value = result.data.name;
      document.querySelector(
        "#edit-character-form > div:nth-child(3) > input[type=text]"
      ).value = result.data.occupation;
      document.querySelector(
        "#edit-character-form > div:nth-child(4) > input[type=text]"
      ).value = result.data.weapon;
      document.querySelector(
        "#edit-character-form > div:nth-child(5) > input[type=checkbox]"
      ).value = result.data.cartoon;
    });
  }

  createOneRegister() {
    const name = document.querySelector(
      "#new-character-form > div:nth-child(1) > input[type=text]"
    ).value;
    const occupation = document.querySelector(
      "#new-character-form > div:nth-child(2) > input[type=text]"
    ).value;
    const weapon = document.querySelector(
      "#new-character-form > div:nth-child(3) > input[type=text]"
    ).value;
    const isCartoon = document.querySelector(
      "#new-character-form > div:nth-child(4) > input[type=checkbox]"
    ).checked;

    axios.post("http://127.0.0.1:8000/characters/", {
      name: name,
      occupation: occupation,
      weapon: weapon,
      cartoon: isCartoon
    });
  }

  updateOneRegister() {
    //event.preventDefault();
    /// get id
    const id = document.querySelector(
      "#edit-character-form > div:nth-child(1) > input[name=chr-id]"
    ).value;
    console.log("edit id=" + id);

    /// patch it
    const name = document.querySelector(
      "#edit-character-form > div:nth-child(2) > input[type=text]"
    ).value;
    const occupation = document.querySelector(
      "#edit-character-form > div:nth-child(3) > input[type=text]"
    ).value;
    const weapon = document.querySelector(
      "#edit-character-form > div:nth-child(4) > input[type=text]"
    ).value;
    const isCartoon = document.querySelector(
      "#edit-character-form > div:nth-child(5) > input[type=checkbox]"
    ).checked;

    axios.patch("http://127.0.0.1:8000/characters/" + id, {
      name: name,
      occupation: occupation,
      weapon: weapon,
      cartoon: isCartoon
    });
  }

  deleteOneRegister() {
    const idDelete = document.querySelector(
      "body > section:nth-child(1) > section > div.operation.delete > input[type=text]"
    ).value;
    console.log("Character has been successfully deleted: id=" + idDelete);
    axios
      .delete("http://127.0.0.1:8000/characters/" + idDelete)
      .then(result => {
        console.log(result.data);
      });
  }
}
