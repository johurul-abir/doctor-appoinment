-- DropForeignKey
ALTER TABLE `patients` DROP FOREIGN KEY `patients_doctorId_fkey`;

-- AlterTable
ALTER TABLE `patients` MODIFY `doctorId` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `patients` ADD CONSTRAINT `patients_doctorId_fkey` FOREIGN KEY (`doctorId`) REFERENCES `doctors`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
