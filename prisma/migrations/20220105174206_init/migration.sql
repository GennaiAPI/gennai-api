/*
  Warnings:

  - You are about to drop the column `elementId` on the `Digimon` table. All the data in the column will be lost.
  - You are about to drop the `_ElemWeakStrong` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Element` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_ElemWeakStrong" DROP CONSTRAINT "_ElemWeakStrong_A_fkey";

-- DropForeignKey
ALTER TABLE "_ElemWeakStrong" DROP CONSTRAINT "_ElemWeakStrong_B_fkey";

-- DropForeignKey
ALTER TABLE "Digimon" DROP CONSTRAINT "Digimon_elementId_fkey";

-- AlterTable
ALTER TABLE "Digimon" DROP COLUMN "elementId",
ADD COLUMN     "typeId" INTEGER;

-- DropTable
DROP TABLE "_ElemWeakStrong";

-- DropTable
DROP TABLE "Element";

-- CreateTable
CREATE TABLE "Type" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,

    CONSTRAINT "Type_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Digimon" ADD CONSTRAINT "Digimon_typeId_fkey" FOREIGN KEY ("typeId") REFERENCES "Type"("id") ON DELETE SET NULL ON UPDATE CASCADE;
