class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList () {
    axios.get('http://localhost:8000/characters')
    .then((res) => {

      let characterArr = []
    
      res.data.forEach((character) => {

        let info =
       `
        ${character.name}
        ${character.weapon}
        ${character.occupation}
        ${character.cartoon}

        `

        console.log(info)
        characterArr.push(info)
        document.getElementById("list-of-all").innerHTML = characterArr
      })
    });
  }

  getOneRegister (id) {
    console.log('in here now ',id)
    //http://localhost:8000/characters/3
    axios.get(`http://localhost:8000/characters/${id}`)
    .then(character=>{

      console.log(character) 
    
    })
    /*let oneCharacter = []//put that into html 
      let info =
       `
        ${character.name}
        ${character.weapon}
        ${character.occupation}
        ${character.cartoon}

        `
        console.log(info)
    Onecharacter.push(info)
    document.getElementById("one-character").innerHTML = Onecharacter
    */
  }

  createOneRegister (characterInfo) {
    axios.post("http://localhost:8000/characters/",characterInfo)
    .then ( character => {
      console.log(character)
    })
    .catch(error => {
      console.log("The error is:", error)
    })

}
  

  updateOneRegister (editCharacterInfo) {
    axios.patch(`http://localhost:8000/characters/${editCharacterInfo.id}`, editCharacterInfo)
    .then (character => {
      document.getElementById("edit-character-form").reset();
      console.log(character.data)
    })
    .catch(error => {
      console.log("The error is:", error)
    })
  }
  

  deleteOneRegister (deleteId) {
     axios.delete(`http://localhost:8000/characters/${deleteId}`)
          .then (character => {
          })
          .catch(error => {
            console.log("The error is:", error)
          })
        
    }
  }

  

