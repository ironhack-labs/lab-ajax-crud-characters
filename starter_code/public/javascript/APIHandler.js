class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList () {
    $.ajax({
      url: `https://ih-api.herokuapp.com/characters`,
      method: 'GET',
      success: (data)=>{
        console.log(`Character list retrieval successfull`);
        console.log(data);
        const characters = data;
        characters.forEach((character, i)=>{
          let characterHtml = `<div class="name">${character.name}</div>
          <div class="occupation">${character.occupation}</div>
          <div class="debt">${character.debt}</div>
          <div class="weapon">${character.weapon}</div>`;
          $('.character-info').append(`<div id="character-${i}"></div>`);
          $(`#character-${i}`).append(characterHtml);
        });
      },
      error: (err) => {
        console.log('GET error');
        console.log(err);
      }
    });
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
