import mongoose from "mongoose";

const customerSchema = new mongoose.Schema({
  customerName: String,
  home: String,
  work: String,
  phone: Number,
  email: String,
  createdAt: Date,
  updatedAt: Date,
});

export const CustomerModel = mongoose.model("customers", customerSchema);
