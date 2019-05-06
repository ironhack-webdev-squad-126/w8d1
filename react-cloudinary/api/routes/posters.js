const express = require("express");
const router = express.Router();

// include the model:
const Poster = require("../models/Poster");

router.get("/posters", (req, res, next) => {
  Poster.find()
    .then(postersFromDB => {
      res.status(200).json(postersFromDB);
    })
    .catch(err => next(err));
});

router.post("/posters/create", (req, res, next) => {
  // console.log('body: ', req.body); ==> here we can see that all
  // the fields have the same names as the ones in the model so we can simply pass
  // req.body to the .create() method

  Poster.create(req.body)
    .then(aNewPoster => {
      // console.log('Created new poster: ', aNewPoster);
      res.status(200).json(aNewPoster);
    })
    .catch(err => next(err));
});

module.exports = router;
