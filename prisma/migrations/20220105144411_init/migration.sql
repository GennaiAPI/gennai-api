/*
  Warnings:

  - A unique constraint covering the columns `[slug]` on the table `Digimon` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `slug` to the `Digimon` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Digimon" ADD COLUMN     "hasXAntibody" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "isJogress" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "slug" VARCHAR(255) NOT NULL;

-- CreateTable
CREATE TABLE "DigimonName" (
    "id" SERIAL NOT NULL,
    "lang" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "digimonId" INTEGER NOT NULL,

    CONSTRAINT "DigimonName_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Digimon_slug_key" ON "Digimon"("slug");

-- AddForeignKey
ALTER TABLE "DigimonName" ADD CONSTRAINT "DigimonName_digimonId_fkey" FOREIGN KEY ("digimonId") REFERENCES "Digimon"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
