class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList () {
      axios.get(this.BASE_URL + "/characters")
      .then(response => {
        document.getElementsByClassName('characters-container')[0].innerHTML = ""
        response.data.forEach(character => {
            var Char = 
            `
            <div class="character-info">
            <div class="id">Id:${character.id}</div>
            <div class="name">Name:${character.name}</div>
            <div class="occupation">Occupation: ${character.occupation}</div>
            <div class="debt">Debt: ${character.debt}</div>
            <div class="weapon">Weapon:${character.weapon}</div>
            </div>
            <br>
            `;
            document.getElementsByClassName('characters-container')[0].innerHTML += Char
          })
          ;
     
      })
      .catch(err => {
        console.error(err)
      })
  }

  getOneRegister(id) {

      axios.get(this.BASE_URL + "/characters/" + id)
      .then(response => {
         console.log(response.data)
         if(id !== ""){
         document.getElementsByClassName('characters-container')[0].innerHTML = ""
         var Char = 
         `
         <div class="character-info">
         <div class="id">Id:${response.data.id}</div>
         <div class="name">Name: ${response.data.name}</div>
         <div class="occupation">Occupation: ${response.data.occupation}</div>
         <div class="debt">Debt: ${response.data.debt}</div>
         <div class="weapon">Weapon: ${response.data.weapon}</div>
         </div>
         `;
        return document.getElementsByClassName('characters-container')[0].innerHTML += Char  
      }
      })
      .catch(err => {
        console.error(err)
      })
  }

  createOneRegister () {
    var name = document.getElementsByName('name')[0].value
    var occupation= document.getElementsByName('occupation')[0].value
    var debt = document.getElementsByName('debt')[0].checked
    var weapon = document.getElementsByName('weapon')[0].value
    
    if(name === "" ){
      document.getElementsByClassName('submit-button')[0].style.backgroundColor = "red";
          console.error("Indicate A Name")
    }
    else if(occupation === ""){ 
      document.getElementsByClassName('submit-button')[0].style.backgroundColor = "red";
      console.error("Indicate An Occupation")}
    else if(weapon===""){
      document.getElementsByClassName('submit-button')[0].style.backgroundColor = "red";
      console.error("Indicate A Weapon")}
    else{
    
      const characterInfo = {
      name: document.getElementsByName('name')[0].value,
      occupation: document.getElementsByName('occupation')[0].value,
      debt: document.getElementsByName('debt')[0].checked,
      weapon: document.getElementsByName('weapon')[0].value,
    }

    console.log(characterInfo)
     
      axios.post(this.BASE_URL + "/characters", characterInfo)
      .then(response => {
          document.getElementsByClassName('submit-button')[0].style.backgroundColor = "green";
      })
      .catch(error => {
        document.getElementsByClassName('submit-button')[0].style.backgroundColor = "red";
        console.log(error)
      })
    }
  }

  updateOneRegister () {
      var updates = {}  
      if(document.getElementsByName('name')[1].value !== ""){
        updates.name = document.getElementsByName('name')[1].value
      }
      if(document.getElementsByName('occupation')[1].value !==""){
          updates.occupation = document.getElementsByName('occupation')[1].value
      }
      if(document.getElementsByName('weapon')[1].value !==""){
        updates.weapon =  document.getElementsByName('weapon')[1].value
      }
      if(document.getElementsByName('debt')[1].checked === "true"){
        updates.debt = document.getElementsByName('debt')[1].checked
      }

      var id = document.getElementsByName('chr-id')[0].value

     axios.patch(this.BASE_URL + "/characters/" + id, updates)
     .then(response => {
      document.getElementsByClassName('submit-button')[1].style.backgroundColor = "green";
     })
     .catch(error => {
      document.getElementsByClassName('submit-button')[1].style.backgroundColor = "red";
       console.error("Character Id Not Found")
     }
     ) 
  }

  deleteOneRegister () {
    var id = document.getElementsByName('character-id-delete')[0].value;

    axios.delete(this.BASE_URL + "/characters/" + id)
    .then( response => {
      document.getElementById('delete-one').style.backgroundColor = "green"
      console.log("Character has been successfully deleted")
    })
    .catch(error =>{
      document.getElementById('delete-one').style.backgroundColor = "red"
      console.error("Character Not Found")
    });
  }
}
