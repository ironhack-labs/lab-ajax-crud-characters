class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList () {
    let url = this.BASE_URL + '/characters';
    return fetch(url)
    .then(result=>{
        if(!result.ok) return Promise.reject(result.statusText);
        return result.json()
    })
    .catch(e=>console.log(e))
  }
  

  getOneRegister (id) {
    let url = this.BASE_URL + `/characters/${id}`;
    return fetch(url)
    .then(result=>{
        if(!result.ok) return Promise.reject(result.statusText);
        return result.json()
    })
    .catch(e=>console.log(e))
  }

  createOneRegister (newChar) {
    let url = this.BASE_URL + '/characters';
    return fetch(url,{
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
    .catch(e=>console.log(e))

  }

  updateOneRegister (id,updatedChar) {
    let url = this.BASE_URL + `/characters/${id}`;
    return fetch(url,{
      method: 'PUT',
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
    .catch(e=>(e))
  }

  deleteOneRegister (id) {
    return new Promise((resolve,reject)=>{
      let url = this.BASE_URL + `/characters/${id}`;
      fetch(url,{
        method: 'DELETE'
      })
      .then(result=>{
        console.log("Character has been successfully deleted");
        if(!result.ok) return Promise.reject(result.statusText);
        return result.json()
      })
      .then(data=>{
        resolve(data);
      })
      .catch(e=>{
        console.log("Character not found")
      })
    })
  }
}
