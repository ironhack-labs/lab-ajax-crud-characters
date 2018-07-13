// const charactersAPI = new APIHandler("http://localhost:8000")

$(document).ready( () => {
  document.getElementById('fetch-all').onclick = function(){
    // const newCharacterDiv = characterDiv;
    
      axios.get('https://ih-crud-api.herokuapp.com/characters')
      .then((response)=>{
   
          $('.characters-container').empty();


          response.data.reverse().forEach((oneCharacter)=>{
              const newChar = `
              <div class="character-info">
              <h5>Name: ${oneCharacter.name}</h5>
              <p>Occupation: ${oneCharacter.occupation}</p>
              <p>Weapon: ${oneCharacter.weapon}</p>
              </div>
              
              `;

              $('.characters-container').append(newChar);
          })
          
      })
   


  }
  

  document.getElementById('fetch-one').onclick = function(){

    const input = document.getElementsByName('character-id');

    axios.get(`https://ih-crud-api.herokuapp.com/characters/${input[0].value}/`)
      .then((theCharacter)=>{

        if(theCharacter) {

          console.log(theCharacter);
          
          $('.characters-container').empty();

          const newChar = `
              
              <div class="character-info">
                <h5>Name: ${theCharacter.data.name}</h5>
                <p>Occupation: ${theCharacter.data.occupation}</p>
                <p>Weapon: ${theCharacter.data.weapon}</p>
              </div>
              
              `;
            
              $('.characters-container').append(newChar);
              
        }
      })
      .catch((err)=>{

        const noChar = `
              
          <div class="character-info">
            <h5>SORRY, NO SUCH CHARACTER ID</h5>
          </div>
          
          `;

          $('.characters-container').append(noChar);

      });

  };


  
  document.getElementById('delete-one').onclick = function(){

    const input = document.getElementsByName('character-id-delete');
    
    axios.delete(`https://ih-crud-api.herokuapp.com/characters/${input[0].value}`)
      .then((success)=>{

        $('.characters-container').empty();

        const deleteSuccess = `
              
          <div class="character-info">
            <h5>SUCCESSFULLY DELETED ! </h5>
          </div>
          
          `;

          $('.characters-container').append(deleteSuccess);

      })
      .catch((err)=>{

        console.log(err);

      });
        
  };
  

  
  document.getElementById('edit-character-form').onsubmit = function(){
    
    
  }
  
  document.getElementById('new-character-form').onsubmit = function(){
                
  }

});


