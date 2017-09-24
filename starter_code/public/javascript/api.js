class api {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getOne() {
    const characterId = $("input[name=character-id]").val();

    $.ajax({
      url: `https://ih-api.herokuapp.com/characters/${characterId}`,
      method: "GET",

      success: one => {
        $(".characters-container").append(`
              <div class="character-info">
                  <div class="id"> ID: ${one.id} </div>
                  <div class="name">Name: ${one.name} </div>
                  <div class="occupation">Occupation: ${one.occupation}</div>
                  <div class="debt">Debt: ${one.debt}</div>
                  <div class="weapon">Weapon: ${one.weapon}</div>
              </div>
                `);
      },

      error: err => {
        console.log(err);
      }
    });
  }

  createOne(characterSubmission) {
    $.ajax({
      url: "https://ih-api.herokuapp.com/characters/",
      method: "POST",

      data: characterSubmission,

      success: res => {
        $("#send-data").removeClass("failed");
        $("#send-data").addClass("active");
      },

      error: err => {
        $("#send-data").removeClass("active");
        $("#send-data").addClass("failed");
      }
    });
  }

  updateOne(updateSubmission) {
    const characterId = $("input[name=chr-id]").val();

    $.ajax({
      url: `https://ih-api.herokuapp.com/characters/${characterId}`,
      method: "PATCH",

      data: updateSubmission,

      success: res => {
        $("#edit-data").removeClass("failed");
        $("#edit-data").addClass("active");
      },

      error: err => {
        $("#edit-data").removeClass("active");
        $("#edit-data").addClass("failed");
      }
    });
  }

  deleteOne() {
    const characterId = $("input[name=character-id-delete]").val();

    $.ajax({
      url: `https://ih-api.herokuapp.com/characters/${characterId}`,
      method: "DELETE",

      success: () => {
        $("#delete-one").removeClass("failed");
        $("#delete-one").addClass("active");
      },

      error: err => {
        $("#delete-one").removeClass("active");
        $("#delete-one").addClass("failed");
      }
    });
  }

  getFullList() {
    $.ajax({
      url: "https://ih-api.herokuapp.com/characters/",
      method: "GET",

      success: characterList => {
        characterList.forEach(one => {
          $(".characters-container").append(`
            <div class="character-info">
                <div class="id"> ID: ${one.id} </div>
                <div class="name">Name: ${one.name} </div>
                <div class="occupation">Occupation: ${one.occupation}</div>
                <div class="debt">Debt: ${one.debt}</div>
                <div class="weapon">Weapon: ${one.weapon}</div>
            </div>
              `);
        });
      },

      error: err => {
        console.log(err);
      }
    });
  }
}
