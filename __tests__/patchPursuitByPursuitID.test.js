const app = require("../app");
const request = require("supertest");
const data = require("../db/data/testData/index.js");
const db = require("../db/connection.js");
const seed = require("../db/seeds/seed.js");

beforeEach(() => seed(data));
afterAll(() => db.end());

xdescribe("patch /pursuits/:pursuitID", () => {
  it("responds 200 - returns pursuit with active updated to either true or false", () => {
    return request(app)
      .patch("/api/pursuits/1")
      .send({ active: false })
      .expect(200)
      .then(({ body: { pursuit } }) => {
        expect(pursuit.pursuit_ID).toBe(1);
        expect(pursuit.host_ID).toBe(1);
        expect(pursuit.image).toBe("https://example.com/hunt1.jpg");
        expect(pursuit.target_lat).toBe(40.7128);
        expect(pursuit.target_long).toBe(-74.006);
        expect(pursuit.random_lat).toBe(40.71);
        expect(pursuit.random_long).toBe(-74.01);
        expect(pursuit.difficulty).toBe("Easy");
        expect(pursuit.completions).toBe(10);
        expect(pursuit.active).toBe(false);
        expect(pursuit.created_at).toBe("2024-01-01T00:00:00Z");
        expect(pursuit.title).toBe("Simple Hunt");
      });
  });
});
