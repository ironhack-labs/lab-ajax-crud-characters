class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList () {

    return axios.get(`${this.BASE_URL}/characters`)
    .then(paco => {
      return paco.data
    })
  }

  getOneRegister (myId) {
    return axios.get(`${this.BASE_URL}/characters/${myId}`)
    .then(paco => {
      return paco.data

    })
  }

  createOneRegister () {
    const newChar = {
      name: document.querySelector('#myName').value,
      occupation: document.querySelector('#myOccupation').value,
      weapon: document.querySelector('#myWeapon').value,
      cartoon: document.querySelector('#myCartoon').checked,
    }
  return axios.post(`${this.BASE_URL}/characters`, newChar)
    
  }

  updateOneRegister () {
    const editChar = {
      name: document.querySelector('#editName').value,
      occupation: document.querySelector('#editOccupation').value,
      weapon: document.querySelector('#editWeapon').value,
      cartoon: document.querySelector('#editCartoon').checked,
      ey: 'hijoput'
    }
    const editId = document.querySelector('#editId').value;
    return axios.patch(`${this.BASE_URL}/characters/${editId}`, editChar)    
  }

  deleteOneRegister () {
    const deleteId = document.querySelector('#deleteId').value;
    return axios.delete(`${this.BASE_URL}/characters/${deleteId}`)  

  }
}
