class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl + `/characters`;
  }

  getFullList () {
    return axios.get(this.BASE_URL).then(res => {
      const characters = res.data;
      this.cleanCardContainer();
      characters.forEach(c => {
        this.generateCharacterCard(c);
      });
    })
  }

  getOneRegister(id) {
    return axios.get(`${this.BASE_URL}/${id}`).then(character => {
      this.cleanCardContainer();
      this.generateCharacterCard(character.data);
    })
  }

  createOneRegister(name, occupation, weapon, cartoon) {
    let newCharacter = {name, occupation, weapon, cartoon};
    return axios.post(this.BASE_URL, newCharacter)
    .then(res => {
      this.changeBtnBg('#send-data', 'active');
    })
    .catch(err => {
      this.changeBtnBg('#send-data', 'error');
      console.log(err);
    })
  }

  updateOneRegister (id, name, occupation, weapon, cartoon) {
    return axios.put(`${this.BASE_URL}/${id}`, {name, occupation, weapon, cartoon})
    .then(res => {
      this.changeBtnBg('#update-data', 'active');
    })
    .catch(err => {
      this.changeBtnBg('#update-data', 'error');
      console.log(err);
    })
  }

  deleteOneRegister (id) {
    return axios.delete(`${this.BASE_URL}/${id}`)
    .then(res => {
      this.changeBtnBg('#delete-one', 'active');
    })
    .catch(err => {
      this.changeBtnBg('#delete-one', 'error');
      console.log(err);
    })
  }
  cleanCardContainer() {
    $('.characters-container').empty();
  }
  generateCharacterCard(c) {
    let container = $('<div>').addClass('character-info');
    let cInfo = `<div class="id">Id: <span>${c.id}</span></div>
    <div class="name">Name: <span>${c.name}</span></div>
    <div class="occupation">Occupation: <span>${c.occupation}</span></div>
    <div class="cartoon">Is a Cartoon? <span>${c.cartoon}</span></div>
    <div class="weapon">Weapon: <span>${c.weapon}</span></div>`;
    container.html(cInfo);
    $('.characters-container').append(container);
  }
  changeBtnBg(btn,status) {
    $(btn).addClass(status);
    setTimeout(() => {
      $(btn).removeClass(status);
    }, 700)
  }
}
