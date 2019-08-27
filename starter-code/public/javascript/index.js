


function fill(data){
   
	$.each(data, function(i, obj) {
	   updateDom(obj);
    });

}

function fillOne(data){
   updateDom(data);
   updateEdit(data);

}

function doPayLoad(){


 const characterInfo = {
	id:         $('#newid').val(),
    name:       $('#newname').val(),
    occupation: $('#newoccupation').val(),
    weapon:     $('#newweapon').val(),
	cartoon:    $('#newcartoon').prop("checked")
  };

 return characterInfo;

}

function doPayLoadEdit(){


 const characterInfo = {
	id:         $('#editid').val(),
    name:       $('#editname').val(),
    occupation: $('#editoccupation').val(),
    weapon:     $('#editweapon').val(),
	cartoon:    $('#editcartoon').prop("checked")
  };

  
 return characterInfo;

}


function updateDom(data){
	let myclass='.myitem-'+data.id+' div';
	$(myclass).each(function(){
     	  if ($(this).attr('class')==='id')         $(this).text('id:           '+data.id);
		  if ($(this).attr('class')==='name')       $(this).text('name:         '+data.name);
		  if ($(this).attr('class')==='occupation') $(this).text('occupation:   '+data.occupation);
		  if ($(this).attr('class')==='weapon')     $(this).text('weapon:       '+data.weapon);
		  if ($(this).attr('class')==='cartoon')    $(this).text('cartoon:       '+data.cartoon);
  });
  
}

function updateEdit(data){
	let myclass='.myedit input';
	
	$(myclass).each(function(){
     	  if ($(this).attr('class')==='id')         $(this).val(data.id);
		  if ($(this).attr('class')==='name')       $(this).val(data.name);
		  if ($(this).attr('class')==='occupation') $(this).val(data.occupation);
		  if ($(this).attr('class')==='weapon')     $(this).val(data.weapon);
		  if ($(this).attr('class')==='cartoon')    $(this).val(data.cartoon);
  });
  
}


$(document).ready( () => {
	
  let api=new APIHandler('http://localhost:8000/');	
  
  $('#fetch-all').click(function(){
	  
	  api.getFullList();
	  

 });
  
  $('#fetch-one').click(function(){
     api.getOneRegister($('#character-id').val());
	 
  });
  
  $('#delete-one').click(function(){
     
    api.deleteOneRegister($('#character-id-delete').val());
	
  });
  
  document.getElementById('edit-character-form').onsubmit = function(){
	   let data=doPayLoadEdit();
	   api.updateOneRegister ($('#editid').val(),data);
        
  }
  
  document.getElementById('new-character-form').onsubmit = function(){
	 	event.preventDefault();  
	
        let data=doPayLoad();
		
        api.createOneRegister(data);		
  }
})
