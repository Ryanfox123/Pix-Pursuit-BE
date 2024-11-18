const app = require("../app");
const request = require("supertest");
const data = require("../DB/data/testData/index.js");
const db = require("../DB/connection.js");
const seed = require("../DB/seeds/seed.js");

beforeEach(() => seed(data));
afterAll(() => db.end());

describe("post /api/users", () => {
  it("responds 201 - returns a newly created user object", () => {
    return request(app)
      .post("/api/users")
      .send({
        email: "testemail@email.com",
        password: "password",
        username: "username",
      })
      .expect(201)
      .then(({ body: { user } }) => {
        expect(user.username).toBe("username");
        expect(typeof user.user_id).toBe("number");
        expect(user.email).toBe("testemail@email.com");
        expect(user.password).toBe("password");
        expect(user.points).toBe(0);
      });
  });
  it("responds 400 - returns an error message if anything is missing from the request body", () => {
    return request(app)
      .post("/api/users")
      .send({ username: "username" })
      .expect(400)
      .then(({ body: { msg } }) => {
        expect(msg).toBe("invalid request body");
      });
  });
});
