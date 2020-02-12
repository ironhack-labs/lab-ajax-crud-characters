class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
    this.axiosApp = axios.create({
      baseURL: this.BASE_URL
    })
  }

  getFullList() {
    return this.axiosApp.get(`/characters`)
      .then(theCharacter => theCharacter)
  }

  getOneRegister(characterId) {
    return this.axiosApp.get(`/characters/${characterId}`)
      .then(theCharacter => theCharacter)
  }

  createOneRegister(characterInfo) {

    this.axiosApp.post('characters', characterInfo)
      .then(response => console.log(response))
      .catch(error => console.log('Oh No! Error is: ', error))

  }

  updateOneRegister(id, person) {

    this.axiosApp.put(`characters/${id}`, person)
      .then(response => {
        const character = response.data
        document.getElementById("editName").value = character.name
        document.getElementById("editOccupation").value = character.occupation
        document.getElementById("editWeapon").value = character.weapon
      })
      .catch(error => console.log('Oh No! Error is: ', error))

  }

  deleteOneRegister(characterId) {

    this.axiosApp.delete(`/characters/${characterId}`)
      .then(() => alert("Me has borrado capullo"))
      .catch(err => console.log(err))
  }
}