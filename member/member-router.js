const router = require("express").Router();

const Members = require("./member-model");
const authCheck = require("../api/middleware/checkToken");

// Get
router.get("/", authCheck, async (req, res) => {
  try {
    const members = await Members.find();
    res.status(200).json(members);
  } catch ({ message }) {
    console.log({ message });
    res.status(500).json({ message: "server error finding member", message });
  }
});

// Get by ID
router.get("/:id", authCheck, (req, res) => {
  Members.findById(req.params.id)
    .then(members => {
      res.status(200).json(members);
    })
    .catch(error => res.status(500).json(error));
});

// Post
router.post("/", authCheck, async (req, res) => {
  const member = req.body;
  if (member.user_id && member.group_id) {
    try {
      const addMember = await Members.add(member);
      res.status(201).json(addMember);
    } catch ({ message }) {
      res.status(500).json({ message: "server error adding member", message });
    }
  } else {
    res.status(400).json({ message: "please provide user id and group id" });
  }
});

// Put
router.put("/:id", authCheck, async (req, res) => {
  try {
    const updateMember = await Member.update(req.params.id, req.body);
    if (updateMember) {
      res.status(200).json(updateMember);
    } else {
      res.status(404).json({ message: "member not found" });
    }
  } catch ({ message }) {
    console.log({ message });
    res.status(500).json({ message: "server error updating" });
  }
});

// Delete
router.delete("/:id", authCheck, (req, res) => {
  Members.remove(req.params.id)
    .then(count => {
      if (count > 0) {
        res.status(200).json({ message: "member deleted" });
      } else {
        res.status(404).json({ message: "member not found" });
      }
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({ message: "server error deleting member" });
    });
});

module.exports = router;
