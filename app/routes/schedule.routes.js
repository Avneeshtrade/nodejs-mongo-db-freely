const { validateToken } = require("../controllers/auth.controller");

module.exports = app => {
    const schedules = require("../controllers/schedule.controller");
  
    var router = require("express").Router();
  
    // Create a new Schedule
    router.post("/",validateToken,schedules.create);
  
    // Retrieve all Tutorials
    router.get("/", validateToken,schedules.findAll);
  
    // Retrieve a single Schedule with id
    router.get("/:id",validateToken, schedules.findOne);
  
    // // Update a Schedule with id
    // router.put("/:id", schedules.update);
  
    // // Delete a Schedule with id
    // router.delete("/:id", schedules.delete);
  
    // // Create a new Schedule
    // router.delete("/", schedules.deleteAll);
  
    app.use("/api/schedules", router);
  };
  