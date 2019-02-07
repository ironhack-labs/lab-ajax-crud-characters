class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList() {
    axios
      .get(this.BASE_URL + "characters")
      .then(persons => {
        console.log(persons.data);
      })
      .catch(error => {
        console.log(error);
      });
  }

  getOneRegister(id) {
    axios
      .get(this.BASE_URL + "characters")
      .then(persons => {
        let output = persons.data.filter(function(person) {
          return person.id === id;
        })[0];

        console.log(output);
      })
      .catch(error => {
        console.log(error);
      });
  }

  createOneRegister(newCharacter) {
    axios.post(this.BASE_URL + "characters", newCharacter).then(character => {
      console.log(character.data);
    });
  }

  updateOneRegister(controlID, editCharacter) {
    axios
      .put(this.BASE_URL + "characters/" + controlID, editCharacter)
      .then(character => {
        console.log(character.data);
      });
  }

  deleteOneRegister(id) {
    axios.delete(this.BASE_URL + "characters/" + id).then(person => {
      console.log(person.data);
    });
  }
}