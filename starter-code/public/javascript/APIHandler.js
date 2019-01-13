class APIHandler {
  getAllCharacters() {
    return axios.get("http://localhost:8000/characters");
  }
  getSingleCharacter() {
    const characterID = $("#character-id").val();
    return axios.get("http://localhost:8000/characters/" + characterID);
  }
  createCharacter(name, occupation, weapon, cartoon) {
    return axios.post("http://localhost:8000/characters", {
      name,
      occupation,
      weapon,
      cartoon
    });
  }
  deleteCharacter(name, occupation, weapon, cartoon) {
    const characterID = $("#character-id-delete").val();
    return axios.delete("http://localhost:8000/characters/" + characterID);
  }
  editCharacter(name, occupation, weapon, cartoon) {
    const characterID = $("#chr-id").val();
    return axios.put("http://localhost:8000/characters/" + characterID, {
      name,
      occupation,
      weapon,
      cartoon
    });
  }
}
