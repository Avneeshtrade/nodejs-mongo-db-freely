module.exports = app => {
    const timezones = require("../controllers/timezone.controller");
  
    var router = require("express").Router();

    // Retrieve all Tutorials
    router.get("/", timezones.findAll);
  
    // Retrieve a single Tutorial with id
    router.get("/:id", timezones.findOne);
  
    app.use("/api/timezones", router);
  };
  