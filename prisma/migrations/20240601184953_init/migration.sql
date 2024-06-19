-- AlterTable
ALTER TABLE `doctor` MODIFY `password` VARCHAR(191) NULL,
    MODIFY `photo` VARCHAR(191) NULL,
    MODIFY `age` INTEGER NULL,
    MODIFY `history` VARCHAR(191) NULL,
    MODIFY `pendingAp` VARCHAR(191) NULL,
    MODIFY `gender` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `patinent` MODIFY `password` VARCHAR(191) NULL,
    MODIFY `photo` VARCHAR(191) NULL,
    MODIFY `age` INTEGER NULL,
    MODIFY `history` VARCHAR(191) NULL,
    MODIFY `pendingAp` VARCHAR(191) NULL,
    MODIFY `gender` VARCHAR(191) NULL;
