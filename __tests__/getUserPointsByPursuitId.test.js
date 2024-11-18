const app = require("../app");
const db = require("../DB/connection");
const data = require("../DB/data/testData");
const seed = require("../DB/seeds/seed");
const request = require("supertest");

beforeEach(() => seed(data));
afterAll(() => db.end());

describe("/api/users/points/:pursuitId", () => {
  it("responds 200 - returns an array of 3 user objects with properties username and points", () => {
    return request(app)
      .get("/api/users/points/1")
      .expect(200)
      .then(({ body: { users } }) => {
        expect(users.length).toBe(3);
        users.forEach((user) => {
          expect(typeof user.username).toBe("string");
          expect(typeof user.points).toBe("number");
        });
      });
  });
  it("responds 200 - returns the top 3 users in descending order of points", () => {
    return request(app)
      .get("/api/users/points/1")
      .expect(200)
      .then(({ body: { users } }) => {
        expect(users).toBeSorted({ descending: true, key: "points" });
      });
  });
  it("responds 400 - returns an error message if the pursuit id is a valid type but does not exist", () => {
    return request(app)
      .get("/api/users/points/999")
      .expect(400)
      .then(({ body: { msg } }) => {
        expect(msg).toBe("pursuit does not exist");
      });
  });
  it("responds 400 - returns an error message if the pursuit id is an invalid type", () => {
    return request(app)
      .get("/api/users/points/invalidId")
      .expect(400)
      .then(({ body: { msg } }) => {
        expect(msg).toBe("pursuit does not exist");
      });
  });
});
