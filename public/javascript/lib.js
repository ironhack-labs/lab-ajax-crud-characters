var lib = (function () {  

  return {
    createChar: function(element){
      const newLineHtml = document.createElement("div");
      newLineHtml.classList.add("character-info");
      parentDiv.appendChild(newLineHtml);
    
      const newchildId  = document.createElement("div");
      newchildId.classList.add("id");
      newchildId.innerHTML = `id: ${element.id}`;
      newLineHtml.appendChild(newchildId);
    
      const newchildName  = document.createElement("div");
      newchildName.classList.add("name");
      newchildName.innerHTML = `Character Name: ${element.name}`;
      newLineHtml.appendChild(newchildName);
    
      const newchildOccup  = document.createElement("div");
      newchildOccup.classList.add("occupation");
      newchildOccup.innerHTML = `Character Occupation: ${element.occupation}`;
      newLineHtml.appendChild(newchildOccup);
    
      const newchildCartoon  = document.createElement("div");
      newchildCartoon.classList.add("cartoon");
      newchildCartoon.innerHTML = `Is a Cartoon? ${element.cartoon}`;
      newLineHtml.appendChild(newchildCartoon);
    
      const newchildWeapon  = document.createElement("div");
      newchildWeapon.classList.add("weapon");
      newchildWeapon.innerHTML = `Character Weapon ${element.weapon}`;
      newLineHtml.appendChild(newchildWeapon);
    },
    
     getListChar: function(){
      charactersAPI.getFullList().then((apiResponse) => {
        parentDiv.innerHTML = "";
        apiResponse.data.forEach(element => {
          createChar(element);})
        });
    },
    
     objSize: function(obj){
      let count = 0;
      for (const property in obj) {
        obj[property] ? count++ : count;
      }
      return count;
    },
    
     createObjFromInput: function(objName){
      let obj ={
        name: document.getElementById(`${objName}-form-name`).value,
        occupation: document.getElementById(`${objName}-form-occupation`).value,
        weapon: document.getElementById(`${objName}-form-weapon`).value,
        cartoon: document.getElementById(`${objName}-form-cartoon`).checked,
      };
        objName === "edit" ? obj.id = document.getElementById(`${objName}-form-id`).value : "";
      return obj;
    }
  };
}());