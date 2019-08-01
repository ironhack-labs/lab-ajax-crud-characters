class APIHandler {
  constructor (baseUrl) {
    this.minionsapi = axios.create({baseURL: baseUrl})
  }

  getFullList () {
    this.minionsapi.get('characters')
    .then(result => console.log(result))
    .catch(err => console.log(err))
  }

  getOneRegister () {
    this.minionsapi.get('characters/:id')
    .then(result => console.log(result))
    .catch(err => console.log(err))
  }

  createOneRegister () {
    this.minionsapi.post('characters')
    .then(result => console.log(result))
    .catch(err => console.log(err))
  }

  deleteOneRegister () {
    this.minionsapi.get('characters/:id')
    .then(result => console.log(result))
    .catch(err => console.log(err))
  }

  updateOneRegister () {
    this.minionsapi.put('characters/:id')
    .then(result => console.log(result))
    .catch(err => console.log(err))
  }

  }