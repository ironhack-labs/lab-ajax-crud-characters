class APIHandler {
  constructor () {
    this.index = axios.create({
      baseURL: "https://minions-api.herokuapp.com/"
    })
  }

  getFullList = () => this.index.get("/characters")

  getOneRegister = minionId => this.index.get(`/characters/${minionId}`)

  createOneRegister = minionInfo => this.index.post("/characters", minionInfo)

  updateOneRegister = (minionId, minionInfo) => this.index.put(`/characters/${minionId}`, minionInfo)

  deleteOneRegister = minionId => this.index.delete(`/characters/${minionId}`)

}
