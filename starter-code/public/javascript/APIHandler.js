class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList () {
    return axios.get(this.BASE_URL + '/characters')
    .then(response => {
      return response
    })
    .catch(error => {
      console.log("The error is: ", error);
    })
  }

  getOneRegister (id) {
    return axios.get(this.BASE_URL + `/characters/${id}`)
    .then(response => {
      console.log(response)
      return response;
    })
    .catch(error => {
      console.log("The error is: ", error);
    })
  }

  createOneRegister (name, occupation, weapon, cartoon) {
   
    const characterInfo = {
      name,
      occupation,
      weapon,
      cartoon,
   };

    axios.post('http://localhost:8000/characters', characterInfo)
    .then(response => {
      return response;
    })
    .catch(error => {
        console.log("Error is: ", error);
    })

  }

  updateOneRegister () {
    
  }

  deleteOneRegister (id) {
    return axios.delete(`http://localhost:8000/characters/${id}`)
    .then(response => {
      return response;
    })
    .catch(error => {
      console.log("The error is: ", error);
    })
  }
}
