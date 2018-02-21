class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList () {
  axios.get(this.BASE_URL + "characters").then(response =>{
  console.log(response.data);
  let list=""
  for (var i=0; i<response.data.length ; i++){
    list+=`<div class="character-info">
    <div class="id">ID: ${response.data[i].id}</div>
    <div class="name">Name: ${response.data[i].name}</div>
    <div class="occupation">Occupation: ${response.data[i].occupation}</div>
    <div class="debt">Debt: ${response.data[i].debt}</div>
    <div class="weapon">Weapon: ${response.data[i].weapon}</div>
  </div>`
  }
  document.getElementsByClassName("characters-container")[0].innerHTML=list;
})
  }

  getOneRegister (id) {
    axios.get(this.BASE_URL + "characters/"+id).then(response =>{
      let list = `<div class="character-info">
      <div class="id">ID: ${response.data.id}</div>
      <div class="name">Name: ${response.data.name}</div>
      <div class="occupation">Occupation: ${response.data.occupation}</div>
      <div class="debt">Debt: ${response.data.debt}</div>
      <div class="weapon">Weapon: ${response.data.weapon}</div>
    </div>`
      document.getElementsByClassName("characters-container")[0].innerHTML=list;
    }).catch(error => {
      let list = `<div class="character-info">
      <p>That character doesn't exist</p>
    </div>`
      document.getElementsByClassName("characters-container")[0].innerHTML=list;
    })
  }

  createOneRegister (character) {
    axios.post(this.BASE_URL + "characters/", character).then(response =>{
      document.getElementsByClassName("submit-button")[0].classList.add("success");
      document.getElementsByClassName("submit-button")[0].classList.remove("failure");
    }).catch(error => {
      document.getElementsByClassName("submit-button")[0].classList.remove("success");
      document.getElementsByClassName("submit-button")[0].classList.add("failure");

    })
  }

  updateOneRegister (id, updatedCharacter) {
    axios.patch(this.BASE_URL + "characters/"+id, updatedCharacter).then(response =>{
      document.getElementsByClassName("submit-button")[1].classList.add("success");
      document.getElementsByClassName("submit-button")[1].classList.remove("failure");
    }).catch(error => {
      document.getElementsByClassName("submit-button")[1].classList.remove("success");
      document.getElementsByClassName("submit-button")[1].classList.add("failure");
    })
  }

  deleteOneRegister (id) {
    axios.delete(this.BASE_URL + "characters/"+ id).then(response =>{
      document.getElementById("delete-one").classList.add("success");
      document.getElementById("delete-one").classList.remove("failure");

    }).catch(error => {
      document.getElementById("delete-one").classList.remove("success");
      document.getElementById("delete-one").classList.add("failure");    
    })
  }
}
