import express from "express";
import { patientLogin, patientRegister } from "../controller/authController.js";

// init router
const router = express.Router();

router.post("/auth/register", patientRegister);
router.post("/auth/login", patientLogin);

//export default
export default router;
