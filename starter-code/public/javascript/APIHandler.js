class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList= async ()=>{
    const {data}=await axios.get(this.BASE_URL)
    return data
  }

  getOneRegister= async (id)=>{
    const {data}=await axios.get(this.BASE_URL+"/"+id)
    return data
  }

  createOneRegister= async (character)=>{
    const data=await axios.post(this.BASE_URL,character)
    return data
  }

  updateOneRegister= async (character)=>{
    const {id,name,occupation,weapon,cartoon}=character
    const data=await axios.patch(this.BASE_URL+"/"+id,{name,occupation,weapon,cartoon})
  }

  deleteOneRegister= async (id)=>{
    const data= await axios.delete(this.BASE_URL+"/"+id)
    return data
  }
}
