const charactersAPI = new APIHandler("http://ih-crud-api.herokuapp.com")

$(document).ready( () => {
  $('#fetch-all').on('click', (e) => {
    charactersAPI.getFullList();
  })

  $('#fetch-one').on('click', (e) => {
    charactersAPI.getOneRegister($('#fetchOne').val());
  })

  $('#delete-one').on('click', (e) => {
    charactersAPI.deleteOneRegister($('#deleteOne').val());
  })

  $('#edit-character-form').on('submit', (e) => {
    e.preventDefault();
    let inputs = $('#edit-character-form').serializeArray();
    /* Because serializeArray() ignores unset checkboxes and radio buttons: */
    let editChar = {};
    let id;
    inputs.forEach( e => {
      if (e.name=="chr-id")
        id=e.value;
      else {
        if (e.value != ""){
          editChar[e.name] =e.value;
        }
      }
    });

    if (editChar['debt'] ==  "on")
      editChar['debt'] = true;
    else
      editChar['debt'] = false;
      charactersAPI.updateOneRegister(editChar,id);
  })

  $('#new-character-form').on('submit', (e) => {
    e.preventDefault();
    let inputs = $('#new-character-form').serializeArray();
    let checkbox;
    /* Because serializeArray() ignores unset checkboxes and radio buttons: */
    inputs = inputs.concat(
            $('#new-character-form input[type=checkbox]:not(:checked)').map(
            () =>{ return {"name": this.name, "value": this.value}}).get());

    if (inputs[3]['value'] === undefined)
      checkbox = false;
    else
      checkbox = true;

    let newChar = {
      name: inputs[0]['value'],
      occupation: inputs[1]['value'],
      weapon: inputs[2]['value'],
      debt: checkbox
    }
    charactersAPI.createOneRegister(newChar);
  })
})
