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

  createOneRegister() {
    await axios.post("http://localhost:8000/characters");
    console.log();
  }

  updateOneRegister() {
    //axios.something here...
    // return a promise (don't forget)
  }

  deleteOneRegister() {
    //axios.something here...
    // return a promise (don't forget)
  }
}
