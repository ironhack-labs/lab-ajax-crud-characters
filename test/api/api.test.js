const request = require("supertest");
const baseURL = "http://localhost:8000";

describe("GET /characters", () => {
  it("should return 200 and characters", async () => {
    return request(baseURL)
      .get("/characters")
      .expect(200)
      .then((response) => expect(response.body.length >= 1).toBe(true));
  });
});
describe("POST /characters", () => {
  const character = { name: "obiwan", occupation: "jedi", weapon: "saberlaser", cartoon: false };
  let characterId = 0;
  afterAll(async () => {
    await request(baseURL).delete(`/characters/${characterId}`);
  });
  it("should return 201 and add a new character", async () => {
    const response = await request(baseURL).post("/characters").send(character);
    characterId = response.body.id;
    expect(response.statusCode).toBe(201);
    expect(response.body.name).toBe(character.name);
    expect(response.body.occupation).toBe(character.occupation);
  });
});

describe("PUT /characters/:id", () => {
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
    const response = await request(baseURL)
      .put(`/characters/${characterId}`)
      .send({ ...character, cartoon: false });
    expect(response.statusCode).toBe(200);
    expect(response.body.name).toBe(character.name);
    expect(response.body.cartoon).toBe(false);
  });
});
