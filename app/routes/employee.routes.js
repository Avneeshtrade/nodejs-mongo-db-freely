module.exports = app => {
    const employees = require("../controllers/employee.controller");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/",employees.create);
  
    // Retrieve all Tutorials
    router.get("/", employees.findAll);
  
    // Retrieve a single Tutorial with id
    router.get("/:id", employees.findOne);
  
    // Update a Tutorial with id
    router.put("/:id", employees.update);
  
    // Delete a Tutorial with id
    router.delete("/:id", employees.delete);
  
    // Create a new Tutorial
    router.delete("/", employees.deleteAll);
  
    app.use("/api/employees", router);
  };
  