const charactersAPI = new APIHandler("http://localhost:8000")

$(document).ready( () => {
  document.getElementById('fetch-all').onclick = function(){
    let html = ""
    charactersAPI.getFullList()
    .then(res => {
      res.forEach(elm => {
          html += 
          `<div class="character-info">
            <div class="id">Id: <span>${elm.id}</span></div>
            <div class="name">Name: <span>${elm.name}</span></div>
            <div class="occupation">Occupation: <span>${elm.occupation}</span></div>
            <div class="cartoon">Is a Cartoon? <span>${elm.cartoon}</span></div>
            <div class="weapon">Weapon: <span>${elm.weapon}</span></div>
          </div>`
        })
      document.querySelector(".characters-container").innerHTML = html
    })

  }
  
  document.getElementById('fetch-one').onclick = function(){
    
  }
  
  document.getElementById('delete-one').onclick = function(){
        
  }
  
  document.getElementById('edit-character-form').onsubmit = function(){
            
  }
  
  document.getElementById('new-character-form').onsubmit = function(){
                
  }
})