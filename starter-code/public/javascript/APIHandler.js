class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList () {
    axios.get('http://localhost:8000/characters').then(characters=>{ 
      console.log(characters.data) 
    }).catch(err=>{
      alert(err)
    })
  }
  getOneRegister() {
    axios.get(`${this.BASE_URL}/characters/${id}`)
    .then(character => {
      console.log(character.data);
    })
    .then(err => {
      console.log(err);
    });
  }
  createOneCharacter (characterInfo) {
      // const characterInfo = {
      //   name:       'Dan',
      //   occupation: 'fdgdg',
      //   weapon:     'dpgjpfgj',
      //   cartoon: 'no'
      //  };
    axios.post('http://localhost:8000/characters',characterInfo)
    .then(response => {
         const { name, occupation, cartoon, weapon } = response.data;
         const newCharacterHtml = 
            `<div class="name"> ${name}</div>
            <div class="occupation">${occupation}</div>
            <div class="cartoon">${cartoon}</div>
            <div class="weapon">${weapon}</div>`;
        document.getElementsByClassName("character-info").innerHTML += newCharacterHtml;
        console.log('post successful and the response is: ',response );
    })
    .catch(error => {
        console.log('Oh No! Error is: ', error);  
    })
}

  updateOneRegister (id, characterInfo) {
    axios
      .patch(this.BASE_URL + "/characters" + "/" + id, characterInfo)
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log("The error is: ", error);
      });
  }

  deleteOneRegister (id) {
      axios
        .delete(this.BASE_URL + "/characters" + "/" + id)
        .then(character => {
          console.log(character.data);
        })
        .catch(err => {
          console.log(err);
        });
  }}
