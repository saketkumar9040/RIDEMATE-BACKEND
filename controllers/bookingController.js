import {Booking} from "../modals/bookingModel.js";

export const bookRide =  async (req,res) => {
    try {
        const {} = req.body;

    } catch (error) {
        res.status(500).json({
            success:false,
            message:error.message
        })
    }
}