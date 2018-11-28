class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

 getFullList () {
  const container = document.querySelector('.characters-container')
  container.innerHTML= ""
    return axios.get(this.BASE_URL+'/characters')
    
    .then(result=>{
      console.log(result.data)
     result.data.forEach(el=>{
       
       var newcontainer = document.createElement("div")
       newcontainer.classList.add("character-info")
       newcontainer.innerHTML= `
       <div class="name">${el.name}</div>
       <div class="occupation">${el.occupation}</div>
       <div class="cartoon">${el.cartoon}</div>
       <div class="weapon">${el.weapon}</div>
       
       
       `
       container.appendChild(newcontainer)
       

     })
      
        
      }).catch(e=>console.log(e))
    

  }

  getOneRegister (id) {
    const container = document.querySelector('.characters-container')
    return axios.get(this.BASE_URL+'/characters/' + id)
    
    .then(result=>{
      console.log(result.data)
      container.innerHTML = ""
    
       
       var newcontainer = document.createElement("div")
       newcontainer.classList.add("character-info")
       newcontainer.innerHTML= `
       <div class="name">${result.data.name}</div>
       <div class="occupation">${result.data.occupation}</div>
       <div class="cartoon">${result.data.cartoon}</div>
       <div class="weapon">${result.data.weapon}</div>
       
       
       `
       container.appendChild(newcontainer)
       

     
      
        
      }).catch(e=>console.log(e))


  }

  createOneRegister (e) {
    e.preventDefault()
    const boton = document.querySelector('#send-data')
    const char = {
      name: e.target.name.value,
      occupation: e.target.occupation.value,
      cartoon: e.target.cartoon.value,
      weapon:e.target.weapon.value

      
    }
    return axios.post(this.BASE_URL+'/characters',char)
    .then(result=>{
      boton.style.backgroundColor = "green"
    })
  }

  updateOneRegister (e,id2) {
    e.preventDefault()
    const char = {
      name: e.target.name.value,
      occupation: e.target.occupation.value,
      cartoon: e.target.cartoon.value,
      weapon:e.target.weapon.value

      
    }
    const boton = document.querySelector('#send-data2')
    const form = document.querySelector('#edit-character-form')
    const id= e.target.idc.value
    console.log(id)
    return axios.patch(this.BASE_URL+'/characters/' + id,char)
    .then(result=>{
       form.name.value =result.data.name
        form.weapon.value =result.data.weapon
        form.occupation.value =result.data.occupation
      boton.style.backgroundColor = "green"
    })
    
   

  }

  deleteOneRegister (id) {
    const boton = document.querySelector('#delete-one')
    if(!confirm("Estas seguro de borrarlo")){
      return
    } 
    return axios.delete(this.BASE_URL+'/characters/' + id)
    .then(result=>{
      boton.style.backgroundColor = "green"
      //getFullList()



  }).catch(e=> console.log(e))
}}
