const charactersAPI = new APIHandler("http://localhost:8000")


function Push(element){
  //const contenedor = document.getElementsByClassName('characters-container')
  //var info = document.querySelector('.character-info:nth-child('+element.id+')')

  //info.style.display = "none"
  //var div = document.createElement("div")
  //div.className ="character-info"
  const container = document.querySelector(".otro")
  container.innerHTML = ''
  charactersAPI.getFullList()
    .then(result => { console.log(result)
      result.forEach(element => {
        container.innerHTML += `
        <div class="characters-container">
          <div class="character-info">
            <div class="name">id:  ${element.id} </div>
            <div class="name">Name:  ${element.name} </div>
            <div class="occupation">Occupation:  ${element.occupation}</div>
            <div class="cartoon">Is a Cartoon? ${element.cartoon}</div>
            <div class="weapon">Weapon: ${element.weapon}
          </div>
        </div>
        `
      });
      
    })
    .catch(e=>console.log(e))        
}

$(document).ready( () => {
  document.getElementById('fetch-all').onclick = function(){
    
    Push()
  }
   
  document.getElementById('fetch-one').onclick = function(){
    
    const input = document.querySelector("input[name='character-id']")
    console.log(input.value)
    charactersAPI.getOneRegister(input.value)
     .then(result=>{
       console.log(result)
      const container = document.querySelector(".otro")
      container.innerHTML = ""
      container.innerHTML = `
        <div class="characters-container">
          <div class="character-info">
            <div class="charid">ID: ${result.id}</div>
            <div class="name">Name: ${result.name}</div>
            <div class="occupation">Occupation: ${result.occupation}</div>
            <div class="cartoon">Cartoon: ${result.cartoon}</div>
            <div class="weapon">Weapon: ${result.weapon}</div>
          </div>
        </div>
        `
        input.value = ""
    })
  }
  
  document.getElementById('delete-one').onclick = function(){

    var id = document.querySelector("input[name='character-id-delete']").value
    console.log(id)
    charactersAPI.deleteOneRegister(id)

  }
  
  document.getElementById('edit-character-form').onsubmit = function(){

    const character ={
      name:id = document.querySelector("input[name='name']").value,
      occupation:occupation = document.querySelector("input[name='occupation']").value,
      weapon:weapon = document.querySelector("input[name='weapon']").value,
      cartoon:true
    }

    charactersAPI.updateOneRegister (character)
  
            
  }
  
  document.getElementById('new-character-form').onsubmit = function(){
                
    const character ={
      name:id = document.querySelector("input[name='name']").value,
      occupation:occupation = document.querySelector("input[name='occupation']").value,
      weapon:weapon = document.querySelector("input[name='weapon']").value,
      cartoon:true
    }


        charactersAPI.createOneRegister(character)
  }
})
