class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList () {
   
   return axios.get(this.BASE_URL+"/characters")
    .then(response => {
      let fetchall="";
      response.data.forEach(e=>{
        fetchall+=
        `<div class="character-info">
        <div class="id">ID:${e.id}</div>
          <div class="name">Character Name: ${e.name}</div>
          <div class="occupation">Character Occupation: ${e.name}</div>
          <div class="debt">Character Debt: ${e.debt}</div>
          <div class="weapon">Character Weapon: ${e.weapon}</div>
        </div>`;
      });
      document.getElementsByClassName("characters-container")[0].innerHTML = fetchall;
      console.log(document.getElementsByClassName("characters-container"));
    })
    .catch(err => {
      console.error(err)
    })
  }


  getOneRegister (e) {
    const id=document.getElementById("character-id").value
      return axios.get(this.BASE_URL+"/characters/"+id)
      .then(response => {
        let fetch="";
        let e= response.data;
          fetch+=
          `<div class="character-info">
          <div class="id">ID:${e.id}</div>
            <div class="name">Character Name: ${e.name}</div>
            <div class="occupation">Character Occupation: ${e.name}</div>
            <div class="debt">Character Debt: ${e.debt}</div>
            <div class="weapon">Character Weapon: ${e.weapon}</div>
          </div>`;
        
        document.getElementsByClassName("characters-container")[0].innerHTML = fetch;
        console.log(document.getElementsByClassName("characters-container"));
       })
          .catch(err => {
        console.log("ERROR", err);
      });
  }
    

  createOneRegister (e) {
      const characterInfo = {
          name: e.target.name.value,
          occupation: e.target.occupation.value,
          weapon: e.target.weapon.value,
          debt: e.target.debt.checked
        };
        console.log(e.target);
      
        axios.post(this.BASE_URL+"/characters", characterInfo)
          .then(response => {
            $("#new-character-form .submit-button").css("background-color","green");
            console.log(response.data);

          })
          .catch(error => {
            $("#new-character-form .submit-button").css("background-color","red");
              console.log(error)
          })
          $("#new-character-form .submit-button").css("background-color","");
    }
  
 


  updateOneRegister (e) {
    e.preventDefault();
    const characterInfo = {
      name: e.target.name.value,
      occupation: e.target.occupation.value,
      weapon: e.target.weapon.value,
      debt: e.target.debt.checked
    };
    console.log(e.target);
    const id= e.target.chrid.value;
  
    axios.patch(this.BASE_URL+"/characters/"+id, characterInfo)
      .then(response => {
        $("#edit-character-form .submit-button").css("background-color","green");
        console.log(response.data)
      
      })
      .catch(error => {
        $("#edit-character-form .submit-button").css("background-color","red");
          console.log(error)
      })


  }

  deleteOneRegister (e) {
    const id=document.getElementById("character-id-delete").value;
    return axios.delete(this.BASE_URL+"/characters/"+id)
    .then(response => {
      console.log(response.data);
      $("#delete-one").css("background-color","green");
       return "Character has been successfully deleted";

     })
        .catch(err => {
          $("#delete-one").css("background-color","red");
      console.log("ERROR", err);
      return "Character not found";
    });

  }
}
