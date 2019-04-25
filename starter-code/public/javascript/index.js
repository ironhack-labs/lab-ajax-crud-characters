const buttonFetchAll = document.getElementById('fetch-all')
const buttonFetchOne = document.getElementById('fetch-one')
const buttonDelete = document.getElementById('delete-one')
const buttonEdit = document.getElementById('send-data-edit')
const buttonNew = document.getElementById('send-data-create')
const charactersAPI = new APIHandler("http://localhost:8000")


buttonFetchAll.onclick = () => {
  axios
  .get(charactersAPI.BASE_URL + '/characters')
  .then(({ data }) => {
    console.log(data)
  })
  .catch(err => console.log(err))
}

buttonFetchOne.onclick = () => {
  id = document.getElementById('character-id').value
  axios
  .get(charactersAPI.BASE_URL + `/characters/${id}`)
  .then(({ data }) => console.log(data))
  .catch(err => console.log(err))
}

buttonDelete.onclick = () => {
  id = document.getElementById('character-id-delete').value
  axios
  .delete(charactersAPI.BASE_URL + `/characters/${id}`)
  .then(({ data }) => console.log(data))
  .catch(err => console.log(err))   
}

buttonNew.onclick = () => {
  id = document.getElementById('new-character-form').value
  name = document.querySelector('input[name="name"]').value
  occupation = document.querySelector('input[name="occupation"]').value
  weapon = document.querySelector('input[name="weapon"]').value
  cartoon = document.querySelector('input[name="cartoon"]').checked
  axios
  .post(charactersAPI.BASE_URL + `/characters/`, {name, occupation, weapon })
  .then(({ data }) => {
    console.log(data)
  })
      .catch(err => console.log(err))
  }

buttonEdit.onclick = () => {
  id = document.getElementById('edit-one-input').value
  name = document.querySelector('input[name="name-edit"]').value
  occupation = document.querySelector('input[name="occupation-edit"]').value
  weapon = document.querySelector('input[name="weapon-edit"]').value
  cartoon = document.querySelector('input[name="cartoon-edit"]').checked
  axios
  .patch(charactersAPI.BASE_URL + `/characters/`, { name, occupation, weapon })
  .then(({ data }) => {
    console.log(data)
  })
      .catch(err => console.log(err))
  }
