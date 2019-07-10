const charactersAPI = new APIHandler("http://localhost:8000")

$(document).ready( () => {
  document.getElementById('fetch-all').onclick = async function(){
    const characters = await getCharacters()
    renderCharacters(characters)
  }
  
  document.getElementById('fetch-one').onclick = function(){
    const id = document.getElementById('character-id').value;
    axios.get(`https://ih-crud-api.herokuapp.com/characters/${id}`)
      .then(result => {
        const character = result.data;
        const container = $('.characters-container')
        container.empty();

        let newChar = document.createElement('div');
        newChar.classList.add("character-info")
        newChar.innerHTML = `
          <div class="name">${character.name}</div>
          <div class="occupation">${character.occupation}</div>
          <div class="cartoon">${character.debt}</div>
          <div class="weapon">${character.weapon}</div>
        `;

        container.append(newChar)
      })
      .catch(err => {
        console.log(err)
      })
  }
  
  document.getElementById('delete-one').onclick = function(){
        
  }
  
  document.getElementById('edit-character-form').onsubmit = function(ev){
    ev.preventDefault();

    const data = new FormData(ev.target)
    const id = data.get('chr-id');
    const name = data.get('name');
    const occupation = data.get('occupation');
    let debt = data.get('cartoon');

    if(!debt) {
      debt = false
    } else {
      debt = true
    }
    const weapon = data.get('weapon')

    const body = {
      id,
      name,
      occupation,
      debt,
      weapon
    }

    axios.put(`https://ih-crud-api.herokuapp.com/characters/${id}`, body)
      .then(async() => {
        const characters = await getCharacters()
        renderCharacters(characters)
      })
      .catch(err => {
        console.log(err)
      })
  }
  
  document.getElementById('new-character-form').onsubmit = function(ev){
    ev.preventDefault();

    const data = new FormData(ev.target)
    const name = data.get('name');
    const occupation = data.get('occupation');
    let debt = data.get('cartoon');
    if(!debt) {
      debt = false
    } else {
      debt = true
    }
    const weapon = data.get('weapon')

    const body = {
      name,
      occupation,
      debt,
      weapon
    }
    
    // console.log(body)

    axios.post('https://ih-crud-api.herokuapp.com/characters', body)
      .then(async () => {
        const characters = await getCharacters()
        renderCharacters(characters)
      })
      .catch(err => {
        console.log(err)
      })
  }

  async function getCharacters() {
    const characters = await axios.get('https://ih-crud-api.herokuapp.com/characters')
    return characters.data;
  }

  function renderCharacters(characters) {
    const container = document.getElementsByClassName('characters-container')[0];
    characters.forEach((character) => {
      let newChar = document.createElement('div');
      newChar.classList.add("character-info")
      newChar.innerHTML = `
        <div class="name">${character.name}</div>
        <div class="occupation">${character.occupation}</div>
        <div class="cartoon">${character.debt}</div>
        <div class="weapon">${character.weapon}</div>
      `;
      container.appendChild(newChar)
    })
  }
})


// getFormData = (ev) => {
//   ev.preventDefault();

//   const data = new FormData(ev.target);

//   const email = data.get('email');
//   const name = data.get('name');
//   const username = data.get('username');
//   const password = data.get('password');

//   const body = {
//       email,
//       name,
//       username,
//       password
//   }
  
//   this.submitFormData(body)
// }

// submitFormData = (body) => {
//   return axios.post('/signup', body, {
//       method: 'post'
//   })
//       .then(res => {
//           console.log(`Axios ${JSON.stringify(res)}`)
//           const flashMessage = res.data.message;

//           if (flashMessage) {
//               return flashMessage

//           } else {
//               const user = res.data.user
//               console.log(`ID Signup: ${JSON.stringify(user)}`)
//               localStorage.setItem('user', JSON.stringify(user))
//               window.location.href = '/homepage'
//           }
//       })
//       .then(flashMessage => {
//           return this.renderFlashMessage(flashMessage)
//       })
//       .catch(err => {
//           console.log(err)
//       })
// }