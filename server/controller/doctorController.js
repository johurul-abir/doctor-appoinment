import asyncHandler from "express-async-handler";
import { PrismaClient } from "@prisma/client";
import { fileUploadToCloud } from "../utils/cloudinary.js";

//prisma inti
const prisma = new PrismaClient();

/**
 *
 * @description Get all Doctor
 * @method GET
 * @route /doctor
 * @access public
 */
export const getAllDoctor = asyncHandler(async (req, res) => {
  const doctor = await prisma.doctor.findMany();

  res.status(200).json({ doctor });
});

/**
 *
 * @description Create Doctor
 * @method POST
 * @route /doctor
 * @access public
 */
export const createDoctor = asyncHandler(async (req, res) => {
  const data = req.body;

  //check photo
  let fileData = null;
  if (req.file) {
    const data = await fileUploadToCloud(req.file.path);
    fileData = data.secure_url;
  }

  const doctor = await prisma.doctor.create({
    data: {
      ...data,
      age: Number(data.age),
      photo: fileData,
    },
  });

  res.status(200).json({ doctor });
});

/**
 *
 * @description Delete Doctor
 * @method DELETE
 * @route appoinment
 * @access public
 */
export const deleteDoctor = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const doctorId = Number(id); // example doctorId

  // Example doctorId
  async function deleteDoctor(doctorId) {
    try {
      // Delete dependent records (example for appointments)
      await prisma.appointment.deleteMany({
        where: {
          doctorId: doctorId,
        },
      });

      // Then delete the doctor
      await prisma.doctor.delete({
        where: {
          id: doctorId,
        },
      });

      console.log(`Doctor with id ${doctorId} deleted successfully.`);
    } catch (error) {
      console.error(`Failed to delete doctor with id ${doctorId}:`, error);
    }
  }

  deleteDoctor(doctorId);

  const delDoctor = await prisma.doctor.delete({
    where: { id: Number(id) },
  });
  res.status(200).json({ delDoctor });
});
