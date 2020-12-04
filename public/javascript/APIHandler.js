class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList (baseUrl) {
    axios.get(baseUrl + '/characters')
      .then(fullListFromApi => {
        console.log(fullListFromApi)
      })
      .catch(err => console.log(err));
  }

  getOneRegister (baseUrl) {
    axios.get(baseUrl + `/characters/${id}`)
      .then(oneRegisterFromApi => {
        console.log(oneRegisterFromApi)
      })
      .catch(err => console.log(err));
  }

  createOneRegister (baseUrl) {
    axios.post(baseUrl + '/characters', {name, occupation, weapon, cartoon})
      .then(createOneApi => {
        console.log(createOneApi);
      })
      .catch(err => console.log(err));
  }

  updateOneRegister (baseUrl) {
    axios.put(baseUrl + `/characters/${id}`)
      .then(updateOneApi => {
        console.log(updateOneApi)
      })
      .catch(err => console.log(err));
  }

  deleteOneRegister (baseUrl) {
    axios.delete(baseUrl + `/characters/${id}`)
      .then(deleteOneApi => {
        console.log(deleteOneApi)
      })
      .catch(err => console.log(err));
  }
}
