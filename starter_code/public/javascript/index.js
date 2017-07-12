const charactersAPI = new APIHandler("http://ih-api.herokuapp.com")

$(document).ready( () => {
  $('#fetch-all').on('click', (e) => {
    charactersAPI.getFullList();
  });

  $('#fetch-one').on('click', (e) => {
    const id = $("[name=character-id]").val();
    charactersAPI.getOne(id);
  });

  $('#delete-one').on('click', (e) => {
    const id = $("[name=character-id-delete]").val();
    charactersAPI.deleteOne(id);
  })

  $('#edit-character-form').on('submit', (e) => {
    e.preventDefault();
    const id = $("[name=chr-id]").val();
    const inputs = $('#edit-character-form :input');
    const values = {};
    inputs.each(function() {
      if (this.name === 'debt') {
        if($(this).is(':checked')) {
          values['debt'] = true;
        } else {
          values['debt'] = false;
        }
      }
      if(this.name !== "" && this.name !== 'debt') {
        values[this.name] = $(this).val();
      }
    });
    charactersAPI.updateOne(values, id);
    refresh();
  })

  $('#new-character-form').on('submit', (e) => {
    e.preventDefault();
    const inputs = $('#new-character-form :input');
    const values = {};
    inputs.each(function() {
      if (this.name === 'debt') {
        if($(this).is(':checked')) {
          values['debt'] = true;
        } else {
          values['debt'] = false;
        }
      }
      if(this.name !== "" && this.name !== 'debt') {
        values[this.name] = $(this).val();
      }
    });
    charactersAPI.createOne(values);
    refresh();
  })
})


function refresh() {
  var timeout = setTimeout( () => {
    document.location.reload();
  }, 1000);
}
