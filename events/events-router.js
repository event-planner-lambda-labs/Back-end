const router = require("express").Router();

const Events = require("./events-model");
const Hosts = require("../host/host-model");
const authCheck = require("../api/middleware/checkToken");

// Get

router.get("/", authCheck, (req, res) => {
  Events.find()
    .then(events => {
      res.status(200).json(events);
    })
    .catch(error => res.status(500).json(error));
});

// Get by ID

router.get("/:id", authCheck, (req, res) => {
  Events.findById()
    .then(events => {
      res.status(200).json(events);
    })
    .catch(error => res.status(500).json(error));
});

// Post

router.post("/", authCheck, async (req, res) => {
  try {
    const newEvent = req.body;

    const host = await Hosts.add(newEvent.host);

    newEvent.host = host[0].id;

    const addEvent = await Events.add(newEvent);
    res.status(201).json(addEvent);
  } catch ({ message }) {
    console.log({ message });
    res.status(500).json({ message: "server error", message });
  }
});

// Put

router.put("/:id", authCheck, async (req, res) => {
  try {
    const updateEvents = await Events.update(req.params.id, req.body);
    if (updateEvents) {
      res.status(200).json(updateEvents);
    } else {
      res.status(404).json({ message: "event not found" });
    }
  } catch ({ message }) {
    console.log({ message });
    res.status(500).json({ message: "server error updating" });
  }
});

// Delete

router.delete("/:id", authCheck, (req, res) => {
  Events.remove(req.params.id)
    .then(count => {
      if (count > 0) {
        res.status(200).json({ message: "event deleted" });
      } else {
        res.status(404).json({ message: "event not found" });
      }
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({ message: "server error deleting event" });
    });
});

module.exports = router;
