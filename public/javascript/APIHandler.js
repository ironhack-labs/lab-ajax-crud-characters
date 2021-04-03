class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  async getFullList () {
    try {
      const response = await axios.get(`${this.BASE_URL}/characters`);      
      return response.data;

    }catch (error) {
      console.log(error)
      return [];
    }
  }

  async getOneRegister (id) {
    try {
      const response = await axios.get(`${this.BASE_URL}/characters/${id}`);
      return response.data;
    } catch (error) {
      console.log(error);
      alert('Character not found')
    }
  }

  async createOneRegister (newCharacter) {
    const createButton = document.getElementById('send-data');
    try {
      const response = await axios.post(`${this.BASE_URL}/characters`, newCharacter);
      createButton.classList.add("active");
      return response.data;
     
    } catch (error) {
      console.log(error)
      createButton.classList.add("error")
    }
  }

  async updateOneRegister (id, updatedCharacter) {
    const updateButton = document.getElementById("update");
    console.log(updateButton)
      try {
      const response = await axios.put(`${this.BASE_URL}/characters/${id}`, updatedCharacter);
      updateButton.classList.add("active");
      return response.data;
    } catch (error) {
      console.log(error)
      alert('Character not found');
      updateButton.classList.add("error")
    }
  }

  async deleteOneRegister (id) {
    const deleteButton = document.getElementById('delete-one');
    try {
      await axios.delete(`${this.BASE_URL}/characters/${id}`);
      alert("Character has been successfully deleted");
      deleteButton.classList.add("active")
    } catch {
      deleteButton.classList.add("error")
      alert("Character not found")
    }
  }
}
