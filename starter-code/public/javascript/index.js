const charactersAPI = new APIHandler('https://minions-api.herokuapp.com/');
const inputs = document.querySelectorAll('input')
const forms = document.querySelectorAll('form')

window.addEventListener('load', () => {
  document.getElementById('fetch-all').onclick = () => {

  }

  document.getElementById('fetch-one').onclick = () => {
    const id = inputs[4].value
    axios.get(`https://minions-api.herokuapp.com/characters/${id}`)
      .then(response => {
        const {
          name,
          occupation,
          cartoon,
          weapon
        } = response.data
        inputs[0].value = name
        inputs[1].value = occupation
        inputs[2].value = cartoon ? "true" : "false"
        inputs[3].value = weapon

      })
      .catch(error => console.log('error: ', error))
  }

  document.getElementById('delete-one').onclick = () => {
    const id = inputs[5].value
    axios.delete(`https://minions-api.herokuapp.com/characters/${id}`)
      .then(response => {
        inputs[0].value = ""
        inputs[1].value = ""
        inputs[2].value = ""
        inputs[3].value = ""
        inputs[4].value = ""
        inputs[5].value = "Eliminado"
        inputs[5].style.backgroundColor = "red"
        setTimeout(() => inputs[5].style.backgroundColor = "white", 1000)
        setTimeout(() => inputs[5].value = "", 1000)
      })
      .catch(error => {
        console.log('error: ', error)
        inputs[5].value = "Error"
      })
  }

forms[1].onsubmit = e => {
  e.preventDefault()
  const id = inputs[10].value
  axios.get(`https://minions-api.herokuapp.com/characters/${id}`)
    .then(response => {
      const {
        name,
        occupation,
        weapon,
        cartoon
      } = response.data
      inputs[11].value = name
      inputs[12].value = occupation
      inputs[13].value = weapon
      inputs[14].checked = cartoon ? true : false

    })
    .catch(error => console.log('error:', error))
}

forms[2].onsubmit = e => {
  e.preventDefault()

  const characterInfo = {
    name: inputs[11].value,
    occupation: inputs[12].value,
    weapon: inputs[13].value,
    cartoon: inputs[14].checked
  }
  const id = inputs[10].value

  axios.put(`https://minions-api.herokuapp.com/characters/${id}`, characterInfo)
    .then(response => {
      console.log(response.data)
      forms[2].reset()
      forms[1].reset()
    })
    .catch(error => console.log('error:', error))
}

forms[0].onsubmit = e => {
e.preventDefault()
const characterInfo = {
  name: inputs[6].value,
  occupation: inputs[7].value,
  weapon: inputs[8].value,
  cartoon: inputs[9].checked
}
axios.post(`https://minions-api.herokuapp.com/characters`, characterInfo)
  .then(response => {
    const {
      name,
      occupation,
      weapon,
      cartoon,
    } = response.data
    console.log(response.data)
    inputs[0].value = name
    inputs[1].value = occupation
    inputs[2].value = cartoon
    inputs[3].value = weapon

    forms[0].reset()
  })
  .catch(error => console.log('error:', error))

}
})