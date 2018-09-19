class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

 getFullList () {
   return axios.get(`${this.BASE_URL}/characters`)
   .then(res => {
     console.log(res.data);
     return res.data
   })
   .catch(e => console.log(e))
  }

  getOneRegister (id) {
    return axios.get(`${this.BASE_URL}/characters/${id}`)
    .then(res => {
      return res.data
    })
    .catch(e => console.log(e));
  }

  createOneRegister (nameNew, occupationNew, weaponNew, cartoonNew) {
    let characterNew = {
      name: nameNew,
      occupation: occupationNew,
      weapon: weaponNew,
      cartoon: cartoonNew
    }
    axios.post(`${this.BASE_URL}/characters`, characterNew)
    .then(res => {
      console.log(res)
    })
    .catch(e => console.log(e))
  }

  updateOneRegister () {
    let characterUpdate = {
      name: nameUpate,
      occupation: occupationUpdate,
      weapon: weaponUpdate,
      cartoon: cartoonUpate
    }
    axios.patch(`${this.BASE_URL}/characters/${id}}`)
    .then(res => {
      console.log("Character updated!")
      return res.data
    })
  }

  deleteOneRegister (id) {
    axios.delete(`${this.BASE_URL}/characters/${id}`)
    .then(res => {
      console.log("Character deleted!")
    }) 
    .catch(e => {
      console.log(e)
    })
  }
}


