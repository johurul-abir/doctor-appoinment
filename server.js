import express, { json, urlencoded } from "express";
import colors from "colors";
import dotenv from "dotenv";
import { PrismaClient } from "@prisma/client";
import cors from "cors";

import authRouter from "./router/authRouter.js";
import patientRouter from "./router/patientRouter.js";
import doctorRouter from "./router/doctorRouter.js";
import appoinmentRouter from "./router/appoinmentRouter.js";
const prisma = new PrismaClient();
//init
const app = express();
dotenv.config();

//PORT config
const PORT = process.env.PORT || 9090;

app.use(express.json());
app.use(urlencoded({ extended: false }));

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

//add router
app.use(authRouter);
app.use(patientRouter);
app.use(doctorRouter);
app.use(appoinmentRouter);

//Listen server
app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`.bgBlue.black);
});
