const router = require("express").Router();
const Event = require("../models/event");
const Child = require("../models/children");

// Find all
router.get("/", (req, res, next) => {
  Event.find({})
    .then((event) => res.json(event))
    .catch((err) => next(err));
});

// Find all by id
router.get("/child/:id", (req, res, next) => {
    Event.find({child: req.params.id})
      .then((event) => res.json(event))
      .catch((err) => next(err));
  });

// Find by ID
router.get("/:id", (req, res, next) => {
  Event.findById(req.params.id)
    .then((event) => {
      if (event) {
        res.json(event);
      } else {
        res.status(404).json("not found");
      }
    })
    .catch((err) => next(err));
});



// Delete one
router.delete("/:id", (req, res, next) => {
  Event.findByIdAndRemove(req.params.id)
    .then((result) => {
      if (result) {
        res.json(result);
      } else {
        res.status(404).json("not found");
      }
    })
    .catch((err) => next(err));
});

// Insert one
router.post("/", (req, res, next) => {
  const body = req.body;
  // Check body
  const errorMessages = [];
  if (!body.date) errorMessages.push("date must be present");
  if (!body.child) errorMessages.push("child must be present");
  if (!body.name) errorMessages.push("name must be present");
  if (errorMessages.length > 0) {
    res.status(422).json({ errorMessages });
    return;
  }
  // Check existing

  // Insert
  
  Child.findById(body.child).then((child) => {
    console.log(child)
    if (child) {
      const newEvent = new Event(body);
      newEvent
        .save()
        .then((result) => {
          res.json(result);
        })
        .catch((err) => next(err));
    }else{
        res.status(422).json("child must existe")
    }
  }).catch(err => next(err))
});

module.exports = router;
module.exports = router;
