const charactersAPI = new APIHandler('http://localhost:8000');

window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', function (event) {
    charactersAPI.getAllCharacters()
    .then(allChar => {
      //console.log(allChar);      
      let allCharHtml = "";
      for (let i=0; i<allChar.length; i++) {
        allCharHtml += `
          <div class="character-info">
            <div class="name">Id: ${allChar[i].id}</div>
            <div class="name">Name: ${allChar[i].name}</div>
            <div class="occupation">Occupation: ${allChar[i].occupation}</div>
            <div class="cartoon">Is a Cartoon?: ${allChar[i].cartoon}</div>
            <div class="weapon">Weapon: ${allChar[i].weapon}</div>
          </div>
        `;
      }
      document.querySelector('.characters-container').innerHTML = allCharHtml;  
    })
    .catch(error => {
      console.log(error);
    })
  });

  document.getElementById('fetch-one').addEventListener('click', function (event) {
    const oneId = document.getElementById("characterId").value;    
    charactersAPI.getSingleCharacter(oneId)
    .then(oneChar => {
      //console.log(oneChar);
      removeError();
      let oneCharHtml = "";
      if(oneId !== ""){
        oneCharHtml = `
        <div class="character-info">
          <div class="name">Id: ${oneChar.id}</div>
          <div class="name">Name: ${oneChar.name}</div>
          <div class="occupation">Occupation: ${oneChar.occupation}</div>
          <div class="cartoon">Is a Cartoon?: ${oneChar.cartoon}</div>
          <div class="weapon">Weapon: ${oneChar.weapon}</div>
        </div>
      `;        
      document.querySelector('.characters-container').innerHTML = oneCharHtml;
      }
      else{
        createErrorDiv()
        const missInputError = document.createTextNode("Please enter an ID");
        errDiv.appendChild(missInputError);
      }      
      
    })
    .catch(error => {
      console.log(error);
    })
  });

  document.getElementById('delete-one').addEventListener('click', function (event) {    
    //event.preventDefault();
    const oneDeleteId = document.getElementById("characterIdDelete").value;
    if(oneDeleteId !== ""){
      removeError();
      charactersAPI.deleteSingleCharacter(oneDeleteId)
        .then(oneDelChar => {      
          console.log(oneDelChar)
          var elementToColor = document.getElementById("delete-one");        
          elementToColor.classList.add("green");
          console.log(elementToColor)          
        })
        .catch(error => {
          console.log(error);
          var elementToColor = document.getElementById("delete-one");        
          elementToColor.classList.add("red");
          console.log(elementToColor)
        })      
    }
    else{
      createErrorDiv()
      const missInputError = document.createTextNode("Please enter an ID");
      errDiv.appendChild(missInputError);
    }      

  });
  

  document.getElementById('edit-character-form').addEventListener('submit', function (event) {
    
  });

  document.getElementById('new-character-form').addEventListener('submit', function (event) {
    event.preventDefault();
    const theNames = document.getElementsByClassName("the-name");
    const theOccupations = document.getElementsByClassName("the-occupation");
    const theWeapons = document.getElementsByClassName("the-weapon");
    const theCartoons = document.getElementsByClassName("is-cartoon");

    const characterInfo = {
      name: theNames[0].value,
      occupation: theOccupations[0].value,
      weapon: theWeapons[0].value,
      cartoon: theCartoons[0].value
    };
    charactersAPI.createSingleCharacter(characterInfo)
        .then(oneNewChar => {      
          console.log(oneNewChar)                    
        })
        .catch(error => {
          console.log(error);          
        })
  });
});


function removeError() {
  if (document.getElementById("error")) {
    const error = document.getElementById("error");
    error.parentNode.removeChild(error);
  }
}

function createErrorDiv(){
  errDiv = document.createElement("div");
  errDiv.setAttribute("id", "error");
  document.querySelector('.container').appendChild(errDiv);
}