module.exports = app => {
    const timezones = require("../controllers/timezone.controller");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
   // router.post("/",employees.create);
  
    // Retrieve all Tutorials
    router.get("/", timezones.findAll);
  
    // Retrieve a single Tutorial with id
    router.get("/:id", timezones.findOne);
  
    // Update a Tutorial with id
   // router.put("/:id", employees.update);
  
    // Delete a Tutorial with id
   // router.delete("/:id", employees.delete);
  
    // Create a new Tutorial
   // router.delete("/", employees.deleteAll);
  
    app.use("/api/timezones", router);
  };
  