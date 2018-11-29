const charactersAPI = new APIHandler("http://localhost:8000")


function Push(element){
  const contenedor = document.getElementsByClassName('characters-container')
  var info = document.querySelector('.character-info:nth-child('+element.id+')')

  info.style.display = "none"
  var div = document.createElement("div")
  div.className ="character-info"
  div.innerHTML += `
    <div class="name">id:  ${element.id} </div>
    <div class="name">Name:  ${element.name} </div>
    <div class="occupation">Occupation:  ${element.occupation}</div>
    <div class="cartoon">Is a Cartoon? ${element.cartoon}</div>
    <div class="weapon">Weapon: ${element.weapon}</div>
`

if(element.name){
info.style.display = "initial"
//contenedor[0](:nth-child:).style.display = "none"
contenedor[0].append(div)
}
}



$(document).ready( () => {
  document.getElementById('fetch-all').onclick = function(){
    charactersAPI.getFullList()
    .then(result => { console.log(result)
      result.forEach(element => {
            Push(element)
        
      });
      
    })
    .catch(e=>console.log(e))
  }
  
  document.getElementById('fetch-one').onclick = function(){
    
    var id = document.querySelector("input[name='character-id']").value

    charactersAPI.getOneRegister(id)
    .then(result =>{
        Push(result)
    }) 
  
    
  }
  
  document.getElementById('delete-one').onclick = function(){

    var id = document.querySelector("input[name='character-id-delete']").value
    console.log(id)
    charactersAPI.deleteOneRegister(id)

  }
  
  document.getElementById('edit-character-form').onsubmit = function(){

    const character ={
      name:"name",
      occupation:"occupation",
      weapon:"pon",
      cartoon:true
    }

    charactersAPI.updateOneRegister (4,character)
  
            
  }
  
  document.getElementById('new-character-form').onsubmit = function(){
                
    const character ={
      name:"name",
      occupation:"occupation",
      weapon:"weapon",
      cartoon:true
    }


        charactersAPI.createOneRegister(character)
  }
})
