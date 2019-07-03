class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
   // this.pepe = +document.getElementById('pepito').value;
  }

  getFullList() {
    return axios.get(`${this.BASE_URL}/characters/`)
    .then((data)=>{
      return data.data
    })
  }

  

  getOneRegister() {
    this.pepe = +document.getElementById('pepito').value;
    return axios.get(`${this.BASE_URL}/characters/${this.pepe}`)
    .then((data)=>{
      document.querySelector(`.name`).innerHTML = data.data.name
      document.querySelector(`.occupation`).innerHTML = data.data.occupation
      document.querySelector(`.cartoon`).innerHTML = data.data.cartoon
      document.querySelector(`.weapon`).innerHTML = data.data.weapon
      return data.data
    })
  }

  createOneRegister() {
    axios.get("/characters/:id");
  }

  updateOneRegister() {}

  deleteOneRegister() {
    this.felipe = +document.getElementById('pepita').value;
    console.log(this.felipe)
    return axios.put(`${this.BASE_URL}/characters/${this.felipe}`)
    .then((data)=>{
      data.data.name = ""
      data.data.occupation = ""
      data.data.cartoon = ""
      data.data.weapon = ""
      return data.data
    })
  }
}
