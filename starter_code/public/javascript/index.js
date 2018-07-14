const charactersAPI = new APIHandler("http://localhost:8000")

$(document).ready( () => {
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
    let charEdit = document.getElementsByClassName("edit");
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

function createNewDiv(obj){
    let arrKeys = Object.keys(obj)
    let arrVals = Object.values(obj)
    
    let masterDiv = document.getElementsByClassName("characters-container")[0];
    let newDiv = document.createElement("div");
    newDiv.className = "character-info";
  
    let tempDiv;
    for(let i = 0; i<arrKeys.length; i++){
      tempDiv = createKeyDiv(arrKeys[i], arrVals[i])
      newDiv.appendChild(tempDiv)
      
    }
    
    masterDiv.appendChild(newDiv);
  }
  
  function createKeyDiv(key, value){
    
    let div = document.createElement("div");
    div.className = key;
    div.innerHTML = ""+key+" : "+value;
    return div;
  }
  
  function showAllObjects(arrOfObj){
    arrOfObj.forEach((obj)=>{
      createNewDiv(obj);
    })
  }
  
  function clearOutput(){
    let masterDiv = document.getElementsByClassName("characters-container")[0];
    while (masterDiv.firstChild) {
      masterDiv.removeChild(masterDiv.firstChild);
    }
  }