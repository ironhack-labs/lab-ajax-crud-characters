class APIHandler {
  constructor (baseURL) {

    this.minions= axios.create ({baseURL: baseURL});  
  }

  getFullList () {
this.minions                                              // .get para llamar a characters y añadirlo 
.get("/characters")
.then(minions => console.log(minions)

  minions.data.forEach(element => {
  const { id, name, occupation,weapon } = element
  const characterLi = <li><strong>Personaje creado</strong><br>Nombre: ${name} (id ${id}), ocupación: ${occupation}, arma: ${weapon}</li>
  document.getElementById('personajes').innerHTML += characterLi
});
}))
.catch(err => console.log(err))

  getOneRegister () {

    this.minions
    .get("")
    .then()
    .catch()


  }

  createOneRegister () {

  }

  updateOneRegister () {

  }

  deleteOneRegister () {

  }
