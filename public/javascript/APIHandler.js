class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList = async () => {
    const {data} = await axios.get(`${this.BASE_URL}/characters`);
    return data;
  };

  getOneRegister = async (characterid) => {
    const {data} = await axios.get(`${this.BASE_URL}/characters/${characterid}`);
    return data;
  };

  createOneRegister = async (newCharacter) => {
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
    const {data} = await axios.post(
      `${this.BASE_URL}/characters`,
      newCharacter
    );
    return data;
  };

  updateOneRegister = async (id, updatedCharacter) => {
    try {
      const {data} = await axios.put(
        `${this.BASE_URL}/characters/${id}`,
        updatedCharacter
      );
      return data;
    } catch (error) {
      throw error;
    }
  };

  deleteOneRegister = async (id) => {
    const {data} = await axios.delete(`${this.BASE_URL}/characters/${id}`);
    return data;
  };
}
