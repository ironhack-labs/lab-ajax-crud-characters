const charactersAPI = new APIHandler('https://minions-api.herokuapp.com')

const charactersContainer= document.querySelector('.characters-container')
const charactersInfo= document.querySelector('.character-info')      


$(document).ready( () => {


  document.getElementById('fetch-all').onclick = function(){
    charactersAPI.getFullList()
      
      .then(allCharacters=>{

        charactersContainer.innerHTML=" "
        
        allCharacters.forEach(character => {
          
          const mediumDiv = document.createElement('div')
          
          mediumDiv.setAttribute('class', 'character-info')
          
          for(let key in character){
          
            const miniDiv= document.createElement('div')
              miniDiv.setAttribute('class', `${key}`)
              miniDiv.innerHTML= `<h3>${key}: ${character[key]}</h3>`
              mediumDiv.appendChild(miniDiv)
          }
        charactersContainer.appendChild(mediumDiv)  
        });

      })
  }
  
  document.getElementById('fetch-one').onclick = function(){
    
    const idChar = document.querySelector('.operation input').value

    
    charactersAPI.getOneRegister(idChar)
      .then(theCharacter=>{
        charactersContainer.innerHTML=" "
        const mediumDiv = document.createElement('div')
          
        mediumDiv.setAttribute('class', 'character-info')
        for(let key in theCharacter){
          
          const miniDiv= document.createElement('div')
            miniDiv.setAttribute('class', `${key}`)
            miniDiv.innerHTML= `<h3>${key}: ${theCharacter[key]}</h3>`
            mediumDiv.appendChild(miniDiv)
        }
      charactersContainer.appendChild(mediumDiv) 
        })
        
         

  }
  
  document.getElementById('delete-one').onclick = function(){
        
  }
  
  document.getElementById('edit-character-form').onsubmit = function(){
            
  }
  
  document.getElementById('new-character-form').onsubmit = function(){
                
  }
})
