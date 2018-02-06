const characters = axios.create({
  baseURL: "http://localhost:8000/"
});

class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList() {
    characters
      .get("characters/")
      .then(response => {
        console.log(response.data);
        return response.data;
      })
      .catch(err => {
        console.log("ERROR", err);
      });
  }

  getOneRegister(id) {
    characters
      .get("characters/" + id)
      .then(response => {
        console.log(response.data);
        return response.data;
      })
      .catch(err => {
        console.log("ERROR", err);
      });
  }

  createOneRegister() {
    const characterInfo = {
      name: "Chewbacca",
      occupation: "Animal",
      debt: "false",
      weapon: "Fists"
    };
    characters
      .post("characters/", characterInfo)
      .then(response => {
        console.log("posted well");
        console.log(response.data);
      })
      .catch(err => {
        console.log("Error!");
        console.log(error);
      });
  }

  // updateOneRegister(id) {
  //   const characterInfo = {
  //     name: string,
  //     occupation: string,
  //     debt: boolean,
  //     weapon: string
  //   };

  //   characters
  //     .put("characters/" + id, characterInfo)
  //     .then(response => {
  //       console.log("updated well");
  //       console.log(response.data);
  //     })
  //     .catch(err => {
  //       console.log("Error!");
  //       console.log(error);
  //     });
  // }
  updateOneRegister(i) {
    event.preventDefault();

    const updateInfo = {
      id: document.getElementById("character-id-input").value,
      name: document.getElementById("update-name-input").value,
      occupation: document.getElementById("update-occupation-input").value,
      weapon: document.getElementById("update-weapon-input").value
    };
    const charId = document.getElementById("character-id-input").value;

    characters
      .patch(`characters/${charId}`, updateInfo)
      .then(response => {
        console.log("Update SUCCESS!");
        console.log(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }

  deleteOneRegister(id) {
    characters
      .delete("characters/" + id)
      .then(response => {
        console.log("Character has been successfully deleted");
      })
      .catch(err => {
        console.log("Error!");
        console.log(error);
      });
  }
}
