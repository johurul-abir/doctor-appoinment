import asyncHandler from "express-async-handler";
import { PrismaClient } from "@prisma/client";
import { fileUploadToCloud } from "../utils/cloudinary.js";
import bcrypt from "bcrypt";

//prisma inti
const prisma = new PrismaClient();

/**
 *
 * @description Get all Patient
 * @method GET
 * @route api/v1/patient
 * @access public
 */
export const getAllPatient = asyncHandler(async (req, res) => {
  const patient = await prisma.patinent.findMany();

  res.status(200).json({ patient });
});

/**
 *
 * @description Get single Patient
 * @method GET
 * @route api/v1/patient/id
 * @access public
 */
export const getSinglePatient = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const patient = await prisma.patinent?.findUnique({
    where: { id: Number(id) },
  });

  res.status(200).json({ patient });
});

/**
 *
 * @description Create new Patient
 * @method POST
 * @route api/v1/patient
 * @access public
 */
export const createPatient = asyncHandler(async (req, res) => {
  const data = req.body;

  //check photo
  let fileData = null;
  if (req.file) {
    const data = await fileUploadToCloud(req.file.path);
    fileData = data.secure_url;
  }

  //hash password
  const hashPassword = await bcrypt.hash(data.password, 10);

  const patient = await prisma.patinent.create({
    data: {
      ...data,
      age: Number(data.age),
      photo: fileData,
      password: hashPassword,
    },
  });

  res.status(200).json({ patient });
});

/**
 *
 * @description Delete Patient
 * @method DELETE
 * @route patient
 * @access public
 */
export const deletePatient = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const deletePatient = await prisma.patinent.delete({
    where: { id: Number(id) },
  });

  res.status(200).json({ deletePatient });
});

/**
 *
 * @description Update Patient
 * @method udpdate
 * @route appoinment
 * @access public
 */
export const updatePatient = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const data = req.body;

  const updatePatient = await prisma.patinent.update({
    where: { id: Number(id) },
    data,
  });
  res.status(200).json({ updatePatient });
});
