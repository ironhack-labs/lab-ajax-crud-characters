class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList() {
    axios
      .get(`${this.BASE_URL}/characters`)
      .then(response => console.log(response.data))
      .catch(error => console.log(error));
  }

  getOneRegister(characterId) {
    const id = characterId;
    axios
      .get(`${this.BASE_URL}/characters/${id}`)
      .then(response => console.log(response.data))
      .catch(error => console.log(error));
  }

  createOneRegister(newCharacter) {
    axios
      .post(`${this.BASE_URL}/characters/`, newCharacter)
      .then(response => console.log(response.data))
      .catch(error => console.log(error));
  }

  updateOneRegister(characterInfo) {
    axios
      .patch(`${this.BASE_URL}/characters/${characterInfo.id}`, characterInfo)
      .then(response => console.log(response.data))
      .catch(error => console.log(error));
  }

  deleteOneRegister(characterId) {
    const id = characterId;
    axios
      .delete(`${this.BASE_URL}/characters/${id}`)
      .then(response => console.log(response.data))
      .catch(error => console.log(error));
  }
}

// function getCoinDeskInfo(startDate, endDate, currency) {
//   axios
//     .get(
//       `http://api.coindesk.com/v1/bpi/historical/close.json?start=${startDate}&end=${endDate}&currency=${currency}`
//     )
//     .then(response => console.log(response))
//     .catch(error => console.log(error));
// }
