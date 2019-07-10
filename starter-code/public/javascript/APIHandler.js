class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
    this.axios = axios.create({});
  }
/*
      <div class="character-info">
        <div class="name">Character Name</div>
        <div class="occupation">Character Occupation</div>
        <div class="cartoon">Is a Cartoon?</div>
        <div class="weapon">Character Weapon</div>
      </div>
*/

  getFullList () {
    return this.axios.get(`http://localhost:8000/characters`)
      .then(lista => {
        return lista.data;
      })
      .catch(err => console.log(err));
  }

  getOneRegister (id) {
    return this.axios.get(`http://localhost:8000/characters/${id}`)
      .then(lista => {
        return lista.data;
      })
      .catch(err => console.log(err));
  }

  createOneRegister (name, occupation, weapon, cartoon) {
    this.axios.post(`http://localhost:8000/characters`, {name, occupation, weapon, cartoon})
      .then(response => {
      })
      .catch(err => console.log(err));
  }

  updateOneRegister () {

  }

  deleteOneRegister (id) {
    return this.axios.delete(`http://localhost:8000/characters/${id}`)
      .then(retorno => {
        return retorno;
      })
      .catch(err => console.log(err));
  }
}
