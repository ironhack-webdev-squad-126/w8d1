const express = require("express");
const router = express.Router();

const Task = require("../models/Task");
const Project = require("../models/Project");

router.post("/tasks", (req, res) => {
  Task.create({
    title: req.body.title,
    description: req.body.description,
    project: req.body.project
  })
    .then(task => {
      Project.findByIdAndUpdate(req.body.project, {
        $push: { tasks: task._id }
      })
        .then(project => {
          res.json(project);
        })
        .catch(error => {
          res.json(error);
        });
    })
    .catch(error => {
      res.json(error);
    });
});

router.get("/tasks/:id", (req, res) => {
  Task.findById(req.params.id)
    .populate("project")
    .then(task => {
      res.json(task);
    })
    .catch(error => {
      res.json(error);
    });
});

router.put("/tasks/:id", (req, res) => {
  Task.findByIdAndUpdate(req.params.id, req.body)
    .then(() => {
      res.json({ message: "ok" });
    })
    .catch(error => {
      res.json(error);
    });
});

router.delete("/tasks/:id", (req, res) => {
  Task.findByIdAndRemove(req.params.id)
    .then(() => {
      res.json({ message: "ok" });
    })
    .catch(error => {
      res.json(error);
    });
});

module.exports = router;
