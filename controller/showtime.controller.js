const { Theater, Movie, ShowTime } = require("../models");

const generateTime = (time_str) => {
  const currentDate = new Date();
  const [hours, minutes] = time_str.split(":");

  const time = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    currentDate.getDate(),
    hours,
    minutes
  );

  const formattedTime = time.toLocaleString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });

  return formattedTime;
};

const addShowTime = async (req, res) => {
  const theater = await Theater.findByPk(req.body.theaterId);
  const movie = await Movie.findByPk(req.body.movieId);

  const time = await ShowTime.create({
    time: generateTime(req.body.time),
    movieId: movie.id,
    theatreId: theater.id,
  });
  return res.status(201).json(time);
};

const getAllTiming = async (req, res) => {

  try {
    const showTimes = await ShowTime.findAll({
      where: { movieId: req.params.movieId },
      include : Movie
    });
    return res.status(200).json(showTimes);
  } catch (error) {
    return res.status(404).json(error);
  }
};

module.exports = { getAllTiming, addShowTime };
