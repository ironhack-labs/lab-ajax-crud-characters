class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList() {
    axios.get(`${this.BASE_URL}/characters`).then(response => {
      console.log(response.data);
      this.pushToDOM(response.data);
      return response.data;
    });
  }

  getOneRegister(id) {
    axios.get(`${this.BASE_URL}/characters/${id}`).then(response => {
      console.log(response.data);
      return response.data;
    });
  }

  createOneRegister() {
    axios.post(`${this.BASE_URL}/characters/${id}`).then(response => {
      console.log("Item created");
      return response.data;
    });
  }

  updateOneRegister() {
    axios.patch(`${this.BASE_URL}/characters/${id}`).then(response => {
      console.log("Item deleted");
      return response.data;
    });
  }

  deleteOneRegister() {
    axios.delete(`${this.BASE_URL}/characters/${id}`).then(response => {
      console.log(response.data);
      return response.data;
    });
  }

  pushToDOM(data) {
    console.log(data);
    $(".characters-container").empty();
    data.forEach(e => {
      let content = `<div class="character-info">
        <div class="name"><span>Name:</span> ${e.name}</div>
        <div class="occupation"><span>Job:</span> ${e.occupation}</div>
        <div class="cartoon"><span>Is cartoon?</span> ${e.cartoon}</div>
        <div class="weapon"><span>Weapon:</span> ${e.weapon}</div>`;

      $(".characters-container").append(content);
    });
  }
}
