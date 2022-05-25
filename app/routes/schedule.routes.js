module.exports = app => {
    const schedules = require("../controllers/schedule.controller");
  
    var router = require("express").Router();
  
    // Create a new Schedule
    router.post("/",schedules.create);
  
    // Retrieve all Tutorials
    router.get("/", schedules.findAll);
  
    // Retrieve a single Schedule with id
    router.get("/:id", schedules.findOne);
  
    // // Update a Schedule with id
    // router.put("/:id", schedules.update);
  
    // // Delete a Schedule with id
    // router.delete("/:id", schedules.delete);
  
    // // Create a new Schedule
    // router.delete("/", schedules.deleteAll);
  
    app.use("/api/schedules", router);
  };
  