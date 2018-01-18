const starWarsPerso = {
  name:       'Padme',
  occupation: 'Queen',
  weapon:     'BRAIN',
};


class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList () {
    axios.get("http://localhost:8000/characters")
      .then(response => {
          console.log(response.data);
          $('#characters-container').empty();
          response.data.forEach(character => {
            $('#characters-container').empty();
            $('#characters-container').append('<div class="character-info"><div class="name">'+character.name+'</div><div class="occupation">'+character.occupation+'</div><div class="debt">'+character.debt+'</div><div class="weapon">'+character.weapon+'</div></div>');
          });
      });
  }

  getOneRegister (i) {
    axios.get("http://localhost:8000/characters/"+i)
      .then(response => {
          console.log(response.data);
      });
  }

  createOneRegister () {
    axios.post("http://localhost:8000/characters/", starWarsPerso)
      .then(response => {
          console.log(response);
      });

  }

  updateOneRegister (i) {
    axios.put("http://localhost:8000/characters/"+i)
      .then(response => {
          console.log(response.data);
      });

  }

  deleteOneRegister (i) {
    axios.delete("http://localhost:8000/characters/"+i)
      .then(response => {
          console.log(response.data);
      });
  }
}
