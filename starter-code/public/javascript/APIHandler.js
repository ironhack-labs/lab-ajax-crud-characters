class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl
    this.axios = axios.create({baseURL:this.BASE_URL})
  }

  getFullList () {
    this.axios.get('/')
     .then(response => {
        response.data.forEach(elm => {
         document.getElementsByClassName("container")[0].innerHTML += `<div class="characters-container">
         <div class="character-info">
         <div class="name" id="character-name">Id: ${elm.id}</div>
           <div class="name" id="character-name">Name: ${elm.name}</div>
           <div class="occupation">Occupation: ${elm.occupation}</div>
           <div class="cartoon">Is a Cartoon?: ${elm.cartoon}</div>
           <div class="weapon">Character Weapon: ${elm.weapon}</div>
         </div>
       </div> `
       })
    })
    .then(()=> document.getElementById('fetch-all-button').innerHTML = `#fetch-all{color:green; border-color:green`)
    setTimeout(() =>
    document.getElementById('fetch-all-button').innerHTML = `#fetch-all{color:white; border-color:white}`, 500)

  }

  getOneRegister () {
    const charId = document.getElementsByName('character-id')[0].value
    this.axios.get(`/${charId}`)
      .then(response => {
        document.getElementsByClassName("name")[0].innerHTML += ': ' +response.data.name
        document.getElementsByClassName("occupation")[0].innerHTML += ': ' +response.data.occupation
        document.getElementsByClassName("weapon")[0].innerHTML += ': ' +response.data.weapon
        document.getElementsByClassName("cartoon")[0].innerHTML += ': ' +response.data.cartoon
      })
      .then(()=> document.getElementById('fetch-one-button').innerHTML = `#fetch-one{color:green; border-color:green`)
      setTimeout(() =>
      document.getElementById('fetch-one-button').innerHTML = `#fetch-one{color:white; border-color:white}`, 500)
  }

  createOneRegister () {
    const characterToCreate = {
        name: document.getElementsByName("name")[0].value, 
        occupation: document.getElementsByName("occupation")[0].value,
        weapon: document.getElementsByName("weapon")[0].value,
        cartoon: document.getElementsByName("cartoon")[0].checked
    }
    this.axios.post('/', characterToCreate)
    .then(()=> document.getElementById('send-button').innerHTML = `.send-button{color:green; border-color:green`)
    setTimeout(() =>
    document.getElementById('send-button').innerHTML = `.send-button{color:white; border-color:white}`, 500)
  }

  updateOneRegister () {
    const charId = document.getElementsByName('chr-id')[0].value
    const updatedCharacter = {
        name: document.getElementsByName("name")[1].value, 
        occupation: document.getElementsByName("occupation")[1].value,
        weapon: document.getElementsByName("weapon")[1].value,
        cartoon: document.getElementsByName("cartoon")[1].checked
    }
    this.axios.put(`/${charId}`, updatedCharacter)
    .then(()=> document.getElementById('update-data').innerHTML = `.update-data{color:green; border-color:green`)
    setTimeout(() =>
    document.getElementById('update-data').innerHTML = `.update-data{color:white; border-color:white}`, 500)

  }

  deleteOneRegister () {
    const charId = document.getElementsByName('character-id-delete')[0].value
    this.axios.delete(`/${charId}`)
      .then(()=> {
        document.getElementById('delete').innerHTML = `#delete-one{color:green; border-color:green}`
        setTimeout(() =>
        document.getElementById('delete').innerHTML = `#delete-one{color:white; border-color:white}`, 500)
      })
      // .catch(err =>  document.getElementsByName('character-id-delete')[0].innerHTML += `<style>#delete-one{color:red; border-color:red}</style>`)
  }
}
