class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList = async () => {
    const response = await axios.get(`${this.BASE_URL}/characters`);
    return response ? response.data : null;
  };

  getOneRegister = async (characterId) => {
    const response = await axios
      .get(`${this.BASE_URL}/characters/${characterId}`)
      .catch((e) => console.log(e.message));
    return response ? response.data : null;
  };

  createOneRegister = async (characterData) => {
    console.log(characterData);
    const response = await axios.post(
      `${this.BASE_URL}/characters`,
      characterData
    );
    return response ? response.data : null;
  };

  updateOneRegister = async (characterId, updatedCharacter) => {
    const response = await axios.put(
      `${this.BASE_URL}/characters/${characterId}`,
      updatedCharacter
    );
    return response ? response.data : null;
  };

  deleteOneRegister = async (characterId) => {
    const response = await axios.delete(
      `${this.BASE_URL}/characters/${characterId}`
    );
    return response ? response.data : null;
  };
}
