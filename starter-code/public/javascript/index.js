const charactersAPI = new APIHandler("http://localhost:8000")

$(document).ready( () => {
  document.getElementById('fetch-all').onclick = function(){

    charactersAPI.getFullList().then(characters=>{
      let divPadre = document.querySelector("div[class = 'characters-container']")
      divPadre.innerHTML = '';
      characters.data.forEach((character)=>{
       
        var divHijo = document.createElement("div");
        var divName = document.createElement("div");
        divName.className = "name" 
        divName.appendChild(document.createTextNode(character.name))              
        divHijo.appendChild(divName);

        var divOcc = document.createElement("div");
        divOcc.className = "occupation" 
        divOcc.appendChild(document.createTextNode(character.occupation))              
        divHijo.appendChild(divOcc);

        var divCart = document.createElement("div");
        divCart.className = "cartoon" 
        divCart.appendChild(document.createTextNode(character.cartoon))              
        divHijo.appendChild(divCart);

        var divW = document.createElement("div");
        divW.className = "weapon" 
        divW.appendChild(document.createTextNode(character.weapon))              
        divHijo.appendChild(divW);

        divPadre.appendChild(divHijo);
      })

     
      



    }) 
    .catch((error)=>{
      console.log(error)
    })
    }




  
  document.getElementById('fetch-one').onclick = function(){

    charactersAPI.getOneRegister(document.querySelector("input[name= 'character-id']").value).then(character=>{
      let divPadre = document.querySelector("div[class = 'characters-container']")
      divPadre.innerHTML = '';
      var divHijo = document.createElement("div");
      var divName = document.createElement("div");
      divName.className = "name" 
      divName.appendChild(document.createTextNode(character.data.name))              
      divHijo.appendChild(divName);

      var divOcc = document.createElement("div");
      divOcc.className = "occupation" 
      divOcc.appendChild(document.createTextNode(character.data.occupation))              
      divHijo.appendChild(divOcc);

      var divCart = document.createElement("div");
      divCart.className = "cartoon" 
      divCart.appendChild(document.createTextNode(character.data.cartoon))              
      divHijo.appendChild(divCart);

      var divW = document.createElement("div");
      divW.className = "weapon" 
      divW.appendChild(document.createTextNode(character.data.weapon))              
      divHijo.appendChild(divW);

      divPadre.appendChild(divHijo);
    }) 
    .catch((error)=>{
      console.log(error)
    })
    }





  
  document.getElementById('delete-one').onclick = function(){
    charactersAPI.deleteOneRegister(document.querySelector("input[name= 'character-id-delete']").value).then(character=>{
      console.log(character)
    }) 
    .catch((error)=>{
      console.log(error)
    })
    }







  
  document.getElementById('edit-character-form').onsubmit = function(){
    let characterUpdate= {

      name:document.querySelector("#edit-character-form input[name= 'name']").value ,
      occupation:document.querySelector("#edit-character-form input[name= 'occupation']").value ,
      weapon:document.querySelector("#edit-character-form input[name= 'weapon']").value,
      cartoon:document.querySelector("#edit-character-form input[name= 'cartoon']").checked 
    }
    charactersAPI.updateOneRegister(document.querySelector("input[name='chr-id']").value,characterUpdate,)
            
  }

  
  
  
  
  document.getElementById('new-character-form').onsubmit = function(){
    let characterNew = {

      name:document.querySelector("input[name= 'name']").value ,
      occupation:document.querySelector("input[name= 'occupation']").value ,
      weapon:document.querySelector("input[name= 'weapon']").value,
      cartoon:document.querySelector("input[name= 'cartoon']").checked 
  
    }
    charactersAPI.createOneRegister (characterNew)
                
  }
})
