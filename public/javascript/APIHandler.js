class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  async getFullList () {
    const fullList = await axios('${this.BASE_URL}/characters');
    console.log(fullList.data);
    return fullList.data;
  }

  async getOneRegister (id) {
    const getOne = await axios('${this.BASE_URL}/characters/${:id}');
    return getOne.data;
  }

  async createOneRegister (newChar) {
    const addedChar = await axios.post('${this.BASE_URL}/characters', newChar);
  }

  async updateOneRegister (id, info) {
    try{
    const updateChar = await axios.patch('${this.BASE_URL}/characters/${:id}', info);
    console.log (updateChar);
  } catch(error){
    console.log('could not find character´s id', error);
  };
  }

  async deleteOneRegister (id) {
    try{
          const deleteChar = await axios.delete('${this.BASE_URL}/characters/${:id}');
          console.log('character has been deleted')
    }catch(error){
      console.log('could not delete character', error);
    };

  }
}
