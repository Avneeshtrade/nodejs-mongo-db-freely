const { validateToken } = require("../controllers/auth.controller");

module.exports = app => {
    const employees = require("../controllers/employee.controller");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/",validateToken,employees.create);
  
    // Retrieve all Tutorials
    router.get("/", validateToken,employees.findAll);
  
    app.use("/api/employees", router);
  };
  