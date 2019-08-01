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
  }

  createOneRegister () {
    const characterToCreate = {
        name: document.getElementsByName("name")[0].value, 
        occupation: document.getElementsByName("occupation")[0].value,
        weapon: document.getElementsByName("weapon")[0].value,
        cartoon: document.getElementsByName("cartoon")[0].checked
    }
    this.axios.post('/', characterToCreate)
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
    .then(()=> document.getElementsByClassName('update-data')[0].innerHTML += `<style>.update-data{color:green; border-color:green}</style>`)

  }

  deleteOneRegister () {
    const charId = document.getElementsByName('character-id-delete')[0].value
    this.axios.delete(`/${charId}`)
      .then(()=> document.getElementsByName('character-id-delete')[0].innerHTML += `<style>#delete-one{color:green; border-color:green}</style>`)
      .catch(err =>  document.getElementsByName('character-id-delete')[0].innerHTML += `<style>#delete-one{color:red; border-color:red}</style>`)
  }
}
