class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
    
  }
  
  getFullList () {
    const fetchCharacters = axios.create({
      baseURL: this.BASE_URL
  });
    fetchCharacters.get(`/characters`)
    .then(responseFromAPI => {
      let i = 0;
      responseFromAPI.data.forEach( () => {
        let charId = responseFromAPI.data[i].id;
        let charName = responseFromAPI.data[i].name;
        let charOcc = responseFromAPI.data[i].occupation;
        let charWep = responseFromAPI.data[i].weapon;
        let charCartoon = responseFromAPI.data[i].cartoon;


        console.log(`Character Information: 
        ID: ${charId} 
        Name: ${charName} 
        Occupation: ${charOcc} 
        Weapon: ${charWep} 
        Cartoon: ${charCartoon}`);
        
        i++;
      });
    }
  )};

  getOneRegister (requestId) {
    
    const fetchCharacters = axios.create({
      baseURL: this.BASE_URL
  });
    fetchCharacters.get(`/characters`)
    
    
    .then(responseFromAPI => {
      let i = 0;
      responseFromAPI.data.forEach( () => {
        if (responseFromAPI.data[i].id == requestId) {

          let charId = responseFromAPI.data[i].id;
          let charName = responseFromAPI.data[i].name;
          let charOcc = responseFromAPI.data[i].occupation;
          let charWep = responseFromAPI.data[i].weapon;
          let charCartoon = responseFromAPI.data[i].cartoon;
          

          console.log(`Charater Information: 
          ID: ${charId} 
          Name: ${charName} 
          Occupation: ${charOcc} 
          Weapon: ${charWep} 
          Cartoon: ${charCartoon}`);

          i++;

        } else {
          
          
        i++;

        }
      });
    }
  )};
  

  createOneRegister () {

  }

  updateOneRegister () {

  }

  deleteOneRegister (requestId) {
    const fetchCharacters = axios.create({
      baseURL: this.BASE_URL
  });
    fetchCharacters.delete(`/characters/${requestId}`)
    
     
  }
}
