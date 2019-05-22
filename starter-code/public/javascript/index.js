const charactersAPI = new APIHandler(
  "https://minions-api.herokuapp.com"
);
      

$(document).ready( () => {
  document.getElementById('fetch-all').onclick = function(){
    charactersAPI.getFullList()

       .then(response => {
         const container = document.querySelector(".characters-container");
         container.innerHTML = "";
         response.data.forEach(elm => {
           const createElement = document.createElement("div");
           createElement.setAttribute("class", "character-info");
           for (let key in elm) {
             if (key == "_id" || key == "__v") continue;
             let pequenin = document.createElement("div");
             pequenin.setAttribute("class", key);
             pequenin.innerHTML = `<h2> ${key}</h2><p>${elm[key]} `;
             createElement.appendChild(pequenin);
           }
           container.appendChild(createElement);
         });
       })
       .catch(error => console.log("¡ops! error:", error));

  


  }
  
  document.getElementById('fetch-one').onclick = function(){

          const idChar = document.querySelector(".operation input").value;

          charactersAPI.getOneRegister(idChar)  
            
     .then(response => {
          const container = document.querySelector(
            ".characters-container"
          );
          container.innerHTML = "";
          const createElement = document.createElement("div");
     
  createElement.setAttribute("class", "character-info");
  for (let key in response.data) {
    if (key == "_id" || key == "__v") continue;
    let pequenin = document.createElement("div");
    pequenin.setAttribute("class", key);
    pequenin.innerHTML = `<h2> ${key}</h2><p>${response.data[key]} `;
    createElement.appendChild(pequenin);
  }
  container.appendChild(createElement);
})
    
       .catch(error => console.log("¡ops! error:", error));



  }
          

    
  
  
  document.getElementById('delete-one').onclick = function(){
        
  }
  
  document.getElementById('edit-character-form').onsubmit = function(e){
    e.preventDefault();


        const inputsUpdate = document.querySelectorAll(
          "#edit-character-form input"
        );
        console.log(inputsUpdate)
        const character = {
          id: inputsUpdate[0].value,
          name: inputsUpdate[1].value,
          occupation: inputsUpdate[2].value,
          weapon: inputsUpdate[3].value,
          cartoon: inputsUpdate[4].checked,
        };


        charactersAPI.updateOneRegister(character)


          .then(response => {
          console.log(response)
          const { id, name, occupation, weapon, cartoon } = response.data;
          inputsUpdate[0].value = id;
          inputsUpdate[1].value = name;
          inputsUpdate[2].value = occupation;
          inputsUpdate[3].value = weapon;
          inputsUpdate[4].checked = cartoon;
          

              inputsUpdate.forEach(
                input => (input.value = "")
              );

          })
          .catch(error => console.log("¡ops! error:", error));

}


            
  
  
  document.getElementById('new-character-form').onsubmit = function(e){

    e.preventDefault();

    const inputsNew = document.querySelectorAll(".character-form input");
    const character = {
      name: inputsNew[0].value,
      occupation: inputsNew[1].value,
      weapon: inputsNew[2].value,
      cartoon: inputsNew[3].checked
    };


    charactersAPI
      .createOneRegister(character)
      .then(response => {
        console.table(response.data);
        console.log("------------------");
        console.log("se ha guardado");
      })
      .catch(error => console.log("¡ops! error:", error));

                
  }
})
