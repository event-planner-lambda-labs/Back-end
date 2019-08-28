const router = require("express").Router();

const Users = require("./user-model");
const authCheck = require("../api/middleware/checkToken");

// Get - works
router.get("/", async (req, res) => {
  try {
    const users = await Users.find();
    res.status(200).json(users);
  } catch ({ message }) {
    console.log({ message });
    res.status(500).json({ message: "server error", message });
  }
});

// Get by ID - works
router.get("/:id", authCheck, (req, res) => {
  Users.findById(req.params.id)
    .then(user => {
      res.status(200).json(user);
    })
    .catch(error => res.status(500).json(error));
});

// Post - works
router.post("/", authCheck, async (req, res) => {
  const user = req.body;
  if (user.username) {
    try {
      const addUser = await Users.add(user);
      res.status(201).json(addUser);
    } catch ({ message }) {
      // console.log({ message });
      res.status(500).json({ message: "server error adding user", message });
    }
  } else {
    res.status(400).json({ message: "provide username" });
  }
});

// Put - works
router.put("/:id", authCheck, async (req, res) => {
  try {
    const updateUser = await Users.update(req.params.id, req.body);
    if (updateUser) {
      res.status(200).json(updateUser);
    } else {
      res.status(404).json({ message: "user not found" });
    }
  } catch ({ message }) {
    // console.log({ message });
    res.status(500).json({ message: "server error updating user" });
  }
});

// Delete - works
router.delete("/:id", authCheck, (req, res) => {
  Users.remove(req.params.id)
    .then(count => {
      if (count > 0) {
        res.status(200).json({ message: "user deleted" });
      } else {
        res.status(404).json({ message: "user not found" });
      }
    })
    .catch(error => {
      // console.log(error);
      res.status(500).json({ message: "server error deleting user" });
    });
});

module.exports = router;
