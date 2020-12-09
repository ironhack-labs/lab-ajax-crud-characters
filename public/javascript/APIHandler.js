class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList() {
    axios
      .get("http://localhost:8000/characters")
      .then((result) => {
        const container = document.querySelector(".characters-container");
        container.innerHTML = "";
        result.data.forEach((element) => {
          container.innerHTML += `<div class="character-info">
          <div class="name">${element.name}</div>
          <div class="occupation">${element.occupation}</div>
          <div class="cartoon">${element.cartoon}</div>
          <div class="weapon">${element.weapon}</div>
        </div>`;
        });
      })
      .catch((error) => console.log(error));
  }

  getOneRegister(id) {
    axios
      .get("http://localhost:8000/characters/" + id)
      .then((result) => {
        const container = document.querySelector(".characters-container");
        container.innerHTML = "";
        container.innerHTML += `<div class="character-info">
          <div class="name">${result.data.name}</div>
          <div class="occupation">${result.data.occupation}</div>
          <div class="cartoon">${result.data.cartoon}</div>
          <div class="weapon">${result.data.weapon}</div>
        </div>`;
      })
      .catch((error) => console.log(error));
  }

  createOneRegister(array) {
    axios
      .post("http://localhost:8000/characters", array)
      .then(() => {
        document.getElementById("send-data").classList.toggle("active");
        document.getElementById("new-character-form").reset();
      })
      .catch(() => {
        document.getElementById("send-data").style.background = "red";
        document.getElementById("new-character-form").reset();
      });
  }

  updateOneRegister(array, id) {
    axios
      .patch("http://localhost:8000/characters/" + id, array)
      .then((reponseFromApi) => console.log(reponseFromApi))
      .catch((error) => console.log(error));
  }

  deleteOneRegister(id) {
    axios
      .delete("http://localhost:8000/characters/" + id)
      .then(() => {
        document.getElementById("delete-one").classList.toggle("active");
        const id = document.querySelector(".operations div:nth-child(3) input");
        id.value = "";
      })
      .catch(() => {
        document.getElementById("delete-one").style.background = "red";
        const id = document.querySelector(".operations div:nth-child(3) input");
        id.value = "";
      });
  }
}
