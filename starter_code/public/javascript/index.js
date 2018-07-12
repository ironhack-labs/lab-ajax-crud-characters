const charactersAPI = new APIHandler("http://localhost:8000")

$(document).ready( () => {
  document.getElementById('fetch-all').onclick = function(){
  charactersAPI.getFullList().then(res=>{
  })
  }
  document.getElementById('fetch-one').onclick = function(){
    charactersAPI.getOneRegister($("#one").val()).then(res=>{
      $(".character-info .name").html(`Name: ${res.name}`);
      $(".character-info .occupation").html(`Occupation: ${res.occupation}`);
      if (res.cartoon){
        $(".character-info .cartoon").html(`Is a cartoon?: Yes`);
      } else {
        $(".character-info .cartoon").html(`Is a cartoon?: No`);
      }
      $(".character-info .weapon").html(`Weapon: ${res.weapon}`);   
    })
  }
  
  document.getElementById('delete-one').onclick = function(){
    
      charactersAPI.deleteOneRegister($("#delete").val())
      
  }
  
  document.getElementById('edit-character-form').onsubmit = function(){

    charactersAPI.getOneRegister($("#id1").val()).then(res=>{
      nick=$("#name").val()
      occup=$("#occupation").val()
      weapon=$("#weapon").val()
      cartoon=$("#cartoon").val()
      if($("#name").val()=="") nick=res.data.name
      if($("#occupation").val()=="") occup=res.data.occupation
      if($("#weapon").val()=="") weapon=res.data.weapon
      if($("#cartoon").val()=="") cartoon=res.data.cartoon
   
 
      charactersAPI.updateOneRegister ($("#id1").val(),nick,occup,weapon,cartoon)
 
     })
  
            
  }
  
  document.getElementById('new-character-form').onsubmit = function(){
    
   charactersAPI.createOneRegister($("#name").val(),$("#occupation").val(),$("#weapon").val(),$("#cartoon").val()) 
  }
})


