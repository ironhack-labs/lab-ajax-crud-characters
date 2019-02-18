class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList () {
    // const charactersApi = axios.create({
    //   baseURL: 'http://localhost:8000/characters/'
    // });
    
    //function getCharactersInfo(theName) {
    axios.get(`${this.BASE_URL}/characters`)
      .then(responseFromAPI => {
          console.log('Response from API is: ', responseFromAPI.data);           
    })
    .catch(err => {
      console.log('Error is: ', err);
      })
    //}
  }

  getOneRegister(e) {
   
    axios.get(`${this.BASE_URL}/characters/`+ e)
      .then(responseFromAPI => {
          console.log('Response from API is: ', responseFromAPI.data);           
    })
    .catch(err => {
      console.log('Error is: ', err);
      })

  }

  createOneRegister () {
    axios.post(`${this.BASE_URL}/characters`, characterInfo)
      .then(response => {
          const {id, name, occupation, weapon, cartoon } = response.data;
          const newCharacterHtml = `
            <li>
              <p> Charecter Id: ${id} </p>
              <p> Character Name: ${name} </p>
              <p> Character Occupation: ${occupation} </p>
              <p> Character Weapon: ${weapon} </p>
              <p> Is a Cartoon?: ${cartoon} </p>
            </li>
            `;
            document.getElementById("edit-character-form").innerHTML += newCharacterHtml;
            console.log('post successfull and the response is: ',response );
       })
       .catch(error => {
        console.log('Oh No! Error is: ', error);  
    })
}

  updateOneRegister () {

  }

  deleteOneRegister (e) {
    axios.get(`${this.BASE_URL}/characters/`+ e)
      .then(responseFromAPI => {
          console.log('Response from API is: ', responseFromAPI.data);           
    })
    .catch(err => {
      console.log('Error is: ', err);
      })
  }
}
