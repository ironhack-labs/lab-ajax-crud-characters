class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
  }

  async getFullList() {
    const getList = await axios.get("http://localhost:8000/characters");
    console.log(getList.data);
    return getList.data;
  }

  async getOneRegister(id) {
    const getOne = await axios.get(`http://localhost:8000/characters/${id}`);
    console.log(getOne.data);
    return getOne.data;
  }

  async createOneRegister(datas) {
    await axios.post("http://localhost:8000/characters", datas);
    console.log(datas);
  }

  async updateOneRegister(id, updatedDatas) {
    await axios.patch(`http://localhost:8000/characters/${id}`, updatedDatas);
    console.log(updatedDatas);
  }

  async deleteOneRegister(id) {
    const deleteOne = await axios.delete(
      `http://localhost:8000/characters/${id}`
    );
    console.log(deleteOne.data);
    return deleteOne.data;
  }
}
