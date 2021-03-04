const charactersAPI = new APIHandler('http://localhost:8000');


//  Plot character
const plotCharacters = (charac) => {
  const Characters = document.querySelector(".characters-container")

  Characters.innerHTML = "";

  charac.forEach(data => 
    Characters.innerHTML += `
    <div class="character-info">
    <div class="id">Id : ${data.id}</div>
    <div class="name">Name : ${data.name}</div>
    <div class="occupation">Occupation : ${data.occupation}</div>
    <div class="cartoon">Cartoon ? : ${data.cartoon}</div>
    <div class="weapon">Weapon : ${data.weapon}</div>
    </div>
    `
  )

}

async function atLoad() {
  try {
    const resAPI = await charactersAPI.getFullList() ;
    plotCharacters(resAPI.data)
  
  } catch(err) {
    console.log(err)
  }
}

atLoad()

window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', async function (event) {
   
    try {
      const resAPI = await charactersAPI.getFullList() ;
      plotCharacters(resAPI.data)

    } catch(err) {
      console.log(err)
    }

  });

  document.getElementById('fetch-one').addEventListener('click', async function (event) {
    console.log(event.target.parentElement.querySelector("input").value)
    try {
      const resAPI = await charactersAPI.getOneRegister(event.target.parentElement.querySelector("input").value) ;

      const Characters = document.querySelector(".characters-container")
      Characters.innerHTML = `
      <div class="character-info">
      <div class="id">Id : ${resAPI.data.id}</div>
      <div class="name">Name : ${resAPI.data.name}</div>
      <div class="occupation">Occupation : ${resAPI.data.occupation}</div>
      <div class="cartoon">Cartoon ? : ${resAPI.data.cartoon}</div>
      <div class="weapon">Weapon : ${resAPI.data.weapon}</div>
      </div>
      `

    } catch(err) {
      console.log(err)
    }

  });

  document.getElementById('delete-one').addEventListener('click', async function (event) {
    try {
      const dbRes = await charactersAPI.deleteOneRegister(event.target.parentElement.querySelector("input").value)
      const resAPI = await charactersAPI.getFullList() ;
      plotCharacters(resAPI.data) ;

      console.log(dbRes)
    } catch(err) {
      console.log(err)
    }
  });

  document.getElementById('edit-character-form').addEventListener('submit', async function (event) {
    event.preventDefault()
    const inputs = [...event.target.parentElement.querySelectorAll("input")]
    const values = {}
    inputs.forEach(input => values[input.name] =input.name === "cartoon" ? input.checked : input.value )

    console.log(values["chr-id"])

    try {
      await charactersAPI.updateOneRegister(values["chr-id"], values)
      const resAPI = await charactersAPI.getFullList() ;
      plotCharacters(resAPI.data) ;    
    } catch(err) {
      console.log(err)
    }  
  });

  document.getElementById('new-character-form').addEventListener('submit', async function (event) {
    event.preventDefault()
    const inputs = [...event.target.parentElement.querySelectorAll("input")]
    const values = {}
    inputs.forEach(input => values[input.name] =input.name === "cartoon" ? input.checked : input.value )

    try {
      await charactersAPI.createOneRegister(values)
      const resAPI = await charactersAPI.getFullList() ;
      plotCharacters(resAPI.data) ;
    } catch(err) {
      console.log(err)
    }

  });
});
