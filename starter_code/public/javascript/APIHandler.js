class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList () {
    axios.get(this.BASE_URL + '/characters' )
    .then(response => {
      console.log(response.data);
      response.data.forEach(oneCharacter => {
        const charHtml = $(`
        <div class="character-info">
        <div class="name">${oneCharacter.name}</div>
        <div class="occupation">${oneCharacter.occupation}</div>
        <div class="debt">${oneCharacter.debt}</div>
        <div class="weapon">${oneCharacter.weapon}</div>
      </div>`);
      $('.characters-container').append(charHtml)
      });
    })
    .catch(err => {
      console.log(err);
    })

  }

  getOneRegister () {

  }

  createOneRegister () {

  }

  updateOneRegister () {

  }

  deleteOneRegister () {

  }
}
