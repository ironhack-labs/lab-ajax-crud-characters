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
    const id = document.querySelector("input[name=character-id]").value;
    axios.get(`http://localhost:8000/characters/${id}`).then(result => {
      const container = document.getElementsByClassName(
        "characters-container"
      )[0];
      let newCharacterDiv = document.createElement("div");
      newCharacterDiv.classList = "character-info";
      newCharacterDiv.innerHTML = `
        <div class="chr-id">Name: <span>${result.data.id}</span></div>
        <div class="name">Name: <span>${result.data.name}</span></div>
        <div class="occupation">Occupation: <span>${result.data.occupation}</span></div>
        <div class="cartoon">Is a Cartoon? <span>${result.data.cartoon}</span></div>
        <div class="weapon">Weapon: <span>${result.data.weapon}</span></div>`;
      container.appendChild(newCharacterDiv);
    });
  }

  createOneRegister() {
    const btn = document.querySelector("#new-character-form #send-data");
    const name = document.querySelector("#new-character-form input[name=name]")
      .value;
    const occupation = document.querySelector(
      "#new-character-form input[name=occupation]"
    ).value;
    const weapon = document.querySelector(
      "#new-character-form input[name=weapon]"
    ).value;
    const cartoon = document.querySelector(
      "#new-character-form input[name=cartoon]"
    ).checked;
    axios
      .post(`http://localhost:8000/characters`, {
        name: name,
        occupation: occupation,
        weapon: weapon,
        cartoon: cartoon
      })
      .then(result => {
        btn.classList = "active";
      })
      .catch(err => {
        btn.classList = "error";
      });
  }

  updateOneRegister() {
    const btn = document.querySelector("#edit-character-form #send-data");
    const id = document.querySelector("#edit-character-form input[name=chr-id]")
      .value;
    const name = document.querySelector("#edit-character-form input[name=name]")
      .value;
    if (name) {
      axios
        .patch(`http://localhost:8000/characters/${id}`, {
          name: name
        })
        .then(result => {
          btn.classList = "active";
        })
        .catch(err => {
          btn.classList = "error";
        });
    }
    const occupation = document.querySelector(
      "#edit-character-form input[name=occupation]"
    ).value;
    if (occupation) {
      axios
        .patch(`http://localhost:8000/characters/${id}`, {
          occupation: occupation
        })
        .then(result => {
          btn.classList = "active";
        })
        .catch(err => {
          btn.classList = "error";
        });
    }
    const weapon = document.querySelector(
      "#edit-character-form input[name=weapon]"
    ).value;
    if (weapon) {
      axios
        .patch(`http://localhost:8000/characters/${id}`, {
          weapon: weapon
        })
        .then(result => {
          btn.classList = "active";
        })
        .catch(err => {
          btn.classList = "error";
        });
    }
    const cartoon = document.querySelector(
      "#edit-character-form input[name=cartoon]"
    ).checked;
    axios.get(`http://localhost:8000/characters/${id}`).then(result => {
      if (cartoon != result.cartoon) {
        axios
          .patch(`http://localhost:8000/characters/${id}`, {
            cartoon: cartoon
          })
          .then(result => {
            btn.classList = "active";
          })
          .catch(err => {
            btn.classList = "error";
          });
      }
    });
  }

  deleteOneRegister() {
    const id = document.querySelector("input[name=character-id-delete]").value;
    const deleteBtn = document.getElementById("delete-one");
    axios
      .delete(`http://localhost:8000/characters/${id}`)
      .then(result => {
        deleteBtn.classList = "active";
      })
      .catch(err => {
        console.log("❌");
        deleteBtn.classList = "error";
      });
  }
}
