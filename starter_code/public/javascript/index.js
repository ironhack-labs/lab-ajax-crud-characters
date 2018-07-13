$(document).ready( () => {
  document.getElementById('fetch-all').onclick = function(){

    let charContainer = document.getElementById('charCon');
    charactersAPI.getFullList()
      .then(res=>{
        let template = '';
        res.forEach(character=>{
          template += `<div class="character-info">
            <div class="name">Name: ${character.name}</div>
            <div class="occupation">Occupation: ${character.occupation}</div>
            <div class="cartoon">Cartoon: ${character.cartoon}</div>
            <div class="weapon">Weapon: ${character.weapon}</div>
          </div>`;
        });
        charContainer.innerHTML = template;

      })



      .catch(e=>console.log(e));
  }
  
  document.getElementById('fetch-one').onclick = function(){
    
    charactersAPI.searchID = document.getElementById('character-id').value;
    let charContainer = document.getElementById('charCon');
    charactersAPI.getOneRegister()
      .then(res=>{
        let template = '';
        res=[res];
        res.forEach(character=>{
          template += `<div class="character-info">
            <div class="name">Name: ${character.name}</div>
            <div class="occupation">Occupation: ${character.occupation}</div>
            <div class="cartoon">Cartoon: ${character.cartoon}</div>
            <div class="weapon">Weapon: ${character.weapon}</div>
          </div>`;
        });
        charContainer.innerHTML = template;
      })
      .catch(e=>console.log(e));
  }
  
  document.getElementById('delete-one').onclick = function(){
        
    charactersAPI.searchID = document.getElementById('character-id-delete').value;
    charactersAPI.deleteOneRegister()
      .then(res=>{
        document.getElementById('delete-one').style = 'background-color: green;';
      })
      .catch(e=>{
        document.getElementById('delete-one').style = 'background-color: red;';
      });
  }
  
-  document.getElementById('edit-character-form').onsubmit = function(){
-            
+  document.getElementById('send-data-update').onclick = function(){
+    charactersAPI.searchID = document.getElementById('updtId').value;
+    charactersAPI.updateObj = {
+      "name": document.getElementById('updtName').value,
+      "occupation": document.getElementById('updtOcc').value,
+      "weapon": document.getElementById('updtWeapon').value,
+      "cartoon": document.getElementById('updtCart').checked
+    }
+    charactersAPI.updateOneRegister()
+      .then(res=>{
+        document.getElementById('send-data-update').style = 'background-color: green;';
+      })
+      .catch(e=>{
+        document.getElementById('send-data-update').style = 'background-color: red;';
+      });
  }
  
-  document.getElementById('new-character-form').onsubmit = function(){
-                
+  document.getElementById('send-data-new').onclick = function(){
+    charactersAPI.updateObj = {
+      "name": document.getElementById('newName').value,
+      "occupation": document.getElementById('newOccupation').value,
+      "weapon": document.getElementById('newWeapon').value,
+      "cartoon": document.getElementById('newCartoon').checked
+    }
+    charactersAPI.createOneRegister()
+      .then(res=>{
+        document.getElementById('send-data-new').style = 'background-color: green;';
+      })
+      .catch(e=>{
+        document.getElementById('send-data-new').style = 'background-color: red;';
+      });
  }
})