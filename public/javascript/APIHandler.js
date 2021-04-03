class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
  }
  //é dentro desses métodos que vamos usar o axios, bater na nossa api, pegar os dados e retorná-los

  async getFullList() {
    try {
      const response = await axios.get(this.BASE_URL + "/characters");
      return response.data;
    } catch (error) {
      console.log(error);
      return [];
    }
  }

  getOneRegister(characterId) {
    return new Promise((resolve) => {
      axios
        .get(`${this.BASE_URL}/characters/${characterId}`)
        .then((response) => {
          resolve(response.data);
        })
        .catch((error) => {
          console.log(error);
          resolve({});
        });
    });
  }

  async createOneRegister(newCharacterObject) {
    try {
      await axios.post(this.BASE_URL + "/characters", newCharacterObject);
    } catch (error) {
      console.log(error);
    }
  }

  async updateOneRegister(updateCharacterObject, characterId) {
    try {
      await axios.put(
        `${this.BASE_URL}/characters/${characterId}`,
        updateCharacterObject
      ); //pode fazer um put ou patch mas como vamos atualizar várias informações, fazemos put. Patch é para quando queremos atualizar só 1 informação
    } catch (error) {
      console.log(error);
    }
  }

  async deleteOneRegister(characterId) {
    try {
      await axios.delete(`${this.BASE_URL}/characters/${characterId}`);
    } catch (error) {
      console.log(error);
    }
  }
}
/* 
const teste = new APIHandler("http://localhost:8000");
teste.deleteOneRegister(5); //estou tentando deletar o id5
 */
