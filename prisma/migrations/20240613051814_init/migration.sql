-- AlterTable
ALTER TABLE `appointments` ADD COLUMN `attach_file` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `doctors` ADD COLUMN `location` VARCHAR(191) NULL,
    ADD COLUMN `specialist` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `patients` ADD COLUMN `location` VARCHAR(191) NULL;
