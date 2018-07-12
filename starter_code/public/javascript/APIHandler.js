class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList () {
    fetch(this.BASE_URL + '/characters')
    .then(res=>{
      if(!res.ok) return Promise.reject(res.statusText);
      return res.json()
    })
    .then(characters=>{
      console.log(characters);
    })
    .catch(e=>console.log(e))
  }

  getOneRegister (id) {
    fetch(this.BASE_URL + `/characters/${id}`)
    .then(res=>{
      if(!res.ok) return Promise.reject(res.statusText);
      return res.json();
    })
    .then(character=>{
      console.log(character);
    })
    .catch(e=>console.log(e));
  }

  createOneRegister (obj) {
    fetch(this.BASE_URL + '/characters',{
      method: 'POST',
      headers:{
        'Content-Type' : 'appliaction/json'
      },
      body: JSON.stringify( obj )
    })
    .then(res=>{
      if(!res.ok) return Promise.reject(res.statusText);
      return res.json();
    })
    .then(character=>{
      console.log(character);
    })
    .catch(e=>console.log(e));
  }

  updateOneRegister (id, obj) {
    fetch(this.BASE_URL + `/characters/${id}`,{
      method: "PATCH",
      body: JSON.stringify(obj)   
    })
    .then(res=>{
      if(!res.ok) return Promise.reject(res.statusText);
      return res.json();
    })
    .then(character=>{
      console.log(character);
    })
    .catch(e=>console.log(e));
  }

  deleteOneRegister (id) {
    fetch(this.BASE_URL + `/characters/${id}`,{
      method: "DELETE"      
    })
    .then(res=>{
      if(!res.ok) return Promise.reject(res.statusText)
      return res.json();
    })
    .then(character=>{
      console.log('Deleted');
    })
    .catch(e=>console.log(e));
  }
}


