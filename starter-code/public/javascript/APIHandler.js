class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl
    this.axiosMinions = axios.create({
      baseURL: this.BASE_URL
    })
  }
  
  getFullList () {
   this.axiosMinions.get('/')
    .then(info => console.log(info.data))
    .catch(err => err)
  }

  getOneRegister (id) {
    this.axiosMinions.get(`/${id}`)
    .then(info => console.log(info.data))
    .catch(err => err)
  }

  createOneRegister (name, occupation, cartoon, weapon) {
    this.axiosMinions.post('/', { name, occupation, cartoon, weapon })
    .then(info => console.log(info))
    .catch(err => err)
  }

  updateOneRegister (id, name, occupation, cartoon, weapon) {
    this.axiosMinions.put(`/${id}`,{ name, occupation, cartoon, weapon })
    .then(info => console.log(info))
    .catch(err => err)

  }

  deleteOneRegister () {

  }
}
