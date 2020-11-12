const charactersAPI = new APIHandler('http://localhost:8000');
console.log(charactersAPI)

const $charactersContainer = document.querySelector('.characters-container')
const $createForm = document.querySelector('#new-character-form')
console.log($createForm)


axios.get(`http://localhost:8000/characters`).then(({ data }) => {
  console.log(data)
  printChars(data)
}).catch(err => console.log(err))


window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', function (event) {
    axios.get(`http://localhost:8000/characters`).then(({ data }) => {
      console.log(data)
      printChars(data)
    }).catch(err => console.log(err))
  });

  document.getElementById('fetch-one').addEventListener('click', function (event) {

    const $inputID = document.querySelector('input[name = "character-id"]')

    axios.get(`http://localhost:8000/characters/${$inputID.value}`).then(({data}) => {
      $inputID.value = ""
      console.log(data)
      printChars([data])
    }).catch(err => console.log(err))
  });

  document.getElementById('delete-one').addEventListener('click', function (event) {

    const $inputID = document.querySelector('input[name = "character-id-delete"]')
    console.log($inputID)
    
    axios.delete(`http://localhost:8000/characters/${$inputID.value}`).then(() => {
      $inputID.value = ""
      axios.get(`http://localhost:8000/characters`).then(({ data }) => {
        console.log(data)
        printChars(data)
      }).catch(err => console.log(err))
    }).catch(err => console.log(err))
  });

  document.getElementById('edit-character-form').addEventListener('submit', function (event) {
    event.preventDefault()
    
    const { target } = event
    const $inputID = document.querySelector('input[name = "chr-id"]')
    console.log($inputID)

    const name = target[1].value
    const occupation = target[2].value
    const weapon = target[3].value
    const cartoon = target[4].value
  

    axios.patch(`http://localhost:8000/characters/${$inputID.value}`, { name, occupation, weapon, cartoon }).then(() => {
      buttonState(event.submitter)
      axios.get(`http://localhost:8000/characters`).then(({ data }) => {
        console.log(data)
        printChars(data)
        $inputID.value = ""
        target[0].value = ""
        target[1].value = ""
        target[2].value = ""
        target[3].value = ""
      }).catch(err => console.log(err))
    }).catch(err => buttonState(event.submitter, error))

  });

  document.getElementById('new-character-form').addEventListener('submit', function (event) {
 
    event.preventDefault()
    
    console.log(event.submitter)
    const { target } = event
    const name = target[0].value
    const occupation = target[1].value
    const weapon = target[2].value
    const cartoon = target[3].value

    console.log(name, occupation, weapon, cartoon)
    axios.post('http://localhost:8000/characters', {
      name,
      occupation,
      weapon,
      cartoon
    }).then(()=> {
      buttonState(event.submitter)
      axios.get(`http://localhost:8000/characters`).then(({ data }) => {
        console.log(data)
        printChars(data)
        target[0].value = ""
        target[1].value = ""
        target[2].value = ""
        target[3].value = ""
      }).catch(err => buttonState(event.submitter, error))
    })
  
  });
});

function printChars(arr) {
  $charactersContainer.innerHTML = ""
  arr.forEach(character => {
    $charactersContainer.innerHTML += `
    <div class="character-info" style="display: flex">
      <div style="width: 50%">
        <p class="p-card">Id:</p>
        <p class="p-card">Name:</p>
        <p class="p-card">Occupation:</p>
        <p class="p-card">Is a Cartoon?:</p>
        <p class="p-card">Weapon</p>
      </div>
      <div style="width: 50%">
        <div class="name p-details">${character.id}</div>
        <div class="name p-details">${character.name}</div>
        <div class="occupation p-details">${character.occupation}</div>
        <div class="cartoon p-details">${character.weapon}</div>
        <div class="weapon p-details">${character.cartoon}</div>
      </div>
    </div>
    `
  });
}

function buttonState(btn, error) {
  if (error){
    btn.style.backgroundColor = "red"
  }
  else{
    btn.style.backgroundColor = "green"
  }
  setTimeout(function(){ btn.style.backgroundColor = "transparent" }, 1000);
}