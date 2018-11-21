const charactersAPI = new APIHandler("http://localhost:8000")

$(document).ready( () => {
  function fetch(ele){ 
    let div = document.createElement('div');
    div.className = "character-info";
    const charContainer = document.querySelector('.characters-container')
    div.innerHTML = 
      `<div class="name">${ele.name}</div> 
      <div class="occupation">${ele.occupation}</div>
      <div class="cartoon">${ele.cartoon}</div>
      <div class="weapon">${ele.weapon}</div>`
    charContainer.appendChild(div)
  }

  document.getElementById('fetch-all').onclick = function(){
    charactersAPI.getFullList()
    .then(arr => {
      const charContainer = document.querySelector('.characters-container')
      charContainer.innerHTML="";
      arr.forEach(ele => {
        fetch(ele)
      })    
  
    }
    )
  }
  document.getElementById('fetch-one').onclick = function(){

    const inputVal = document.querySelector('#charId').value

    charactersAPI.getOneRegister(inputVal)
    .then(ele => {
      const charContainer = document.querySelector('.characters-container')
      charContainer.innerHTML="";
      fetch(ele)
    })
  }
  
  document.getElementById('delete-one').onclick = function(){
    charactersAPI.deleteOneRegister();
  }
  
  document.getElementById('edit-character-form').onsubmit = function(){
    charactersAPI.updateOneRegister();
  }
  
  document.getElementById('new-character-form').onsubmit = function(){
    charactersAPI.createOneRegister();
  }
})
