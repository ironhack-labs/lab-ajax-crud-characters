class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList () {
    axios({
      method: "GET",
      url:`${this.BASE_URL}/characters`
    })
    .then(response => {
      // console.log("response is", response.data);
      // const charArray = [];
      // response.data.forEach((oneChar) =>{
      //   charArray.push({
      //     name: oneChar.name,
      //     occupation: oneChar.occupation,
      //     debt: oneChar.debt,
      //     weapon: oneChar.weapon 
      //   })
      // })
      // console.log("charArray: ", charArray);
     
      response.data.forEach(oneCharacter => {
        const charHtml = $(`
                 <div class="character-info">
                   <div class="name">${oneCharacter.name}</div>
                   <div class="occupation">${oneCharacter.occupation}</div>
                   <div class="debt">${oneCharacter.debt}</div>
                   <div class="weapon">${oneCharacter.weapon}</div>
                 </div>
             `);

        $(".characters-container").append(charHtml);
      }); 
 
    })
    .catch(err => {
      console.error(err)
    })
  }

  getOneRegister () {

  }

  createOneRegister () {

  }

  updateOneRegister () {

  }

  deleteOneRegister () {

  }
}
