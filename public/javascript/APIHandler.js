class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
  }

  async getFullList() {
    try {
      const getData = await axios.get("http://localhost:8000/characters");
      return getData.data;
    } catch (err) {
      console.log(err)
    }
  }

  async getOneRegister(id) {
    if (!id) {
      return "id not found";
    } else {
      try {
        const getOneData = await axios.get("http://localhost:8000/characters/" + id);
        return getOneData.data;
      } catch (err) {
        console.log(err);
        return "id not found";
      }
    }

  }

  async createOneRegister(inputObject) {

    const { name, occupation, cartoon, weapon } = inputObject;
    if (name && occupation && weapon) {
      try {
        const newObject = await axios.post("http://localhost:8000/characters", inputObject);
        return newObject.data;
      } catch (err) {
        console.log(err)
      }
    } else {
      return "fill all the fields"
    }

  }

  async updateOneRegister(id, updateValue) {

    // { name: string, occupation: string, cartoon: boolean, weapon: string }
    if (!id) {
      return "add id";
    } else {
      try {
        return await axios.patch("http://localhost:8000/characters/" + id, updateValue);

      } catch (err) {
        console.log(err)
        return "add id";
      }
    }

  }

  async deleteOneRegister(id) {
    if (!id) {
      return "Character not found"
    } else {
      try {
        await axios.delete("http://localhost:8000/characters/" + id);
        return "Character has been successfully deleted";
      } catch (err) {
        console.log(err)
        return "Character not found"
      }
    }
  }
}
