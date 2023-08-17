const Screen = require("../models/screen.model");

const addScreen = async (req, res) => {
  const capacity = req.body.capacity;
  const name = req.body.name;
  const screen = await Screen.create({
    capacity,
    name
  });
  return res.status(200).json(screen);
};

module.exports = { addScreen };
