class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
  }

  // -- DISPLAY ALL -- //
  getFullList() {
    axios.get(`${this.BASE_URL}/characters`)
      .then(chars => {
        $('.characters-container-main').empty();
        chars.data.forEach(item => {
          displayOneCharacter(item); // (function in index.js)
        })
      })
      .catch(err => {
        console.log(err);
      })
  };

  // -- DISPLAY ONE -- //
  getOneRegister(charId) {
    axios.get(`${this.BASE_URL}/characters/${charId}`)
      .then(char => {
        $('.characters-container-main').empty();
        displayOneCharacter(char.data); // (function in index.js)
      })
      .catch(err => {
        console.log(err);
      })
  };

  // -- CREATE ONE -- //
  createOneRegister(characterObject) {
    $('#send-data-create').removeClass('green-button red-button'); // reset status
    axios.post(`${this.BASE_URL}/characters`, characterObject)
      .then(result => { 
        $('#send-data-create').addClass('green-button');
      })
      .catch(err => {
        console.log(err);
        $('#send-data-create').addClass('red-button');
      })
  }

  // -- UPDATE ONE -- //
  updateOneRegister(characterObject) {
    $('#send-data-edit').removeClass('green-button red-button'); // reset status
    axios.patch(`${this.BASE_URL}/characters/${characterObject.id}`, {
      name: characterObject.name,
      occupation: characterObject.occupation,
      weapon: characterObject.weapon,
      cartoon: characterObject.cartoon
    })
      .then(char => { 
        $('#send-data-edit').addClass('green-button');
      })
      .catch(err => {
        $('#send-data-edit').addClass('red-button');
        console.log(err);
      })
  }

  // -- DELETE ONE -- //
  deleteOneRegister(charId) {
    $('#delete-one').removeClass('green-button red-button'); // reset status
    axios.delete(`${this.BASE_URL}/characters/${charId}`)
      .then(char => {
        $('#delete-one').addClass('green-button');
      })
      .catch(err => {
        $('#delete-one').addClass('red-button');
        console.log(err);
      })
  };
};

