//llamar al contenedor donde se mandarán los datos de todos nuestros personajes

class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }


  getFullList () {
    return axios.get(`${this.BASE_URL}/characters`)
    // .then((response)=> {
    //   console.log('the data is ', data);
    //   // printChars(data)
    // })
    // .catch(err=>console.log('Error', err))
  }

  getOneRegister (characterId) {
    return axios.get(`${this.BASE_URL}/characters/${characterId}`)
   } 

  createOneRegister (char) {
    const {name, occupation, cartoon, weapon } = char
    return axios.post(`${this.BASE_URL}/characters`, {name, occupation, cartoon, weapon })
  }

  updateOneRegister (characterId, char) {
    const { name, occupation, cartoon, weapon } = char
    return axios.patch(`${this.BASE_URL}/characters/${characterId}`, {name, occupation, cartoon, weapon })
      
  }

  deleteOneRegister (characterId) {
    return axios.delete(`${this.BASE_URL}/characters/${characterId}`) 
  }

}
