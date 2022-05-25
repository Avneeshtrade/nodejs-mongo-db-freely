const db = require("../models");
const Timezone = db.timezones;

// // Create and Save a new Timezone
// exports.create = (req, res) => {
//   // Validate request
//   if (!req.body.name) {
//     res.status(400).send({ message: "Content can not be empty!" });
//     return;
//   }

//   // Create a Timezone
//   const tutorial = new Timezone({
//     name: req.body.name,
//     isManager: req.body.isManager ? req.body.isManager : false
//   });

//   // Save Timezone in the database
//   tutorial
//     .save(tutorial)
//     .then(data => {
//       res.send(data);
//     })
//     .catch(err => {
//       res.status(500).send({
//         message:
//           err.message || "Some error occurred while creating the Timezone."
//       });
//     });
// };

// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {
  Timezone.find({})
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

// Find a single Timezone with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Timezone.findById(id)
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Not found Timezone with id " + id });
      else res.send(data);
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving Timezone with id=" + id });
    });
};

// // Update a Timezone by the id in the request
// exports.update = (req, res) => {
//   if (!req.body) {
//     return res.status(400).send({
//       message: "Data to update can not be empty!"
//     });
//   }

//   const id = req.params.id;

//   Timezone.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
//     .then(data => {
//       if (!data) {
//         res.status(404).send({
//           message: `Cannot update Timezone with id=${id}. Maybe Timezone was not found!`
//         });
//       } else res.send({ message: "Timezone was updated successfully." });
//     })
//     .catch(err => {
//       res.status(500).send({
//         message: "Error updating Timezone with id=" + id
//       });
//     });
// };

// // Delete a Timezone with the specified id in the request
// exports.delete = (req, res) => {
//   const id = req.params.id;

//   Timezone.findByIdAndRemove(id, { useFindAndModify: false })
//     .then(data => {
//       if (!data) {
//         res.status(404).send({
//           message: `Cannot delete Timezone with id=${id}. Maybe Timezone was not found!`
//         });
//       } else {
//         res.send({
//           message: "Timezone was deleted successfully!"
//         });
//       }
//     })
//     .catch(err => {
//       res.status(500).send({
//         message: "Could not delete Timezone with id=" + id
//       });
//     });
// };

// // Delete all Tutorials from the database.
// exports.deleteAll = (req, res) => {
//   Timezone.deleteMany({})
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