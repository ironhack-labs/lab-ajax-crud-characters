class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
  }

  async getFullList() {
    try {
      const res = await axios.get(`${this.BASE_URL}/characters`)

      return res

    } catch {
      return false
    }
  }

  async getOneRegister(id) {
    try {
      const res = await axios.get(`${this.BASE_URL}/characters/${id}`)
      console.log("res:" + res)
      return res
    } catch {
      return false
    }
  }

  async createOneRegister(elobjeto) {
    try {
      const res = await axios.post(`${this.BASE_URL}/characters/`, elobjeto)
      return true
    } catch {
      return false
    }
  }

  async updateOneRegister(elobjeto, id) {
    try {
      const res = await axios.patch(`${this.BASE_URL}/characters/${id}`, elobjeto)
      return true
    } catch {
      return false
    }
  }

  async deleteOneRegister(id) {
    try {
      const res = await axios.delete(`${this.BASE_URL}/characters/${id}`)
      return true
    } catch {
      return false
    }
  }


}