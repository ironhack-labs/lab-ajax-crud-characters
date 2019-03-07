class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList () {
    return axios.get("http://localhost:8000/characters")
    .then(response => response.data)
    .catch(error => console.log(error))
  }

  getOneRegister (id) {
    return axios.get("http://localhost:8000/characters/" + id)
    .then(response => response.data)
    .catch(error => console.log(error))
  }

  createOneRegister (name,occupation,cartoon,weapon) {
    const newCharacter = {name, occupation, cartoon, weapon}

    return axios.post("http://localhost:8000/characters", newCharacter)
    .then (response => response.data)
    .catch(error => console.log(error))
  }

  updateOneRegister (id,name,occupation,cartoon,weapon) {
    const newCharacter = {name, occupation, cartoon, weapon}

    return axios.put("http://localhost:8000/characters/" + id, newCharacter)
    .then (response => response.data)
    .catch(error => "Character not found")
  }

  deleteOneRegister (id) {
    return axios.delete("http://localhost:8000/characters/" + id)
    .then (response => "Character has been successfully deleted")
    .catch(error => "Character not found")
  }
}
