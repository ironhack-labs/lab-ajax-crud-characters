class APIHandler {

  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList () {
    return axios.get('http://ih-crud-api.herokuapp.com/characters').then(response => {
      return response.data;
    });
  }

  getOneRegister (id) {
    return axios.get('http://ih-crud-api.herokuapp.com/characters/'+id).then(response => {
      return response.data;
    });
  }

  createOneRegister (name, occupation, weapon, debt) {
    return axios.post('https://ih-crud-api.herokuapp.com/characters', {
      name: name,
      occupation: occupation,
      weapon: weapon,
      debt: debt
    }).then(response => {
      return response.data;
    }).catch((err) => {
      console.error(err);
    });
  }

  updateOneRegister (id, name, occupation, weapon, debt) {
    return axios.put('https://ih-crud-api.herokuapp.com/characters/'+id, {
      name: name,
      occupation: occupation,
      weapon: weapon,
      debt: debt
    }).then(response =>{
      return response.data;
    }).catch((err) => {
      console.error(err);
    });
  }

  deleteOneRegister (id) {
    return axios.delete('https://ih-crud-api.herokuapp.com/characters/'+id).then(response => {
      return response.data;
    })
  }
}
