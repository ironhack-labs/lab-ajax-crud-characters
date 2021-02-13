class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
  }


  getFullList() {
    axios.get(`${this.BASE_URL}/characters`)
      .then((res) => {
        resetButtons();
        let data = res.data
        drawCards(data)
      })
      .catch((e) => {
        resetButtons();
        console.log("Error getting data", e)
      })
  }

  getOneRegister(id) {
    axios.get(`${this.BASE_URL}/characters/${id}`)
      .then((res) => {
        resetButtons();
        let data = res.data;
        drawCards(data);
      })
      .catch((e) => {
        resetButtons();
        console.log("Error getting data", e)
      });
  }

  createOneRegister(data) {
    let button = document.querySelector("#send-data-new")
    axios.post(`${this.BASE_URL}/characters`, data)
      .then((res) => {
        resetButtons()
        button.style.backgroundColor = "green"
      })
      .catch((e) => {
        resetButtons();
        button.style.backgroundColor = "red"
        console.log("Error creating data", e)
      });
  }

  updateOneRegister(id, data) { //Pedro creo que debería de funcionar
    let button = document.querySelector("#send-data-update")
    axios
      .put(`${this.BASE_URL}/characters/${id}`, data)
      .then((res) => {
        resetButtons();
        button.style.backgroundColor = "green"
      })
      .catch((e) => {
        resetButtons();
        button.style.backgroundColor = "red"
        console.log("Error updating data", e)
      });
  }
  deleteOneRegister(id) {
    let button = document.querySelector("#delete-one")
    axios
      .delete(`${this.BASE_URL}/characters/${id}`)
      .then((res) => {
        resetButtons();
        button.style.backgroundColor = "green"
      })
      .catch((e) => {
        resetButtons();
        button.style.backgroundColor = "red"
        console.log("Error deleting data", e)
      });

  }
}