
class CharactersApiHandler {

    constructor() {
        this.axiosApp = axios.create({
            baseURL: 'https://minions-api.herokuapp.com/'
        })
    }

    getAllCharacters = () => this.axiosApp.get('/characters')
    // saveFood = foodInfo => this.axiosApp.post('/foods/newFood', foodInfo)
    // getOneFood = foodId => this.axiosApp.get(`/foods/details/${foodId}`)
    // editFood = (foodId, foodInfo) => this.axiosApp.put(`/foods/edit/${foodId}`, foodInfo)


  getOneRegister = id => {
return this.axiosApp.get(`/characters/${id}`)
  }

  createOneRegister = characterInfo => (this.axiosApp.post('/characters', characterInfo))

  updateOneRegister = (id, info ) => (this.axiosApp.put(`/characters/${id}`,  info))


  deleteOne = id =>  this.axiosApp.delete(`/characters/${id}`) 
}