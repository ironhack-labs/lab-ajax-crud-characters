class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
  }

  async getFullList() {
    try {
      const getList = await axios.get("http://localhost:8000/characters");
      console.log(getList.data);
      return getList.data;
    } catch (error) {
      console.log(error);
    }
  }

  async getOneRegister(id) {
    try {
      const getOne = await axios.get(`http://localhost:8000/characters/${id}`);
      console.log(getOne.data);
      return getOne.data;
    } catch (error) {
      console.log(error);
    }
  }

  async createOneRegister(datas) {
    try {
      await axios.post("http://localhost:8000/characters", datas);
      console.log(datas);
    } catch (error) {
      console.log(error);
    }
  }

  async updateOneRegister(id, updatedDatas) {
    try {
      await axios.patch(`http://localhost:8000/characters/${id}`, updatedDatas);
      console.log(updatedDatas);
    } catch (error) {
      console.log(error);
    }
  }

  async deleteOneRegister(id) {
    try {
      const deleteOne = await axios.delete(
        `http://localhost:8000/characters/${id}`
      );
      console.log(deleteOne.data);
      return deleteOne.data;
    } catch (error) {
      console.log(error);
    }
  }
}
