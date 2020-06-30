class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
    this.axiosApp = axios.create({ baseURL: baseUrl });
  }

  getFullList() {
    return this.axiosApp
      .get(`/characters`)
      .then((response) => { console.log(response.data)
       
      })
      .catch((err) => console.log("Error", err));
  }

  getOneRegister(id) {
    return this.axiosApp
      .get(`/characters/${id}`)
      .then((response) => { console.log(response.data)
        
      })

      .catch((err) => console.log("Error", err));
  }

  createOneRegister(newChar) {
    return this.axiosApp
      .post(`/characters`, newChar)
      .then((response) => { console.log(response.data)
        
      })

      .catch((err) => console.log("Error", err));
  }

  updateOneRegister(id,newCharacterData) {
    return this.axiosApp.get(`/characters/${id}`)
    .then(() => { this.axiosApp.put(`/characters/${id}`, newCharacterData)
   
  })
  
    .catch(err => console.log('Error', err))
    
}

  deleteOneRegister(id) {
    return this.axiosApp.delete(`/characters/${id}`)
  .then((response) => {console.log(response.data)
   
  })
    .catch(err => console.log('Error', err))
    
  }

}

