import asyncHandler from "express-async-handler";
import { PrismaClient } from "@prisma/client";

//prisma inti
const prisma = new PrismaClient();

/**
 *
 * @description Get all Appoinment
 * @method GET
 * @route appoinment
 * @access public
 */
export const getAllAppoinment = asyncHandler(async (req, res) => {
  const appoinment = await prisma.appointment.findMany({
    include: {
      patient: true,
      doctor: true,
    },
  });
  res.status(200).json({ appoinment });
});

/**
 *
 * @description Create new Appionment
 * @method POST
 * @route appoinment
 * @access public
 */
export const createAppointment = asyncHandler(async (req, res) => {
  const data = req.body;
  const appoinment = await prisma.appointment.create({
    data: {
      ...data,
      doctorId: Number(data.doctorId),
      patientId: Number(data.patientId),
    },
  });

  res.status(200).json({ appoinment });
});

/**
 *
 * @description Delete Appionment
 * @method DELETE
 * @route appoinment
 * @access public
 */
export const deleleteAppointment = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const appoinment = await prisma.appointment.delete({
    where: { id: Number(id) },
  });

  res.status(200).json({ appoinment });
});

/**
 *
 * @description Update Appionmentu
 * @method udpdate
 * @route appoinment
 * @access public
 */
export const updateAppointment = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const data = req.body;

  const updateAppoinment = await prisma.appointment.update({
    where: { id: Number(id) },
    data,
  });
  res.status(200).json({ updateAppoinment });
});
