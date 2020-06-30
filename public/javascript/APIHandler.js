
const axiosApp = axios.create({
  baseURL: 'http://localhost:8000'

})

class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList() {
    return axiosApp
    .get(`${this.BASE_URL}/characters`)
    .then(allCharacters => console.log(allCharacters.data))
    .catch(error => console.log(error))
  }

  getOneRegister(id) {
    // const id = document.querySelector('#fetch-one').value
    return axiosApp
    .get(`${this.BASE_URL}/characters/${id}`)
    .then(oneCharacter => console.log(oneCharacter.data))
    .catch(error => console.log(error))
  }

  createOneRegister() {

    const input = document.querySelectorAll('#new-character-form input')
    const newCharacter = {
      name: input[0].value,
      occupation: input[1].value,
      weapon: input[2].value,
      cartoon: input[3].checked
  }

    return axiosApp.
      post(`${this.BASE_URL}/characters`, newCharacter)
      .then(newCharacterCheck => console.log(newCharacterCheck.data))
      .catch(error => console.log('oh no error', error))
  }

  updateOneRegister() {
   
    const inputEdit = document.querySelectorAll('#edit-character-form input')
    const characterEdit = {
      id: inputEdit[0].value,
      name: inputEdit[1].value,
      occupation: inputEdit[2].value,
      weapon: inputEdit[3].value,
      cartoon: inputEdit[4].checked
    }

    return axiosApp
    .put(`${this.BASE_URL}/characters/:id`, characterEdit)
    .then(oneCharacter => console.log(oneCharacter.data))
    .catch(error => console.log(error))
  }

  deleteOneRegister() {
    return axiosApp
    .delete(`${this.BASE_URL}/characters/:id`)
    .then(deleteCharacter => console.log(deleteCharacter.data))
    .catch(error => console.log(error))
  }

  
}
