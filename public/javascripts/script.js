let api_url = "http://localhost:8000/characters";

const charApi = axios({
  method: GET,
  url: "The url the server is going to receive.", 
  params: "URL parameters to be sent with the request" ,
})

function getPokemonInfo(id) {
pokeApi.get(id)
.then(response => {
  console.log(response.data)
})
.catch(err => {
  console.error(err)
})
}
