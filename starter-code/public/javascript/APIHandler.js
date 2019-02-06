function charactersCard (characters) {
  let characterContainer = document.getElementById('characters-container')
  characterContainer.innerHTML = '';
  for (let i = 0; i < characters.length; i +=1){
    let { id, name, occupation, cartoon, weapon } =  characters[i];
    let html = 
    `<div class="character-info">
        <div class="name"> ID: ${id}</div>
        <div class="name"> Name: ${name}</div>
        <div class="occupation"> Occupation: ${occupation}</div>
        <div class="cartoon"> Cartoon: ${cartoon}</div>
        <div class="weapon"> Weapon: ${weapon}</div>
    </div>`
    characterContainer.innerHTML += html
  }
}

function characterCard (characters) {
  let characterContainer = document.getElementById('characters-container')
  characterContainer.innerHTML = '';
    let { id, name, occupation, weapon, cartoon } =   characters ;
    let html = 
    `<div class="character-info">
        <div class="name"> ID: ${id}</div>
        <div class="name"> Name: ${name}</div>
        <div class="occupation"> Occupation: ${occupation}</div>
        <div class="cartoon"> Cartoon: ${cartoon}</div>
        <div class="weapon"> Weapon: ${weapon}</div>
    </div>`
    characterContainer.innerHTML = html
}

 
 class APIHandler {
   constructor (baseUrl) {
     this.BASE_URL = baseUrl;
   }

  getFullList () {
    axios.get(this.BASE_URL + '/characters')
    .then(response => charactersCard(response.data))
    .catch(err => console.log(err))  
  }



  getOneRegister () {
    let id = document.getElementById('input-id').value
    console.log(id)
    axios.get(this.BASE_URL + '/characters')
    .then(response => characterCard(response.data[id-1]))
    .catch(err => console.log(err))  
  }

  createOneRegister () {
    let name = document.getElementById('new-name').value
    let occupation = document.getElementById('new-occupation').value
    let weapon = document.getElementById('new-weapon').value
    let cartoon = document.getElementById('input-id').value

    axios.post(this.BASE_URL + '/characters', obj)
    .then(response => response.data)
    .catch(err => console.log(err)) 
  }

  updateOneRegister (obj) {
    axios.put(this.BASE_URL + '/characters/:'+ obj.id, obj)
    .then(response => response.data)
    .catch(err => console.log(err)) 
  }

  deleteOneRegister () {
    axios.delete(this.BASE_URL  + '/characters' + id)
    .then(response => charactersCard(response.data))
    .catch(err => console.log(err))  
  }
}
