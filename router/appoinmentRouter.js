import express from "express";
import {
  createAppointment,
  deleleteAppointment,
  getAllAppoinment,
  updateAppointment,
} from "../controller/appointmentController.js";

// init router
const router = express.Router();

router.post("/appoinment/", createAppointment);
router.get("/appoinment/", getAllAppoinment);
router.delete("/appoinment/:id", deleleteAppointment);
router.patch("/appoinment/:id", updateAppointment);
//export default
export default router;
