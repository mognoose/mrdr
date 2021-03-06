const db = require("../models");
const Player = db.players;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
  // Validate request
  if (!req.body.name) {
    res.status(400).send({
      message: "Name is required"
    });
    return;
  }

  // Create a Player
  const player = {
    name: req.body.name,
    room: req.body.room,
    joined: true,
    alive: true,
    ready: false,
    points: 0
  };

  // Save Player in the database
  Player.create(player)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Player."
      });
    });
}

exports.findAll = (req, res) => {
  const room = req.query.room;
  // var condition = room ? { room: { [Op.like]: `%${room}%` } } : null;
  var condition = room ? { room: room } : null;

  Player.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving players."
      });
    });
}

exports.findOne = (req, res) => {
  const id = req.params.id;

  Player.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Player with id=" + id
      });
    });
}

exports.update = (req, res) => {
  const id = req.params.id;

  Player.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Player was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Player with id=${id}. Maybe Player was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Player with id=" + id
      });
    });
}

exports.delete = (req, res) => {
  const id = req.params.id;

  Player.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Player was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Player with id=${id}. Maybe Player was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Player with id=" + id
      });
    });
}

exports.deleteAll = (req, res) => {
  Player.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} Players were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all Players."
      });
    });
}