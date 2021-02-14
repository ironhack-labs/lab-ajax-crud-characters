class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  drawCard(data) {

    let {
      id,
      name,
      occupation,
      cartoon,
      weapon
    } = data
    const characterContainer = document.getElementById('characters-container')
    characterContainer.innerHTML += `<div class="character-info">
      <div class="id">${id}</div>
      <div class="name">${name}</div>
      <div class="occupation">${occupation}</div>
      <div class="cartoon">Cartoon:${cartoon}</div>
      <div class="weapon">${weapon}</div>
      </div>`
  
  }

 drawCards(items){
    const characterContainer = document.getElementById('characters-container')
    characterContainer.innerHTML = ''
    if(items.length === undefined){
      drawCard(items)
    }
    else{
      items.forEach(element => {
        this.drawCard(element)
      })
    }
  } 

  reloadExample(){
    const characterContainer = document.getElementById('characters-container')
    characterContainer.innerHTML = ''
    characterContainer.innerHTML += `<div class="character-info">
    <div class="name">Character Name</div>
    <div class="occupation">Character Occupation</div>
    <div class="cartoon">Is a Cartoon?</div>
    <div class="weapon">Character Weapon</div>
    </div>`
  }

  recolorButtons(){
    let btns= document.getElementsByTagName('button')
    for(let i=0;i<btns.length;i++){btns[i].style.background = "transparent"}
  }
  //SHOW ALL CHARACTERS
  getFullList () {
    axios
    .get(`${this.BASE_URL}/characters`)
    .then((res) => {
      let myData= res.data
      this.drawCards(myData)
    })
    .catch((e) => console.log(e))
  }
  //SHOW ONE CHARACTER
  getOneRegister (id) {
    axios
    .get(`${this.BASE_URL}/characters/${id}`)
    .then((res) => {
      let myData = res.data
      //Check the id was provided
      if(myData.id != undefined){
        //Remove the example card
        document.getElementById('characters-container').innerHTML = ''
        //Add fullfiled new card
        this.drawCard(myData)
        //Change button color
        document.getElementById("fetch-one").style.background = "green"
      }else{
        console.log('Id required')
        document.getElementById("fetch-one").style.background = "orange"
      }
    })
    .catch((e) => console.log(e))
  }

  //CREATE ONE CHARACTER AND CHANGE BUTTON COLOR
  createOneRegister (data) {
    axios
    .post(`${this.BASE_URL}/characters`, data)
    .then((res) => {
      console.log(res.data)
      document.getElementById("send-data").style.background = "green"
      
    })
    .catch((e) => {
      console.log(e)
      document.getElementById("send-data").style.background = "red"
    });
  }
  //UPDATE AND CHANGE BUTTON BACKGROUND COLOR
  updateOneRegister (id,data) {
    axios
    .put(`${this.BASE_URL}/characters/${id}`, data)
    .then((res) => {
      console.log(res.data)
      document.getElementById("edit-data").style.background = "green"
    })
    .catch((e) => {
      console.log(e)
      document.getElementById("edit-data").style.background = "red"
    });
  }

  //DELETE AND CHANGE BUTTON BACKGROUND COLOR
  deleteOneRegister (id) {
    axios
    .delete(`${this.BASE_URL}/characters/${id}`)
    .then((res) => {
      document.getElementById("delete-one").style.background = "green"
      console.log(`The document with id ${id} have been deleted`)
    })
    .catch((e) => {
      console.log(e)
      document.getElementById("delete-one").style.background = "red"
    });

  }


}