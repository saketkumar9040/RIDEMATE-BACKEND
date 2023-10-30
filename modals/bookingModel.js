import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
  customerName: String,
  origin:String,
  destination:String,
  dateOfJourney: Date,
  vehicleNumber:String,
  totalPrice:Number,
  createdAt:Date,
  updatedAt:Date,
});

export const Booking = mongoose.model("bookings", bookingSchema);
