const charactersAPI = new APIHandler("http://localhost:8000")

$(document).ready( () => {

  charactersAPI.getFullList()

  document.getElementById('fetch-all').onclick = function(){
    charactersAPI.getFullList();
  }
  
  document.getElementById('fetch-one').onclick = function(){
    let id = document.getElementById("character-id").value;
    charactersAPI.getOneRegister(id);
    document.getElementById("character-id").value = ""
  }
  
  document.getElementById('delete-one').onclick = function(){
    let id = document.getElementById('deleteId').value;
    charactersAPI.deleteOneRegister(id);
        
  }
  
  document.getElementById('edit-character-form').onsubmit = function(e){
    //e.preventDefault();

    var charEdit = document.getElementsByClassName("edit");
    let id = charEdit[0].value;
    
    let newAttributes = {
      "name": charEdit[1].value,
      "occupation": charEdit[2].value,
      "weapon": charEdit[3].value,
      "cartoon": charEdit[4].checked
    }

    charactersAPI.updateOneRegister(id, newAttributes);
  }

  
  document.getElementById('new-character-form').onsubmit = function(e){
    
    //e.preventDefault();

    var charConfig = document.getElementsByClassName("create");

    let newItem = {
      "name": charConfig[0].value,
      "occupation": charConfig[1].value,
      "weapon": charConfig[2].value,
      "cartoon": charConfig[3].checked
    }
    charactersAPI.createOneRegister(newItem);
  }
})


function createJunioDiv(obj){
  let arrKeys = Object.keys(obj)
  let arrVals = Object.values(obj)
  
  let masterDiv = document.getElementsByClassName("characters-container")[0];
  let juniorDiv = document.createElement("div");
  juniorDiv.className = "character-info";

  let tempDiv;
  for(let i = 0; i<arrKeys.length; i++){
    tempDiv = createKeyDiv(arrKeys[i], arrVals[i])
    juniorDiv.appendChild(tempDiv)
    
  }
  
  masterDiv.appendChild(juniorDiv);
}

function createKeyDiv(key, value){
  
  let div = document.createElement("div");
  div.className = key;
  div.innerHTML = ""+key+" : "+value;
  return div;
}

function showAllObjects(arrOfObj){
  arrOfObj.forEach((obj)=>{
    createJunioDiv(obj);
  })
}

function clearOutput(){
  let masterDiv = document.getElementsByClassName("characters-container")[0];
  while (masterDiv.firstChild) {
    masterDiv.removeChild(masterDiv.firstChild);
  }
}
