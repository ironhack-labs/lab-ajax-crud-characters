const charactersAPI = new APIHandler('http://localhost:8000');

function printChars(arr) {
  //limpias el texto de ese contenedor 
  const $charList= document.querySelector(`.characters-container`);
  $charList.innerHTML = ''
  //
  arr.forEach(element => {
    $charList.innerHTML += `
    <div class="character-info" style="width:200px">
      <span class="id">Id: ${element.id}</span>
      <br>
      <span class="name" >Name: ${element.name}</span><br>
      <span class="occupation"> Occupation: ${element.occupation}</span><br>
      <span class="cartoon">Cartoon: ${element.cartoon}</span><br>
      <span class="weapon"> Weapon: ${element.weapon}</span><br>
  </div>`
   })
  }



window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click',  async (event)=> 
  {
    event.preventDefault()
    const {data}= await charactersAPI.getFullList();
    printChars(data)
});


  document.getElementById('fetch-one').addEventListener('click', async (event)=> {
    event.preventDefault()
    const $charID= document.querySelector('#character-id').value
    console.log($charID) //1
    //promise{
    //result: {data: Object, status: 200, statusText: "OK", headers: Object, config: Object, …}
    //data{cartoon: true, id: 1, name: "Han Solo", occupation: "Smuggler",weapon: "Blaster Pistol"}
    const {data}= await charactersAPI.getOneRegister($charID)
    console.log({data})
    //{data:object}
    console.log([data])
     //[object] 
    printChars([data]) 

  });

  document.getElementById('delete-one').addEventListener('click', async (event) => {
    event.preventDefault()
    //busca el value del id que estas escribiendo en el input
    const $delChar = document.querySelector(`#character-id-delete`).value
//espera a que se cumpla la promesa
    await charactersAPI.deleteOneRegister($delChar)
    //borra el valor de value
    $delChar.value=""
  });

  document.getElementById('edit-character-form').addEventListener('submit', function (event) {
    event.preventDefault()
    console.log(event)
    //let target= event.target
    const { target } = event
    const id = target[0].value
    const name = target[1].value
    const occupation = target[2].value
    const weapon = target[3].value
    const cartoon = target[4].value
    const edited = { name, occupation, weapon, cartoon }

    charactersAPI.updateOneRegister(id, edited)
    //borrar los espacios
    target[0].value = ''
    target[1].value = ''
    target[2].value = ''
    target[3].value = ''
    target[4].value = ''
  });

  document.getElementById('new-character-form').addEventListener('submit', function (event) {
    event.preventDefault()
    const { target } = event
        const name = target[0].value
        const occupation = target[1].value
        const weapon = target[2].value
        const cartoon = target[3].value
        //igual que update pero mandas a llamar create one
        charactersAPI.createOneRegister({ name, occupation, weapon, cartoon })
        target[0].value = ''
        target[1].value = ''
        target[2].value = ''
        target[3].value = ''
  });
});
