class APIHandler {
  constructor() {
    this.baseURL = "http://localhost:8000/characters";
  }

  async getAllCharacters() {
    try {
      const result = await axios.get(this.baseURL);
      console.log("All Characters:", result.data);
    } catch (err) {
      console.error("Error getting the Characters:", error);
    }
  }

  async getAllCharactersById(id) {
    try {
      const result = await axios.get(`${this.baseURL}/${id}`);
      console.log(`Character with the ID ${id}:`, result.data);
    } catch (err) {
      console.log(
        `An Error occured while retrieving Character with ID ${id}:`,
        error
      );
    }
  }

  async createCharacter() {
    try {
      const result = await axios.post(this.baseURL, data);
      console.log("Character created:", result.data);
    } catch (err) {
      console.log(
        "An Error occured while trying to create a Character:",
        error
      );
    }
  }

  async deleteCharacter(id) {
    try {
      const result = await axios.delete(`${this.baseURL}/${id}`);
      console.log(
        `This Character ${id}, was deleted Successfully:`,
        result.data
      );
    } catch (err) {
      console.error("AN Error occured trying to delete this Character:", error);
    }
  }

  async editCharacter(id, data) {
    try {
      const result = await axios.put(`${this.baseURL}/${id}`, data);
      console.log(`Character with ${id} updated:`, reult.data);
    } catch (err) {
      console.log(`Error updating the Character with ID ${id}:`, error);
    }
  }
}
