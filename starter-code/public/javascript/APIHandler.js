class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList() {
    const container = $(".characters-container")
    axios.get("http://localhost:8000/characters")
      .then((res) => {
        container.html("");
        res.data.map((element) => {
          let theList = `<div class="character-info">
          <div class="name">Id: <span>${element.id}</span></div>
          <div class="name">Character Name: <span>${element.name}</span></div>
          <div class="occupation">Character Occupation: <span>${element.occupation}</span></div>
          <div class="cartoon">Is a Cartoon?</div>
          <div class="weapon">Character Weapon:  <span>${element.weapon}</span></div>
          </div>`
          container.append(theList)
        })
      })
      .catch((err) => {
        console.log("An error has happened, please take a look at the console", err)
      })
  };

  createOneRegister() {
    let charName = $(".newName").val()
    let charOccupation = $(".newOccupation").val()
    let charWeapon = $(".newWeapon").val()

    const charData = {
      name: charName,
      occupation: charOccupation,
      weapon: charWeapon

    }

    axios.post("http://localhost:8000/characters", charData)
      .then((newChar) => {
        document.getElementById("new-character-form").reset()
        console.log("New character has been created", newChar)
      })
      .catch((err) => {
        console.log("An error has happened, take a look at the console", err)
      })
  };

  updateOneRegister() {
    //Aqui vamoa tomar los insputs de edit-character-form

    //axios.patch("http://localhost:8000/characters/${_id} ,") Aqui vamoa hacer harta promesa

  };

  deleteOneRegister() {

    const idToDelete = $(".deleteOne").val();


    axios.delete(`http://localhost:8000/characters/${idToDelete}`).then((deleted) => {
      $("#deleteOne").val("");
      console.log("Farewell my friend");
    }).catch((err) => {
      console.log(" OMG an error has happened")
    })
  };
}