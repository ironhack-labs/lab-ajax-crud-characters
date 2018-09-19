const charactersAPI = new APIHandler("http://localhost:8000/characters/")

$(document).ready( () => {
  document.getElementById('fetch-all').onclick = function(){
    charactersAPI.getFullList()
    .then(characters=>{
      console.log(characters)
      let $characters=document.getElementsByClassName('characters-container')[0]
      characters.data.forEach(character => {
        let $characterInfo=document.getElementsByClassName('character-info')[0].cloneNode(true)
        $characters.append($characterInfo)
        $characterInfo.getElementsByClassName('id')[0].innerHTML=character.id
        $characterInfo.getElementsByClassName('name')[0].innerHTML=character.name
        $characterInfo.getElementsByClassName('occupation')[0].innerHTML=character.occupation
        $characterInfo.getElementsByClassName('cartoon')[0].innerHTML=character.cartoon
        $characterInfo.getElementsByClassName('weapon')[0].innerHTML=character.weapon
      });
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
