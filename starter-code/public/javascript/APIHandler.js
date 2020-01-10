class APIHandler {
  constructor(baseUrl){
      this.baseUrl = baseUrl;
  }
  getAllCharacters(){
      return axios.get(this.baseUrl + "/characters")
      .then(response => response.data)
  }
  getSingleCharacter(id){
      return axios.get(this.baseUrl + "/characters/" + id)
      .then(response => response.data)
  }
  createSingleCharacter(obj){
      return axios.post(this.baseUrl + "/characters", obj)
      .then(response => response.data)
  }
  deleteSingleCharacter(id){
      return axios.delete(this.baseUrl + "/characters/" + id)
      .then(response => response.data)
  }
  editSingleCharacter(id, obj){
      return axios.patch(this.baseUrl + "/characters/" + id, obj)
      .then(response => response.data)
  }
}
