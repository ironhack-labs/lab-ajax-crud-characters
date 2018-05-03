class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList  () {
    fetch("http://localhost:8000/characters")
    .then(res=>{
      if(!res.ok) return console.log(res)
      return res.json();
    })
    .then(data=>{
      console.log(data)
    })
  }

  getOneRegister (justOne) {
    fetch("http://localhost:8000/characters/")
    .then(res=>{
      if(!res.ok) return console.log(res)
      return res.json();
    })
    .then(data=>{
      console.log(data[justOne-1].id)
    })

  }

  createOneRegister (data) {
    fetch("http://localhost:8000/characters/",{
      method:"POST",
      body:JSON.stringify(data),
      headers:{
        "Content-Type":"application/json"
      }
    })
    .then(res=>{
      if(!res.ok) return console.log(res);
      return res.json();
      })
    .then(data=>{
    })
  }

  updateOneRegister (justOne,object) {
    fetch(`http://localhost:8000/characters/${justOne}`,{
      method:"PATCH",
      body:object,
      headers:{
        'Content-Type':'application/json'
      }
    })
    .then(res=>{
      if(!res.ok) return console.log(res)
      return res.json()
    })
    .then(data=>{
    })
  }

  deleteOneRegister (justOne) {
    fetch(`http://localhost:8000/characters/${justOne}`,{
    method:"DELETE",
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
