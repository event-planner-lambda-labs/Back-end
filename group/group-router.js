const router = require("express").Router();

const Groups = require("./group-model");
const authCheck = require("../api/middleware/checkToken");

// Get
router.get("/", (req, res) => {
  Groups.find()
    .then(groups => {
      res.status(200).json(groups);
    })
    .catch(error => res.status(500).json(error));
});

// Get Group Members
router.get("/:id/members", authCheck, async (req, res) => {
  try {
    const { id } = req.params;
    const groupMembers = await Groups.getGroupMembers(id);

    res.status(200).json(groupMembers);
  } catch ({ message }) {
    console.log({ message });
    res.status(500).json({ message: "server error finding members" });
  }
});

// Get by ID
router.get("/:id", (req, res) => {
  Groups.findById()
    .then(groups => {
      res.status(200).json(groups);
    })
    .catch(error => res.status(500).json(error));
});

// Post
router.post("/", authCheck, (req, res) => {
  Groups.add()
    .then(groups => {
      res.status(201).json(groups);
    })
    .catch(error => res.status(500).json(error));
});

// Put
router.put("/:id", authCheck, async (req, res) => {
  try {
    const updateHost = await Groups.update(req.params.id, req.body);
    if (updateHost) {
      res.status(200).json(updateHost);
    } else {
      res.status(404).json({ message: "group not found" });
    }
  } catch ({ message }) {
    console.log({ message });
    res.status(500).json({ message: "server error updating" });
  }
});

// Delete
router.delete("/:id", authCheck, (req, res) => {
  Groups.remove(req.params.id)
    .then(count => {
      if (count > 0) {
        res.status(200).json({ message: "group deleted" });
      } else {
        res.status(404).json({ message: "group not found" });
      }
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({ message: "server error deleting group" });
    });
});

module.exports = router;
