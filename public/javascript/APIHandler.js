const $chartList= document.querySelector("#char-list")
const $getCharId=document.querySelector("#character-id")
const $getCharIdDelete=document.querySelector("#character-id-delete")

class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  printChars(arr){
    $chartList.innerHTML=""
    arr.forEach(e => {
      $chartList.innerHTML+=`
      <div class="character-info">
        <div class="name">Id: ${e.id}</div>
        <div class="name">Name: ${e.name}</div>
        <div class="occupation">Occupation: ${e.occupation}</div>
        <div class="cartoon">Is a Cartoon? ${e.cartoon}</div>
        <div class="weapon">Weapon: ${e.weapon}</div>
      </div>
      `
    });
  }

  getFullList () {
    axios.get(`${this.BASE_URL}/characters`)
    .then(({data})=>{
      this.printChars(data)
    })
  }

  getOneRegister () {
    const id=$getCharId.value
    axios.get(`${this.BASE_URL}/characters/${id}`)
    .then(({data})=>
    this.printChars([data])
    )
  }

  createOneRegister (event) {
    event.preventDefault()
    const {target}=event
    const name= target[0].value
    const occupation=target[1].value
    const weapon=target[2].value
    const cartoon=target[3].value
    axios.post(`${this.BASE_URL}/characters`,{
      name,
      occupation,
      weapon,
      cartoon 
    })
    .then(x=>{
      console.log(x)
      document.querySelector("#send-data").style.backgroundColor="green"
    })
    .catch(err=>{
      console.log(err)
      document.querySelector("#send-data").style.backgroundColor="red"
    })
    target[0].value = ""
    target[1].value = ""
    target[2].value = ""
    target[3].value = ""
  }

  updateOneRegister (event) {
    event.preventDefault()
    const {target}=event
    const id= target[0].value
    const name=target[1].value
    const occupation=target[2].value
    const weapon=target[3].value
    const cartoon=target[4].value
    axios.patch(`${this.BASE_URL}/characters/${id}`,{id, name, occupation, weapon, cartoon})
    .then(x=>{
      console.log(x)
      document.querySelector("#send-data-update").style.backgroundColor="green"
    })
    .catch(err=>{
      console.log(err)
      document.querySelector("#send-data-update").style.backgroundColor="red"
    })
    target[0].value = ""
    target[1].value = ""
    target[2].value = ""
    target[3].value = ""
    target[4].value = ""
  }

  deleteOneRegister () {
    const id=$getCharIdDelete.value
    axios.delete(`${this.BASE_URL}/characters/${id}`)
    .then(x=>{
      console.log(x)
      document.querySelector("#delete-one").style.backgroundColor="green"
    })
    .catch(err=>{
      console.log(err)
      document.querySelector("#delete-one").style.backgroundColor="red"
    })
  }
}
