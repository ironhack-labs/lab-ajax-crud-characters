class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList () {
    return axios.get(`http://localhost:8000/characters`)
    .then(personajes => {
      console.log(personajes)
      return personajes.data;
    })
  }

  getOneRegister (id) {
      return axios.get(`http://localhost:8000/characters/${id}`)
      .then(res => {
          console.log("RECIBIDO")
          console.log(res.data)
      })
  } 
  
  

  createOneRegister (newdata) {
    return axios.post (`http://localhost:8000/characters`, newdata)
    console.log(newdata)
    .then(res => {
      console.log("Añadido")
      console.log(res.data)
  })

  }

  updateOneRegister (id, newdata) {
    return axios.patch (`http://localhost:8000/characters/${id}`, newdata)
    .then(res => {
      console.log("Modificado")
      console.log(res.data)
  })
  }

  deleteOneRegister (id, del) {
    return axios.delete (`http://localhost:8000/characters/${id}`, del)
    .then(res => {
      console.log("Character has been successfully deleted")
  })
  .catch(err => console.log("Character not found"))
  }
}
