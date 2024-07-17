import express from "express";
import {
  createDoctor,
  deleteDoctor,
  getAllDoctor,
} from "../controller/doctorController.js";
import { doctorMulter } from "../utils/multer.js";

// init router
const router = express.Router();

router.post("/doctor/", doctorMulter, createDoctor);
router.get("/doctor/", getAllDoctor);
router.delete("/doctor/:id", deleteDoctor);

//export default
export default router;
