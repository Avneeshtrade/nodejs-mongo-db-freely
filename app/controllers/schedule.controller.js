const db = require("../models");
const Schedule = db.schedules;

// Create and Save a new Schedule
exports.create = (req, res) => {
  let {startDate,endDate,timezone,employeeId} = req.body;
  // Create a Schedule
  const schedule = new Schedule({
    startDate,
    endDate,
    timezone,
    employeeId
  });

  // Save Schedule in the database
  schedule
    .save(schedule)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Schedule."
      });
    });
};

// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {
 Schedule.find({}).then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    });
};

// Find a single Schedule with an id
exports.findOne = (req, res) => {
  const id = req.params.id.trim();
  if(id){
    var condition = { 
      $match: 
      { 
          _id: db.mongoose.Types.ObjectId(id)
      } 
  }; 
  db.employees.aggregate([condition,
      { 
        $lookup: 
        { 
          from: "schedules", 
          localField: "_id", 
          foreignField: "employeeId", 
          as: "schedule" 
        } 
      }, 
      { 
        $unwind: "$schedule" 
      },
      {
        $project:
        {
          __v:0,
          "schedule.__v":0,
          "schedule._id":0,
          "schedule.employeeId":0
        }
      }
    ]).then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving tutorials."
        });
      });
  }
  else{
    res.status(400).send({status:false,message:"please provide the valid employee id"})
  }
};

// // Update a Schedule by the id in the request
// exports.update = (req, res) => {
//   if (!req.body) {
//     return res.status(400).send({
//       message: "Data to update can not be empty!"
//     });
//   }

//   const id = req.params.id;

//   Schedule.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
//     .then(data => {
//       if (!data) {
//         res.status(404).send({
//           message: `Cannot update Schedule with id=${id}. Maybe Schedule was not found!`
//         });
//       } else res.send({ message: "Schedule was updated successfully." });
//     })
//     .catch(err => {
//       res.status(500).send({
//         message: "Error updating Schedule with id=" + id
//       });
//     });
// };

// // Delete a Schedule with the specified id in the request
// exports.delete = (req, res) => {
//   const id = req.params.id;

//   Schedule.findByIdAndRemove(id, { useFindAndModify: false })
//     .then(data => {
//       if (!data) {
//         res.status(404).send({
//           message: `Cannot delete Schedule with id=${id}. Maybe Schedule was not found!`
//         });
//       } else {
//         res.send({
//           message: "Schedule was deleted successfully!"
//         });
//       }
//     })
//     .catch(err => {
//       res.status(500).send({
//         message: "Could not delete Schedule with id=" + id
//       });
//     });
// };

// // Delete all Tutorials from the database.
// exports.deleteAll = (req, res) => {
//   Schedule.deleteMany({})
//     .then(data => {
//       res.send({
//         message: `${data.deletedCount} Tutorials were deleted successfully!`
//       });
//     })
//     .catch(err => {
//       res.status(500).send({
//         message:
//           err.message || "Some error occurred while removing all tutorials."
//       });
//     });
// };
