class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList () {
    return axios.get(this.BASE_URL + '/characters')
    .then(allCharacters => {
          return allCharacters.data;
      })
    .catch(error => {
        console.log('Oh No! Error is: ', error);  
    })
  }

  getOneRegister (id) { 
    return axios.get(this.BASE_URL + '/characters/' + id)
    .then(character => { 
        return character.data;
    })
    .catch(error => {
      console.log('Oh No! Error is: ', error);  
    })
  }

  createOneRegister (model) {
    return axios.post(this.BASE_URL + '/characters', model)
    .then(character => {
        return character.data;
    })
    .catch(error => {
      console.log('Oh No! Error is: ', error);  
    })
  }

  updateOneRegister (id, model) {
    return axios.put(this.BASE_URL + '/characters/' + id, model)
    .then(character => {
      return character.data;
    })
    .catch(() => {
      return "Character not found"  
    })
  }

  deleteOneRegister (id) {
    return axios.delete(this.BASE_URL + '/characters/' + id)
    .then(() => {
      return "Character has been successfully deleted";
    })
    .catch(() => {
      return "Character not found"  
    })
  }
}
