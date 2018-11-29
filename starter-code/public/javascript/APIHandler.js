class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList () {
    const container = document.querySelector('.characters-container')
    container.innerHTML= ""

    axios.get(this.BASE_URL+'/characters')
    .then(characters=>{
      //console.log(characters.data)
      characters.data.forEach(character=>{
       
       var newContainer = document.createElement("div")
       newContainer.classList.add("character-info")
       newContainer.innerHTML= `
       <div class="name">${character.name}</div>
       <div class="occupation">${character.occupation}</div>
       <div class="cartoon">${character.cartoon}</div>
       <div class="weapon">${character.weapon}</div>
       `
       container.appendChild(newContainer)
     })
    })
    .catch(e=>{
      console.log(e)
    })
  }

  getOneRegister () {
    const container = document.querySelector('.characters-container')
    const id = document.getElementsByName('character-id')[0].value
    //console.log(id)

    axios.get(this.BASE_URL+'/characters/' + id)
    .then(character=>{
      //console.log(character.data)
      container.innerHTML = ""
      var newContainer = document.createElement("div")
      newContainer.classList.add("character-info")
      newContainer.innerHTML= `
       <div class="name">${character.data.name}</div>
       <div class="occupation">${character.data.occupation}</div>
       <div class="cartoon">${character.data.cartoon}</div>
       <div class="weapon">${character.data.weapon}</div>
       `
      container.appendChild(newContainer)
      })
      .catch(e=>{
        console.log(e)
      })
  }

  createOneRegister (e) {
    e.preventDefault()
    const char = {
      name: e.target.name.value,
      occupation: e.target.occupation.value,
      cartoon: e.target.cartoon.value,
      weapon:e.target.weapon.value
    }
    axios.post(this.BASE_URL+'/characters',char)
    .then(result=>{
      e.target.name.value =''
      e.target.cartoon.value=''
      e.target.weapon.value=''
      console.log('Character added')
    })
    .catch(e=>{
      console.log(e)
    })
  }

  updateOneRegister (e) {
    e.preventDefault()
    const character = {
      name: e.target.name.value,
      occupation: e.target.occupation.value,
      cartoon: e.target.cartoon.value,
      weapon:e.target.weapon.value
    }
    const form = document.querySelector('#edit-character-form')
    const id= e.target.children[0].children[1].value
    //console.log(id)
    return axios.patch(this.BASE_URL+'/characters/' + id,character)
    .then(result=>{
      this.getFullList()
      form.chrid.value = ''
      form.name.value =''
      form.weapon.value =''
      form.occupation.value =''
    })
 
  }
 
  deleteOneRegister () {
    const id = document.getElementsByName('character-id-delete')[0].value
    if(!confirm('¿Quieres borrarlo?')){
      return
    } 
    return axios.delete(this.BASE_URL+'/characters/' + id)
    .then(result=>{
      this.getFullList()
    })
    .catch(e=>{
      console.log(e)
    })
  }
}
