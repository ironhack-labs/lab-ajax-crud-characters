class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
  }

  async getFullList() {
    const characters = await axios.get("http://localhost:8000/characters");
    console.log(characters.data);
  }

  async getOneRegister(id) {
    const oneCharacter = await axios.get(
      "http://localhost:8000/characters/" + id
    );
    console.log(oneCharacter.data);
  }

  async createOneRegister(object) {
    const createOne = await axios.post(
      "http://localhost:8000/characters",
      object
    );
    console.log(createOne);
  }

  async updateOneRegister(id, object) {
    const updateOne = await axios.patch(
      "http://localhost:8000/characters/" + id,
      object
    );
    console.log(updateOne);
  }

  async deleteOneRegister(id) {
    const delCharacter = await axios.delete(
      "http://localhost:8000/characters/" + id
    );
    console.log(delCharacter.data);
  }
}
