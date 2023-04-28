const request = require("supertest");
const APIHandler = require("../../public/javascript/APIHandler");
const baseURL = "http://localhost:8000";
let charactersAPI = null;

beforeAll(async () => {
  charactersAPI = new APIHandler(baseURL);
});

describe("charactersAPI", () => {
  it("should creacte charactersAPI", () => {
    expect(charactersAPI).not.toBeNull();
  });
});

describe("getFullList", () => {
  it("should have a getFullList function", () => {
    expect(typeof charactersAPI.getFullList).toBe("function");
  });
  it("should return 200 and characters", async () => {
    const response = await charactersAPI.getFullList();
    expect(response.status).toBe(200);
    expect(response.data.length >= 1).toBe(true);
  });
});

describe("getOneRegister", () => {
  const character = { name: "dark vador", occupation: "sith", weapon: "power", cartoon: true };
  let characterId = 0;

  it("should have a getFullList function", () => {
    expect(typeof charactersAPI.getFullList).toBe("function");
  });

  beforeAll(async () => {
    const response = await request(baseURL).post("/characters").send(character);
    characterId = response.body.id;
  });
  afterAll(async () => {
    await request(baseURL).delete(`/characters/${characterId}`);
  });
  it("should return 200 and one character", async () => {
    const response = await charactersAPI.getOneRegister(characterId);
    expect(response.status).toBe(200);
    expect(response.data.name).toBe(character.name);
    expect(response.data.occupation).toBe(character.occupation);
  });
});

describe("createOneRegister", () => {
  const character = { name: "obiwan", occupation: "jedi", weapon: "saberlaser", cartoon: false };
  let characterId = 0;
  afterAll(async () => {
    await request(baseURL).delete(`/characters/${characterId}`);
  });
  it("should return 201 and add a new character", async () => {
    const response = await charactersAPI.createOneRegister(character);
    characterId = response.data.id;
    expect(response.status).toBe(201);
    expect(response.data.name).toBe(character.name);
    expect(response.data.occupation).toBe(character.occupation);
  });
});

describe("updateOneRegister", () => {
  const character = { name: "dark vador", occupation: "sith", weapon: "power", cartoon: true };
  let characterId = 0;
  beforeAll(async () => {
    const response = await request(baseURL).post("/characters").send(character);
    characterId = response.body.id;
  });
  afterAll(async () => {
    await request(baseURL).delete(`/characters/${characterId}`);
  });
  it("should update item if exists", async () => {
    const response = await charactersAPI.updateOneRegister(characterId, {
      ...character,
      cartoon: false,
    });
    expect(response.status).toBe(200);
    expect(response.data.name).toBe(character.name);
    expect(response.data.cartoon).toBe(false);
  });
});

describe("deleteOneRegister", () => {
  const character = { name: "dark maul", occupation: "sith", weapon: "power", cartoon: true };
  let characterId = 0;
  beforeAll(async () => {
    const response = await request(baseURL).post("/characters").send(character);
    characterId = response.body.id;
  });

  it("should delete item if exists", async () => {
    const response = await charactersAPI.deleteOneRegister(characterId);
    expect(response.status).toBe(200);
  });
});
