/*
  Warnings:

  - You are about to drop the column `digiDestinedId` on the `Crest` table. All the data in the column will be lost.
  - You are about to drop the column `digiDestinedId` on the `Digimental` table. All the data in the column will be lost.
  - You are about to drop the `_DigimonToFamily` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Family` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_DigimonToFamily" DROP CONSTRAINT "_DigimonToFamily_A_fkey";

-- DropForeignKey
ALTER TABLE "_DigimonToFamily" DROP CONSTRAINT "_DigimonToFamily_B_fkey";

-- DropForeignKey
ALTER TABLE "Crest" DROP CONSTRAINT "Crest_digiDestinedId_fkey";

-- DropForeignKey
ALTER TABLE "Digimental" DROP CONSTRAINT "Digimental_digiDestinedId_fkey";

-- DropIndex
DROP INDEX "Crest_digiDestinedId_key";

-- DropIndex
DROP INDEX "Digimental_digiDestinedId_key";

-- AlterTable
ALTER TABLE "Crest" DROP COLUMN "digiDestinedId";

-- AlterTable
ALTER TABLE "Digimental" DROP COLUMN "digiDestinedId";

-- DropTable
DROP TABLE "_DigimonToFamily";

-- DropTable
DROP TABLE "Family";

-- CreateTable
CREATE TABLE "Field" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "symbol" VARCHAR(255) NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "Field_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_DigimonToField" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_AnimeToDigimental" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_CrestToMovie" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_DigimentalToMovie" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_CharacterToCrest" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_CharacterToDigimental" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Field_name_key" ON "Field"("name");

-- CreateIndex
CREATE UNIQUE INDEX "_DigimonToField_AB_unique" ON "_DigimonToField"("A", "B");

-- CreateIndex
CREATE INDEX "_DigimonToField_B_index" ON "_DigimonToField"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_AnimeToDigimental_AB_unique" ON "_AnimeToDigimental"("A", "B");

-- CreateIndex
CREATE INDEX "_AnimeToDigimental_B_index" ON "_AnimeToDigimental"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_CrestToMovie_AB_unique" ON "_CrestToMovie"("A", "B");

-- CreateIndex
CREATE INDEX "_CrestToMovie_B_index" ON "_CrestToMovie"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_DigimentalToMovie_AB_unique" ON "_DigimentalToMovie"("A", "B");

-- CreateIndex
CREATE INDEX "_DigimentalToMovie_B_index" ON "_DigimentalToMovie"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_CharacterToCrest_AB_unique" ON "_CharacterToCrest"("A", "B");

-- CreateIndex
CREATE INDEX "_CharacterToCrest_B_index" ON "_CharacterToCrest"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_CharacterToDigimental_AB_unique" ON "_CharacterToDigimental"("A", "B");

-- CreateIndex
CREATE INDEX "_CharacterToDigimental_B_index" ON "_CharacterToDigimental"("B");

-- AddForeignKey
ALTER TABLE "_DigimonToField" ADD FOREIGN KEY ("A") REFERENCES "Digimon"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_DigimonToField" ADD FOREIGN KEY ("B") REFERENCES "Field"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AnimeToDigimental" ADD FOREIGN KEY ("A") REFERENCES "Anime"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AnimeToDigimental" ADD FOREIGN KEY ("B") REFERENCES "Digimental"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CrestToMovie" ADD FOREIGN KEY ("A") REFERENCES "Crest"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CrestToMovie" ADD FOREIGN KEY ("B") REFERENCES "Movie"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_DigimentalToMovie" ADD FOREIGN KEY ("A") REFERENCES "Digimental"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_DigimentalToMovie" ADD FOREIGN KEY ("B") REFERENCES "Movie"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CharacterToCrest" ADD FOREIGN KEY ("A") REFERENCES "Character"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CharacterToCrest" ADD FOREIGN KEY ("B") REFERENCES "Crest"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CharacterToDigimental" ADD FOREIGN KEY ("A") REFERENCES "Character"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CharacterToDigimental" ADD FOREIGN KEY ("B") REFERENCES "Digimental"("id") ON DELETE CASCADE ON UPDATE CASCADE;
