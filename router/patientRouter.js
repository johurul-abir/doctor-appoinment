import express from "express";
import {
  createPatient,
  deletePatient,
  getAllPatient,
  updatePatient,
  getSinglePatient,
} from "../controller/patientController.js";
import { patientMulter } from "../utils/multer.js";

// init router
const router = express.Router();

router.post("/patient/", patientMulter, createPatient);
router.get("/patient/", getAllPatient);
router.get("/patient/:id", getSinglePatient);
router.delete("/patient/:id", deletePatient);
router.patch("/patient/:id", updatePatient);
//export default
export default router;
