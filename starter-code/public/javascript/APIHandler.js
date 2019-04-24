
const buttonFetchAll = document.getElementById('fetch-all')
const buttonFetchOne = document.getElementById('fetch-one')
const buttonDelete = document.getElementById('delete-one')
const buttonSendData = document.getElementById('send-data')
const buttonEditCharacter = document.getElementById('edit-character-form')

const endpoint = 'http://localhost:8000/characters'


buttonFetchAll.onclick = () => {
  
  axios.get(endpoint) 
  .then(data => {
    console.log(data)
  })
  .catch (err => console.log(err))
}


buttonFetchOne.onclick = () => {
 id = document.getElementById('fetch-one-input').value
 
 console.log(id)
 axios.get (`${endpoint}/${id}`)
 .then(({data}) => console.log(data))
 .catch(err => console.log(err))
}


buttonDelete.onclick = () =>{
  id= document.getElementById('delete-one-input').value

  axios.delete (`${endpoint}/${id}`)
}


buttonSendData.onclick = () => {
  id = document.getElementById('send-data').value
  
  name = document.querySelector('input[name="name"]').value
  occupation = document.querySelector('input[name="occupation"]').value
  cartoon = document.querySelector('input[name="cartoon"]').value
  weapon = document.querySelector('input[name="weapon"]').value
  
  axios
  .post(`${endpoint}`, {name,occupation,cartoon,weapon})
  .then(({data})=> console.log(data))
  .catch(err => console.log(err))
}


buttonEditCharacter.onsubmit = (e) =>{
  e.preventDefault()
  id = document.getElementById('chr-id-edit').value
  console.log(id)
  name = document.getElementById('name-edit').value
  occupation = document.getElementById('occupation-edit').value
  cartoon = document.getElementById('cartoon-edit').value
  weapon = document.getElementById('weapon-edit').value
  console.log(id,name,occupation,cartoon,weapon)
  axios 
  .patch (`${endpoint}/${id}`, {name,occupation,cartoon,weapon} )
  .then(({data}) => console.log(data))
  .catch(err => console.log(err))
}

buttonDelete.onclick =()=>{
  alert('sí sirve el botón')
  id= document.getElementById('delete-one-input').value
  console.log(id)
  axios
  .delete (`${endpoint}/${id}`)
  
}
