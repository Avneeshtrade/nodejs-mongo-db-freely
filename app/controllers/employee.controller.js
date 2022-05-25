const db = require("../models");
const Employee = db.employees;

// Create and Save a new Employee
exports.create = (req, res) => {
  // Validate request
  if (!req.body.name) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }
  let {email,password,name,isManager=false} = req.body;
  // Create a Employee
  const tutorial = new Employee({
    name,
    email,
    password,
    isManager
  });

  // Save Employee in the database
  tutorial
    .save(tutorial)
    .then(data => {
      let {_doc:{password,_id,__v,...result}} = data;
      res.status(200).send({
        status:true,
        data:result,
        message:"successfully registered !!"
      });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Employee."
      });
    });
};

// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {
  const title = req.query.title;
  var condition = title ? { title: { $regex: new RegExp(title), $options: "i" } } : {};

  Employee.find(condition,{password:0})
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    });
};
