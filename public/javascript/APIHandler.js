class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList = async () => {
    const result = await axios.get(`${this.BASE_URL}/characters`);
    return result.data;
  };

  getOneRegister = async (id) => {
    const result = await axios.get(`${this.BASE_URL}/characters/${id}`);
    return result.data;
  };

  createOneRegister = async (newCharacter) => {
    console.log(newCharacter);
    if (
      !newCharacter.name ||
      !newCharacter.occupation ||
      !newCharacter.weapon
    ) {
      throw "Missing Fields";
    }
    if (!newCharacter.hasOwnProperty("cartoon")) {
      newCharacter.cartoon = false;
    }
    const result = await axios.post(
      `${this.BASE_URL}/characters`,
      newCharacter
    );
    return result.data;
  };

  updateOneRegister = async (id, updatedCharacter) => {
    try {
      const result = await axios.put(
        `${this.BASE_URL}/characters/${id}`,
        updatedCharacter
      );
      return result.data;
    } catch (error) {
      throw error;
    }
  };

  deleteOneRegister = async (id) => {
    const result = await axios.delete(`${this.BASE_URL}/characters/${id}`);
    return result.data;
  }
}