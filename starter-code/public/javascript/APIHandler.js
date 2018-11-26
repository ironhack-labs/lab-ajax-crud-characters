let container = document.querySelector(".characters-container");
class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList() {
    return axios.get(`${this.BASE_URL}/characters`).then(char => {
      container.innerHTML = "";
      char.data.forEach(e => {
        const chars = ` <div class="character-info">
        <div class="name">${e.name}</div>
        <div class="occupation">${e.occupation}</div>
        <div class="cartoon">${e.cartoon}</div>
        <div class="weapon">${e.weapon}</div>
      </div>`;
        container.innerHTML += chars;
      });
    });
  }

  getOneRegister(id) {
    return axios
      .get(`${this.BASE_URL}/characters/${id}`)
      .then(char => {
        container.innerHTML = ` <div class="character-info">
      <div class="name">${char.data.name}</div>
      <div class="occupation">${char.data.occupation}</div>
      <div class="cartoon">${char.data.cartoon}</div>
      <div class="weapon">${char.data.weapon}</div>
    </div>`;
      })
      .catch(e => {
        container.innerHTML = "<h1>Incorrect ID<h1>";
      });
  }

  createOneRegister(char) {
    return axios
      .post(`${this.BASE_URL}/characters`, char)
      .then(() => this.getFullList())
      .catch(() => (container.innerHTML = "<h1>ERROR<h1>"));
  }

  updateOneRegister(char) {
    return axios.get(`${this.BASE_URL}/characters/${char.id}`).then(c => {
      if (c == null) {
        container.innerHTML = "<h1>Incorrect ID<h1>";
      } else {
        if (char.cartoon == "on") {
          char.cartoon = true;
        } else {
          char.cartoon = false;
        }
        axios.patch(`${this.BASE_URL}/characters/${char.id}`, char).then(() => {
          
          this.getFullList();
        });
      }
    });
  }

  deleteOneRegister(id) {
    return axios
      .delete(`${this.BASE_URL}/characters/${id}`)
      .then(() => {
        document.getElementById("delete-one").className="ok"
        this.getFullList()})
      .catch(() =>{ 
        document.getElementById("delete-one").className="wrong"
        container.innerHTML = "<h1>Invalid ID<h1>"});
  }
}
