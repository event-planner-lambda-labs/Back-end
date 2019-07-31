const router = require("express").Router();

const Members = require("./member-model");

// Get

router.get("/", (req, res) => {
  Members.find()
    .then(members => {
      res.status(200).json(members);
    })
    .catch(error => res.status(500).json(error));
});

// Get by ID

router.get("/:id", (req, res) => {
  Members.findById()
    .then(members => {
      res.status(200).json(members);
    })
    .catch(error => res.status(500).json(error));
});

// Post

router.post("/", (req, res) => {
  Members.add()
    .then(members => {
      res.status(201).json(members);
    })
    .catch(error => res.status(500).json(error));
});

// Put

router.put("/:id", async (req, res) => {
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

router.delete("/:id", (req, res) => {
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
