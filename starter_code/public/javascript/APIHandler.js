class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList(){
    fetch("http://localhost:8000/characters")
    .then(res=>{
     if(!res.ok)return console.log(res)
     return res.json()
    })
    .then(data=>{
      console.log(data)
    })
  }

  getOneRegister (luis) {
    fetch(`http://localhost:8000/characters/${luis}`)
    .then(res=>{
      if(!res.ok) return console.log(res)
      return res.json();

    })
    .then(data=>{
      console.log(data)
    })
    
  }

  createOneRegister (data) {
    fetch("http://localhost:8000/characters/", {
      method:"POST",
      body:JSON.stringify(data),
      headers:{
        "Content-Type":"application/json"
      }

    })
    .then(res=>{
      if(!res.ok) return console.log(res)
      return res.json();

    })
    .then(data=>{
    })
  }

  updateOneRegister (luis , object) {
    console.log(object)
    fetch(`http://localhost:8000/characters/${luis}`,{
      method:"PATCH",
      body:JSON.stringify(object),
      headers:{
        "Content-Type":"application/json"
      }
    })
    .then(res=>{
      if(!res.ok) return console.log(res)
      return res.json();

    })
    .then(data=>{
    })
  }

  deleteOneRegister (luis) {
    fetch(`http://localhost:8000/characters/${luis}`,{
      method:"delete",
      body:FormData,
      headers:{
        "Content-Type":"application/json"
      }
    })
    .then(res=>{
      if(!res.ok) return console.log(res)
      return res.json();

    })
    .then(data=>{
      console.log(data)
    })


  }
}
