import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
  customerName: String,
  customerId: {
    type: mongoose.Schema.ObjectId,
    ref: "customers",
  },
  origin: String,
  destination: String,
  dateOfJourney: Date,
  vehicleNumber: String,
  totalPrice: Number,
  createdAt: Date,
  updatedAt: Date,
});

export const BookingModel = mongoose.model("bookings", bookingSchema);
