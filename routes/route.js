import express from "express";
import { bookRide } from "../controllers/bookingController.js";

const router = express.Router();

router.post("bookRide",bookRide);

export default router;