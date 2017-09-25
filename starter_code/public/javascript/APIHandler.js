class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList () {

  $.ajax(
    {
      url: 'https://ih-api.herokuapp.com/characters',
      method: 'GET',

      success: (infoFromApi) => {
        console.log('Character fetch SUCCESS!');
        console.log(infoFromApi);

        infoFromApi.forEach(oneItem => {
          $('.character-info').html(`

            <p> Character Name: ${oneItem.name}       </p>
            <p> Character Occupation: ${oneItem.occupation} </p>
            <p> Character Debt: ${oneItem.debt}       </p>
            <p> Character Weapon: ${oneItem.weapon}     </p>

            `);

        });



      },
      error: (errorInfo) => {
      console.log('Character fetch ERROR! 🤡 ');
      console.log(errorInfo);
    }
  });
};


  getOneRegister (infoFromApi) {

    $.ajax({
      url: 'https://ih-api.herokuapp.com/characters',
      method: 'GET',

      success: (infoFromApi) => {
        console.log('SUCCESS!!');
        console.log(infoFromApi);
      },
      error: (errorInfo) => {
      console.log('Character fetch ERROR! 🤡 ');
      console.log(errorInfo);
    }
  });
}

  createOneRegister () {

  }

  updateOneRegister () {

  }

  deleteOneRegister () {
    $.ajax({
      url: 'https://ih-api.herokuapp.com/characters',
      method: 'DELETE',

      success: (infoFromApi) => {
        console.log('SUCCESS!!');
        console.log(infoFromApi);
      },
      error: (errorInfo) => {
      console.log('Character fetch ERROR! 🤡 ');
      console.log(errorInfo);
    }
  });
  }
}
