class APIHandler {
  constructor(BASE_URL = 'http://localhost:8000') {
    this.BASE_URL = BASE_URL;
  }

  async getFullList() {
    const { data } = await axios.get(`${this.BASE_URL}/characters/`)
    return data;
  }

  async getOneRegister(id) {
    const { data } = await axios.get(`${this.BASE_URL}/characters/${id}`)
    return data;
  }

  async createOneRegister(data) {
    await axios.post(`${this.BASE_URL}/characters/`, data)
  }

  async updateOneRegister(id, data) {
    await axios.patch(`${this.BASE_URL}/characters/${id}`, data)
  }

  async deleteOneRegister(id) {
    await axios.delete(`${this.BASE_URL}/characters/${id}`)
  }

  drawAll(arr) {
    const $charContainer = document.querySelector('.characters-container');
    $charContainer.innerHTML = '';
    arr.forEach(ele => {
      $charContainer.innerHTML += `
      <div class="character-info">
        <div class="id">
          <div style="display: inline">Id:</div>
          <span style="width: fit-content">${ele.id}</span>
        </div>
        <div class="name">
          <div style="display: inline">Name:</div>
          <span style="width: fit-content">${ele.name}</span>
        </div>
        <div class="occupation">
          <div style="display: inline">Occupation:</div>
          <span style="width: fit-content">${ele.occupation}</span>
        </div>
        <div class="cartoon">
          <div style="display: inline">cartoon:</div>
          <span style="width: fit-content">${ele.cartoon}</span>
        </div>
        <div class="weapon">
          <div style="display: inline">Weapon:</div>
          <span style="width: fit-content">${ele.weapon}</span>
        </div>
      </div>`
    })
  }
}