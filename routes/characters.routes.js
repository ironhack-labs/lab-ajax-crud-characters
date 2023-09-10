const router = require("express").Router();
const ApiService = require('./../services/api.service');
const apiService = new ApiService();

// GET - Get all characters
router.get("/characters", (req, res) => {
  apiService
    .getAllCharacters()
    .then((characters) => {
      res.json(characters);
    })
    .catch((error) => {
      res.status(500).json({ error: "Error fetching characters" });
    });
});

// GET - Get character by ID
router.get("/characters/:id", (req, res) => {
  const characterId = parseInt(req.params.id);
  apiService
    .getCharacterById(characterId)
    .then((character) => {
      if (character) {
        res.json(character);
      } else {
        res.status(404).json({ error: "Character not found" });
      }
    })
    .catch((error) => {
      res.status(500).json({ error: "Error fetching character" });
    });
});

// POST - Create a new character
router.post("/characters", (req, res) => {
  const characterData = req.body;
  apiService
    .createCharacter(characterData)
    .then((createdCharacter) => {
      res.status(201).json(createdCharacter);
    })
    .catch((error) => {
      res.status(400).json({ error: "Invalid character data" });
    });
});

// PUT/PATCH - Update character by ID
router.put("/characters/:id", (req, res) => {
  const characterId = parseInt(req.params.id);
  const characterData = req.body;
  apiService
    .updateCharacter(characterId, characterData)
    .then((updatedCharacter) => {
      if (updatedCharacter) {
        res.json(updatedCharacter);
      } else {
        res.status(404).json({ error: "Character not found" });
      }
    })
    .catch((error) => {
      res.status(400).json({ error: "Invalid character data" });
    });
});

// DELETE - Delete character by ID
router.delete("/characters/:id", (req, res) => {
  const characterId = parseInt(req.params.id);
  apiService
    .deleteCharacter(characterId)
    .then((deleteResponse) => {
      if (deleteResponse === "Character not found") {
        res.status(404).json({ error: "Character not found" });
      } else {
        res.send("Character has been successfully deleted");
      }
    })
    .catch((error) => {
      res.status(500).json({ error: "Error deleting character" });
    });
});

const axios = require('axios');

class APIHandler {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
  }

  // Get all characters info
  getAllCharacters() {
    return axios
      .get(`${this.baseUrl}/characters`)
      .then((response) => {
        console.log('All Characters:', response.data);
      })
      .catch((error) => {
        console.error('Error fetching characters:', error);
      });
  }

  // Get a single character info by ID
  getCharacterById(id) {
    return axios
      .get(`${this.baseUrl}/characters/${id}`)
      .then((response) => {
        console.log('Character by ID:', response.data);
      })
      .catch((error) => {
        console.error(`Error fetching character with ID ${id}:`, error);
      });
  }

  // Create a single character
  createCharacter(characterData) {
    return axios
      .post(`${this.baseUrl}/characters`, characterData)
      .then((response) => {
        console.log('Created Character:', response.data);
      })
      .catch((error) => {
        console.error('Error creating character:', error);
      });
  }

  // Delete a single character by ID
  deleteCharacter(id) {
    return axios
      .delete(`${this.baseUrl}/characters/${id}`)
      .then(() => {
        console.log('Character has been successfully deleted');
      })
      .catch((error) => {
        console.error(`Error deleting character with ID ${id}:`, error);
      });
  }

  // Edit a single character by ID
  editCharacter(id, characterData) {
    return axios
      .put(`${this.baseUrl}/characters/${id}`, characterData)
      .then((response) => {
        console.log('Updated Character:', response.data);
      })
      .catch((error) => {
        console.error(`Error updating character with ID ${id}:`, error);
      });
  }
}



module.exports = router;