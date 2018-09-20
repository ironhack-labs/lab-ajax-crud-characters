class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList () {
    fetch(this.BASE_URL+'characters')
    .then(result => result.json())
    .then(characters=>{
      console.log(characters)
      let list=""
      for(var i=0; i<characters.length;i++){
        list+=`<div class="character-info">
        <div class="id">ID: ${characters[i].id}</div>
        <div class="name">Name: ${characters[i].name}</div>
        <div class="occupation">Occupation: ${characters[i].occupation}</div>
        <div class="cartoon">Cartoon: ${characters[i].cartoon}</div>
        <div class="weapon">Weapon: ${characters[i].weapon}</div></div>`
      }
      document.getElementsByClassName("characters-container")[0].innerHTML=list;
  })
}

  getOneRegister(id) {
    fetch(this.BASE_URL+"characters/"+id,{
      method:"GET",
      id:id})
    .then(result => result.json())
    .then(data => {
      let list = `<div class="character-info">
        <div class="id">ID: ${data.id}</div>
        <div class="name">Name: ${data.name}</div>
        <div class="occupation">Occupation: ${data.occupation}</div>
        <div class="cartoon">Cartoon: ${data.cartoon}</div>
        <div class="weapon">Weapon: ${data.weapon}</div></div>`
      document.getElementsByClassName("characters-container")[0].innerHTML=list;
    })
  }

  createOneRegister (n,o,c,a) {
    var arreglo = {name: n,occupation: o,cartoon:c,weapon:a};

    fetch(this.BASE_URL+'characters/',
    {
        method: "POST",
        body: JSON.stringify(arreglo),
        headers:{
          'Content-Type': 'application/json'
        }
    })
    .then(result => result.json())
    .then(data=> console.log(data))
    .catch(e=>console.log(e))
  }

  updateOneRegister (n,o,c,a,id) {
    this.id=id
    var arreglo = {id:i,name: n,occupation: o,cartoon:c,weapon:a};

    fetch(this.BASE_URL+"characters/"+ this.id+ ".json",{
      method:"PATCH",
      body:JSON.stringify(arreglo)})
    .then(result => result.json())
    .then(data => console.log(data))
  }

  deleteOneRegister (id) {
    fetch(this.BASE_URL+"characters/"+id,{
      method:"DELETE",
      id:id})
    .then(result => result.json())
    .then(data=> console.log(data))
    .catch(e=>console.log(e))
  }
}
