//import Axios from "axios";

class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList() {
    return axios.get(`${this.BASE_URL}/characters`)
  }

  getOneRegister(id) {
    axios.get(`${this.BASE_URL}/characters/${id}`)
      .then(res => {
        const characterRegister = res.data
        console.log(`ID DEL CARACTER:`, characterRegister)
      })
      .catch(error => console.log('ERROR AL VER AL CHARACTER', error))
  }

  createOneRegister(newCharacterInfo) {
    axios.post(`${this.BASE_URL}/characters`, newCharacterInfo)
      .then(res => {
        console.log('New Character: ', res.data)
        //getFullList()
      })
      .catch(error => console.log('ERROR AL CREAR AL CHARACTER', error))

  }

  updateOneRegister(id, update) {
    axios.put(`${this.BASE_URL}/characters/${id}`, update)
      .then(res => console.log(res.data))
      .catch(error => console.log(error))
  }

  deleteOneRegister(id) {
    axios.delete(`${this.BASE_URL}/characters/${id}`)
      .then(res => console.log("Character has been successfully deleted", res.data))
      .catch(error => console.log(error))
  }
}