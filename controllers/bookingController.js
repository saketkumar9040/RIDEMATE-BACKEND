import { BookingModel } from "../modals/bookingModel.js";

export const bookRide = async (req, res) => {
  try {
    const {
      customerName,
      customerId,
      origin,
      destination,
      dateOfJourney,
      vehicleNumber,
      totalPrice,
      createdAt,
      updatedAt,
    } = req.body;
    console.log(req.body)
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
