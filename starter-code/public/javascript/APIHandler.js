class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList () {
    axios
      .create({ baseURL: `${this.BASE_URL}/characters`})
      .get()
      .then((res) => {
        let container = document.getElementsByClassName("characters-container")[0];
        container.innerHTML = "";
        res.data.forEach((item) => {
          let infoDiv = document.createElement("div");
          infoDiv.className = "character-info";
          let nameDiv = document.createElement("div");
          let occupationDiv = document.createElement("div");
          let cartoonDiv = document.createElement("div");
          let weaponDiv = document.createElement("div");
          nameDiv.innerHTML = `Character Name: ${item.name}`;
          occupationDiv.innerHTML = `Character Occupation: ${item.occupation}`;
          cartoonDiv.innerHTML = `Is a Cartoon? ${item.cartoon}`;
          weaponDiv.innerHTML = `Character Weapon: ${item.weapon}`;  
          infoDiv.appendChild(nameDiv);
          infoDiv.appendChild(occupationDiv);
          infoDiv.appendChild(cartoonDiv);
          infoDiv.appendChild(weaponDiv);
          container.appendChild(infoDiv);
        })
      })
      .catch(err => console.log(err));
  }

  getOneRegister (id) {
    axios
      .create({ baseURL: `${this.BASE_URL}/characters/${id}`})
      .get()
      .then((res) => {
        document.getElementsByClassName("name")[0].innerHTML = `Character Name: ${res.data.name}`;
        document.getElementsByClassName("occupation")[0].innerHTML = `Character Occupation: ${res.data.occupation}`;
        document.getElementsByClassName("cartoon")[0].innerHTML = `Is a Cartoon? ${res.data.cartoon}`;
        document.getElementsByClassName("weapon")[0].innerHTML = `Character Weapon: ${res.data.weapon}`;
      })
      .catch(err => console.log(err));
  }

  createOneRegister (obj) {
    axios
      .post(`${this.BASE_URL}/characters`, obj)
      .then(() => {
        document.getElementById("send-data").style.backgroundColor = "green";
      })
      .catch(() => {
        document.getElementById("send-data").style.backgroundColor = "red" ;
        console.log(err);
      });
  }

  updateOneRegister (id, obj) {
    axios
      .put(`${this.BASE_URL}/characters/${id}`, obj)
      .then(() => {
        document.getElementById("send-data").style.backgroundColor = "green";
      })
      .catch(() => {
        document.getElementById("send-data").style.backgroundColor = "red" ;
        console.log(err);
      });
  }

  deleteOneRegister (id) {
    axios
      .delete(`${this.BASE_URL}/characters/${id}`)
      .then(() => {
        document.getElementById("send-data").style.backgroundColor = "green";
      })
      .catch(() => {
        document.getElementById("send-data").style.backgroundColor = "red" ;
        console.log(err);
      });
  }
}
