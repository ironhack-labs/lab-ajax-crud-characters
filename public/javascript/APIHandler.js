class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList (character) {
     
    axios({
     method: 'GET',
    url: `https://characters.com/v2/name/${character}`,
  }).then ((responseFromAxios) => {
    const ThecharacterFromTheApi = responseFromAxios.data[0];


  
    const characterName = document.querySelector('#character-name');
    characterName.innerText = `The name of the character: ${TheCharacterFromTheApi.name}`;

 
    const characterOccupation = document.querySelector('#character-occupation');
    characterOccupation.innerText = `Occuption: ${TheCharacterFromTheApi.occupation}`;

    const cartoon = document.querySelector('#isa-cartoon');
    cartoon.innertext = ThecharacterFromTheApi.cartoon;
    
    const characterWeapon = document.querySelector('#character-Weapon');
    characterWeapon.innerText = `Weapon: ${TheCharacterFromTheApi.Weapon}`;

     return this.APIHandler.get('/characters');
  });
};
 

  getOneRegister (id) {
   axios.get('/characters')
   .then(response => console.log(`All characters are: `, response.data))
   .catch(error => console.log(error));

  axios
   .get('/characters/id')
   .then(response => console.log(`Character with ID is:`, response.data))
   .catch(error => console.log(error));

   
    return this.api.get(`/characters/${id}`);

  };

  createOneRegister () {
  axios.post('/characters');
  .then(response => console.log(`Character with ID is:`, response.data ))
  .catch(error => console.log(error));   
   return this.api.post('/characters', NewUserInfoFromReqBody);
 };

  updateOneRegister (id, updateOneRegister) {
    axios
   .put('/characters/id')
   .then(response => console.log(`Character with ID is:`, response.data))
   .catch(error => console.log(error));
   return this.api.put(`/characters/${id}`, updateOneRegister);
  };

  deleteOneRegister (id) {

    axios
    .delete('/characters/id')
    .then(response => console.log(`Character with ID is:`, response.data))
    console.log('character delete');
    return this.api.delete(`/characters/${id}`);
  };
}

module.exports = APIHandler;