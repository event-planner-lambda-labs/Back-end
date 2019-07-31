const router = require("express").Router();

const Hosts = require("./host-model");
const authCheck = require("../api/middleware/checkToken");

// Get
router.get("/", (req, res) => {
  Hosts.find()
    .then(hosts => {
      res.status(200).json(hosts);
    })
    .catch(error => res.status(500).json(error));
});

// Get by ID
router.get("/:id", authCheck, (req, res) => {
  Hosts.findById()
    .then(hosts => {
      res.status(200).json(hosts);
    })
    .catch(error => res.status(500).json(error));
});

// Post
router.post("/", authCheck, (req, res) => {
  Hosts.add()
    .then(hosts => {
      res.status(201).json(hosts);
    })
    .catch(error => res.status(500).json(error));
});

// Put
router.put("/:id", authCheck, async (req, res) => {
  try {
    const updateHost = await Hosts.update(req.params.id, req.body);
    if (updateHost) {
      res.status(200).json(updateHost);
    } else {
      res.status(404).json({ message: "host not found" });
    }
  } catch ({ message }) {
    console.log({ message });
    res.status(500).json({ message: "server error updating" });
  }
});

// Delete
router.delete("/:id", authCheck, (req, res) => {
  Hosts.remove(req.params.id)
    .then(count => {
      if (count > 0) {
        res.status(200).json({ message: "host deleted" });
      } else {
        res.status(404).json({ message: "host not found" });
      }
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({ message: "server error deleting host" });
    });
});

module.exports = router;
