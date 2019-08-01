class APIHandler {
  constructor (baseUrl) {
    this.minions=axios.create({baseURL: baseUrl})
  }

  getFullList() {
    this.minions.get("/characters")
    .then( minions => {
      console.log(minions)

      minions.data.forEach(element => {
        const { id, name, occupation,weapon } = element
        const characterLi = `<li><strong>Personaje creado</strong><br>Nombre: ${name} (id ${id}), ocupación: ${occupation}, arma: ${weapon}`
        document.getElementById('personajes').innerHTML += characterLi
      });
    })
    .catch(err => console.log(err))
  }

  getOneRegister () {

  }

  createOneRegister () {

  }

  updateOneRegister () {

  }

  deleteOneRegister () {

  }
}
