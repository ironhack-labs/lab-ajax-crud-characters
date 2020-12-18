class APIHandler {
  constructor (baseUrl) {
    this.baseUrl = baseUrl;
    this.APIRequest = axios.create({
      baseURL: this.baseUrl
    })
  }

  async getFullList () {
    try{
      const{data} = await this.APIRequest.get("/characters");
      return data
      //console.log(data);
    }catch(err){
      console.error(err);
    }
  }

  async getOneRegister (id) {
  try{
    const {data} = await this.APIRequest.get(`/characters/${id}`)
    return data
  }catch(err){
    console.error(err);
  }
  }

  async createOneRegister () {
  try{

    const {value:name}=document.querySelector("#name")
    const {value:occupation}=document.querySelector("#occupation")
    const {value:weapon}=document.querySelector("#weapon")
    const {checked:cartoon}=document.querySelector("#cartoon")

    const newOne = {
      name:name,
      occupation:occupation,
      weapon:weapon,
      cartoon:cartoon
    }
    
    const {data: newCharacter } = await this.APIRequest.post("/characters",newOne)
    console.log(newCharacter)
    return newCharacter
    
  }catch(err){
    console.error(err);
  }
  }

  async updateOneRegister (id) {
    try{
      
      const {value:name}=document.querySelector("#nameEditCharacter")
      const {value:occupation}=document.querySelector("#occupationEditCharacter")
      const {value:weapon}=document.querySelector("#weaponEditCharacter")
      const {checked:cartoon}=document.querySelector("#cartoonEditCharacter")

      const newOne = {
        name:name,
        occupation:occupation,
        weapon:weapon,
        cartoon:cartoon
      }
  
      const updateNew = await this.APIRequest.patch(`/characters/${id}`,newOne)     
      
    
    }catch(err){
      console.error(err);
    }

  }

  async deleteOneRegister (id) {
    try{
      const deleteOne = await this.APIRequest.delete(`/characters/${id}`)
  
    }catch(err){
      console.error(err);
    }

  }
}
