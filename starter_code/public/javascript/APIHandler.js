class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList() {
    console.log("get full list" + this.BASE_URL);
    return axios
      .get(`${this.BASE_URL}/characters`)

      .catch(error => {
        console.log(error);
      });
  }

  getOneRegister(id) {
    console.log("get one");
    return axios.get(`${this.BASE_URL}/characters/${id}`);
  }

  createOneRegister(inputs) {
    console.log(inputs);
    let allCharacters = {};
    let highestId = 1;
    axios
      .get(`${this.BASE_URL}/characters`)
      .then(result => {
        console.log(result);
        allCharacters = result.data.sort((a, b) => {
          return a.id < b.id;
        });
        highestId = allCharacters[0].id;
        console.log(allCharacters);
        console.log(highestId);
      })
      .then(result => {
        axios
          .post(`${this.BASE_URL}/characters/`, {
            id: highestId + 1,
            name: inputs.name,
            occupation: inputs.occupation,
            weapon: inputs.weapon,
            cartoon: inputs.cartoon
          })
          .catch(error => {
            console.log(error);
          });
      })
      .catch(error => {
        console.log(error);
      });
    console.log("create one");
  }

  updateOneRegister(inputs) {
    console.log("update one");
    console.log(inputs);
    axios
      .patch(`${this.BASE_URL}/characters/${inputs["chr-id"]}`, {
        id: inputs["chr-id"],
        name: inputs.name,
        occupation: inputs.occupation,
        weapon: inputs.weapon,
        cartoon: inputs.cartoon
      })
      .catch(error => {
        console.log(error);
      });
  }

  deleteOneRegister(id) {
    console.log("delete one");
    return axios.delete(`${this.BASE_URL}/characters/${id}`);
  }
}
