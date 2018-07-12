class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList () {
    return axios.get(`${this.BASE_URL}/characters`)
    .then(res=>{return res.data})
  }

  getOneRegister (id) {
    return axios.get(`${this.BASE_URL}/characters/${id}`)
    .then(res=>{return res.data})
  }

  createOneRegister (nick,occup,weapon,cartoon) {
    axios.post(`${this.BASE_URL}/characters`,{ 
      name: nick, occupation: occup, weapon: weapon, cartoon: cartoon
     })
  }

  updateOneRegister (id,nick,occup,weapon,cartoon) {
    let obj={
      name:nick,
      occupation:occup,
      weapon:weapon,
      cartoon: cartoon
    }
    /*{ Probe pasandole un objeto y metiendole el objeto directamente
       y no funciona en ningun caso
      name: nick, occupation: occup, weapon: weapon, cartoon: cartoon
    }*/
    return axios.patch(`${this.BASE_URL}/characters/${id}`,obj).then (res=>{return res})
  }

  deleteOneRegister (id) {
    axios.delete(`${this.BASE_URL}/characters/${id}`)
  }
}
