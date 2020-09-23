console.log("running");


class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList () {
      return axios
      .get(`${this.BASE_URL}/characters`);
  }

  getOneRegister (id) {
     return axios
        .get(`${this.BASE_URL}/characters/${id}`);
  }
  
  createOneRegister (newCharacterInfo) {
    return axios
    .post(`${this.BASE_URL}/characters`, newCharacterInfo)
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
   return axios
    .delete(`${this.BASE_URL}/characters/${id}`);
  }
}
/*
const test = new APIHandler;
test.getFullList();
test.getOneRegister(2);
//test.getOneRegister(1);
test.createOneRegister({
  "name": "Leia Skywalker",
  "occupation": "Jedi Knight",
  "weapon": "Lightsaber",
  "cartoon": false
},)*/

//test.deleteOneRegister(60);