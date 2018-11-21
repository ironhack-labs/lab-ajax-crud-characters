class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList() {
    axios.get(`${this.BASE_URL}/characters`).then((res) => {
      const $containerHTML = $('.characters-container').html();

      $('.characters-container').html('');

      res.data.forEach((character) => {
        $('.characters-container').append($containerHTML);
        $('.character-info:last-child .name').html(character.name);
        $('.character-info:last-child .occupation').html(character.occupation);
        $('.character-info:last-child .weapon').html(character.weapon);
        $('.character-info:last-child .cartoon').html(`Is a Cartoon?..${character.cartoon}`);
      });
    });
  }

  getOneRegister() {
    const id = document.getElementById('character-id').value;
    axios.get(`${this.BASE_URL}/characters/${id}`).then((res) => {
      $('.character-info .name').html(res.data.name);
      $('.character-info .occupation').html(res.data.occupation);
      $('.character-info .weapon').html(res.data.weapon);
      $('.character-info .cartoon').html(`Is a Cartoon?..${res.data.cartoon}`);
    });
  }

  createOneRegister() {}

  updateOneRegister() {}

  deleteOneRegister() {}
}
