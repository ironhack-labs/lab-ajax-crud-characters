class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList () {
    axios.get("http://localhost:8000/characters")
  .then(response => {
    console.log(response.data)
  })
  .catch(err => {
    console.error("ERROR", err)
  })
  }

  getOneRegister () {
    axios.get("http://localhost:8000/characters/"+id)
  .then(response => {
    console.log(response.data)
  })
  .catch(err => {
    console.error("ERROR", err)
  })
  }

  createOneRegister () {
    axios.post("http://localhost:8000/characters/", elements)
    .then(response => {
      console.log(response.data)
    })
    .catch(err => {
      console.error("ERROR", err)
    })
  }

  updateOneRegister () {
    axios.put("http://localhost:8000/characters/"+id, update)
    .then(response => {
      console.log(response.data)
    })
    .catch(err => {
      console.error("ERROR", err)
    })
  }

  deleteOneRegister () {
    axios.delete("http://localhost:8000/characters/"+id)
    .then(response => {
      console.log(response.data)
    })
    .catch(err => {
      console.error("ERROR", err)
    })
  }
}