const charactersApi = axios.create({baseURL: 'http://localhost:8000/characters'})

class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList () {

  }

  getOneRegister = (id) => {
    charactersApi.get(id)
    .then(response => {
      console.log(response.data)
    })
    .catch(err => {
      console.error(err)
    })
  }



  createOneRegister () {

  }

  updateOneRegister () {

  }

  deleteOneRegister () {

  }
}



// const pokeApi = axios.create({
//   baseURL: 'https://pokeapi.co/api/v2/pokemon'
// })

// function getPokemonInfo(id) {
// pokeApi.get(id)
// .then(response => {
//   console.log(response.data)
// })
// .catch(err => {
//   console.error(err)
// })
// }

// document.getElementById("pokeButton").onclick = function(){
// getPokemonInfo("1");
// }

// document.getElementById("pokeButton").onclick = function(){
// getPokemonInfo("1");
// }