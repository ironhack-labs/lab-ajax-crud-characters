const charactersAPI = new APIHandler('http://localhost:8000');

//Se insertan los elementos HTML deacuerdo al numero de personajes que existan o que se esten buscando
printBase=(num,id)=>{
let idFunction=1;
let format="";

if(id!==undefined){
  idFunction=id;
}

if(num>0){
 for(let i=1;i<=num;i++){
  format=format+`<div class="character-info">
                <div class="id">Id:<span class="space">....................................</span><span class="response" id="id${idFunction}"></span></div>
                <div class="name">Character Name:<span class="space">.............</span><span class="response" id="name${idFunction}"></span></div>
                <div class="occupation">Character Occupation:<span class="space">....</span><span class="response" id="occupation${idFunction}"></span></div>
                <div class="cartoon">Is a Cartoon?<span class="space">...................</span><span class="response" id="cartoon${idFunction}"></span></div>
                <div class="weapon">Character Weapon:<span class="space">..........</span><span class="response" id="weapon${idFunction}"></span></div>
                </div>`
  idFunction++;
  }
 }
 document.querySelector('.characters-container').innerHTML=format
}
//Busca todos los personajes existentes---- para printBase utilizar solo primer parametro=data.length 
printAllElements=async()=>{
let data=await charactersAPI.getFullList(event);
const size=data.length;

printBase(size)

for(let i=1;i<=size;i++){
let selector=data[i-1]
document.querySelector(`#id${i}`).innerText=selector.id
document.querySelector(`#name${i}`).innerText=selector.name
document.querySelector(`#occupation${i}`).innerText=selector.occupation
document.querySelector(`#weapon${i}`).innerText=selector.weapon
document.querySelector(`#cartoon${i}`).innerText=selector.cartoon
}




}
//Busca solo un personajes en especifico---- 
//para printBase utilizar primer parametro=num, segundo parametro=id 
printOneElement=async()=>{
  let id=document.querySelector('#character-id').value
  let num=1;
  let size=await charactersAPI.getFullList();
  
  size=size.length
if(id>size){
id=0
}

let data=await charactersAPI.getOneRegister(id);


if(data===0){
id=0;
num=0;
}

printBase(num,id)


if(id>0){
document.querySelector(`#id${data.id}`).innerText=data.id
document.querySelector(`#name${data.id}`).innerText=data.name
document.querySelector(`#occupation${data.id}`).innerText=data.occupation
document.querySelector(`#weapon${data.id}`).innerText=data.weapon
document.querySelector(`#cartoon${data.id}`).innerText=data.cartoon
}
}



//-----------------------------------------------------------------------
window.addEventListener('load', () => {

//Busca todos los personajes existentes---- para printBase utilizar solo primer parametro=data.length 
  document.getElementById('fetch-all').addEventListener('click',printAllElements);




//Busca solo un personajes en especifico---- 
//para printBase utilizar primer parametro=1, segundo parametro=id 
  document.getElementById('fetch-one').addEventListener('click',printOneElement);

  document.getElementById('delete-one').addEventListener('click',async()=> {
    let id=document.querySelector('#character-id-delete').value
 
  await charactersAPI.deleteOneRegister(id);
  await printAllElements();
  await printAllElements();//A la segunda muestra los datos ya actualizados
  });

  document.getElementById('edit-character-form').addEventListener('submit', async()=>{
   await charactersAPI.updateOneRegister(obj);
  });

  document.getElementById('new-character-form').addEventListener('submit', async()=> {
    
    let size=await charactersAPI.getFullList();
    size=size.length

   const obj={
    id: size+1,
    name: document.querySelector('#newCharName').value,
    occupation: document.querySelector('#newCharOcup').value,
    weapon: document.querySelector('#newCharWeap').value,
    cartoon: document.querySelector('#newCharCart').value
   }
console.log(obj)
   await charactersAPI.createOneRegister(obj);
  });
});
