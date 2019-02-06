class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList() {
    axios
      .get(this.BASE_URL + "characters")
      .then(persons => {
        /*  console.log(persons); */
        persons.data.forEach(person => {
          console.log(person.name);
          /*   document.getElementsByClassName("name").innerHTML = person.name */
        });
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
        /*  person.data.forEach(person => {
         console.log(person.name)
       document.getElementsByClassName("name").innerHTML = person.name
       }) */
      })
      .catch(error => {
        console.log(error);
      });
  }

  createOneRegister(newCharacter) {
    axios.post(this.BASE_URL + "characters", newCharacter).then(argument => {
      console.log(newCharacter);
    });
  }

  updateOneRegister(controlID, editCharacter) {
    /* if (persons.data.includes(controlID.id)) */
      axios.put(this.BASE_URL + "characters/" + controlID.id, editCharacter).then(argument => {
        console.log(+controlID.id, editCharacter);
       /*  console.log("ha entrado") */
      });
  }

  deleteOneRegister(id) {
    axios.delete(this.BASE_URL + "characters/" + id).then(persons => {
      console.log(persons);
    });
  }
}
