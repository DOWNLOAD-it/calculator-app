const request = require("supertest");
const app = require("../serveur");

describe("Calculator API", () => {
  test("adds numbers correctly", async () => {
    const res = await request(app).get("/add/2/3");
    expect(res.body.result).toBe(5);
  });
});
