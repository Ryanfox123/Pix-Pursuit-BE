const app = require("../app.js");
const request = require("supertest");
const db = require("../DB/connection.js");
const seed = require("../DB/seeds/seed.js");

const data = require("../DB/data/testData/index.js");

beforeEach(() => seed(data));
afterAll(() => db.end());

describe("PATCH /api/users/:userID/points", () => {
  test("PATCH 200 successfuly changed the points", () => {
    return request(app)
      .patch("/api/users/1/points")
      .send({ inc_points: 5 })
      .expect(200)
      .then(({ body }) => {
        const user = body.user;
        expect(typeof user.username).toBe("string");
        expect(user.points).toBe(105);
      });
  });
  test("PATCH 404 the user_id parameter is of the correct type but doesn't exist", () => {
    return request(app)
      .patch("/api/users/9999/points")
      .send({ inc_points: 5 })
      .expect(404)
      .then(({ body }) => {
        expect(body.msg).toBe("user_id is invalid");
      });
  });
  test("PATCH 400 the user_id is of the incorrect type", () => {
    return request(app)
      .patch("/api/users/invalidID/points")
      .send({ inc_points: 5 })
      .expect(400)
      .then(({ body }) => {
        expect(body.msg).toBe("400: Invalid request");
      });
  });
  test("PATCH the body is of an incorrect format or non-existent", () => {
    return request(app)
      .patch("/api/users/invalidID/points")
      .send({})
      .expect(400)
      .then(({ body }) => {
        console.log(body);
        expect(body.msg).toBe("400: Invalid request");
      });
  });
});