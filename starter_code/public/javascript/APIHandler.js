class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList () {
    axios
    .get(`${this.BASE_URL}/characters`)
    .then(response => {
      console.log(response.data)

      // Follow along
      $(".characters-container").empty();
      // ------------

      response.data.forEach(oneCharacter => {
        const charHtml = $(`
        <div class="character-info">

        <div class="name">
          ${oneCharacter.name}
        </div>

        <div class="occupation">
          ${oneCharacter.occupation}
        </div>

        <div class="debt">
          ${oneCharacter.debt}
        </div>

        <div class="weapon">
          ${oneCharacter.weapon}
        </div>

      </div>`);
      $('.characters-container').append(charHtml)
      });
    })
    .catch(err => {
      console.error(err)
    })
  }

  getOneRegister (id) {
    this.id;
    axios
    .get(`${this.BASE_URL}/characters/${id}`)
    .then(response => {
      console.log(response.data)

      // Follow along
      $(".characters-container").empty();
      // ------------

      const newCharHtml = $(`
        <div class="character-info">

        <div class="name">
          ${response.data.name}
        </div>

        <div class="occupation">
          ${response.data.occupation}
        </div>

        <div class="debt">
          ${response.data.debt}
        </div>

        <div class="weapon">
          ${response.data.weapon
        }</div>

        </div>`);
        $('.characters-container').append(newCharHtml)
    })
    .catch(err => {
      console.error(err)
    })
  }


  
  createOneRegister (info) {
    this.info;
    axios
    .post(`${this.BASE_URL}/characters/`, info)
    .then(response => {
      console.log(response.data)
    })
    .catch(err => {
      console.error(err)
    });
  }

  updateOneRegister (id, data) {
    this.id;
    axios
    .patch(`${this.BASE_URL}/characters/${id}`, data)
    .then(response => {
      console.log(response.data)
    })
    .catch(err => {
      console.error(err)
    });
  }

  deleteOneRegister (id) {
    this.id;
    axios
    .delete(`${this.BASE_URL}/characters/${id}`)
    .then(response => {
      console.log(response.data)
    })
    .catch(err => {
      console.error(err)
    });
  }
}
