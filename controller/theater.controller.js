const Theater = require("../models/theater.model");
const chance = require("chance")();

const getAllTheater = async (req, res) => {
  const theaters = await Theater.findAll();
  return res.status(200).json(theaters);
};

const addTheater = async (req, res) => {
  const name = `${chance.company()} cinema`;
  const address = chance.address();
  const city = req.body.city;

  const theater = await Theater.create({
    name,
    address,
    city,
  });
  return res.status(201).json(theater);
};

const getTheatreById = async (req, res) => {
  try {
    const theater = await Theater.findOne({
      where: { id: req.params.theaterId },
    });
    return res.status(200).json(theater.toJSON());
  } catch (error) {
    return res.status(404).json(error);
  }
};

module.exports = { getAllTheater, addTheater,getTheatreById };
