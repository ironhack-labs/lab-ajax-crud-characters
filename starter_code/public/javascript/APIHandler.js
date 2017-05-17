class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList () {
	  $.ajax({
	    url: `${this.BASE_URL}/characters`,
	    method: "GET",
	    success: function (response) {
	      console.log(response);
	    },
	    error: function (err) {
	      console.log(err);
	    },
	  });
  }

  getOneRegister (characterID) {
		$.ajax({
	    url: `${this.BASE_URL}/characters/${characterID}`,
	    method: "GET",
	    success: function (response) {
	      console.log(response);
	    },
	    error: function (err) {
	      console.log(err);
	    },
	  });
  }

	deleteOneRegister (characterID) {
		$.ajax({
	    url: `${this.BASE_URL}/characters/${characterID}`,
	    method: "DELETE",
	    success: function (response) {
	      console.log(response);
	    },
	    error: function (err) {
	      console.log(err);
	    },
	  });
	}

  createOneRegister (characterInfo) {
		$.ajax({
			url: `${this.BASE_URL}/characters`,
			method: "POST",
			data: characterInfo,
			success: function (response) {
				console.log(response);
			},
			error: function (err) {
				console.log(err);
			},
		});
  }

  updateOneRegister (characterInfo) {
		const charId = $('#edit-character-form input[name=chr-id]').val();
		$.ajax({
			url: `${this.BASE_URL}/characters/${charId}`,
			method: "PUT",
			data: characterInfo,
			success: function (response) {
				console.log(response);
			},
			error: function (err) {
				console.log(err);
			},
		})
  }


}
