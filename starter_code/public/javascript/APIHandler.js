class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList() {

    axios.get(`${this.BASE_URL}/characters`)
      .then(response => {
        console.log(response.data)
        return response.data
      })

      .catch(err => {
        console.error(err)
      })

  }

  // GET ONE RESULT
  getOneRegister(id) {
    let characterID = id;
    console.log(characterID);
    axios.get(`${this.BASE_URL}/characters/${id}`)

      .then(response => {
        console.log(response.data);
        return response.data;
      })

      .catch(err => {
        console.error(err)
      })
  }

  // NEW CHARACTER
  createOneRegister(newCharacter) {
    let characterData = newCharacter;
    axios.post(`${this.BASE_URL}/characters/`, characterData)
      .catch(err => {
        console.error(err)
      })
  }

  // EDIT
  updateOneRegister(editCharacter) {
    let characterData = editCharacter;
    axios.patch(`${this.BASE_URL}/characters/${characterData.id}`, characterData)
      .catch(err => {
        console.error(err)
      })
  }

  // DELETE
  deleteOneRegister(id) {
    let characterID = id;
    axios.delete(`${this.BASE_URL}/characters/${id}`)

      .then(response => {
        console.log("deleted");
        return response.data;
      })

      .catch(err => {
        console.error(err)
      })

  }
}