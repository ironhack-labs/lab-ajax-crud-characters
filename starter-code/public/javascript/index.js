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
      console.log("The error is: ", error);
    })
  });

  document.getElementById('fetch-one').addEventListener('click', function (event) {
    const oneId = document.getElementById("characterId").value;    
    charactersAPI.getSingleCharacter(oneId)
    .then(oneChar => {
      //console.log(oneChar);
      removeErrorDivChar();
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
        createErrorDivChar()
        const missInputError = document.createTextNode("Please enter an ID");
        errDiv.appendChild(missInputError);
      }      
      
    })
    .catch(error => {
      console.log("The error is: ", error);
    })
  });

  document.getElementById('delete-one').addEventListener('click', function (event) {    
    //event.preventDefault();
    const oneDeleteId = document.getElementById("characterIdDelete").value;
    if(oneDeleteId !== ""){      
      charactersAPI.deleteSingleCharacter(oneDeleteId)
        .then(oneDelChar => {      /* oneDelChar not needed --> .then(() => {})*/
          //console.log(oneDelChar)
          var elementToColor = document.getElementById("delete-one");        
          elementToColor.classList.add("green");
          //console.log(elementToColor)    /* console.log is displayed shortly & disappears immediately*/      
        })
        .catch(error => {
          console.log(error);
          var elementToColor = document.getElementById("delete-one");        
          elementToColor.classList.add("red");
          //console.log(elementToColor)
        })      
    }
    else{
      createErrorDivChar()
      const missInputError = document.createTextNode("Please enter an ID");
      errDiv.appendChild(missInputError);
    }      

  });
  
  const theNames = document.getElementsByClassName("the-name");  
  const theOccupations = document.getElementsByClassName("the-occupation");
  const theWeapons = document.getElementsByClassName("the-weapon");
  const theCartoons = document.getElementsByClassName("is-cartoon");

  
  /* document.getElementById('edit-character-form').addEventListener('submit', function (event) {
    event.preventDefault();
    const oneEditId = document.getElementById("characterIdEdit").value;
    charactersAPI.getSingleCharacter(oneEditId)
      .then(response => {
        console.log('Response from the API is: ', response);
        theNames[1].value = response.name;
        theOccupations[1].value = response.occupation;
        theWeapons[1].value = response.weapon;
        theCartoons[1].checked = response.cartoon
        
      })
      .catch(error => {
          console.log("The error is: ", error);
      });
  }); */

  document.getElementById('get-data').addEventListener('click', function (event) {
    event.preventDefault();
    const oneEditId = document.getElementById("characterIdEdit").value;
    charactersAPI.getSingleCharacter(oneEditId)
      .then(response => {
        console.log('Response from the API is: ', response);
        theNames[1].value = response.name;
        theOccupations[1].value = response.occupation;
        theWeapons[1].value = response.weapon;
        theCartoons[1].checked = response.cartoon
        
      })
      .catch(error => {
          console.log("The error is: ", error);
      });
  });

  document.getElementById('edit-character-form').addEventListener('submit', function (event) {
    event.preventDefault();
    const oneEditId = document.getElementById("characterIdEdit").value;
    const updatedCharacterInfo = {
      name: theNames[1].value,
      occupation: theOccupations[1].value,
      weapon: theWeapons[1].value,      
      cartoon: theCartoons[1].checked
    };
    
    charactersAPI.editSingleCharacter(oneEditId, updatedCharacterInfo)
      .then(response => {
        console.log('update successful: ', response);
        var elementToColor = document.getElementById("send-data-updated");        
        elementToColor.classList.add("green");       
      })
      .catch(error => {
          console.log("The error is: ", error);
          var elementToColor = document.getElementById("send-data-updated");        
          elementToColor.classList.add("red");
      });
  });


  document.getElementById('new-character-form').addEventListener('submit', function (event) {
    event.preventDefault();
    const characterInfo = {
      name: theNames[0].value,
      occupation: theOccupations[0].value,
      weapon: theWeapons[0].value,      
      cartoon: theCartoons[0].checked
    };
    if(characterInfo.name !== ""){
      charactersAPI.createSingleCharacter(characterInfo)
          .then(() => {            
            var elementToColor = document.getElementById("send-data");        
            elementToColor.classList.add("green");                    
          })
          .catch(error => {
            console.log("The error is: ", error);
            var elementToColor = document.getElementById("send-data");        
            elementToColor.classList.add("red");          
          })
    }
    else{
      createErrorDivForm()
      const missInputError = document.createTextNode("Please enter at least a name");
      errDiv.appendChild(missInputError);

    }
  });

});


function removeErrorDivChar() {
  if (document.getElementById("error")) {
    const error = document.getElementById("error");
    error.parentNode.removeChild(error);
  }
}

function createErrorDivChar(){
  errDiv = document.createElement("div");
  errDiv.setAttribute("id", "error");
  document.querySelector('.operations').appendChild(errDiv);
}

function createErrorDivForm(){
  errDiv = document.createElement("div");
  errDiv.setAttribute("id", "error");
  document.querySelector('.form-container').appendChild(errDiv);
}
