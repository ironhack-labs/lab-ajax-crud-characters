class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList () {
    let url = this.BASE_URL + '/characters';
    fetch(url)
    .then(result=>{
        if(!result.ok) return Promise.reject(result.statusText);
        return result.json()
    })
        .then(data=>{
          console.log(data)
        data.send();
    })
    .catch(e=>console.log(e))
  }
  

  getOneRegister (id) {
    let url = this.BASE_URL + `/characters/${id}`;
    fetch(url)
    .then(result=>{
        if(!result.ok) return Promise.reject(result.statusText);
        return result.json()
    })
        .then(data=>{
          console.log(data)
        data.send();
    })
    .catch(e=>console.log(e))
  }

  createOneRegister (newChar) {
    let url = this.BASE_URL + '/characters';
    fetch(url,{
      method: 'POST',
      headers: {
          "Content-Type" : "application/json"
      },
      body: JSON.stringify(newChar)
  })
    .then(result=>{
        if(!result.ok) return Promise.reject(result.statusText);
        return result.json()
    })
        .then(data=>{
        data.send();
    })
    .catch(e=>console.log(e))

  }

  updateOneRegister (id,updatedChar) {
    let url = this.BASE_URL + `/characters/${id}`;
    fetch(url,{
      method: 'PATCH',
      headers: {
          "Content-Type" : "application/json"
      },
      body: JSON.stringify(updatedChar)
  })
    .then(result=>{
        if(!result.ok) return Promise.reject(result.statusText);
        return result.json()
    })
        .then(data=>{
        data.send();
    })
    .catch(e=>{
      console.log("Character not found")
    })
  }

  deleteOneRegister (id) {
    let url = this.BASE_URL + `/characters/${id}`;
    fetch(url,{
      method: 'DELETE'
  })
    .then(result=>{
      console.log("Character has been successfully deleted");
    })
    .catch(e=>{
      console.log("Character not found")
    })
  }
}
