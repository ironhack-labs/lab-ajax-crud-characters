const charactersAPI = new APIHandler("http://localhost:8000")

$(document).ready( () => {
  document.getElementById('fetch-all').onclick = function(){
    charactersAPI.getFullList()
    .then(data=>{listCharacters(data) })
   
  }
  
  document.getElementById('fetch-one').onclick = function(){
      character_id = document.getElementsByName('character-id')[0].value;
     charactersAPI.getOneRegister(character_id)
      .then(data=>{
        listCharacters([data]);
      })

   

  }
  
  document.getElementById('delete-one').onclick = function(){
        var character_id = document.getElementsByName('character-id-delete')[0].value;
        var button_delete = document.getElementById('delete-one');
        
      console.log(button_delete);

      charactersAPI.deleteOneRegister(character_id)
      .then(()=>{
        button_delete.className = 'good';
      })
      .catch(()=>{
        button_delete.className = 'bad';
      })
  } 
  
  document.getElementById('edit-character-form').onsubmit = function(){
            
   
    var id = document.getElementsByName('chr-id')[0].value;
    var name = document.getElementsByName('name')[1].value;
    var  occupation = document.getElementsByName('occupation')[1].value;
    var  cartoon = document.getElementsByName('cartoon')[1].value;
    var  weapon = document.getElementsByName('weapon')[1].value;

    var send_button = document.getElementById('update-data');


     

    
   charactersAPI.updateOneRegister(id,{name,occupation,cartoon,weapon})
   .then(()=>{
     send_button.className = 'good';
   })
   .catch(()=>{
    send_button.className = 'bad';
   })

  }
  
  document.getElementById('new-character-form').onsubmit = function(e){


    var name = document.getElementsByName('name')[0].value;
    var  occupation = document.getElementsByName('occupation')[0].value;
    var  cartoon = document.getElementsByName('cartoon')[0].value;
    var  weapon = document.getElementsByName('weapon')[0].value;
    var send_button = document.getElementById('send-data');
     
     

     charactersAPI.createOneRegister({name,occupation,cartoon,weapon})
     .then (data=>{
        if(data!=undefined){
          send_button.className = 'good';
        }
          
     }).catch(()=>{
         send_button.className = 'bad';
     })
     

     e.preventDefault()
  }
})



function listCharacters(characters) {

  console.log(characters[0]);
  
  
  for (var i = 0; i < characters.length; i++) {
   
    const node = document.querySelector(".character").cloneNode(true);
      node.querySelector(".id").innerText = ` ${characters[i].id}`;
      node.querySelector(".name").innerText = ` ${characters[i].name}`;
      node.querySelector(".occupation").innerText =` ${characters[i].occupation}`;
      node.querySelector(".cartoon").innerText =  ` ${characters[i].cartoon}`;
      node.querySelector(".weapon").innerText =  ` ${characters[i].weapon}`;
  
      const chrList = document.querySelector("#list-characters");
    chrList.appendChild(node);
    
  }
}

