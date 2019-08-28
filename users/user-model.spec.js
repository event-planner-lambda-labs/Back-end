const db = require("../database/dbConfig");
const Users = require("./user-model");

describe("users model", () => {
  beforeEach(() => {
    return db("users").truncate();
  });
});

describe("add", () => {
  it("should insert user info into the db", async () => {
    await Users.add({
      username: "testUser",
      email: "testEmail@email.com"
    });

    const users = await db("users");
    expect(users).toHaveLength(1);
  });
});

describe("find", () => {
  it("should return a array of users", async () => {
    await Users.find();

    const users = await db("users");
    expect(users).toBe([]);
  });
});

describe("update", () => {
  it("should update the user data", async () => {
    await Users.update(1, {
      username: "testUpdate",
      email: "testUpdate@email.com"
    });

    const users = await Users.findById(1);
    expect(users).toBe({
      id: 1,
      username: "testUpdate",
      email: "testUpdate@email.com"
    });
  });
});

describe("remove", () => {
  it("should remove user by id", async () => {
    await Users.add({
      username: "testUser2",
      email: "test2@email.com"
    });
    await Users.remove(1);
    const users = await db("users");
    expect(users).toHaveLength(1);
  });
});
