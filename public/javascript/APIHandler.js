


class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList () {
    return axios.get(this.BASE_URL+"/characters").then(result=>result.data).catch(()=>console.log('err'))
  }

  getOneRegister () {
    const inputID= document.getElementById('character-id')
    const inputValue = inputID.value
    return axios.get(`${this.BASE_URL}/characters/${inputValue}`).then(result=>result.data).catch(()=>console.log('err'))
  }

  createOneRegister (event) {
      const character = {
        name:event.target.name.value,
        occupation:event.target.occupation.value,
        weapon:event.target.weapon.value,
        cartoon:event.target.cartoon.checked
      }
        

    
      return axios.post(`${this.BASE_URL}/characters`,character)
  }

  updateOneRegister (event) {
    const inputID = event.target['chr-id'].value
    const character = {
      name:event.target.name.value,
      occupation:event.target.occupation.value,
      weapon:event.target.weapon.value,
      cartoon:event.target.cartoon.checked
    }
    console.log(inputID)
    return axios.put(`${this.BASE_URL}/characters/${inputID}`,character)
  }

  deleteOneRegister () {
    const inputID= document.getElementById('character-id-delete')
    const inputValue = inputID.value
    return axios.delete(`${this.BASE_URL}/characters/${inputValue}`).then(result=>result.data).catch(()=>console.log('err'))
  }
}
