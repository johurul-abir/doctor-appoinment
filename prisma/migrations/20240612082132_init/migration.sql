/*
  Warnings:

  - You are about to drop the column `doctorId` on the `patients` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `patients` DROP FOREIGN KEY `patients_doctorId_fkey`;

-- AlterTable
ALTER TABLE `patients` DROP COLUMN `doctorId`;
