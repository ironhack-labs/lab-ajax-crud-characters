const charactersAPI = new APIHandler("http://localhost:8000")

$(document).ready( () => {
  document.getElementById('fetch-all').onclick = function(){  
    charactersAPI.getFullList ();
  }
  
  document.getElementById('fetch-one').onclick = function(){
    const id = document.getElementById('character-id').value
    console.log("the one element id:", id)
    charactersAPI.getOneRegister (id);
  }
  
  document.getElementById('delete-one').onclick = function(){
        var id = document.getElementsByName("character-id-delete");
        console.log("deleted character id:", id)
        charactersAPI.deleteOneRegister(id);

  }
  
  document.getElementById('edit-character-form').onsubmit = function(){
    event.preventDefault();
    const updateInfo = {
      // [1] bc dealing with second form in the html
      name: document.getElementById("name")[1].value,
      occupation: document.getElementById("occupation")[1].value,
      debt: document.getElementById("debt")[1].checked,
      weapon: document.getElementById("weapon")[1].value
    }
    const updatedChar = {};
    if (name !== ""){
      updatedChar.name = name
    }
    if (occupation !== ""){
      updatedChar.occupation = occupation
    }
    if (debt !== ""){
      updatedChar.debt = debt
    }
    if (weapon !== ""){
      updatedChar.weapon = weapon
    }
    console.log("updated:", updatedChar);
  }
  
  document.getElementById('new-character-form').onsubmit = function(){
      
    event.preventDefault();
        
      const updateInfo = {
        name: document.getElementById("name")[0].value,
        occupation: document.getElementById("occupation")[0].value,
        debt: document.getElementById("debt")[0].checked,
        weapon: document.getElementById("weapon")[0].value

        if (name === ""){
          console.log("please input the name")
        }else if (occupation === ""){
          console.log("please input the occupation")
        }else if (debt === ""){
          console.log("please input the debt")
        }else if (weapon === ""){
          console.log("please input the weapon")
        }else{
          const newChar = {
            name: document.getElementById("name")[0].value,
            occupation: document.getElementById("occupation")[0].value,
            debt: document.getElementById("debt")[0].checked,
            weapon: document.getElementById("weapon")[0].value
          }
          console.log("new Char", newChar);
          charactersAPI.createOneRegister(newChar);
        }
          
        }
        }
        }
        }
      }
      charactersAPI.createOneRegister(updateInfo);
}
})
