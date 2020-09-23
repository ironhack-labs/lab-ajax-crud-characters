console.log("running");


class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList () {
      axios
      .get("http://localhost:8000/characters")
      .then (apiResponse => {
        console.log("Full List: ",apiResponse);
      })
      .catch(apiError => {
        console.log(apiError);
      })
  }

  getOneRegister (id) {
      axios
        .get(`http://localhost:8000/characters/${id}`)
        .then(response => {
          console.log('One character is: ', response.data);
          //const countryDetail = response.data[0];
          //console.log('a single country details: ', countryDetail);
        })
        .catch(err => console.log(err));
      }
  
  createOneRegister (newCharacterInfo) {
    axios
    .post("http://localhost:8000/characters", newCharacterInfo)
    .then(() => {
        //this.getFullList();
        console.log("added: ", newCharacterInfo)
    })
    .catch(err => console.log(err));
  }

  updateOneRegister (id, updatedCharacter) {

    axios
    .put(`http://localhost:8000/characters/${id}`, updatedCharacter)
    .then(response => {
      console.log(response);
      getCharacters();
    })
    .catch(err => console.log(err));
  }

  deleteOneRegister (id) {
    axios
    .delete(`http://localhost:8000/characters/${id}`)
    .then(response => {
      console.log("deleted: ", response.data);
      this.getFullList();
    })
    .catch(err => console.log(err));

  }
}

const test = new APIHandler;
test.getFullList();
test.getOneRegister(2);
//test.getOneRegister(1);
/*test.createOneRegister({
  "name": "Leia Skywalker",
  "occupation": "Jedi Knight",
  "weapon": "Lightsaber",
  "cartoon": false
},)*/

//test.deleteOneRegister(60);