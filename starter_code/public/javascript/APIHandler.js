class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList () {
    $.ajax(
    {
      url: 'https://ih-api.herokuapp.com/characters/',
      method: 'GET',

      success: (characterList) => {
        characterList.forEach((oneCharacter) => {
        $('.characters-container').append(`
            <div class="character-info">
                <div class="id"> ID: ${oneCharacter.id} </div>
                <div class="name">Name: ${oneCharacter.name} </div>
                <div class="occupation">Occupation: ${oneCharacter.occupation}</div>
                <div class="debt">Debt: ${oneCharacter.debt}</div>
                <div class="weapon">Weapon: ${oneCharacter.weapon}</div>
            </div>
              `);
            });
          },

      error: (errorInfo) => {
        console.log(errorInfo);
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
