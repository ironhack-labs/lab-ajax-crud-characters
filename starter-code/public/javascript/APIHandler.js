class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList () {
    
    axios.get(this.BASE_URL)
    .then((data)=>{
      let container = document.getElementsByClassName("characters-container")[0]

      data.data.forEach(personaje =>{
        let character = document.createElement("div")
      character.className = "character-info";
        let characterName = document.createElement("div")
        characterName.className = "name";
        characterName.innerHTML = "Name: "+ personaje.name
        
        let characterOccupation = document.createElement("div")
        characterOccupation.className = "occcupation";

        characterOccupation.innerHTML = "Occupation: " + personaje.occupation

        let characterCartoon = document.createElement("div")
        characterCartoon.className = "cartoon";

        characterCartoon.innerHTML = "Is a cartoon?: " + personaje.cartoon;

        let characterWeapon = document.createElement("div")
        characterWeapon.className = "weapon";

        characterWeapon.innerHTML = "Weapon: " + personaje.weapon;

        let arrayCharacterItems = [characterName, characterOccupation, characterCartoon, characterWeapon ]
      arrayCharacterItems.forEach(element => {
        character.appendChild(element)
      })

      container.appendChild(character)

      
      })
    })
    .catch((err)=>{
      console.log(err)
    })

  }

  getOneRegister () {

   let characterId = document.getElementsByName("character-id")[0].value

   axios.get(this.BASE_URL+"/"+characterId)
   .then((data)=>{


    let container = document.getElementsByClassName("characters-container")[0]

    let character = document.createElement("div")
    character.className = "character-info";
      let characterName = document.createElement("div")
      characterName.className = "name";
      characterName.innerHTML = "Name: "+ data.data.name
      
      let characterOccupation = document.createElement("div")
      characterOccupation.className = "occcupation";

      characterOccupation.innerHTML = "Occupation: " + data.data.occupation

      let characterCartoon = document.createElement("div")
      characterCartoon.className = "cartoon";

      characterCartoon.innerHTML = "Is a cartoon?: " + data.data.cartoon;

      let characterWeapon = document.createElement("div")
      characterWeapon.className = "weapon";

      characterWeapon.innerHTML = "Weapon: " + data.data.weapon;

      let arrayCharacterItems = [characterName, characterOccupation, characterCartoon, characterWeapon ]
      arrayCharacterItems.forEach(element => {
        character.appendChild(element)
      })

      

      container.appendChild(character)

   })
   .catch((err)=>{
   })
  


  }

  createOneRegister () {

let name = document.getElementsByName("name")[0].value
let occupation = document.getElementsByName("occupation")[0].value
let cartoon = document.getElementsByName("cartoon")[0].checked
let weapon = document.getElementsByName("weapon")[0].value
let objeto  ={ name: name, occupation: occupation, cartoon: cartoon, weapon: weapon}


     axios.post(this.BASE_URL,objeto)
     .then((data)=>{

       console.log("Insertado")
     })
     .catch((err)=>{

       console.log(err)

     })

  }

  updateOneRegister () {

    let id = document.getElementsByName("chr-id")[0].value
    let name = document.getElementsByName("name")[1].value
    let occupation = document.getElementsByName("occupation")[1].value
    let cartoon = document.getElementsByName("cartoon")[1].checked
    let weapon = document.getElementsByName("weapon")[1].value

    let objeto  = {id: id, name: name, occupation: occupation, cartoon: cartoon, weapon: weapon}

console.log(objeto)

axios.put(this.BASE_URL+"/"+id,objeto)

.then(()=>{

  console.log("Actualizado")
})
.catch(err=>{
  console.log(err)
})


  }

  deleteOneRegister () {

    let characterIdDelete = document.getElementsByName("character-id-delete")[0].value

    axios.delete(this.BASE_URL+"/"+characterIdDelete)
    .then(()=>{
      console.log("Borrado")
    })
    

  }
}


