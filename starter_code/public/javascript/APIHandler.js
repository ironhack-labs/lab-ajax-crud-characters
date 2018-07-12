class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList () {
    let url = this.BASE_URL + "/characters"
    fetch(url)
    .then(res=>{
        if(!res.ok) return Promise.reject(res.statusText);
        return res.json()
    })
    .then(data=>{
        console.log(data);
        clearOutput();
        showAllObjects(data)
        
    })
    .catch(err=>console.log(err))
  }

  getOneRegister (id) {
    let url = this.BASE_URL + `/characters/${id}`
    console.log(url);
    fetch(url)
    .then(res=>{
        if(!res.ok) return Promise.reject(res.statusText);
        return res.json()
    })
    .then(data=>{
        clearOutput();
        createJunioDiv(data);
        console.log(data);
    })
    .catch(err=>console.log(err))
  }

  createOneRegister (newItem) {

    let url = this.BASE_URL + "/characters"

    fetch(url,{
      method: 'POST', 
      headers: {
          "Content-Type" : "application/json"
      },
      body: JSON.stringify(newItem)
    })

    .then(res=>{
        if(!res.ok) return Promise.reject(res.statusText);
        return res.json()
    })

    .then(data=>{
        console.log(data);
      
    })
    .catch(err=>console.log(err))
  }

  updateOneRegister (id, newItem) {
    console.log(id, newItem)
    let url = this.BASE_URL + `/characters/${id}`

    fetch(url,{
      method: 'PATCH', 
      headers: {
          "Content-Type" : "application/json"
      },
      body: JSON.stringify(newItem)
    })

    .then(res=>{
        if(!res.ok) return Promise.reject(res.statusText);
        return alert("Item "+id+" updated");
    })

    .then(data=>{
        console.log(data);
        window.location.reload()
  
    })
    .catch(err=>console.log(err))
  }

  deleteOneRegister (id) {
    let url = this.BASE_URL + `/characters/${id}`

    fetch(url,{
      method: 'DELETE', 
      headers: {
          "Content-Type" : "application/json"
      }
    })

    .then(res=>{
        if(!res.ok) return Promise.reject(res.statusText);
        return alert("Item "+id+" deleted")
    })

    .then(data=>{
        console.log(data);
        window.location.reload()
    
    })
    .catch(err=>console.log(err))

  }
}
