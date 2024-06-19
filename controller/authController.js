import asyncHandler from "express-async-handler";
import { createOTP, isEmail, isMobile } from "../helper/Helper.js";
import bcrypt from "bcrypt";
import { PrismaClient } from "@prisma/client";

//prisma inti
const prisma = new PrismaClient();

/**
 * @description  student Register
 * @method POST
 * @route /api/v1/student
 * @access public
 */

export const patientRegister = asyncHandler(async (req, res) => {
  //get json data
  const { name, auth, password } = req.body;

  //data validation
  if (!name || !auth || !password) {
    return res.status(400).json({ message: "all fields are required" });
  }

  //check auth
  let authEmail = null;
  let authPhone = null;

  if (isEmail(auth)) {
    authEmail = auth;
    //check valid email
    const checkEmail = await prisma.patinent.findUnique({
      where: {
        email: authEmail,
      },
    });

    if (checkEmail) {
      return res.status(400).json({ message: "email allready exists" });
    }
  }

  //check Phone
  if (isMobile(auth)) {
    authPhone = auth;
    //check valid phone
    const checkPhone = await prisma.patinent.findUnique({
      where: {
        phone: authPhone,
      },
    });
    if (checkPhone) {
      return res.status(400).json({ message: "Phone allready exists" });
    }
  }

  //hash password
  const hashPassword = await bcrypt.hash(password, 10);

  const patient = await prisma.patinent.create({
    data: {
      name: name,
      email: authEmail,
      phone: authPhone,
      password: hashPassword,
    },
  });

  //respons
  res.status(200).json({ patient, message: "Register successfull" });
});

/**
 * @description  Patient Login
 * @method POST
 * @route /login
 * @access public
 */

export const patientLogin = asyncHandler(async (req, res) => {
  //get student login data
  const { auth, password } = req.body;

  //login validatin
  if (!auth || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }

  //check loing user
  let loginPatient = null;
  if (isEmail(auth)) {
    loginPatient = await prisma.patinent.findUnique({
      where: {
        email: auth,
      },
    });
    if (!loginPatient) {
      return res.status(400).json({ message: "Student email not found" });
    }
  } else if (isMobile(auth)) {
    loginPatient = await prisma.patinent.findUnique({
      where: {
        phone: auth,
      },
    });
    if (!loginPatient) {
      return res.status(400).json({ message: "Student phone not found" });
    }
  } else {
    return res.status(400).json({ message: "Invalid Student" });
  }

  //check password
  const checkPass = bcrypt.compareSync(password, loginPatient.password);
  if (!checkPass) {
    return res.status(400).json({ message: "Wrong Password" });
  }

  //create login token
  // const accessToken = jwt.sign({ auth: auth }, process.env.LOGIN_SECRET, {
  //   expiresIn: "36500d",
  // });

  //set token
  // res.cookie("accessToken", accessToken, {
  //   httpOnly: true,
  //   secure: process.env.APP_ENV == "Development" ? false : true,
  //   sameSite: "strict",
  //   path: "/",
  //   maxAge: 1000 * 60 * 60 * 24 * 365 * 100,
  // });

  //final response
  res
    .status(200)
    .json({ data: loginPatient, message: "Login Student successfull" });
});
