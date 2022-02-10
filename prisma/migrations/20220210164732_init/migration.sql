/*
  Warnings:

  - You are about to drop the `_CharacterToDigimental` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_CrestToMovie` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_CrestToSeries` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_DigimentalToMovie` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_DigimentalToSeries` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_DigiviceToMovie` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_DigiviceToSeries` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_PriorNext` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `attribute` to the `Digimental` table without a default value. This is not possible if the table is not empty.
  - Added the required column `digiDestinedId` to the `Digimental` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "SpiritElement" AS ENUM ('FLAME', 'LIGHT', 'ICE', 'WIND', 'THUNDER', 'EARTH', 'WOOD', 'WATER', 'STEEL', 'DARKNESS');

-- AlterEnum
-- This migration adds more than one value to an enum.
-- With PostgreSQL versions 11 and earlier, this is not possible
-- in a single migration. This can be worked around by creating
-- multiple migrations, each migration adding only one value to
-- the enum.


ALTER TYPE "DigiviceType" ADD VALUE 'D_ARK';
ALTER TYPE "DigiviceType" ADD VALUE 'D_SCANNER';
ALTER TYPE "DigiviceType" ADD VALUE 'IC';
ALTER TYPE "DigiviceType" ADD VALUE 'BURST';
ALTER TYPE "DigiviceType" ADD VALUE 'DARK';
ALTER TYPE "DigiviceType" ADD VALUE 'BIO_HYBRID';

-- DropForeignKey
ALTER TABLE "_CharacterToDigimental" DROP CONSTRAINT "_CharacterToDigimental_A_fkey";

-- DropForeignKey
ALTER TABLE "_CharacterToDigimental" DROP CONSTRAINT "_CharacterToDigimental_B_fkey";

-- DropForeignKey
ALTER TABLE "_CrestToMovie" DROP CONSTRAINT "_CrestToMovie_A_fkey";

-- DropForeignKey
ALTER TABLE "_CrestToMovie" DROP CONSTRAINT "_CrestToMovie_B_fkey";

-- DropForeignKey
ALTER TABLE "_CrestToSeries" DROP CONSTRAINT "_CrestToSeries_A_fkey";

-- DropForeignKey
ALTER TABLE "_CrestToSeries" DROP CONSTRAINT "_CrestToSeries_B_fkey";

-- DropForeignKey
ALTER TABLE "_DigimentalToMovie" DROP CONSTRAINT "_DigimentalToMovie_A_fkey";

-- DropForeignKey
ALTER TABLE "_DigimentalToMovie" DROP CONSTRAINT "_DigimentalToMovie_B_fkey";

-- DropForeignKey
ALTER TABLE "_DigimentalToSeries" DROP CONSTRAINT "_DigimentalToSeries_A_fkey";

-- DropForeignKey
ALTER TABLE "_DigimentalToSeries" DROP CONSTRAINT "_DigimentalToSeries_B_fkey";

-- DropForeignKey
ALTER TABLE "_DigiviceToMovie" DROP CONSTRAINT "_DigiviceToMovie_A_fkey";

-- DropForeignKey
ALTER TABLE "_DigiviceToMovie" DROP CONSTRAINT "_DigiviceToMovie_B_fkey";

-- DropForeignKey
ALTER TABLE "_DigiviceToSeries" DROP CONSTRAINT "_DigiviceToSeries_A_fkey";

-- DropForeignKey
ALTER TABLE "_DigiviceToSeries" DROP CONSTRAINT "_DigiviceToSeries_B_fkey";

-- DropForeignKey
ALTER TABLE "_PriorNext" DROP CONSTRAINT "_PriorNext_A_fkey";

-- DropForeignKey
ALTER TABLE "_PriorNext" DROP CONSTRAINT "_PriorNext_B_fkey";

-- AlterTable
ALTER TABLE "Digimental" ADD COLUMN     "attribute" TEXT NOT NULL,
ADD COLUMN     "digiDestinedId" INTEGER NOT NULL;

-- DropTable
DROP TABLE "_CharacterToDigimental";

-- DropTable
DROP TABLE "_CrestToMovie";

-- DropTable
DROP TABLE "_CrestToSeries";

-- DropTable
DROP TABLE "_DigimentalToMovie";

-- DropTable
DROP TABLE "_DigimentalToSeries";

-- DropTable
DROP TABLE "_DigiviceToMovie";

-- DropTable
DROP TABLE "_DigiviceToSeries";

-- DropTable
DROP TABLE "_PriorNext";

-- CreateTable
CREATE TABLE "Spirit" (
    "id" SERIAL NOT NULL,
    "element" "SpiritElement" NOT NULL,
    "isHuman" BOOLEAN NOT NULL,
    "digiDestinedId" INTEGER NOT NULL,
    "digimonId" INTEGER NOT NULL,

    CONSTRAINT "Spirit_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_CharacterToDigimon" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_PreviousNext" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_CharacterToDigimon_AB_unique" ON "_CharacterToDigimon"("A", "B");

-- CreateIndex
CREATE INDEX "_CharacterToDigimon_B_index" ON "_CharacterToDigimon"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_PreviousNext_AB_unique" ON "_PreviousNext"("A", "B");

-- CreateIndex
CREATE INDEX "_PreviousNext_B_index" ON "_PreviousNext"("B");

-- AddForeignKey
ALTER TABLE "Digimental" ADD CONSTRAINT "Digimental_digiDestinedId_fkey" FOREIGN KEY ("digiDestinedId") REFERENCES "Character"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Spirit" ADD CONSTRAINT "Spirit_digiDestinedId_fkey" FOREIGN KEY ("digiDestinedId") REFERENCES "Character"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Spirit" ADD CONSTRAINT "Spirit_digimonId_fkey" FOREIGN KEY ("digimonId") REFERENCES "Digimon"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CharacterToDigimon" ADD FOREIGN KEY ("A") REFERENCES "Character"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CharacterToDigimon" ADD FOREIGN KEY ("B") REFERENCES "Digimon"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PreviousNext" ADD FOREIGN KEY ("A") REFERENCES "Digimon"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PreviousNext" ADD FOREIGN KEY ("B") REFERENCES "Digimon"("id") ON DELETE CASCADE ON UPDATE CASCADE;
