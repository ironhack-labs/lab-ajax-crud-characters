class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList() {
    return axios
      .get(this.BASE_URL + "/characters")
      .then(result => {
        $('.characters-container').html('')
        return result;
      })
      .catch(err => {
        console.log(err);
      });
  }

  getOneRegister() {
    const id = document.getElementById("valor-id").value;
    return axios
      .get(this.BASE_URL + "/characters/" + id)
      .then(result => {
        $('.characters-container').html('')
        return result;
      })
      .catch(err => {
        console.log(err);
      });
  }

  createOneRegister(character) {
    return axios.post(this.BASE_URL + "/characters", character)
      .then(result => {
        console.log("listo")
        $('.characters-container').html('')
        this.getFullList()
      })
      .catch(err => {
        return err
      })
  }

  updateOneRegister(e) {
    e.preventDefault()
    const character = {
      name: e.target.name.value,
      occupation: e.target.occupation.value,
      weapon: e.target.weapon.value,
      cartoon: e.target.cartoon.value
    };
    const boton = document.querySelector('#send-data-up')
    const form = document.querySelector('#edit-character-form')
    const id = e.target.charid.value;
    return axios.patch(this.BASE_URL + '/characters/' + id, character)
    .then(result =>{
      form.name.value =result.data.name
      form.weapon.value =result.data.weapon
      form.occupation.value =result.data.occupation
    })


  }

  deleteOneRegister(id) {
    const boton = document.querySelector('#delete-one')
    if (!confirm("¿Seguro de borrar?")) {
      return
    }
    return axios.delete(this.BASE_URL + '/characters/' + id)
    .then(result => {

      this.getFullList()
    })
    .catch (err => console.log(err))
  }
}
