module.exports = app => {
    const auth = require("../controllers/auth.controller");
  
    var router = require("express").Router();
  
    router.post('/generateToken',auth.generateToken);
    router.post('/validateToken',auth.validateToken);
    
    app.use("/api/user", router);
  };
  