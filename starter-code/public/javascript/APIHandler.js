class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList() {
    axios
      .get(`${this.BASE_URL}/characters`)
      .then(res => {
        console.log(res.data);
        const wrapper = document.querySelector('.characters-container');
        wrapper.innerHTML = '';
        res.data.forEach(element => {
          let card = `<div class="character-info">
          <div class="name">Character Name: ${element.name}</div>
          <div class="occupation">Character Occupation: ${element.occupation}</div>
          <div class="cartoon">Is a Cartoon? ${element.cartoon}</div>
          <div class="weapon">Character Weapon: ${element.weapon}</div>
        </div>`;
          wrapper.innerHTML += card;
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  getOneRegister(id) {
    axios
      .get(`${this.BASE_URL}/characters/${id}`)
      .then(res => {
        console.log(res);
        const element = res.data;
        const wrapper = document.querySelector('.characters-container');
        wrapper.innerHTML = '';
        let card = `<div class="character-info">
          <div class="name">Character Name: ${element.name}</div>
          <div class="occupation">Character Occupation: ${element.occupation}</div>
          <div class="cartoon">Is a Cartoon? ${element.cartoon}</div>
          <div class="weapon">Character Weapon: ${element.weapon}</div>
        </div>`;
        wrapper.innerHTML += card;
      })
      .catch(err => {
        console.log(err);
      });
  }

  createOneRegister(name, occupation, weapon, cartoon) {
    const newItem = {
      name: name,
      occupation: occupation,
      weapon: weapon,
      cartoon: cartoon
    };
    axios
      .post(`${this.BASE_URL}/characters`, newItem)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  }

  updateOneRegister(id) {
    const toUpdate = {
      name: 'Gabriel Zsig'
    };
    axios
      .patch(`${this.BASE_URL}/characters/${id}`, toUpdate)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  }

  deleteOneRegister(id) {
    axios
      .delete(`${this.BASE_URL}/characters/${id}`)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  }
}
