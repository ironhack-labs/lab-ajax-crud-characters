const charactersAPI = new APIHandler('https://minions-api.herokuapp.com'); //meter la api

window.addEventListener('load', () => {




  document.getElementById('fetch-all').onclick = function () {


  }

  document.getElementById('fetch-one').onclick = function () {
    const id = document.getElementsByName("character-id")[0].value
    axios.get(`https://minions-api.herokuapp.com/characters/${id}`)
      //charactersAPI.getOneRegister(id.value)
      .then(response => {
        const {
          name,
          occupation,
          weapon,
          cartoon
        } = response.data
        document.getElementsByName('name')[0].value = name
        document.getElementsByName('occupation')[0].value = occupation
        document.getElementsByName('cartoon')[0].value = cartoon
        document.getElementsByName('weapon')[0].value = weapon

        //forms[1].reset()
      })
      .catch(error => console.log('error:', error))
  };

  document.getElementById('delete-one').onclick = function () {
    const id = document.getElementsByName("character-id-delete")[0].value
    const characterInfo = {
      name: document.getElementsByName('name')[0].value,
      occupation: document.getElementsByName('occupation')[0].value,
      cartoon: document.getElementsByName('cartoon')[0].value,
      weapon: document.getElementsByName('weapon')[0].value
    }
    axios.delete(`https://minions-api.herokuapp.com/characters/${id}`, characterInfo)
  };

  document.getElementById('edit-character-form').onclick = function () {

    //  const characterInfo = {
    //    name: inputs[4].value,
    //    occupation: inputs[5].value,
    //    weapon: inputs[6].value
    //  }

    //  const id = inputs[3].value

    //  axios.put(`https://minions-api.herokuapp.com/characters/${id}`, characterInfo)
    //    .then(response => {
    //      const {
    //        name,
    //        occupation
    //      } = response.data
    //      const html = `<li>${name} (${occupation})</li>`
    //      document.getElementById('characters-list').innerHTML += html

    //      forms[2].reset()
    //    })
    //    .catch(error => console.log('error:', error))
  }



  document.getElementById('send-data').onclick = e => {
    //const id = document.getElementsByName("new-character-form")[0].value
    e.preventDefault()
    const characterInfo = {
      name: document.getElementsByName('name')[1].value,
      occupation: document.getElementsByName('occupation')[1].value,
      weapon: document.getElementsByName('weapon')[1].value,
      cartoon: document.getElementsByName('cartoon')[1].checked
    }
    axios.post(`https://minions-api.herokuapp.com/characters`, characterInfo)
    .then(response =>{
      const {name, ocupacion, weapon, cartoon} = response.data
    })
    .catch(error => console.log('error:', error))
  };
});