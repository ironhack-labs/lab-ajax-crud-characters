class APIHandler {
  constructor (baseUrl) {
      this.BASE_URL= baseUrl;
      this.APIRequest = axios.create({
      baseURL : this.BASE_URL
    })
  }

  async getFullList () {
    try {
      const { data: allCharacters } = await this.APIRequest.get('/characters')
       console.log('response :>> ', allCharacters);
      return allCharacters;
    } catch (error) {
      console.log(error);
      
    }
  
  }

  async getOneRegister () {
    try {
      const { data: oneCharacter } = await this.APIRequest.get('characters/:id')
      console.log('response :>> ', oneCharacter);
      return oneCharacter;
    } catch (error) {
      console.log(error);
      
    }
  
  }

  async createOneRegister () {
    try {
      const { body: oneCharacter } = await this.APIRequest.post('/characters')
      console.log('response :>> ', oneCharacter);
      return oneCharacter;
    } catch (error) {
      console.log(error);
      
    }
  
  }

  updateOneRegister () {

  }

  deleteOneRegister () {

  }
}
