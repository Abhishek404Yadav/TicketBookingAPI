const Seat = require("../models/seat.model");

// Function to book a seat
const bookSeat = async (req, res) => {
  const row = req.body.row;
  const number = req.body.number;

  try {
    // Update the seat's availability status
    const seat = await Seat.update(
      {
        isAvailable: false,
      },
      {
        where: {
          isAvailable: true,
          row: row,
          number: number,
        },
      }
    );

    // If the seat was not updated, it's already booked or doesn't match conditions
    if (seat[0] === 0) {
      return res
        .status(400)
        .send("Seat is already booked or does not match conditions");
    }

    // Seat booking successful
    return res.status(200).send(`Seat no : ${row}${number} is booked`);
  } catch (error) {
    // Handle errors during the booking process
    console.error("Error booking seat:", error);
    res.status(500).send("Internal server error");
  }
};

// Function to add a new seat
const addSeat = async (req, res) => {
  const row = req.body.row;
  const number = req.body.number;
  const screenId = req.params.screenId;
  const timingId = req.params.timingId;

  try {
    // Create a new seat with provided information
    const createdSeat = await Seat.create({
      row,
      number,
      isAvailable: true,
      screenId,
      timingId,
    });

    // Seat creation successful
    return res.status(200).send(createdSeat);
  } catch (error) {
    // Handle errors during seat creation
    console.error("Error adding seat:", error);
    return res.status(500).send("Internal server error");
  }
};

// Function to get available seats for a specific screen and timing
const getAvailableSeat = async (req, res) => {
  try {
    // Find all available seats based on screen and timing
    const seats = await Seat.findAll({
      where: { screenId: req.params.screenId, timingId: req.params.timingId },
    });

    // Return the list of available seats
    return res.status(200).json(seats);
  } catch (error) {
    // Handle errors when retrieving available seats
    return res.status(404).json(error);
  }
};

// Export the functions for use in other parts of the application
module.exports = { bookSeat, getAvailableSeat, addSeat };
